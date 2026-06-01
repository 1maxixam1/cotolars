// ============================================================
// Mock Data — COTOLAR (Colegio de Terapia Ocupacional de La Rioja)
// Todos los datos son ficticios y de uso exclusivo para maqueta.
// ============================================================

export interface Noticia {
  id: number;
  titulo: string;
  categoria: string;
  fecha: string;
  extracto: string;
  imagen: string; // color de fondo placeholder
}

export interface Profesional {
  id: number;
  nombre: string;
  matricula: string;
  especialidad: string;
  estado: "Activo" | "Inactivo";
  localidad: string;
}

// ----------------------------------------------------------
// Noticias / Novedades
// ----------------------------------------------------------
export const mockNoticias: Noticia[] = [
  {
    id: 1,
    titulo: "Jornada de Actualización en Neurorehabilitación 2025",
    categoria: "Capacitación",
    fecha: "28 de mayo, 2025",
    extracto:
      "El COTOLAR invita a todos los profesionales matriculados a participar de la jornada anual de actualización en técnicas de neurorehabilitación. Cupos limitados.",
    imagen: "#1a5276",
  },
  {
    id: 2,
    titulo: "Nuevo proceso de matriculación: requisitos actualizados",
    categoria: "Institucional",
    fecha: "15 de mayo, 2025",
    extracto:
      "Se informa que a partir del 1° de junio entran en vigencia los nuevos requisitos para la matriculación inicial y la renovación anual de matrícula profesional.",
    imagen: "#0f3460",
  },
  {
    id: 3,
    titulo: "Convenio con la Universidad Nacional de La Rioja",
    categoria: "Convenios",
    fecha: "3 de mayo, 2025",
    extracto:
      "El Colegio firmó un convenio de colaboración académica con la UNLaR para promover la formación continua y la inserción laboral de los nuevos egresados de Terapia Ocupacional.",
    imagen: "#2471a3",
  },
];

// ----------------------------------------------------------
// Profesionales Matriculados (mock)
// ----------------------------------------------------------
export const mockProfesionales: Profesional[] = [
  {
    id: 1,
    nombre: "María Gómez",
    matricula: "MP 1234",
    especialidad: "Neurorehabilitación",
    estado: "Activo",
    localidad: "La Rioja Capital",
  },
  {
    id: 2,
    nombre: "Carlos Herrera",
    matricula: "MP 0892",
    especialidad: "Salud Mental",
    estado: "Activo",
    localidad: "Chilecito",
  },
  {
    id: 3,
    nombre: "Laura Rodríguez",
    matricula: "MP 1567",
    especialidad: "Pediatría y Desarrollo",
    estado: "Activo",
    localidad: "La Rioja Capital",
  },
  {
    id: 4,
    nombre: "Andrés Villalba",
    matricula: "MP 0745",
    especialidad: "Geriatría y Gerontología",
    estado: "Inactivo",
    localidad: "Aimogasta",
  },
];

// ----------------------------------------------------------
// Autoridades (para página Institucional)
// ----------------------------------------------------------
export interface Autoridad {
  cargo: string;
  nombre: string;
}

export const mockAutoridades: Autoridad[] = [
  { cargo: "Presidente", nombre: "Lic. Valeria Moreno" },
  { cargo: "Vicepresidente", nombre: "Lic. Rodrigo Páez" },
  { cargo: "Secretaria", nombre: "Lic. Florencia Acuña" },
  { cargo: "Tesorero", nombre: "Lic. Matías Quiroga" },
  { cargo: "Vocal Titular", nombre: "Lic. Sandra Ruiz" },
];
