"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ImpactSection() {
  // Sutil hover glow and border elevation transition
  const cardHover = {
    y: -4,
    borderColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: "rgba(12, 12, 12, 0.8)",
    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.01)",
  };

  const cardTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
  };

  return (
    <section id="impacto" className="py-24 px-6 border-t border-zinc-900/50 bg-[#060606]/40 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            Impacto Comercial
          </h2>
          <p className="text-3xl font-bold text-white tracking-tight">
            Métricas reales que transforman tus resultados operativos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Tarjeta 1 (-80% Tiempo de Procesamiento) */}
          <motion.div
            whileHover={cardHover}
            transition={cardTransition}
            className="lg:col-span-1 glass-panel rounded-2xl p-8 text-left border border-zinc-800/40 bg-zinc-950/20 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
          >
            <div>
              <span className="text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent block mb-6">
                -80%
              </span>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                Tiempo de Procesamiento
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Reducción drástica en las horas dedicadas a tareas manuales, permitiendo automatizar flujos complejos y liberar tiempo para el análisis estratégico del negocio.
              </p>
            </div>
            
            {/* Compact visual indicator in footer */}
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between gap-4">
              <span className="text-[10px] tracking-wider text-zinc-500 uppercase font-mono">Eficiencia</span>
              <div className="flex-grow max-w-[80px] h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div className="bg-zinc-400 h-full rounded-full" style={{ width: "80%" }} />
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 2 (10x Retorno de Inversión) */}
          <motion.div
            whileHover={cardHover}
            transition={cardTransition}
            className="lg:col-span-1 glass-panel rounded-2xl p-8 text-left border border-zinc-800/40 bg-zinc-950/20 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
          >
            <div>
              <span className="text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent block mb-6">
                10x
              </span>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                Retorno de Inversión
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nuestras plataformas y flujos de automatización a la medida se amortizan rápidamente a través del ahorro continuo de recursos operativos e ineficiencias eliminadas.
              </p>
            </div>
            
            {/* Footer metadata for symmetric balance */}
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
              <span className="text-[10px] tracking-wider text-zinc-500 uppercase font-mono">Retorno Operativo</span>
              <span className="text-[10px] text-zinc-650 font-mono">Amortización</span>
            </div>
          </motion.div>

          {/* Tarjeta 3 (0% Errores Manuales) */}
          <motion.div
            whileHover={cardHover}
            transition={cardTransition}
            className="lg:col-span-1 glass-panel rounded-2xl p-8 text-left border border-zinc-800/40 bg-zinc-950/20 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Micro-indicador de precisión en el tope */}
                <div className="flex items-center gap-1.5 self-start px-2 py-0.5 rounded border border-emerald-950/50 bg-emerald-950/25 text-[9px] font-semibold text-emerald-400 uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Precisión Absoluta
                </div>

                <span className="text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent block mb-4">
                  0%
                </span>
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                  Errores Manuales
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Seguridad informática y consistencia de datos absoluta en registros corporativos, evitando reprocesamientos y pérdidas financieras derivadas del error humano.
                </p>
              </div>
              
              {/* Footer status representing system accuracy stability */}
              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[10px] tracking-wider text-zinc-500 uppercase font-mono">Integridad</span>
                <span className="text-[10px] text-emerald-500 font-mono">Estable</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
