import { NextResponse } from "next/server";

import { connectionPool } from "../../db";
// Asegúrate de tener un módulo db que exporte tu pool de conexiones
// import { Pool, PoolConfig } from "pg";

// function getPoolConfig(): PoolConfig {
//   const connStr = process.env.CONNECTION_STRING || process.env.DATABASE_URL;
//   if (!connStr) {
//     throw new Error(
//       "No database connection string configured in environment variables.",
//     );
//   }

//   // Si ya es una URI nativa de Postgres (postgres://...), se pasa directa
//   if (
//     connStr.startsWith("postgresql://") ||
//     connStr.startsWith("postgres://")
//   ) {
//     const isLocalUri =
//       connStr.includes("localhost") ||
//       connStr.includes("127.0.0.1") ||
//       /10\.\d+\.\d+\.\d+/.test(connStr);
//     return {
//       connectionString: connStr,
//       ssl: isLocalUri ? false : { rejectUnauthorized: false },
//     };
//   }

//   // Parseo ultra-seguro libre de errores de mayúsculas o espacios para formato ADO.NET
//   const config: Record<string, string> = {};
//   connStr.split(";").forEach((pair) => {
//     const trimmed = pair.trim();
//     if (!trimmed) return;
//     const eqIdx = trimmed.indexOf("=");
//     if (eqIdx === -1) return;

//     // Limpiamos llaves y valores quitando espacios ocultos
//     const key = trimmed.slice(0, eqIdx).trim().toLowerCase();
//     const value = trimmed.slice(eqIdx + 1).trim();
//     config[key] = value;
//   });

//   // Extraemos y normalizamos los valores
//   const host = config.host || config.server;
//   const port = config.port ? parseInt(config.port, 10) : 5432;
//   const database = config.database || config.db;
//   const user = config.username || config.user || config.uid;
//   const password = config.password || config.pwd;

//   // Evaluamos localía basándonos en el host real extraído y limpio
//   const isLocal =
//     host === "localhost" ||
//     host === "127.0.0.1" ||
//     (host &&
//       (/^10\./.test(host) ||
//         /^192\.168\./.test(host) ||
//         /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)));

//   return {
//     host,
//     port,
//     database,
//     user,
//     password,
//     // FUERZA SSL false si es IP local (10.x.x.x), evitando el molesto ETIMEDOUT por handshake
//     ssl: isLocal ? false : { rejectUnauthorized: false },
//   };
// }

// const pool = new Pool(getPoolConfig());

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, processToOptimize } = body;

    // 1. Check for missing mandatory fields
    if (!name || !company || !email) {
      return NextResponse.json(
        {
          error:
            "Todos los campos obligatorios (Nombre, Empresa, Correo) son requeridos.",
        },
        { status: 400 },
      );
    }

    // 2. Validate field types
    if (
      typeof name !== "string" ||
      typeof company !== "string" ||
      typeof email !== "string" ||
      (phone !== undefined && phone !== null && typeof phone !== "string") ||
      (processToOptimize !== undefined &&
        processToOptimize !== null &&
        typeof processToOptimize !== "string")
    ) {
      return NextResponse.json(
        { error: "Los datos enviados no son válidos." },
        { status: 400 },
      );
    }

    // 3. Trim inputs and map empty optional strings to null
    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPhone = phone && phone.trim() !== "" ? phone.trim() : null;
    const trimmedProcess =
      processToOptimize && processToOptimize.trim() !== ""
        ? processToOptimize.trim()
        : null;

    // 4. Validate Name length
    if (trimmedName.length < 2) {
      return NextResponse.json(
        { error: "El nombre debe tener al menos 2 caracteres." },
        { status: 400 },
      );
    }

    // 5. Validate Company length
    if (trimmedCompany.length < 2) {
      return NextResponse.json(
        { error: "El nombre de la empresa debe tener al menos 2 caracteres." },
        { status: 400 },
      );
    }

    // 6. Validate Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 },
      );
    }

    // 7. Insert to database using parameterized queries to secure against SQL Injection
    const query = `
      INSERT INTO prospectos_contacto (nombre, empresa, correo_corporativo, telefono, proceso_optimizar)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, fecha_creacion;
    `;
    const values = [
      trimmedName,
      trimmedCompany,
      trimmedEmail,
      trimmedPhone,
      trimmedProcess,
    ];

    const result = await connectionPool.query(query, values);
    const { id, fecha_creacion } = result.rows[0];

    console.log("Contact Request Stored in DB:", {
      id,
      timestamp: fecha_creacion,
      name: trimmedName,
      company: trimmedCompany,
      email: trimmedEmail,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Tu solicitud ha sido recibida con éxito y guardada en el sistema. Nos pondremos en contacto contigo a la brevedad.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return NextResponse.json(
      {
        error:
          "Ocurrió un error interno en el servidor al procesar tu solicitud.",
      },
      { status: 500 },
    );
  }
}
