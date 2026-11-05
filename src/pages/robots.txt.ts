import { SITE } from '../config/site';
export const GET = () =>
  new Response(`User-agent: *\nAllow: /\nDisallow: /gracias/\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
