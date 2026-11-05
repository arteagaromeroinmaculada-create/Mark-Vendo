import { SITE } from '../config/site';
import { SEGMENTS } from '../content/segments';
import { FEATURES, STATUS_LABEL } from '../content/features';
import { FAQ } from '../content/faq';

export const GET = () => {
  const txt = `# Mark Vendo

> Mark Vendo es un asistente de marketing con inteligencia artificial que trabaja por WhatsApp. Está pensado para salas de espectáculos, promotores y organizadores de eventos, y artistas (músicos, monologuistas, cómicos, DJs, actores) en España. El cliente le envía por WhatsApp vídeos en bruto, fotos, carteles y los datos de sus eventos, y Mark prepara textos, reels, publicaciones y campañas para redes sociales. Nada se publica sin la aprobación del cliente.

Estado: acceso anticipado (piloto con un grupo reducido). No hay precios públicos.

## Cómo funciona
1. El cliente graba vídeos y hace fotos, y se los manda a Mark por WhatsApp junto con los detalles del evento.
2. Mark prepara el contenido: edición de vídeo, reels, textos y adaptaciones por red social. Si falta información, la pregunta.
3. Mark envía una vista previa por WhatsApp y el cliente la aprueba.
4. Mark publica o programa en los canales compatibles y prepara los siguientes recordatorios.

## Funcionalidades y estado
${FEATURES.map((f) => `- ${f.title}: ${STATUS_LABEL[f.status]}. ${f.text}`).join('\n')}

## Para quién
${SEGMENTS.map((s) => `- [${s.short}](${SITE.url}/${s.slug}/): ${s.seo.description}`).join('\n')}

## Preguntas frecuentes
${FAQ.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Contacto
- Web: ${SITE.url}/
- Formulario: ${SITE.url}/#contacto
- Email: ${SITE.email}
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
