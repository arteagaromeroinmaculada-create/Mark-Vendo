/**
 * Configuración central de la web de Mark Vendo.
 * Todo lo que cambia entre entornos se toca aquí (o con variables de entorno PUBLIC_*).
 */
const env = (import.meta as any).env ?? {};

export const SITE = {
  name: 'Mark Vendo',
  /** Dominio definitivo. */
  url: env.PUBLIC_SITE_URL || 'https://markvendo.com',
  locale: 'es_ES',
  lang: 'es-ES',
  email: env.PUBLIC_CONTACT_EMAIL || 'markvendomas@gmail.com',

  /**
   * Número de WhatsApp de Mark en formato internacional sin "+" ni espacios (p. ej. 34600111222).
   * Si se deja vacío, los botones de WhatsApp no se muestran.
   */
  whatsapp: env.PUBLIC_WHATSAPP_NUMBER || '34624816724',
  whatsappText: 'Hola Mark, tengo un espectáculo que promocionar. ¿Me cuentas cómo funciona?',

  /**
   * Endpoint que recibe los contactos (POST JSON): webhook de CRM, Make, Zapier, Formspree, API propia…
   * Si está vacío, la web funciona en modo demostración: no envía datos y redirige a /gracias/.
   */
  leadEndpoint: env.PUBLIC_LEAD_ENDPOINT || 'web3forms:cd3b4243-123a-437e-92cc-202a6122c15e',

  /**
   * Códigos de verificación de Google Search Console y Bing Webmaster Tools
   * (solo el valor de content="…" de la etiqueta meta que te dan).
   */
  googleVerification: env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  bingVerification: env.PUBLIC_BING_SITE_VERIFICATION || '',

  /** Google Tag Manager (GTM-XXXXXXX). Solo se carga si el visitante acepta las cookies de analítica. */
  gtmId: env.PUBLIC_GTM_ID || '',

  /**
   * Datos del titular. Solo se muestran en las páginas legales (que no se indexan en buscadores).
   * El NIF y la dirección pueden ir como variables de entorno en Vercel para no dejarlos en el repositorio.
   */
  owner: {
    name: env.PUBLIC_OWNER_NAME || 'Inmaculada Arteaga Romero',
    nif: env.PUBLIC_OWNER_NIF || '51118341J',
    address: env.PUBLIC_OWNER_ADDRESS || 'Calle Colón 1, 28004 Madrid',
  },
  /** Fecha de la última revisión de los textos legales. */
  legalUpdated: '5 de noviembre de 2026',
};

export const waLink = (text = SITE.whatsappText) =>
  SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}` : '';
