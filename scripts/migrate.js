/* eslint-disable @typescript-eslint/no-require-imports */
const { Client } = require("pg");

const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

const connStr = process.env.CONNECTION_STRING || process.env.DATABASE_URL;

if (!connStr) {
  console.error("Error: La variable de entorno CONNECTION_STRING o DATABASE_URL no está configurada.");
  process.exit(1);
}

function getClientConfig() {
  const isLocal =
    connStr.includes("localhost") ||
    connStr.includes("127.0.0.1") ||
    /10\.\d+\.\d+\.\d+/.test(connStr) ||
    /192\.168\.\d+\.\d+/.test(connStr) ||
    /172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+/.test(connStr);

  const ssl = isLocal ? false : { rejectUnauthorized: false };

  if (connStr.startsWith("postgresql://") || connStr.startsWith("postgres://")) {
    return {
      connectionString: connStr,
      ssl,
    };
  }

  const config = {};
  const pairs = connStr.split(";");
  for (const pair of pairs) {
    const trimmed = pair.trim();
    if (!trimmed) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim().toLowerCase();
    const value = trimmed.slice(eqIdx + 1).trim();
    config[key] = value;
  }

  return {
    host: config.host || config.server || undefined,
    port: config.port ? parseInt(config.port, 10) : undefined,
    database: config.database || config.db || undefined,
    user: config.username || config.user || config.uid || undefined,
    password: config.password || config.pwd || undefined,
    ssl,
  };
}

const client = new Client(getClientConfig());

const sql = `
  CREATE TABLE IF NOT EXISTS prospectos_contacto (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      empresa VARCHAR(255) NOT NULL,
      correo_corporativo VARCHAR(255) NOT NULL,
      telefono VARCHAR(50),
      proceso_optimizar TEXT,
      fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
`;

async function run() {
  try {
    console.log("Conectando a la base de datos...");
    await client.connect();
    
    console.log("Ejecutando migración SQL...");
    await client.query(sql);
    
    console.log("¡Migración completada con éxito! La tabla 'prospectos_contacto' está lista.");
  } catch (error) {
    console.error("Error ejecutando la migración:", error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
