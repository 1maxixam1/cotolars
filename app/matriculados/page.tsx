import type { Metadata } from "next";
import ProfessionalSearch from "@/components/ProfessionalSearch";

export const metadata: Metadata = {
  title: "Buscador de Profesionales Matriculados",
  description:
    "Verificá la matrícula habilitante de cualquier profesional de Terapia Ocupacional en La Rioja.",
};

export default function MatriculadosPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Encabezado de página */}
      <div className="bg-[#0f3460] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1abc9c] text-sm font-semibold uppercase tracking-widest mb-2">
            Registro de Matrícula
          </p>
          <h1 className="text-4xl font-extrabold text-white">Profesionales Matriculados</h1>
          <p className="text-blue-200 mt-2">
            Consultá el padrón oficial de Licenciados en Terapia Ocupacional habilitados en La Rioja.
          </p>
        </div>
      </div>

      <ProfessionalSearch />
    </div>
  );
}
