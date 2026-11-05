// Genera un único HTML autocontenido de la home (CSS, fuentes y JS en línea) para revisarla como vista previa.
// Uso: npm run build && node tools/build-preview.mjs <salida.html>
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const out = process.argv[2] || join(dist, 'preview.html');
let html = readFileSync(join(dist, 'index.html'), 'utf8');

// CSS con fuentes embebidas
let css = '';
html = html.replace(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g, (_, href) => {
  let c = readFileSync(join(dist, href), 'utf8');
  c = c.replace(/url\((\/_astro\/[^)]+\.woff2)\)/g, (m, f) => {
    const p = join(dist, f);
    return existsSync(p) ? `url(data:font/woff2;base64,${readFileSync(p).toString('base64')})` : m;
  });
  // Solo latin para aligerar: elimina bloques @font-face de otros subconjuntos (cirílico, vietnamita…)
  c = c.replace(/@font-face\{[^}]*unicode-range:U\+(0102|0460|1F00|0370|0301|0100-02BA)[^}]*\}/g, '');
  css += c;
  return '';
});
html = html.replace(/<style>/, '<style>' + css.replace(/\$/g, '$$$$') + '\n');
if (!/<style>/.test(html)) html = html.replace('</head>', `<style>${css}</style></head>`);

// JS en línea
html = html.replace(/<script type="module" src="([^"]+)"><\/script>/g, (_, src) => {
  let js = readFileSync(join(dist, src), 'utf8');
  js = js.replace(/location\.href\s*=\s*`\/gracias\/[^`]*`/g, "(document.querySelector('.form__status').textContent='Vista previa: en la web real aquí se abre la página de gracias.')");
  js = js.replace(/location\.href\s*=\s*"\/gracias\/"/g, "void 0");
  return `<script type="module">${js}</script>`;
});

// Página completa en reposo: sin estados ocultos a la espera de scroll
html = html.replace(/class="([^"]*)\breveal\b([^"]*)"/g, 'class="$1$2"');

// Quitar doctype/html/head/body: la plataforma añade su propio esqueleto
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charset[^>]*>/, '')
  .replace(/<meta name="viewport"[^>]*>/, '')
  .replace(/<title>[^<]*<\/title>/, '<title>Mark Vendo</title><meta name="claude:viewport-fit-sides" content="cover">');
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
writeFileSync(out, head + '\n' + body);
console.log('Vista previa:', out, (Buffer.byteLength(head + body) / 1024).toFixed(0) + ' KB');
