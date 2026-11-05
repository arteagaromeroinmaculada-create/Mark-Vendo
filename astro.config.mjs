import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(gracias|aviso-legal|privacidad|cookies)\//.test(page),
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES' } },
    }),
  ],
});
