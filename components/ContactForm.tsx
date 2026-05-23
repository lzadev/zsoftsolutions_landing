"use client";

import React, { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    processToOptimize: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Auto-dismiss success status after 5 seconds
  useEffect(() => {
    if (status.type === "success") {
      const timer = setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.type]);

  // Sync ARIA state dynamically for screen readers when inputs change or blur
  const syncAriaInvalid = (element: HTMLInputElement | HTMLTextAreaElement) => {
    if (!element.checkValidity || typeof element.checkValidity !== "function") return;
    
    // Check if the element matches the user-invalid state (using native checkValidity as proxy)
    const isValid = element.checkValidity();
    
    // Check if it's currently considered invalid by the browser
    if (!isValid && element.value !== "") {
      element.setAttribute("aria-invalid", "true");
    } else {
      element.removeAttribute("aria-invalid");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    syncAriaInvalid(e.target);
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    if (target.checkValidity()) {
      target.removeAttribute("aria-invalid");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Sync ARIA invalid on all inputs on submit attempt
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        syncAriaInvalid(input as HTMLInputElement | HTMLTextAreaElement);
      });

      if (!formRef.current.checkValidity()) {
        setStatus({
          type: "error",
          message: "Por favor, corrige los errores en el formulario antes de enviar.",
        });
        return;
      }
    }

    setStatus({ type: "loading", message: "Enviando solicitud..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Solicitud enviada con éxito.",
        });
        
        // Reset the form natively to clear the browser's internal "user-interacted" (dirty) flags,
        // which prevents the empty required fields from showing :user-invalid errors after reset.
        formRef.current?.reset();
        
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          processToOptimize: "",
        });
        
        // Reset ARIA attributes
        if (formRef.current) {
          const inputs = formRef.current.querySelectorAll("input, textarea");
          inputs.forEach((input) => input.removeAttribute("aria-invalid"));
        }
      } else {
        setStatus({
          type: "error",
          message: data.error || "Ocurrió un error al procesar tu solicitud.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Error de conexión. Inténtalo de nuevo más tarde.",
      });
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="glass-panel rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative internal gradient glow */}
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <h3 className="text-2xl font-semibold text-zinc-100 mb-2 tracking-tight">
          Optimiza tu Operación Hoy
        </h3>
        <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
          Completa el formulario corporativo y nos pondremos en contacto para evaluar tu caso sin costo alguno.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate // Let custom :user-invalid and fetch handle errors, prevent default browser bubbles
          className="space-y-6"
        >
          {/* Nombre */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              className="form-input rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm"
              placeholder="Ej. Carlos Mendoza"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onBlur={handleBlur}
              onInput={handleInput}
            />
            <span className="error-msg text-xs text-red-400 mt-1.5 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              El nombre completo es requerido (mínimo 2 caracteres).
            </span>
          </div>

          {/* Empresa */}
          <div className="flex flex-col">
            <label htmlFor="company" className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
              Empresa *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              autoComplete="organization"
              minLength={2}
              className="form-input rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm"
              placeholder="Ej. Corporación Comercial"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              onBlur={handleBlur}
              onInput={handleInput}
            />
            <span className="error-msg text-xs text-red-400 mt-1.5 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              El nombre de la empresa es requerido.
            </span>
          </div>

          {/* Correo Corporativo */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
              Correo Corporativo *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm"
              placeholder="Ej. carlos@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onBlur={handleBlur}
              onInput={handleInput}
            />
            <span className="error-msg text-xs text-red-400 mt-1.5 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Ingresa una dirección de correo corporativo válida.
            </span>
          </div>

          {/* Teléfono Corporativo (Opcional) */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
              Teléfono Corporativo (Opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm"
              placeholder="Ej. +1 (809) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onBlur={handleBlur}
              onInput={handleInput}
            />
          </div>

          {/* Proceso a optimizar */}
          <div className="flex flex-col">
            <label htmlFor="processToOptimize" className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
              ¿Qué proceso deseas optimizar? (Opcional)
            </label>
            <textarea
              id="processToOptimize"
              name="processToOptimize"
              rows={4}
              className="form-input rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm resize-none"
              placeholder="Describe detalladamente los flujos manuales, cuellos de botella o sistemas que buscas desarrollar..."
              value={formData.processToOptimize}
              onChange={(e) => setFormData({ ...formData, processToOptimize: e.target.value })}
              onBlur={handleBlur}
              onInput={handleInput}
            />
          </div>

          {/* Status Alert Banner */}
          {status.type !== "idle" && status.type !== "loading" && (
            <div
              className={`rounded-xl p-4 flex items-start gap-3 border text-sm transition-all ${
                status.type === "success"
                  ? "bg-emerald-950/30 border-emerald-500/20 text-emerald-400"
                  : "bg-red-950/30 border-red-500/20 text-red-400"
              }`}
            >
              {status.type === "success" ? (
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span>{status.message}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full flex items-center justify-center gap-2 rounded-xl py-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-medium text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-zinc-100/5 duration-200"
          >
            {status.type === "loading" ? (
              <>
                <svg className="animate-spin h-5 w-5 text-zinc-950" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Enviando...</span>
              </>
            ) : (
              <span>Optimizar mi Operación</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
