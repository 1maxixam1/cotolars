export default function LogoCotolar({ className = "w-64 h-auto" }: { className?: string }) {
  // Path meticulosamente trazado para coincidir EXACTAMENTE con la silueta proporcionada por el usuario
  const laRiojaSilhouette = "M 10 28 L 15 23 L 18 25 L 25 10 L 35 23 L 50 25 L 55 22 L 60 24 L 65 30 L 68 30 L 85 45 L 95 65 L 85 85 L 85 105 L 80 108 L 70 112 L 62 108 L 60 102 L 58 90 L 45 75 L 35 60 L 28 60 L 28 50 L 26 50 L 26 44 L 22 38 L 14 32 Z";

  return (
    <svg
      viewBox="0 0 550 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradiente principal vibrante para el mapa */}
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1abc9c" />   {/* Esmeralda / Turquesa */}
          <stop offset="50%" stopColor="#2471a3" />  {/* Azul claro */}
          <stop offset="100%" stopColor="#0f3460" /> {/* Azul profundo */}
        </linearGradient>

        {/* Gradiente para el texto */}
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f3460" />
          <stop offset="100%" stopColor="#1a5276" />
        </linearGradient>

        {/* Sombra suave para dar efecto flotante (glassmorphism) */}
        <filter id="dropShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#0f3460" floodOpacity="0.25" />
        </filter>
        
        {/* Filtro de resplandor sutil para los nodos */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 
        ========================================
        ISOTIPO: Silueta EXACta de La Rioja
        ========================================
      */}
      <g transform="translate(10, 10) scale(1.2)">
        
        {/* Capa 1: Sombra/Borde desfasado (Tech feel) */}
        <path
          d={laRiojaSilhouette}
          fill="none"
          stroke="#1abc9c"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.5"
          transform="translate(4, 4)"
        />

        {/* Capa 2: Silueta principal con gradiente y sombra */}
        <path
          d={laRiojaSilhouette}
          fill="url(#mapGradient)"
          filter="url(#dropShadow)"
          strokeLinejoin="round"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
        />

        {/* Capa 3: Nodos de conexión (Representa red de profesionales/salud) */}
        <g opacity="0.9">
          {/* Líneas de conexión internas */}
          <path d="M 35 35 L 65 50 L 75 75 L 55 90 L 35 35" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
          <path d="M 65 50 L 55 90" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.3" />
          
          {/* Puntos / Nodos */}
          <circle cx="35" cy="35" r="2.5" fill="#ffffff" filter="url(#glow)" />
          <circle cx="65" cy="50" r="3.5" fill="#ffffff" filter="url(#glow)" />
          <circle cx="75" cy="75" r="2" fill="#ffffff" />
          <circle cx="55" cy="90" r="3" fill="#ffffff" filter="url(#glow)" />
          
          {/* Anillos decorativos en el nodo principal (Capital) */}
          <circle cx="65" cy="50" r="7" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.6" />
        </g>
      </g>

      {/* 
        ========================================
        LOGOTIPO: Tipografía moderna COTOLAR
        ========================================
      */}
      <g transform="translate(150, 95)">
        {/* Texto principal COTOLAR */}
        <text 
          x="0" 
          y="0" 
          fontFamily="Arial, sans-serif" 
          fontWeight="900" 
          fontSize="68" 
          fill="url(#textGradient)" 
          letterSpacing="-1.5"
        >
          COTOLAR
        </text>

        {/* Subtítulo / Tagline */}
        <text 
          x="4" 
          y="30" 
          fontFamily="Arial, sans-serif" 
          fontWeight="700" 
          fontSize="14" 
          fill="#1abc9c" 
          letterSpacing="5"
        >
          TERAPIA OCUPACIONAL
        </text>
        
        {/* Línea decorativa inferior */}
        <rect x="4" y="42" width="40" height="3" rx="1.5" fill="#2471a3" />
      </g>
    </svg>
  );
}
