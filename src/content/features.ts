/**
 * Estado de cada funcionalidad. CAMBIAR AQUÍ cuando algo pase a estar disponible.
 *  - 'piloto'      → Disponible en el piloto (acceso anticipado)
 *  - 'desarrollo'  → En desarrollo
 *  - 'futuro'      → Más adelante
 * Propuesta inicial pendiente de confirmar por el equipo de Mark Vendo.
 */
export type Status = 'piloto' | 'desarrollo' | 'futuro';

export const STATUS_LABEL: Record<Status, string> = {
  piloto: 'En el piloto',
  desarrollo: 'En desarrollo',
  futuro: 'Más adelante',
};

export const FEATURES: { title: string; text: string; status: Status }[] = [
  { title: 'Ideas de contenido', text: 'Te propongo qué publicar para cada espectáculo y cuándo.', status: 'piloto' },
  { title: 'Textos y copies', text: 'Escribo publicaciones, stories y llamadas a la acción con tu tono.', status: 'piloto' },
  { title: 'Edición de vídeos cortos', text: 'Corto, ordeno, subtitulo y saco lo mejor de tus grabaciones.', status: 'piloto' },
  { title: 'Reels', text: 'Monto reels verticales a partir de tus vídeos en bruto.', status: 'piloto' },
  { title: 'Diseño y adaptación de creatividades', text: 'Adapto carteles y fotos a cada formato sin perder tu imagen.', status: 'piloto' },
  { title: 'Calendario editorial', text: 'Ordeno cada campaña: anuncio, artista, recordatorio, cuenta atrás y últimas entradas.', status: 'piloto' },
  { title: 'Adaptación multicanal', text: 'Preparo cada pieza en el formato de Instagram, TikTok o Facebook.', status: 'piloto' },
  { title: 'Programación y publicación', text: 'Publico y programo en tus redes conectadas, siempre con tu OK.', status: 'desarrollo' },
  { title: 'Análisis de resultados', text: 'Te cuento qué ha funcionado y propongo mejoras para la siguiente.', status: 'futuro' },
];

export const FEATURES_NOTE =
  'Mientras la publicación directa no esté disponible para tu red, te entrego cada pieza lista para publicar en un par de toques.';
