"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

// Nota: en un Server Component usaríamos export const metadata, pero como
// este componente usa useState (client), las meta las gestionamos en el layout.

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Rivadavia 1234, (F5300) La Rioja Capital, Argentina",
    color: "text-[#1abc9c]",
    bg: "bg-[#1abc9c]/10",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(+54 380) 442-0000",
    color: "text-[#2471a3]",
    bg: "bg-[#2471a3]/10",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "info@cotolar.org.ar",
    color: "text-[#0f3460]",
    bg: "bg-[#0f3460]/10",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lunes a Viernes, 9:00 — 14:00 hs.",
    color: "text-[#1abc9c]",
    bg: "bg-[#1abc9c]/10",
  },
];

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío (maqueta estática)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Encabezado de página */}
      <div className="bg-[#0f3460] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1abc9c] text-sm font-semibold uppercase tracking-widest mb-2">
            Comunicación
          </p>
          <h1 className="text-4xl font-extrabold text-white">Contacto</h1>
          <p className="text-blue-200 mt-2">
            Estamos aquí para ayudarte. Escribinos o visitanos en nuestra sede.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Info de contacto */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-[#0f3460] mb-6">Información de contacto</h2>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{item.label}</p>
                  <p className="text-gray-800 font-medium text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Mapa placeholder */}
            <div className="bg-[#0f3460]/5 border border-gray-200 rounded-2xl h-44 flex items-center justify-center text-gray-400 text-sm mt-4">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="font-medium">Mapa de ubicación</p>
                <p className="text-xs text-gray-400">Av. Rivadavia 1234, La Rioja</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {!sent ? (
                <>
                  <h2 className="text-xl font-bold text-[#0f3460] mb-6">Envianos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nombre completo <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          placeholder="Ej: Juan Pérez"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2471a3] focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Correo electrónico <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="juan@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2471a3] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Asunto <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.asunto}
                        onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                        placeholder="Ej: Consulta sobre matriculación"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2471a3] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mensaje <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                        placeholder="Escribí tu consulta o mensaje..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2471a3] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-[#0f3460] hover:bg-[#1a5276] disabled:opacity-60 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar mensaje
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Estado de éxito */
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#1abc9c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#1abc9c]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f3460] mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-500 text-sm">
                    Gracias por contactarte. Te responderemos a la brevedad en el correo indicado.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ nombre: "", email: "", asunto: "", mensaje: "" }); }}
                    className="mt-6 text-[#2471a3] text-sm font-semibold hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
