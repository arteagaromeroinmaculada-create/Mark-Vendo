/**
 * Segmentos de cliente. Cada uno genera su bloque en la home y su página propia (/<slug>/).
 * Para añadir un nicho nuevo (p. ej. festivales), añade un objeto a este array.
 */
export type ChatMsg =
  | { from: 'client' | 'mark'; text: string }
  | { from: 'client' | 'mark'; media: 'video' | 'photos' | 'poster' | 'preview' | 'doc'; caption?: string; label?: string };

export interface Segment {
  slug: string;
  formValue: string; // valor que se preselecciona en el formulario
  short: string;
  kicker: string;
  quote: string;
  examples: string[];
  cta: string;
  seo: { title: string; description: string; h1: string; lead: string };
  pains: string[];
  campaign: { title: string; text: string }[];
  chat: ChatMsg[];
  faq: { q: string; a: string }[];
}

export const SEGMENTS: Segment[] = [
  {
    slug: 'salas-y-teatros',
    formValue: 'sala',
    short: 'Salas y teatros',
    kicker: 'Para salas de conciertos, teatros, salas de monólogos y espacios culturales',
    quote: 'Tú tienes la programación. Yo me ocupo de que llegue al público.',
    examples: [
      'Campañas para cada espectáculo',
      'Promoción de cartelera',
      'Reels de actuaciones',
      'Anuncios de próximos eventos',
      'Recordatorios de últimas entradas',
      'Contenido de temporada',
    ],
    cta: 'Mark para mi sala',
    seo: {
      title: 'Marketing y redes sociales para salas de conciertos y teatros | Mark Vendo',
      description:
        'Mark convierte los vídeos, fotos y carteles de tu programación en campañas para redes sociales. Tu sala solo tiene que mandárselo por WhatsApp.',
      h1: 'Marketing para salas y teatros que solo te pide un WhatsApp',
      lead:
        'Cada semana entran carteles, fotos y vídeos de artistas, y cada espectáculo necesita su propia campaña. Mándamelo todo por WhatsApp y yo preparo el contenido de toda tu programación para redes sociales.',
    },
    pains: [
      'Tienes varios espectáculos al mes y cada uno necesita su propia promoción.',
      'El material llega de cada artista por un sitio distinto y en formatos distintos.',
      'No tienes community manager, o lo tienes, pero no le da la vida.',
      'Las entradas de última hora se venden si alguien lo recuerda a tiempo.',
    ],
    campaign: [
      { title: 'Anuncio', text: 'Cartel adaptado y primer reel en cuanto confirmas la fecha.' },
      { title: 'Presentación del artista', text: 'Quién viene, qué hace y por qué merece la pena.' },
      { title: 'Recordatorio', text: 'Stories y publicaciones en la semana del espectáculo.' },
      { title: 'Cuenta atrás', text: '«Mañana», «Hoy», «Abrimos puertas a las 20:00».' },
      { title: 'Últimas entradas', text: 'El empujón final con el enlace de venta a mano.' },
      { title: 'Después', text: 'Lo mejor de la noche para la siguiente fecha de la cartelera.' },
    ],
    chat: [
      { from: 'client', text: 'Mark, te paso la programación de diciembre 👇' },
      { from: 'client', media: 'doc', label: 'programacion_diciembre.pdf' },
      { from: 'mark', text: 'Recibido. Veo 9 espectáculos. Te monto una campaña para cada uno y un calendario del mes. ¿Me mandas los vídeos que tengas de los artistas?' },
      { from: 'client', media: 'video', label: 'Vídeo · 1:12' },
      { from: 'mark', text: 'Perfecto. Esta semana tienes 3 propuestas para revisar. Te aviso cuando estén.' },
    ],
    faq: [
      { q: '¿Puede Mark llevar toda la cartelera de mi sala?', a: 'Sí, esa es la idea: le mandas la programación y el material de cada artista, y Mark prepara una campaña por espectáculo y un calendario del mes para que lo revises.' },
      { q: '¿Y si los artistas me mandan el material tarde?', a: 'Mark te avisa de lo que falta para cada fecha y empieza con lo que haya: el cartel y los datos ya dan para el anuncio.' },
    ],
  },
  {
    slug: 'promotores-y-eventos',
    formValue: 'promotor',
    short: 'Promotores y organizadores',
    kicker: 'Para promotores musicales, productoras, festivales y empresas de eventos',
    quote: 'Tú organizas los eventos. Yo organizo su contenido.',
    examples: [
      'Campañas de lanzamiento',
      'Presentación de artistas',
      'Programación de eventos',
      'Cuenta atrás',
      'Contenido de patrocinadores',
      'Publicaciones durante y después del evento',
    ],
    cta: 'Mark para mis eventos',
    seo: {
      title: 'Marketing y contenido para eventos, promotores y productoras | Mark Vendo',
      description:
        'Automatiza el contenido de tus eventos: lanzamientos, artistas, cuentas atrás y patrocinadores. Mándale el material a Mark por WhatsApp y él prepara cada campaña.',
      h1: 'Contenido para todos tus eventos, sin perseguir a nadie',
      lead:
        'Llevas varios eventos a la vez, cada uno con sus fechas de lanzamiento, sus artistas y sus patrocinadores. Mándame el material por WhatsApp y yo mantengo cada campaña en marcha y con tu imagen de marca.',
    },
    pains: [
      'Gestionas varios eventos a la vez y cada uno va a su ritmo.',
      'El material llega de artistas, agencias y proveedores, cada uno a su manera.',
      'Hay fechas de lanzamiento y de cambio de precio que no se pueden pasar.',
      'Los patrocinadores esperan su visibilidad y hay que cumplirla.',
    ],
    campaign: [
      { title: 'Lanzamiento', text: 'Anuncio del evento y apertura de venta, coordinados.' },
      { title: 'Artistas', text: 'Una pieza por artista confirmado, en el orden que decidas.' },
      { title: 'Patrocinadores', text: 'Menciones y contenido de marca integrados en la campaña.' },
      { title: 'Cuenta atrás', text: 'Fechas clave, cambios de precio y últimas entradas.' },
      { title: 'Durante', text: 'Lo que pasa en directo, con el material que te llegue.' },
      { title: 'Después', text: 'Resumen y aftermovie corto para la próxima edición.' },
    ],
    chat: [
      { from: 'client', text: 'Mark, confirmado el cartel del festival. Salen 12 artistas.' },
      { from: 'client', media: 'poster', label: 'Cartel' },
      { from: 'mark', text: '¡Qué cartelazo! Propongo anunciar 2 artistas por semana hasta la fecha. ¿Cuándo sube el precio de las entradas?' },
      { from: 'client', text: 'El 1 de marzo.' },
      { from: 'mark', text: 'Apuntado. Te preparo un aviso la semana antes del cambio de precio.' },
    ],
    faq: [
      { q: '¿Mark puede llevar varios eventos a la vez?', a: 'Sí. Mark identifica a qué evento pertenece cada material y mantiene una ficha y una campaña para cada uno.' },
      { q: '¿Respeta la imagen de cada evento o marca?', a: 'Mark trabaja a partir de tus carteles, tipografías y colores para que todo el contenido mantenga la misma imagen.' },
    ],
  },
  {
    slug: 'artistas-y-monologuistas',
    formValue: 'artista',
    short: 'Artistas y monologuistas',
    kicker: 'Para monologuistas, cómicos, músicos, DJs, actores y compañías',
    quote: 'Tú haces reír, cantar o emocionar. Yo hago que te descubran.',
    examples: [
      'Reels de actuaciones',
      'Vídeos cortos a partir de grabaciones largas',
      'Promoción de próximas fechas',
      'Contenido de marca personal',
      'Publicaciones de giras',
      'Adaptación a varias plataformas',
    ],
    cta: 'Mark para mi carrera',
    seo: {
      title: 'Reels y redes sociales para músicos, cómicos y monologuistas | Mark Vendo',
      description:
        'Mándale a Mark la grabación de tu actuación por WhatsApp y te devuelve reels, vídeos cortos y publicaciones para promocionar tus próximas fechas.',
      h1: 'Tus actuaciones, convertidas en reels. Sin que tengas que editar',
      lead:
        'Tienes horas de actuaciones, ensayos y backstage en el móvil, y ningún día para editarlas. Mándamelas por WhatsApp y yo saco los reels, los textos y la promoción de tus próximas fechas.',
    },
    pains: [
      'Tienes vídeos de tus actuaciones, pero no sabes (o no quieres) editar reels.',
      'Publicas a rachas: mucho antes de un bolo, nada el resto del mes.',
      'Necesitas que te conozca gente nueva, no solo tus seguidores de siempre.',
      'Tu tiempo es para escribir, ensayar y actuar.',
    ],
    campaign: [
      { title: 'Reels', text: 'Los mejores momentos de tu actuación en vertical y con subtítulos.' },
      { title: 'Próximas fechas', text: 'Cada bolo con su anuncio y su recordatorio.' },
      { title: 'Gira', text: 'Una pieza por ciudad y el resumen de la gira.' },
      { title: 'Marca personal', text: 'Backstage, procesos y momentos que te hacen reconocible.' },
      { title: 'Grabaciones largas', text: 'Un monólogo o un concierto entero da para semanas.' },
      { title: 'Multiplataforma', text: 'El mismo vídeo adaptado a Instagram, TikTok y Facebook.' },
    ],
    chat: [
      { from: 'client', text: 'Mark, te mando el monólogo de anoche entero. Son 25 minutos 😅' },
      { from: 'client', media: 'video', label: 'Vídeo · 25:04' },
      { from: 'mark', text: 'Me encanta. Saco 5 clips cortos con subtítulos. El de la cola del súper tiene pinta de reel. ¿Tu próxima fecha sigue siendo el sábado 22 en Valencia?' },
      { from: 'client', text: 'Sí, y quedan pocas entradas.' },
      { from: 'mark', text: 'Pues el primer reel lleva el «últimas entradas». Te lo enseño en un rato.' },
    ],
    faq: [
      { q: '¿Necesito vídeos de buena calidad?', a: 'Basta con vídeos grabados con el móvil, con buena luz y buen sonido. Mark se encarga de recortar, subtitular y elegir los mejores momentos.' },
      { q: '¿Mark sirve si no tengo muchos seguidores?', a: 'Sí. Mark te ayuda a publicar con constancia y a promocionar cada fecha. No promete seguidores ni resultados concretos.' },
    ],
  },
];
