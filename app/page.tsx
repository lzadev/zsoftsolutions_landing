import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "zsoftsolutions | Automatización de Procesos y Desarrollo a la Medida",
  description: "Diseñamos el software que automatiza tu operación y escala tu negocio. Líderes en desarrollo de sistemas a la medida y auditoría de eficiencia operativa para el mercado corporativo.",
  keywords: [
    "automatización de procesos eficientes",
    "desarrollo de sistemas a la medida",
    "auditoría de eficiencia operativa",
    "software empresarial",
    "zsoftsolutions",
    "tecnología B2B",
    "Santo Domingo",
    "República Dominicana"
  ],
  openGraph: {
    title: "zsoftsolutions | Automatización de Procesos y Desarrollo a la Medida",
    description: "Diseñamos el software que automatiza tu operación y escala tu negocio. Eliminamos cuellos de botella y maximizamos la eficiencia operativa.",
    url: "https://zsoftsolutions.com",
    siteName: "zsoftsolutions",
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "https://zsoftsolutions.com/hero-dashboard.png",
        width: 1200,
        height: 1200,
        alt: "zsoftsolutions Dashboard Overview",
      }
    ]
  },
  alternates: {
    canonical: "https://zsoftsolutions.com",
  }
};

export default function Home() {
  return (
    <div className="relative selection:bg-zinc-800 selection:text-white bg-grid-pattern overflow-hidden">
      {/* Ambient glowing blobs in background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] radial-glow pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] radial-glow-purple pointer-events-none" />
      <div className="absolute bottom-0 left-[20%] w-[50%] h-[50%] radial-glow pointer-events-none" />

      {/* Hero Section */}
      <Hero />


      {/* Services Section (Bento Grid) */}
      <section id="servicios" className="py-24 px-6 border-t border-zinc-900/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-16">
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Servicios de Ingeniería</h2>
            <p className="text-3xl font-bold text-white tracking-tight">
              Soluciones estructuradas para potenciar tu rendimiento corporativo.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Automatización Inteligente de Procesos (Large 2/3) */}
            <div className="md:col-span-2 glass-panel rounded-2xl p-8 relative flex flex-col justify-between group overflow-hidden">
              <div className="absolute right-[-40px] top-[-40px] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-all duration-300" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automatización Inteligente de Procesos</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
                  Reemplazamos las tareas operativas manuales y repetitivas por flujos de trabajo autónomos y continuos. Optimizamos el procesamiento de información, validación y conciliación de datos críticos de negocio, eliminando por completo el error humano.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-500 mt-4 border-t border-zinc-900/60 pt-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Ejecución continua de operaciones 24/7
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Eliminación de errores de captura
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Monitoreo continuo y alertas operativas inmediatas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Reducción inmediata de costos de procesamiento
                </li>
              </ul>
            </div>

            {/* Bento Card 2: Desarrollo de Aplicaciones Móviles (Small 1/3) */}
            <div className="glass-panel rounded-2xl p-8 relative flex flex-col justify-between group overflow-hidden">
              <div className="absolute right-[-40px] top-[-40px] w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/10 transition-all duration-300" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={2} />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={3} strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Desarrollo de Aplicaciones Móviles</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Diseñamos y construimos soluciones móviles nativas e híbridas de alta fidelidad, enfocadas en conectar tu operación en el mundo real. Creamos herramientas ágiles para equipos de campo, logística y supervisión, garantizando rendimiento óptimo, alta seguridad y disponibilidad sin conexión a internet.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-2.5 text-xs text-zinc-500 mt-4 border-t border-zinc-900/60 pt-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                  Aplicaciones corporativas para iOS y Android.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                  Sincronización de datos fuera de línea (Offline-first).
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                  Interfaces fluidas orientadas a la productividad del usuario.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                  Seguridad de grado empresarial y control de accesos.
                </li>
              </ul>
            </div>

            {/* Bento Card 3: Datos Clave / Impacto (Small 1/3) */}
            <div className="glass-panel rounded-2xl p-8 relative flex flex-col justify-between group overflow-hidden bg-gradient-to-b from-zinc-950/40 to-transparent">
              <div className="flex flex-col justify-center flex-grow space-y-4 my-auto">
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Nuestra Filosofía</h4>
                <p className="text-lg font-medium text-zinc-200 leading-relaxed italic">
                  &ldquo;El software no debe ser una carga administrativa, sino el motor de rendimiento operativo y escala financiera de tu empresa.&rdquo;
                </p>
              </div>
              <div className="border-t border-zinc-900/60 pt-6 mt-6">
                <span className="text-xs text-zinc-500 block">ZSoft Solutions</span>
                <span className="text-xs text-zinc-600">Ingeniería para el Futuro</span>
              </div>
            </div>

            {/* Bento Card 4: Desarrollo de Sistemas a la Medida (Large 2/3) */}
            <div className="md:col-span-2 glass-panel rounded-2xl p-8 relative flex flex-col justify-between group overflow-hidden">
              <div className="absolute left-[-40px] bottom-[-40px] w-64 h-64 bg-zinc-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-zinc-500/10 transition-all duration-300" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100/10 border border-zinc-100/20 flex items-center justify-center text-zinc-100 mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Desarrollo de Sistemas a la Medida</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
                  Diseñamos y construimos plataformas robustas adaptadas exclusivamente a la lógica operativa de tu organización. Creamos herramientas ágiles y fluidas que tus equipos dominan desde el primer día, sin forzar tu negocio a adaptarse a plantillas rígidas de terceros.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-500 mt-4 border-t border-zinc-900/60 pt-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-100 rounded-full" />
                  Sistemas alineados al 100% con tu lógica interna
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-100 rounded-full" />
                  Arquitectura escalable preparada para el crecimiento corporativo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-100 rounded-full" />
                  Adopción inmediata del usuario con interfaces intuitivas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-100 rounded-full" />
                  Propiedad completa del código y control tecnológico
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <ImpactSection />

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 border-t border-zinc-900/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Info Panel */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div>
                <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Evaluación Gratuita</h2>
                <p className="text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  Elevemos la eficiencia de tu organización.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Analizamos tus procesos clave, detectamos áreas críticas de mejora y te proponemos un esquema de desarrollo integral para automatizar tu negocio.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-zinc-900/80">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-zinc-200 block">Ubicación principal</span>
                    <span className="text-sm text-zinc-500">Santo Domingo, República Dominicana</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-zinc-200 block">Contacto comercial</span>
                    <span className="text-sm text-zinc-500">operaciones@zsoftsolutions.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Component (imported Client Component) */}
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
