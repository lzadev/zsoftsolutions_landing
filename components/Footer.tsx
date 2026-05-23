import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-950 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        <span className="text-xs text-zinc-500">© 2026 zsoftsolutions. Todos los derechos reservados.</span>
        <div className="text-xs text-zinc-400 gap-6 flex">
          <a href="#servicios" className="hover:text-zinc-100 transition-colors">Servicios</a>
          <a href="#contacto" className="hover:text-zinc-100 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
