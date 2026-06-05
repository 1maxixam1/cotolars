import { google } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { z } from 'zod';

// Permite tiempos de ejecución prolongados para LLMs en Edge o Node
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash'),
    messages,
    maxSteps: 5, // Permite múltiples pasos para razonamiento y herramientas
    system: `
Eres el asistente virtual oficial del Colegio de Terapia Ocupacional de La Rioja (COTOLAR).
Tu objetivo es responder de forma profesional, clara, empática y con un enfoque en la salud pública y normativas locales de La Rioja.
Mantén siempre un tono amable, respetuoso y formal.
Si te preguntan algo que no sabes, utiliza tus herramientas. Si ninguna herramienta sirve, diles cordialmente que se comuniquen con la administración del colegio al mail info@cotolar.org.ar.
    `.trim(),
    tools: {
      buscar_normativas_colegio: tool({
        description: 'Obtén normativas internas, trámites, requisitos SISA, aranceles de matriculación y otra información oficial del Colegio.',
        parameters: z.object({
          consulta: z.string().describe('El tema específico que se busca consultar sobre el colegio, ej: "SISA", "matriculación", "aranceles"'),
        }),
        execute: async ({ consulta }) => {
          // RAG simulado localmente
          const query = consulta.toLowerCase();
          
          if (query.includes('sisa')) {
            return "Requisitos SISA: Todos los matriculados deben estar inscriptos en el Sistema Integrado de Información Sanitaria Argentino (SISA). El trámite requiere la presentación del DNI, título legalizado y constancia de CUIL.";
          }
          if (query.includes('matriculación') || query.includes('matricular') || query.includes('requisitos')) {
            return "Requisitos de Matriculación: 1. Título original con sellos ministeriales. 2. Fotocopia de DNI. 3. Certificado de domicilio en La Rioja. 4. Certificado de buena conducta. 5. Pago de matrícula anual.";
          }
          if (query.includes('arancel') || query.includes('cuota') || query.includes('pago')) {
            return "Aranceles: La cuota mensual vigente está fijada por la asamblea ordinaria. Actualmente se ofrece descuento por débito automático. Para montos exactos vigentes, el matriculado debe contactar a tesoreria@cotolar.org.ar.";
          }
          if (query.includes('nic') || query.includes('dominio')) {
            return "El colegio gestiona sus dominios web oficiales a través de NIC Argentina para asegurar su presencia digital y validación institucional.";
          }
          
          return "No encontré normativas específicas para esa consulta en la base de datos interna. Por favor, solicita contactar a la secretaría del colegio.";
        },
      }),

      buscar_en_internet: tool({
        description: 'Permite buscar información de actualidad o eventos recientes en la web (Noticias, eventos nacionales de Terapia Ocupacional, etc).',
        parameters: z.object({
          busqueda: z.string().describe('Término exacto a buscar en internet'),
        }),
        execute: async ({ busqueda }) => {
          // Mock de búsqueda de internet asíncrona gratuita
          // En un futuro se puede reemplazar con la API de DuckDuckGo o similares
          await new Promise((resolve) => setTimeout(resolve, 800)); // Simular latencia de red
          
          return `Resultados de búsqueda web simulados para "${busqueda}":
- Recientemente se ha debatido sobre nuevas leyes de cobertura en salud mental y terapias de neurorehabilitación a nivel nacional.
- Se realizarán pronto jornadas regionales de actualización en Terapia Ocupacional.
Nota para la IA: Resume esta información al usuario aclarando que es una búsqueda general de internet.`;
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
