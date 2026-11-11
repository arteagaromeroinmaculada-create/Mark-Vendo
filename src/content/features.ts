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
  { title: 'Entiendo audios, fotos, vídeos y carteles', text: 'Me mandas el material tal cual, incluso notas de voz. Si me falta un dato, te lo pregunto.', status: 'piloto' },
  { title: 'Plan de contenido para cada función', text: 'Te propongo qué publicar y cuándo: anuncio, recordatorios, cuenta atrás y últimas entradas.', status: 'piloto' },
  { title: 'Textos y copies con tu tono', text: 'Publicaciones, stories y llamadas a la acción escritas como hablas tú.', status: 'piloto' },
  { title: 'Reels y vídeos cortos editados', text: 'Quito silencios, añado subtítulos palabra a palabra y rótulos, y saco lo mejor de tus grabaciones.', status: 'piloto' },
  { title: 'Carruseles y publicaciones con tus fotos y carteles', text: 'Adapto tu material a cada formato sin perder tu imagen.', status: 'piloto' },
  { title: 'Tu estilo de vídeo', text: 'Copio el estilo de un vídeo que te guste o eliges uno de mi muestrario.', status: 'piloto' },
  { title: 'Programación y publicación en tus redes', text: 'Conectas tus redes con un enlace y publico en la fecha acordada, siempre con tu OK.', status: 'piloto' },
  { title: 'Tu calendario para tenerlo todo controlado', text: 'Un enlace personal donde ves lo programado, apruebas, pides cambios, quitas piezas o cambias fechas.', status: 'piloto' },
  { title: 'Varios proyectos desde el mismo WhatsApp', text: 'Tu compañía, tu show y tu marca personal, cada uno con su contenido.', status: 'piloto' },
  { title: 'Análisis de resultados', text: 'Te contaré qué ha funcionado y propondré mejoras para la siguiente.', status: 'futuro' },
];

export const FEATURES_NOTE =
  'Tú solo hablas conmigo por WhatsApp. El calendario es para cuando quieras verlo todo junto: no tienes que entrar si no quieres.';
