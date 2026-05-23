"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Impacto", href: "#impacto" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center group">
            zsoft<span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">solutions</span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-1 animate-pulse" />
          </a>
        </div>

        {/* Navigation Items (Desktop) with Shared LayoutId Hover */}
        <nav 
          className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400 py-1 px-1 rounded-full border border-zinc-800/10 bg-zinc-950/20 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 hover:text-white transition-colors duration-300"
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="navbar-hover-pill"
                  className="absolute inset-0 bg-zinc-900/60 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                  }}
                  layout
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:block">
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs font-semibold border border-zinc-850 bg-zinc-950 text-zinc-200 hover:border-zinc-750 hover:text-white transition-all shadow-md shadow-black/50"
          >
            Iniciar Evaluación
          </motion.a>
        </div>

        {/* Hamburger Menu button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden border-t border-zinc-900 bg-[#030303] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors duration-250 py-1"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-900">
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center rounded-xl py-3 border border-zinc-800 bg-zinc-950 text-zinc-200 text-xs font-semibold hover:border-zinc-700 hover:text-white transition-all"
                >
                  Iniciar Evaluación
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
