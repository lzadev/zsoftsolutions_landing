"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Spring transition animation configuration requested by user
  const springTransition = { type: "spring" as const, stiffness: 100, damping: 15 };

  // Variant for staggered children entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springTransition,
    },
  };

  return (
    <section className="relative pt-24 pb-28 md:pt-32 md:pb-36 px-6 overflow-hidden bg-[#030303]">
      {/* Subtle executive light flare in background */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-zinc-900/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center"
      >
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-7 text-left z-10">
          <motion.div 
            variants={itemVariants}
            className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1 text-xs border border-zinc-800 bg-zinc-950/80 text-zinc-400"
          >
            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
            Ingeniería de Software B2B de Alto Impacto
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-2xl font-sans"
          >
            Diseñamos el software que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
              automatiza tu operación
            </span>{" "}
            y escala tu negocio.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-light"
          >
            Desarrollamos soluciones robustas a la medida que eliminan ineficiencias manuales y cuellos de botella operativos, optimizando tus costos y maximizando el retorno financiero de tu organización.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 bg-zinc-100 text-zinc-950 font-medium text-sm transition-colors shadow-lg hover:bg-zinc-200 duration-200"
            >
              Optimizar mi Operación
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 border border-zinc-800 bg-zinc-950/50 text-zinc-300 transition-colors font-medium text-sm hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              Conocer Servicios
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Conceptual Abstract Geometric Art */}
        <div className="lg:col-span-5 relative w-full aspect-square max-w-[450px] lg:max-w-none mx-auto flex items-center justify-center select-none">
          {/* Subtle grid pattern container */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 rounded-2xl border border-zinc-900/50" />

          {/* Abstract Layered Geometric Cards with Glassmorphism */}
          <div className="relative w-[85%] h-[85%] flex items-center justify-center">
            
            {/* Card A: Base Structural Alignment Grid (Bottom Layer) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 0.35, scale: 1, rotate: -2 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="absolute w-[80%] h-[75%] rounded-2xl border border-zinc-900 bg-zinc-950/20 shadow-2xl shadow-black/80 flex flex-col p-6 justify-between"
            >
              <div className="w-12 h-1 border-t-2 border-zinc-800" />
              <div className="space-y-2">
                <div className="w-full h-1 bg-zinc-900 rounded" />
                <div className="w-4/5 h-1 bg-zinc-900 rounded" />
                <div className="w-2/3 h-1 bg-zinc-900 rounded" />
              </div>
            </motion.div>

            {/* Card B: Middle Layer - Process Sequence (Evokes Organized Processes) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 15 }}
              animate={{ opacity: 0.85, x: -20, y: 10 }}
              transition={{ ...springTransition, delay: 0.45 }}
              whileHover={{ y: 2, transition: { duration: 0.3 } }}
              className="absolute w-[75%] h-[42%] rounded-xl border border-zinc-800/40 bg-zinc-950/50 backdrop-blur-xl shadow-2xl shadow-black/90 p-5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-[10px] tracking-wider text-zinc-500 font-mono uppercase">
                <span>Operaciones</span>
                <span className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
              <div className="space-y-3.5 my-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">01. Auditoría</span>
                  <span className="text-zinc-650 font-mono">OK</span>
                </div>
                <div className="h-[1px] bg-zinc-900" />
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-300 font-medium">02. Automatización</span>
                  <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
                </div>
                <div className="h-[1px] bg-zinc-900" />
                <div className="flex justify-between items-center text-xs text-zinc-500">
                  <span>03. Escala Técnica</span>
                  <span>PENDIENTE</span>
                </div>
              </div>
            </motion.div>

            {/* Card C: Top Layer - Growth Metric & Graph (Evokes Structural Cleanliness and Success) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -25, rotate: 1 }}
              animate={{ opacity: 0.95, x: 25, y: -20, rotate: 1 }}
              transition={{ ...springTransition, delay: 0.6 }}
              whileHover={{ y: -26, transition: { duration: 0.3 } }}
              className="absolute w-[60%] h-[40%] rounded-xl border border-zinc-800/40 bg-zinc-900/30 backdrop-blur-md shadow-2xl shadow-black/90 p-5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <span className="text-[9px] tracking-wider text-zinc-500 uppercase font-mono">Eficiencia</span>
                  <span className="text-3xl font-extrabold text-white tracking-tighter block">+80%</span>
                </div>
                <div className="w-7 h-7 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              
              {/* Minimalist abstract path line graph */}
              <div className="w-full h-8 mt-2 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path
                    d="M0 25 Q25 20 40 12 T80 5 T100 2"
                    fill="none"
                    stroke="rgba(244, 244, 245, 0.7)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 25 Q25 20 40 12 T80 5 T100 2 L100 30 L0 30 Z"
                    fill="url(#gradient-art)"
                    opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="gradient-art" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="white" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Decorative Floating Monochromatic Anchor Node (Middle Ground) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ ...springTransition, delay: 0.75 }}
              className="absolute w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 shadow-2xl flex items-center justify-center top-[10%] left-[20%]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
