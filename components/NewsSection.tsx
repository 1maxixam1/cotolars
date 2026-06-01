import Link from "next/link";
import { mockNoticias } from "@/lib/mockData";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de sección */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#1abc9c] text-sm font-semibold uppercase tracking-widest mb-2">
              Novedades
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3460] leading-tight">
              Noticias e Información Institucional
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              Mantente informado sobre capacitaciones, normativas y novedades del colegio.
            </p>
          </div>
          <Link
            href="#"
            className="group inline-flex items-center gap-2 text-[#2471a3] font-semibold text-sm hover:text-[#0f3460] transition-colors shrink-0"
          >
            Ver todas las noticias
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grilla de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockNoticias.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Imagen placeholder con color institucional */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: noticia.imagen }}
              >
                {/* Patrón decorativo */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <span className="relative z-10 text-white/60 font-bold text-4xl tracking-widest">
                  COTOLAR
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#2471a3] text-xs font-semibold px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {noticia.categoria}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-gray-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    {noticia.fecha}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-[#0f3460] font-bold text-base leading-snug mb-2 group-hover:text-[#2471a3] transition-colors">
                  {noticia.titulo}
                </h3>

                {/* Extracto */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {noticia.extracto}
                </p>

                {/* Leer más */}
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-[#2471a3] text-sm font-semibold hover:text-[#0f3460] transition-colors group/link"
                >
                  Leer más
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
