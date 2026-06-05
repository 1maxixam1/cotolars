"use client";

import { useState } from "react";
import { Search, Star, Archive, Trash2, Reply, X } from "lucide-react";

const mensajes = [
  { id: 1, sender: "Carlos Rodríguez", email: "crodriguez@email.com", subject: "Consulta sobre matriculación anual", body: "Hola, me gustaría saber cuáles son los requisitos actualizados para renovar la matrícula para el próximo año. Estoy ejerciendo en La Rioja Capital y necesito la información con urgencia. Muchas gracias.", time: "10:30 AM", date: "Hoy", isUnread: true, isStarred: false },
  { id: 2, sender: "María Fernández", email: "mfernandez@email.com", subject: "Problema con el pago de cuota", body: "Intenté realizar el pago mediante transferencia pero el sistema me indica que mi CBU no es válido. Por favor necesito ayuda para regularizar mi situación lo antes posible.", time: "08:15 AM", date: "Hoy", isUnread: true, isStarred: true },
  { id: 3, sender: "Colegio de Kinesiólogos", email: "info@kinerioja.org.ar", subject: "Invitación a jornada interdisciplinaria", body: "Estimados colegas, nos dirigimos a ustedes con el fin de invitarlos formalmente a la Jornada Interdisciplinaria de Rehabilitación que se llevará a cabo el próximo 15 de julio en el Auditorio del Hospital Enrique Vera Barros.", time: "09:00 AM", date: "12 May", isUnread: false, isStarred: false },
  { id: 4, sender: "Julia Ramos", email: "juliaramos@email.com", subject: "Actualización de datos de contacto", body: "Adjunto el formulario completo para actualizar mi número de teléfono y dirección de consultorio. Los datos anteriores ya no son válidos.", time: "03:45 PM", date: "10 May", isUnread: false, isStarred: false },
  { id: 5, sender: "Roberto Villanueva", email: "rvillanueva@email.com", subject: "Solicitud de certificado de matrícula", body: "Necesito solicitar un certificado que acredite mi matrícula provincial vigente para presentar ante el PAMI. ¿Cuál es el trámite a seguir?", time: "11:00 AM", date: "08 May", isUnread: false, isStarred: true },
];

export default function MensajesPage() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [selectedMsg, setSelectedMsg] = useState<typeof mensajes[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const displayed = mensajes.filter(
    (m) =>
      (activeTab === "starred" ? m.isStarred : true) &&
      (m.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Mensajes</h1>
        <p className="text-sm text-slate-500 mt-1">Gestiona los mensajes recibidos desde el formulario de contacto.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex overflow-hidden" style={{ height: "calc(100vh - 220px)", minHeight: "500px" }}>
        {/* Folder Sidebar */}
        <div className="w-52 border-r border-slate-200 bg-slate-50/50 hidden md:flex flex-col flex-shrink-0">
          <div className="p-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm transition-all text-sm mb-5">
              Redactar nuevo
            </button>
            <nav className="space-y-1">
              <button
                onClick={() => { setActiveTab("inbox"); setSelectedMsg(null); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "inbox" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"}`}
              >
                <div className="flex items-center gap-2"><Archive className="h-4 w-4" /> Entrada</div>
                <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
              </button>
              <button
                onClick={() => { setActiveTab("starred"); setSelectedMsg(null); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "starred" ? "bg-amber-50 text-amber-700" : "text-slate-600 hover:bg-slate-100"}`}
              >
                <Star className="h-4 w-4" /> Destacados
              </button>
            </nav>
          </div>
        </div>

        {/* Message List */}
        <div className={`flex flex-col border-r border-slate-200 ${selectedMsg ? "hidden md:flex md:w-72" : "flex-1"}`}>
          <div className="p-3 border-b border-slate-200 bg-white">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar mensajes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-9 pl-9 pr-4 rounded-lg border border-slate-200 bg-slate-50 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {displayed.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setSelectedMsg(msg)}
                className={`flex items-start gap-3 p-4 border-b border-slate-100 cursor-pointer transition-colors ${selectedMsg?.id === msg.id ? "bg-blue-50" : msg.isUnread ? "bg-blue-50/30 hover:bg-slate-50" : "hover:bg-slate-50"}`}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); }}
                  className="mt-0.5 flex-shrink-0"
                >
                  <Star className={`h-4 w-4 transition-colors ${msg.isStarred ? "fill-amber-400 text-amber-400" : "text-slate-300 hover:text-amber-400"}`} />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-sm truncate ${msg.isUnread ? "font-bold text-slate-900" : "font-medium text-slate-700"}`}>{msg.sender}</span>
                    <span className="text-[11px] text-slate-400 flex-shrink-0 ml-2">{msg.time}</span>
                  </div>
                  <p className={`text-xs truncate mb-0.5 ${msg.isUnread ? "font-semibold text-slate-800" : "text-slate-600"}`}>{msg.subject}</p>
                  <p className="text-xs text-slate-400 truncate">{msg.body.substring(0, 60)}...</p>
                </div>
              </div>
            ))}
            {displayed.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-sm">No hay mensajes en esta categoría.</div>
            )}
          </div>
        </div>

        {/* Message Detail */}
        {selectedMsg ? (
          <div className="flex-1 flex flex-col min-w-0">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <button onClick={() => setSelectedMsg(null)} className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors md:hidden">
                  <X className="h-4 w-4" />
                </button>
                <h2 className="font-semibold text-slate-900 text-sm truncate">{selectedMsg.subject}</h2>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Responder">
                  <Reply className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Eliminar">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {selectedMsg.sender.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{selectedMsg.sender}</p>
                  <p className="text-xs text-slate-500">{selectedMsg.email}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{selectedMsg.date} · {selectedMsg.time}</p>
                </div>
              </div>
              <div className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded-xl p-5 border border-slate-100">
                {selectedMsg.body}
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <textarea
                  rows={2}
                  placeholder="Escribe tu respuesta..."
                  className="flex-1 resize-none rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm h-full">
                  <Reply className="h-4 w-4" /> Responder
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 hidden md:flex items-center justify-center text-center text-slate-400">
            <div>
              <Archive className="h-12 w-12 mx-auto mb-3 text-slate-200" />
              <p className="text-sm font-medium text-slate-500">Selecciona un mensaje para leerlo</p>
              <p className="text-xs mt-1">Tienes {mensajes.filter(m => m.isUnread).length} mensajes sin leer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
