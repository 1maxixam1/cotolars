"use client";

import { useState } from "react";
import { Save, Globe, Mail, Lock, Bell, Users, Shield, CheckCircle } from "lucide-react";

const AUTHORIZED_EMAILS_DEFAULT = ["admin@cto.org.ar", "secretaria@cto.org.ar", "presidente@cto.org.ar"];

export default function SettingsPage() {
  const [emails, setEmails] = useState(AUTHORIZED_EMAILS_DEFAULT);
  const [newEmail, setNewEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const addEmail = () => {
    if (newEmail && !emails.includes(newEmail) && newEmail.includes("@")) {
      setEmails([...emails, newEmail]);
      setNewEmail("");
    }
  };

  const removeEmail = (email: string) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Configuración</h1>
          <p className="text-sm text-slate-500 mt-1">Administra los ajustes del sistema y del panel.</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm ${saved ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-blue-600"} text-white hover:shadow-md`}
        >
          {saved ? <><CheckCircle className="h-4 w-4" /> Guardado!</> : <><Save className="h-4 w-4" /> Guardar cambios</>}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <Globe className="h-4 w-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">Información General</h2>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">Nombre del Colegio</label>
                <input type="text" defaultValue="Colegio de Terapeutas Ocupacionales de La Rioja" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1.5">Dirección</label>
                  <input type="text" defaultValue="Av. Rivadavia 1234" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1.5">Ciudad</label>
                  <input type="text" defaultValue="La Rioja Capital" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">Correo de contacto público</label>
                <input type="email" defaultValue="contacto@cotolar.org.ar" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
            </div>
          </section>

          {/* Authorized Emails */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <h2 className="font-semibold text-slate-900">Correos Autorizados para el Panel</h2>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-500">Solo los correos listados aquí podrán ingresar al panel de administración.</p>
              
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="nuevo@cto.org.ar"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addEmail()}
                  className="flex-1 h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button onClick={addEmail} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                  Agregar
                </button>
              </div>

              <div className="space-y-2">
                {emails.map((email) => (
                  <div key={email} className="flex items-center justify-between px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 group">
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <span className="text-sm text-slate-700">{email}</span>
                    </div>
                    <button onClick={() => removeEmail(email)} className="text-slate-300 hover:text-rose-500 transition-colors text-xs opacity-0 group-hover:opacity-100">
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Email Notifications */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <Bell className="h-4 w-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">Notificaciones</h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Nuevos mensajes de contacto", desc: "Recibir alerta cuando llegue un nuevo mensaje.", defaultChecked: true },
                { label: "Alta de nuevo matriculado", desc: "Notificar cuando se agrega un nuevo profesional.", defaultChecked: true },
                { label: "Cuota con vencimiento próximo", desc: "Recordatorio 5 días antes del vencimiento.", defaultChecked: false },
                { label: "Reporte mensual del sistema", desc: "Resumen de actividad al final de cada mes.", defaultChecked: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input type="checkbox" defaultChecked={item.defaultChecked} className="sr-only peer" />
                    <div className="w-10 h-5 bg-slate-200 peer-focus:ring-2 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-slate-200 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Security */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <Lock className="h-4 w-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">Seguridad</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">Contraseña actual</label>
                <input type="password" defaultValue="••••••••" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">Nueva contraseña</label>
                <input type="password" placeholder="••••••••" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">Confirmar contraseña</label>
                <input type="password" placeholder="••••••••" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <button className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-medium rounded-xl transition-all">
                Actualizar contraseña
              </button>
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">Info de Contacto</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">Teléfono</label>
                <input type="tel" defaultValue="+54 380 XXX-XXXX" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">WhatsApp</label>
                <input type="tel" defaultValue="+54 9 380 XXX-XXXX" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">Horario de atención</label>
                <input type="text" defaultValue="Lun-Vie, 8:00 - 16:00" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
