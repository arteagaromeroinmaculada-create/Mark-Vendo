/**
 * Guías en formato pregunta-respuesta. Cada una genera /guias/<slug>/ con datos estructurados FAQPage.
 * Las preguntas están escritas tal y como alguien se las haría a un buscador o a un asistente de IA.
 * Regla: consejos generales, sin cifras, clientes ni resultados inventados.
 * Para añadir una guía nueva, añade un objeto al array.
 */
export interface Guia {
  slug: string;
  title: string; // <title> y h1
  description: string; // meta description
  short: string; // nombre corto para listados
  intro: string;
  updated: string; // AAAA-MM-DD
  qa: { q: string; a: string[] }[];
}

export const GUIAS: Guia[] = [
  {
    slug: 'como-promocionar-una-obra-de-teatro-en-redes-sociales',
    short: 'Promocionar una obra de teatro en redes',
    title: '¿Cómo promociono una obra de teatro en redes sociales? Preguntas y respuestas',
    description:
      'Guía práctica para compañías y grupos de teatro: qué publicar antes del estreno, cuándo empezar, qué hacer con los vídeos de ensayos y cómo recordar las funciones sin agobiar.',
    updated: '2026-11-05',
    intro:
      'Si tienes una compañía o un grupo de teatro, seguro que te has hecho alguna de estas preguntas. Aquí van las respuestas, sin tecnicismos.',
    qa: [
      {
        q: '¿Cómo promociono una obra de teatro en redes sociales si no tengo presupuesto?',
        a: [
          'Con constancia y con el material que ya tienes. Los ensayos, el montaje de la escenografía, las pruebas de vestuario y los nervios del estreno son contenido. No hace falta producir nada especial: basta con grabar con el móvil y contar lo que pasa.',
          'Lo que más ayuda es tener un plan sencillo para cada función: un anuncio, una presentación del elenco, recordatorios la semana de la función y un aviso de últimas entradas.',
        ],
      },
      {
        q: '¿Con cuánta antelación tengo que empezar a promocionar una función?',
        a: [
          'Lo habitual es anunciar la función en cuanto la fecha y el enlace de entradas están confirmados, y subir la intensidad en las dos últimas semanas. Cada público es distinto, así que lo importante es no dejarlo todo para los últimos días.',
        ],
      },
      {
        q: '¿Qué publico antes del estreno de una obra?',
        a: [
          'Algunas ideas que funcionan para casi cualquier compañía: el cartel y la fecha, quién está detrás de la obra, un fragmento corto de un ensayo, el backstage del montaje, una frase del texto y una cuenta atrás los días previos.',
          'La idea es que quien te vea entienda qué va a ver, por qué le puede gustar y dónde se compran las entradas.',
        ],
      },
      {
        q: '¿Qué hago con los vídeos de los ensayos y de las funciones?',
        a: [
          'Recortarlos. Un ensayo o una función entera da para muchos vídeos cortos en vertical con subtítulos: una escena, una reacción del público, un momento divertido del backstage. Muchas personas ven los vídeos sin sonido, por eso los subtítulos ayudan.',
        ],
      },
      {
        q: '¿En qué redes tiene que estar una compañía de teatro?',
        a: [
          'En las que use tu público. Para la mayoría de compañías, Instagram es la base; TikTok ayuda a llegar a gente nueva con vídeos cortos, y Facebook sigue siendo útil para el público adulto y los eventos locales. Mejor dos redes bien llevadas que cinco abandonadas.',
        ],
      },
      {
        q: '¿Cómo recuerdo las funciones sin resultar pesado?',
        a: [
          'Cambiando el mensaje en cada recordatorio. No repitas el mismo cartel: un día enseña al elenco, otro un fragmento, otro un comentario del público de una función anterior (real, con su permiso) y al final el aviso de entradas. Cada publicación tiene que aportar algo.',
        ],
      },
      {
        q: '¿Puede alguien encargarse de esto por mí si no tengo tiempo?',
        a: [
          'Sí. Puedes contar con un community manager o una agencia, o con una herramienta como Mark Vendo: le mandas por WhatsApp los vídeos, las fotos, el cartel y los datos de la función, y Mark te prepara los reels, los textos y el calendario de publicaciones. Nada se publica sin tu aprobación.',
        ],
      },
    ],
  },
  {
    slug: 'marketing-para-monologuistas',
    short: 'Marketing para monologuistas',
    title: '¿Cómo consigo más público para mis monólogos? Marketing para monologuistas y cómicos',
    description:
      'Preguntas y respuestas para monologuistas y cómicos: cómo darte a conocer, qué publicar en Instagram y TikTok, cómo aprovechar tus grabaciones y cómo promocionar cada bolo.',
    updated: '2026-11-05',
    intro:
      'El humor se cuenta mejor encima de un escenario que en redes, pero las redes son las que llevan gente al escenario. Estas son las dudas más comunes.',
    qa: [
      {
        q: '¿Cómo me doy a conocer como monologuista?',
        a: [
          'Subiendo al escenario todo lo que puedas y enseñándolo. Los clips cortos de tus actuaciones son tu mejor carta de presentación: permiten que gente que no te conoce vea en segundos si le haces gracia.',
          'Además, ayuda publicar con regularidad, anunciar cada fecha y colaborar con otros cómicos y salas.',
        ],
      },
      {
        q: '¿Qué tipo de vídeos funcionan para un cómico en Instagram y TikTok?',
        a: [
          'Fragmentos cortos de un solo chiste o una sola idea, en vertical, con subtítulos y con la risa del público. También funcionan el backstage, la preparación de un texto nuevo y los momentos de interacción con el público, siempre respetando a quien sale en el vídeo.',
        ],
      },
      {
        q: '¿Cómo saco reels de un monólogo de 20 minutos?',
        a: [
          'Busca los momentos con más risa, corta cada uno para que tenga principio y remate, ponlo en vertical y añade subtítulos. Un monólogo entero puede dar para varias semanas de publicaciones. Si no quieres editar, hay quien lo hace por ti.',
        ],
      },
      {
        q: '¿Cada cuánto tengo que publicar?',
        a: [
          'Lo que puedas mantener. Es mejor publicar de forma regular durante todo el mes que mucho antes de un bolo y nada después. Tener grabaciones guardadas te permite seguir publicando aunque no actúes esa semana.',
        ],
      },
      {
        q: '¿Cómo promociono un bolo para vender entradas?',
        a: [
          'Anuncia la fecha con el enlace de entradas en cuanto lo tengas, recuérdala varias veces con contenido distinto (un clip, la sala, a quién va dirigido) y haz un último aviso cuando queden pocas entradas. Si la sala también lo publica, mejor: colabora con ella.',
        ],
      },
      {
        q: '¿Me sirve todo esto si tengo pocos seguidores?',
        a: [
          'Sí. Todo el mundo empieza con pocos seguidores. Lo que cambia las cosas es la constancia y que tu contenido llegue a gente nueva, y para eso los vídeos cortos son la herramienta más útil. Nadie puede prometerte un número de seguidores, pero sí ayudarte a publicar mejor y con más regularidad.',
        ],
      },
      {
        q: '¿Hay alguna herramienta que me haga los reels de mis actuaciones?',
        a: [
          'Mark Vendo está pensado justo para eso: le mandas por WhatsApp la grabación de tu actuación y te devuelve clips cortos con subtítulos, textos para cada publicación y la promoción de tus próximas fechas. Tú lo revisas y das el OK. Ahora mismo está en acceso anticipado.',
        ],
      },
    ],
  },
  {
    slug: 'como-hacer-reels-de-una-actuacion-sin-saber-editar',
    short: 'Reels de una actuación sin saber editar',
    title: '¿Cómo hago reels de mi actuación sin saber editar vídeo? Preguntas y respuestas',
    description:
      'Para artistas, músicos, magos, actores y showpeople: cómo grabar tus actuaciones con el móvil, qué momentos elegir para un reel, qué duración usar y cómo convertir una grabación larga en muchos vídeos.',
    updated: '2026-11-05',
    intro:
      'Tienes el móvil lleno de vídeos de tus actuaciones y no encuentras el momento de editarlos. Estas respuestas te ayudan a empezar.',
    qa: [
      {
        q: '¿Qué necesito para grabar mis actuaciones con el móvil?',
        a: [
          'Un móvil, algo para apoyarlo de forma estable y que alguien le dé a grabar. Lo más importante es que se vea bien (buena luz, sin contraluz) y que se oiga bien. Si puedes, graba en horizontal la actuación completa y en vertical algún momento suelto.',
        ],
      },
      {
        q: '¿Qué momentos de una actuación sirven para un reel?',
        a: [
          'Los que se entienden en pocos segundos: el truco que sorprende, el estribillo que corea el público, el chiste con más risa, la escena más intensa. También la reacción del público y lo que pasa entre bambalinas.',
        ],
      },
      {
        q: '¿Cuánto tiene que durar un reel?',
        a: [
          'Lo justo para contar una cosa. En la práctica, muchos reels de actuaciones funcionan con menos de un minuto. Lo importante es que los primeros segundos enganchen y que no sobre nada.',
        ],
      },
      {
        q: '¿Hacen falta subtítulos?',
        a: [
          'Casi siempre ayudan. Mucha gente ve los vídeos sin sonido, y en monólogos, teatro o cualquier actuación con texto los subtítulos hacen que se entienda lo que pasa.',
        ],
      },
      {
        q: '¿Puedo sacar varios vídeos de una sola grabación?',
        a: [
          'Sí, y es lo más práctico. Una función o un concierto completos dan para muchos clips: cada momento destacado es un vídeo. Así tienes contenido para semanas sin grabar nada nuevo.',
        ],
      },
      {
        q: '¿Puedo usar el mismo vídeo en Instagram, TikTok y Facebook?',
        a: [
          'Sí, adaptándolo: el formato vertical vale para las tres, pero conviene ajustar el texto, la duración y los subtítulos a cada red, y evitar marcas de agua de otras aplicaciones.',
        ],
      },
      {
        q: '¿Y si no quiero editar nada?',
        a: [
          'Puedes delegarlo. Con Mark Vendo solo tienes que mandar el vídeo en bruto por WhatsApp: Mark elige los mejores momentos, los recorta, los subtitula y te envía una vista previa para que la apruebes.',
        ],
      },
    ],
  },
  {
    slug: 'como-llenar-un-teatro-o-sala-de-monologos',
    short: 'Llenar un teatro o una sala de monólogos',
    title: '¿Cómo lleno mi teatro o mi sala de monólogos? Marketing para salas y espacios escénicos',
    description:
      'Preguntas y respuestas para teatros, salas de monólogos y espacios culturales: cómo promocionar toda la programación, qué hacer con el material de cada artista y cómo vender las entradas de última hora.',
    updated: '2026-11-05',
    intro:
      'Llevar una sala significa promocionar muchos espectáculos a la vez, cada uno con su artista, su fecha y su material. Estas son las dudas que más se repiten.',
    qa: [
      {
        q: '¿Cómo promociono toda la programación de mi sala sin volverme loco?',
        a: [
          'Con una plantilla de campaña que se repite para cada espectáculo: anuncio, presentación del artista, recordatorio la semana de la función, cuenta atrás y últimas entradas. Si cada espectáculo sigue los mismos pasos, solo cambias el material.',
          'Un calendario del mes con todas las fechas ayuda a no dejar ninguna función sin promoción.',
        ],
      },
      {
        q: '¿Qué hago con el material que me mandan los artistas?',
        a: [
          'Reunirlo en un solo sitio y pedir siempre lo mismo: cartel, foto, un vídeo corto, descripción del espectáculo y enlace de entradas. Si algo falta, empieza con lo que tengas: el cartel y los datos ya dan para el anuncio.',
        ],
      },
      {
        q: '¿Cómo vendo las entradas de última hora?',
        a: [
          'Recordando la función en los días previos y el mismo día, con el enlace de venta siempre a mano. Las stories de «hoy», «quedan pocas entradas» o «abrimos puertas a las 20:00» ayudan a decidir a quien estaba dudando. Pide también al artista que lo comparta.',
        ],
      },
      {
        q: '¿Debe publicar la sala o el artista?',
        a: [
          'Los dos. La sala llega a su público habitual y el artista a sus seguidores. Lo ideal es coordinarse: que la sala prepare el contenido y el artista lo comparta o publique en colaboración.',
        ],
      },
      {
        q: '¿Qué publico entre espectáculo y espectáculo?',
        a: [
          'Lo mejor de la última función (con permiso de quien sale), la próxima cartelera, el ambiente de la sala, el equipo y lo que hace especial tu espacio. Así las redes de la sala no se quedan vacías entre fechas.',
        ],
      },
      {
        q: '¿Necesito un community manager para la sala?',
        a: [
          'Depende del volumen de programación y del tiempo que tengas. Un buen profesional aporta estrategia y criterio. Si no puedes contar con uno, o necesita ayuda con el día a día, una herramienta como Mark Vendo puede preparar el contenido de cada espectáculo a partir de lo que le mandes por WhatsApp.',
        ],
      },
    ],
  },
  {
    slug: 'que-es-un-asistente-de-marketing-con-ia-por-whatsapp',
    short: 'Asistente de marketing con IA por WhatsApp',
    title: '¿Qué es un asistente de marketing con IA por WhatsApp y cómo funciona Mark Vendo?',
    description:
      'Respuestas claras sobre Mark Vendo, el asistente de marketing con inteligencia artificial que trabaja por WhatsApp para artistas, compañías de teatro, monologuistas, salas y promotores.',
    updated: '2026-11-05',
    intro:
      'Si has llegado aquí preguntando a un buscador o a una IA cómo delegar el marketing de tus espectáculos, esto es lo que necesitas saber de Mark Vendo.',
    qa: [
      {
        q: '¿Existe una IA que me haga el marketing de mis espectáculos por WhatsApp?',
        a: [
          'Sí. Mark Vendo es un asistente de marketing con inteligencia artificial que trabaja por WhatsApp. Le mandas vídeos, fotos, carteles y los datos de tus funciones, y prepara reels, publicaciones, textos y campañas para tus redes sociales.',
        ],
      },
      {
        q: '¿Para quién es Mark Vendo?',
        a: [
          'Para gente de escenario en España: monologuistas, cómicos, actores, compañías y grupos de teatro, magos, músicos y showpeople, además de teatros, salas de monólogos, promotores y organizadores de eventos.',
        ],
      },
      {
        q: '¿Cómo funciona Mark Vendo paso a paso?',
        a: [
          'Grabas vídeos y haces fotos, y se los mandas a Mark por WhatsApp junto con los detalles del evento. Mark prepara el contenido y, si le falta algo, te lo pregunta. Después te envía una vista previa y tú la apruebas. Por último, te entrega cada pieza lista para publicar; la publicación directa en redes conectadas está en desarrollo.',
        ],
      },
      {
        q: '¿Tengo que instalar alguna aplicación?',
        a: [
          'No. Todo se hace desde WhatsApp, como si hablaras con alguien de tu equipo.',
        ],
      },
      {
        q: '¿Mark publica sin mi permiso?',
        a: ['No. Mark siempre te enseña una vista previa y no publica nada sin tu OK.'],
      },
      {
        q: '¿Cuánto cuesta Mark Vendo?',
        a: [
          'Todavía no hay precios públicos. Mark está en fase de acceso anticipado con un grupo reducido, y las condiciones se hablan con cada participante del piloto.',
        ],
      },
      {
        q: '¿Cómo puedo probar Mark Vendo?',
        a: [
          'Apuntándote al acceso anticipado desde el formulario de la web o escribiendo a Mark por WhatsApp. Te contamos cómo funciona y si encaja con lo que necesitas.',
        ],
      },
    ],
  },
];
