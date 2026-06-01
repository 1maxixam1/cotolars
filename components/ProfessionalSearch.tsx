"use client";

import { useState, useMemo } from "react";
import { mockProfesionales } from "@/lib/mockData";
import { Search, User, CheckCircle, XCircle, Filter } from "lucide-react";

const especialidades = [
  "Todas",
  "Neurorehabilitación",
  "Salud Mental",
  "Pediatría y Desarrollo",
  "Geriatría y Gerontología",
];

export default function ProfessionalSearch() {
  const [query, setQuery] = useState("");
  const [especialidad, setEspecialidad] = useState("Todas");

  const resultados = useMemo(() => {
    return mockProfesionales.filter((p) => {
      const matchQuery =
        p.nombre.toLowerCase().includes(query.toLowerCase()) ||
        p.matricula.toLowerCase().includes(query.toLowerCase()) ||
        p.localidad.toLowerCase().includes(query.toLowerCase());
      const matchEsp =
        especialidad === "Todas" || p.especialidad === especialidad;
      return matchQuery && matchEsp;
    });
  }, [query, especialidad]);

  return (
    <section className="bg-white py-20" id="buscador">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-10 text-center">
          <p className="text-[#1abc9c] text-sm font-semibold uppercase tracking-widest mb-2">
            Matrícula Profesional
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3460]">
            Buscador de Profesionales
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Verificá la matrícula habilitante de un profesional de Terapia Ocupacional
            en la provincia de La Rioja.
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Input de texto */}
            <div className="sm:col-span-2 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, matrícula o localidad..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2471a3] focus:border-transparent bg-white text-sm transition-all"
              />
            </div>

            {/* Filtro por especialidad */}
            <div className="relative">
              <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2471a3] focus:border-transparent bg-white text-sm appearance-none cursor-pointer transition-all"
              >
                {especialidades.map((esp) => (
                  <option key={esp} value={esp}>
                    {esp}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contador de resultados */}
          <p className="text-xs text-gray-400 mt-3">
            {resultados.length === mockProfesionales.length
              ? `Mostrando todos los ${mockProfesionales.length} profesionales registrados.`
              : `${resultados.length} resultado${resultados.length !== 1 ? "s" : ""} encontrado${resultados.length !== 1 ? "s" : ""}.`}
          </p>
        </div>

        {/* Tabla de resultados */}
        {resultados.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f3460] text-white">
                  <th className="px-6 py-4 text-left font-semibold text-xs uppercase tracking-wider">
                    Profesional
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-xs uppercase tracking-wider">
                    Matrícula
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">
                    Especialidad
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-xs uppercase tracking-wider hidden md:table-cell">
                    Localidad
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {resultados.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`hover:bg-blue-50/50 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#0f3460]/10 flex items-center justify-center shrink-0">
                          <User className="w-4 h-4 text-[#0f3460]" />
                        </div>
                        <span className="font-semibold text-gray-800">{p.nombre}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-[#2471a3] font-semibold bg-blue-50 px-2.5 py-1 rounded-lg text-xs">
                        {p.matricula}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 hidden sm:table-cell">
                      {p.especialidad}
                    </td>
                    <td className="px-6 py-4 text-gray-500 hidden md:table-cell">
                      {p.localidad}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {p.estado === "Activo" ? (
                          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Activo
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            <XCircle className="w-3.5 h-3.5" />
                            Inactivo
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Estado vacío */
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
            <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No se encontraron profesionales</p>
            <p className="text-gray-400 text-sm mt-1">
              Intentá con otro nombre, número de matrícula o localidad.
            </p>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          * Los datos mostrados son de carácter informativo. Para consultas oficiales, comunicarse con la sede del COTOLAR.
        </p>
      </div>
    </section>
  );
}
