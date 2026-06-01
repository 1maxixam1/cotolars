import Link from "next/link";
import { Search, Users, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f3460]">
      {/* Fondo con patrón geométrico sutil */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradiente de profundidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460] via-[#1a5276] to-[#0d2137]" />
        {/* Orbe decorativo */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2471a3] opacity-20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#1abc9c] opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Contenido principal */}
          <div className="space-y-8">
            {/* Badge institucional */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#1abc9c] animate-pulse" />
              Órgano oficial de regulación profesional · Provincia de La Rioja
            </div>

            {/* Título principal */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Colegio de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1abc9c] to-[#48c9b0]">
                  Terapia Ocupacional
                </span>{" "}
                de La Rioja
              </h1>
            </div>

            {/* Subtítulo */}
            <p className="text-blue-200 text-lg leading-relaxed max-w-xl">
              Organismo encargado de habilitar, regular y fiscalizar el ejercicio ético y legal
              de la Terapia Ocupacional en toda la provincia de La Rioja.
              Comprometidos con la excelencia profesional y la salud de la comunidad.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/matriculados"
                className="group flex items-center justify-center gap-3 bg-[#1abc9c] hover:bg-[#17a589] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Search className="w-5 h-5" />
                Buscador de Profesionales
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/institucional"
                className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Users className="w-5 h-5" />
                Requisitos de Matriculación
              </Link>
            </div>
          </div>

          {/* Panel decorativo derecho — estadísticas */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: "Profesionales Matriculados", value: "+350", color: "bg-white/10" },
              { label: "Años de Trayectoria", value: "20+", color: "bg-[#1abc9c]/20" },
              { label: "Localidades con Cobertura", value: "18", color: "bg-[#2471a3]/40" },
              { label: "Convenios Vigentes", value: "12", color: "bg-white/10" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`${stat.color} border border-white/15 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between hover:border-white/30 transition-colors`}
              >
                <p className="text-blue-200 text-sm font-medium leading-tight">{stat.label}</p>
                <p className="text-white text-4xl font-extrabold mt-4">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
