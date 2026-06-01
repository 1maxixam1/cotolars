import type { Metadata } from "next";
import { mockAutoridades } from "@/lib/mockData";
import { Target, Eye, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Institucional",
  description:
    "Conocé la misión, visión y autoridades del Colegio de Terapia Ocupacional de La Rioja.",
};

const requisitos = [
  "Título habilitante de Licenciado/a en Terapia Ocupacional (original y copia).",
  "DNI vigente (original y copia anverso/reverso).",
  "2 (dos) fotografías 4x4 de frente, fondo blanco.",
  "Certificado de domicilio actualizado (expedido hace no más de 90 días).",
  "Constancia de CUIL / CUIT.",
  "Pago de la matrícula inicial (aranceles según resolución vigente).",
  "Formulario de inscripción completado (disponible en sede).",
];

export default function InstitucionalPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Encabezado de página */}
      <div className="bg-[#0f3460] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1abc9c] text-sm font-semibold uppercase tracking-widest mb-2">
            Quiénes somos
          </p>
          <h1 className="text-4xl font-extrabold text-white">Información Institucional</h1>
          <p className="text-blue-200 mt-2">
            Conocé el rol, los valores y las autoridades del COTOLAR.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 bg-[#2471a3]/10 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#2471a3]" />
            </div>
            <h2 className="text-xl font-bold text-[#0f3460] mb-3">Misión</h2>
            <p className="text-gray-600 leading-relaxed">
              Regular el ejercicio profesional de la Terapia Ocupacional en la provincia de La Rioja,
              garantizando la formación continua, la ética profesional y la protección de los
              ciudadanos que acceden a este servicio de salud.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 bg-[#1abc9c]/10 rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-[#1abc9c]" />
            </div>
            <h2 className="text-xl font-bold text-[#0f3460] mb-3">Visión</h2>
            <p className="text-gray-600 leading-relaxed">
              Ser una institución referente en la región, reconocida por su transparencia,
              su compromiso con el desarrollo profesional y su contribución a la salud,
              la inclusión y la calidad de vida de toda la comunidad riojana.
            </p>
          </div>
        </div>

        {/* Requisitos de Matriculación */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#0f3460]/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-[#0f3460]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0f3460]">Requisitos de Matriculación</h2>
              <p className="text-gray-500 text-sm">Documentación necesaria para la inscripción inicial</p>
            </div>
          </div>
          <ul className="space-y-3">
            {requisitos.map((req, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1abc9c]/10 text-[#1abc9c] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-[#2471a3] text-sm font-medium">
              📍 La documentación debe presentarse de forma presencial en la sede del COTOLAR, de lunes a viernes de 9:00 a 14:00 hs.
            </p>
          </div>
        </div>

        {/* Autoridades */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#2471a3]/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-[#2471a3]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0f3460]">Comisión Directiva</h2>
              <p className="text-gray-500 text-sm">Período 2024–2026</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockAutoridades.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:border-blue-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#0f3460]/10 flex items-center justify-center shrink-0 font-bold text-[#0f3460] text-lg">
                  {a.nombre.split(" ").slice(-1)[0][0]}
                </div>
                <div>
                  <p className="text-xs text-[#2471a3] font-semibold uppercase tracking-wide">
                    {a.cargo}
                  </p>
                  <p className="font-bold text-gray-800 text-sm mt-0.5">{a.nombre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
