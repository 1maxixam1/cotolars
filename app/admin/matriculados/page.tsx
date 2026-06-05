"use client";

import { useState } from "react";
import { Search, Plus, Filter, MoreVertical, Edit2, Ban, Eye } from "lucide-react";

const matriculados = [
  { id: 1, name: "Ana Martínez", mp: "1056", email: "ana.martinez@email.com", status: "Activo", date: "15 May 2024" },
  { id: 2, name: "Carlos López", mp: "1057", email: "clopez@email.com", status: "Activo", date: "22 May 2024" },
  { id: 3, name: "Lucía Gómez", mp: "1058", email: "lucia.gomez@email.com", status: "Inactivo", date: "01 Jun 2024" },
  { id: 4, name: "Martín Díaz", mp: "1059", email: "mdiaz_to@email.com", status: "Activo", date: "10 Jun 2024" },
  { id: 5, name: "Sofía Ruiz", mp: "1060", email: "sofia.ruiz@email.com", status: "Suspendido", date: "12 Jun 2024" },
];

export default function MatriculadosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Matriculados</h1>
          <p className="text-sm text-slate-500 mt-1">Gestiona el registro de profesionales.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/20">
          <Plus className="h-4 w-4" />
          Nuevo Matriculado
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, M.P. o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-slate-200 bg-white text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <th className="px-6 py-4 font-medium">Profesional</th>
                <th className="px-6 py-4 font-medium">Matrícula (M.P.)</th>
                <th className="px-6 py-4 font-medium">Estado</th>
                <th className="px-6 py-4 font-medium">Fecha Alta</th>
                <th className="px-6 py-4 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {matriculados.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{m.name}</div>
                        <div className="text-xs text-slate-500">{m.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{m.mp}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border
                      ${m.status === 'Activo' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                        m.status === 'Inactivo' ? 'bg-slate-100 text-slate-700 border-slate-200' : 
                        'bg-rose-50 text-rose-700 border-rose-200'}`}
                    >
                      {m.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{m.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Ver detalle">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" title="Editar">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors" title="Suspender">
                        <Ban className="h-4 w-4" />
                      </button>
                    </div>
                    {/* Fallback for mobile: always show a more-vertical menu button */}
                    <button className="p-1.5 text-slate-400 sm:hidden">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <span>Mostrando 1 a 5 de 1,248 matriculados</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-md bg-white hover:bg-slate-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md bg-white hover:bg-slate-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
