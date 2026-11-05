# Mark Vendo · web comercial

Landing de captación de Mark Vendo, el compañero de marketing con IA que trabaja por WhatsApp.
Sitio estático generado con [Astro](https://astro.build): HTML puro, ~3 KB de JavaScript y fuentes alojadas en el propio sitio.

## Arrancar

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/ listo para subir a cualquier hosting estático
npm run preview   # sirve dist/ en local
```

## Configuración (todo en un sitio)

Edita `src/config/site.ts` o define estas variables de entorno en el hosting:

| Variable | Para qué | Si se deja vacía |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | Dominio definitivo (canonical, sitemap, Open Graph) | `https://mark-vendo.vercel.app` (provisional hasta tener dominio) |
| `PUBLIC_WHATSAPP_NUMBER` | Número de Mark, formato `34600111222` | No se muestran los botones de WhatsApp |
| `PUBLIC_LEAD_ENDPOINT` | URL que recibe los contactos (POST JSON), o `netlify` para usar Netlify Forms (avisos por email desde el panel de Netlify) | Modo demo: no envía nada y va a /gracias/ |
| `PUBLIC_GTM_ID` | Google Tag Manager `GTM-XXXXXXX` | Sin analítica y sin aviso de cookies |
| `PUBLIC_CONTACT_EMAIL` | Email de contacto | `arteagaromeroinmaculada+mark@gmail.com` |
| `PUBLIC_OWNER_NAME` / `_NIF` / `_ADDRESS` | Datos del titular para los textos legales | Marcadores en amarillo |

### Estado de las funcionalidades

`src/content/features.ts`. Cada funcionalidad es `piloto`, `desarrollo` o `futuro`. Cambiarlo aquí actualiza la web, la FAQ y `llms.txt`.

### Contactos y CRM

El formulario envía un JSON con: `nombre`, `email`, `empresa`, `segmento` (sala, productora, promotor, artista, monologuista, otro), `web`, `eventos_mes`, `telefono`, `mensaje`, `privacidad`, `origen_pagina`, `origen_landing`, `referer`, `enviado_en` y los `utm_*`, `gclid`, `fbclid` si existen.
Sirve cualquier webhook que acepte JSON: HubSpot (Forms API), Brevo, Make, Zapier, n8n, Formspree o una API propia. El endpoint debe permitir CORS desde el dominio de la web.

### Analítica

Eventos en `window.dataLayer` (listos para GTM → GA4 / Meta Pixel):
`cta_click`, `whatsapp_click`, `form_start`, `form_submit`, `form_error`, `generate_lead` (conversión, en /gracias/), `scroll_depth`, `consent_update`.
GTM solo se carga si el visitante acepta las cookies.

## Estructura

```
src/
  config/site.ts         configuración
  config/doodle.ts       dibujo de fondo del chat (máscaras, micro, entradas…) en SVG
  content/               textos como datos: segmentos (nichos), funcionalidades, FAQ
  components/            Msg (burbuja de chat), Demo (chat de ejemplo animado),
                         Contact (formulario conversacional), LeadForm (formulario clásico), secciones
  layouts/Base.astro     app tipo WhatsApp: lista de chats (escritorio), cabecera del chat,
                         barra "Escribe a Mark" fija, cookies, <head> SEO
  pages/                 index, [nicho] (una página por segmento), gracias, legales, robots.txt, llms.txt
  scripts/main.ts        animaciones, CTA, formulario conversacional y clásico, analítica, consentimiento
  styles/global.css      colores WhatsApp (solo modo claro) y estilos
tools/                   plantillas de la imagen OG y generador de vista previa (npm run preview:single)
```

Toda la web es una conversación: Mark habla en burbujas blancas y el visitante en verdes. El formulario de contacto
también es un chat (Mark pregunta, el visitante contesta); quien lo prefiera puede abrir el formulario clásico.
Los dos envían los mismos campos y añaden `origen_formulario` (`chat` o `clasico`).

Para añadir un nicho nuevo (festivales, salas de monólogos, DJs…), añade un objeto a `src/content/segments.ts`: se crea su página, su bloque en la home, su entrada en el sitemap y en `llms.txt`.

Rutas reservadas para crecer: `/precios/`, `/guias/`, `/casos/`. El producto (registro, panel, biblioteca, calendario, aprobaciones, integraciones) irá en `app.markvendo.com`, separado de esta web.

## Antes de publicar

- [ ] Confirmar el estado real de cada funcionalidad (sobre todo la publicación directa en redes).
- [ ] Dominio, número de WhatsApp, endpoint de contactos y GTM.
- [ ] Completar y revisar con un profesional el aviso legal, la privacidad y las cookies.
- [ ] Regenerar `public/og.png` si cambia el titular (plantilla en `tools/og/`).

## Nota sobre el zoom en móvil

Por decisión del proyecto, en móvil el zoom está bloqueado y no hay scroll horizontal. Bloquear el zoom reduce la accesibilidad para personas con baja visión; si se quiere revertir, basta con quitar `maximum-scale=1, user-scalable=no` del viewport en `src/layouts/Base.astro`.

## Publicación (GitHub + Vercel)

1. En vercel.com → Add New → Project → importa el repositorio `Mark-Vendo`. Vercel detecta Astro solo (build `npm run build`, salida `dist`). No hace falta configurar nada más.
2. Cada push a `main` se publica automáticamente.
3. Cuando tengas dominio: Vercel → Settings → Domains, y cambia `PUBLIC_SITE_URL` (o el valor por defecto en `src/config/site.ts`).
4. Contactos: llegan por email vía FormSubmit. El primer envío dispara un email de activación a la dirección configurada: hay que pulsar «Activate Form» una sola vez.
