"use client";

import { useState } from "react";
import { Search, Star, Archive, Trash2, CheckCircle2 } from "lucide-react";

const mensajes = [
  { id: 1, sender: "Carlos Rodríguez", subject: "Consulta sobre matriculación anual", preview: "Hola, me gustaría saber cuáles son los requisitos actualizados para renovar la...", time: "10:30 AM", isUnread: true, isStarred: false },
  { id: 2, sender: "María Fernández", subject: "Problema con el pago de cuota", preview: "Intenté realizar el pago mediante transferencia pero el sistema me indica que...", time: "Ayer", isUnread: true, isStarred: true },
  { id: 3, sender: "Colegio de Kinesiólogos", subject: "Invitación a jornada interdisciplinaria", preview: "Estimados, nos dirigimos a ustedes con el fin de invitarlos formalmente a la...", time: "12 May", isUnread: false, isStarred: false },
  { id: 4, sender: "Julia Ramos", subject: "Actualización de datos de contacto", preview: "Adjunto el formulario completo para actualizar mi número de teléfono y...", time: "10 May", isUnread: false, isStarred: false },
];

export default function MensajesPage() {
  const [activeTab, setActiveTab] = useState("inbox");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Bandeja de Mensajes</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex-1 flex overflow-hidden">
        {/* Sidebar de Mensajes */}
        <div className="w-64 border-r border-slate-200 bg-slate-50/50 hidden md:block flex-shrink-0">
          <div className="p-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl shadow-sm transition-all text-sm mb-6">
              Redactar Nuevo
            </button>
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab("inbox")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'inbox' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <div className="flex items-center gap-2">
                  <Archive className="h-4 w-4" />
                  Bandeja de entrada
                </div>
                <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full">2</span>
              </button>
              <button 
                onClick={() => setActiveTab("starred")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'starred' ? 'bg-amber-50 text-amber-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <Star className="h-4 w-4" />
                Destacados
              </button>
              <button 
                onClick={() => setActiveTab("sent")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'sent' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <CheckCircle2 className="h-4 w-4" />
                Enviados
              </button>
            </nav>
          </div>
        </div>

        {/* Lista de Mensajes */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="p-3 border-b border-slate-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar en mensajes..."
                  className="h-9 pl-9 pr-4 rounded-lg border border-transparent bg-slate-100 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 w-48 sm:w-64"
                />
              </div>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <button className="p-2 hover:bg-slate-100 hover:text-slate-700 rounded-md transition-colors" title="Archivar seleccionados">
                <Archive className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-rose-50 hover:text-rose-600 rounded-md transition-colors" title="Eliminar seleccionados">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-slate-100">
              {mensajes.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`group flex items-center gap-4 p-4 hover:bg-slate-50 cursor-pointer transition-colors ${msg.isUnread ? 'bg-blue-50/30' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <button className="text-slate-300 hover:text-amber-400 transition-colors">
                      <Star className={`h-4 w-4 ${msg.isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>
                  </div>
                  <div className={`w-32 sm:w-48 truncate text-sm ${msg.isUnread ? 'font-semibold text-slate-900' : 'font-medium text-slate-600'}`}>
                    {msg.sender}
                  </div>
                  <div className="flex-1 truncate text-sm">
                    <span className={msg.isUnread ? 'font-semibold text-slate-900' : 'text-slate-700'}>{msg.subject}</span>
                    <span className="text-slate-400 mx-2">-</span>
                    <span className="text-slate-500">{msg.preview}</span>
                  </div>
                  <div className={`text-xs whitespace-nowrap w-16 text-right ${msg.isUnread ? 'font-semibold text-blue-600' : 'text-slate-400'}`}>
                    {msg.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
