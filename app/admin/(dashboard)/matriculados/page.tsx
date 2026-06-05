"use client";

import { useState } from "react";
import { Search, Plus, Filter, Edit2, Ban, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";

const allMatriculados = [
  { id: 1, name: "Ana Martínez", mp: "1056", email: "ana.martinez@email.com", phone: "+54 380 456-7890", status: "Activo", date: "15 May 2024", specialty: "Pediatría" },
  { id: 2, name: "Carlos López", mp: "1057", email: "clopez@email.com", phone: "+54 380 456-7891", status: "Activo", date: "22 May 2024", specialty: "Neurología" },
  { id: 3, name: "Lucía Gómez", mp: "1058", email: "lucia.gomez@email.com", phone: "+54 380 456-7892", status: "Inactivo", date: "01 Jun 2024", specialty: "Geriatría" },
  { id: 4, name: "Martín Díaz", mp: "1059", email: "mdiaz_to@email.com", phone: "+54 380 456-7893", status: "Activo", date: "10 Jun 2024", specialty: "Rehabilitación" },
  { id: 5, name: "Sofía Ruiz", mp: "1060", email: "sofia.ruiz@email.com", phone: "+54 380 456-7894", status: "Suspendido", date: "12 Jun 2024", specialty: "Salud Mental" },
  { id: 6, name: "Fernanda Castro", mp: "1061", email: "fcastro@email.com", phone: "+54 380 456-7895", status: "Activo", date: "20 Jun 2024", specialty: "Pediatría" },
  { id: 7, name: "Roberto Sánchez", mp: "1062", email: "roberto.s@email.com", phone: "+54 380 456-7896", status: "Activo", date: "25 Jun 2024", specialty: "Neurología" },
];

type Status = "Activo" | "Inactivo" | "Suspendido";

const statusStyles: Record<Status, string> = {
  Activo: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Inactivo: "bg-slate-100 text-slate-700 border-slate-200",
  Suspendido: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function MatriculadosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [showModal, setShowModal] = useState(false);

  const filtered = allMatriculados.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.mp.includes(searchTerm) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === "Todos" || m.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Matriculados</h1>
          <p className="text-sm text-slate-500 mt-1">Gestiona el registro de profesionales habilitados.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/20 text-sm"
        >
          <Plus className="h-4 w-4" />
          Nuevo Matriculado
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, M.P. o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-slate-200 bg-white text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            {["Todos", "Activo", "Inactivo", "Suspendido"].map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${filterStatus === s ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <th className="px-6 py-3.5 font-medium">Profesional</th>
                <th className="px-6 py-3.5 font-medium">M.P.</th>
                <th className="px-6 py-3.5 font-medium">Especialidad</th>
                <th className="px-6 py-3.5 font-medium">Estado</th>
                <th className="px-6 py-3.5 font-medium">Fecha Alta</th>
                <th className="px-6 py-3.5 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length > 0 ? filtered.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">{m.name}</div>
                        <div className="text-xs text-slate-500">{m.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-600">{m.mp}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{m.specialty}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${statusStyles[m.status as Status]}`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{m.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Ver detalle">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Editar">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Suspender">
                        <Ban className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 text-sm">
                    No se encontraron resultados para &quot;{searchTerm}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <span>Mostrando {filtered.length} de {allMatriculados.length} matriculados</span>
          <div className="flex gap-1">
            <button className="h-8 w-8 flex items-center justify-center border border-slate-200 rounded-lg bg-white hover:bg-slate-50 disabled:opacity-40 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="h-8 w-8 flex items-center justify-center bg-blue-600 text-white text-xs font-medium rounded-lg">1</button>
            <button className="h-8 w-8 flex items-center justify-center border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-xs transition-colors">2</button>
            <button className="h-8 w-8 flex items-center justify-center border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Nuevo Matriculado</h2>
              <button onClick={() => setShowModal(false)} className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-700 mb-1 block">Nombre</label>
                  <input type="text" placeholder="María" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 mb-1 block">Apellido</label>
                  <input type="text" placeholder="González" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700 mb-1 block">Correo Electrónico</label>
                <input type="email" placeholder="maria@email.com" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-700 mb-1 block">N° de Matrícula (M.P.)</label>
                  <input type="text" placeholder="1063" className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 mb-1 block">Especialidad</label>
                  <select className="w-full h-10 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-white">
                    <option>Pediatría</option>
                    <option>Neurología</option>
                    <option>Geriatría</option>
                    <option>Rehabilitación</option>
                    <option>Salud Mental</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3 justify-end">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
                Cancelar
              </button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
