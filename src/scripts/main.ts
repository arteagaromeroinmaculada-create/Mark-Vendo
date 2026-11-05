/* Mark Vendo · interacción, conversión y analítica. Sin dependencias. */

type DL = Record<string, unknown>;
declare global {
  interface Window { dataLayer: DL[]; __MV_GTM__?: string; __gtmLoaded?: boolean }
}

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const wait = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
const now = () => new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
const TICKS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12.5 6 16.5 14 7.5M9 15.5l1 1 8-9"/></svg>';

/* ---------------- Analítica ---------------- */
export function track(event: string, params: DL = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page_path: location.pathname, ...params });
}
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  track(el.dataset.track!, { cta_location: el.dataset.loc || '', cta_segment: el.dataset.segment || '', cta_text: (el.textContent || '').trim().slice(0, 80) });
});
const hit = new Set<number>();
addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = ((h.scrollTop + innerHeight) / h.scrollHeight) * 100;
  for (const m of [25, 50, 75, 100]) if (pct >= m - 0.5 && !hit.has(m)) { hit.add(m); track('scroll_depth', { percent: m }); }
}, { passive: true });

/* ---------------- Cookies + GTM ---------------- */
const CK = 'mv_consent';
const store = {
  get: (k: string, s: Storage = localStorage) => { try { return s.getItem(k); } catch { return null; } },
  set: (k: string, v: string, s: Storage = localStorage) => { try { s.setItem(k, v); } catch { /* sin almacenamiento */ } },
};
function loadGTM(id: string) {
  if (!id || window.__gtmLoaded) return;
  window.__gtmLoaded = true;
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}
const gtm = window.__MV_GTM__ || '';
const banner = $('[data-cookies]');
if (gtm) {
  const c = store.get(CK);
  if (c === 'granted') loadGTM(gtm);
  else if (!c && banner) banner.hidden = false;
} else {
  $$('[data-cookie-settings]').forEach((b) => b.closest('li')?.remove());
}
$('[data-cookies-accept]')?.addEventListener('click', () => { store.set(CK, 'granted'); banner!.hidden = true; track('consent_update', { analytics: 'granted' }); loadGTM(gtm); });
$('[data-cookies-reject]')?.addEventListener('click', () => { store.set(CK, 'denied'); banner!.hidden = true; });
$$('[data-cookie-settings]').forEach((b) => b.addEventListener('click', () => { if (banner) banner.hidden = false; }));

/* ---------------- Estado de la cabecera ---------------- */
const status = $('[data-status]');
const statusText = status?.textContent || '';
const typing = (on: boolean) => { if (!status) return; status.textContent = on ? 'escribiendo…' : statusText; status.classList.toggle('is-typing', on); };

/* ---------------- Conversación de ejemplo animada ---------------- */
function playDemo(demo: HTMLElement) {
  const steps = $$<HTMLElement>('[data-step]', demo);
  const dots = $('[data-typing]', demo);
  const body = $('.demo__body', demo)!;
  const replay = demo.nextElementSibling as HTMLElement | null;
  const bottom = () => { body.scrollTop = body.scrollHeight; };
  if (reduce) { steps.forEach((s) => s.classList.add('is-in')); bottom(); return; }
  let i = 0;
  replay?.classList.remove('is-on');
  steps.forEach((s) => s.classList.remove('is-in'));
  const next = () => {
    if (i >= steps.length) { replay?.classList.add('is-on'); return; }
    const el = steps[i];
    if (el.classList.contains('msg--mark') && dots) {
      dots.classList.add('is-on'); bottom();
      setTimeout(() => { dots.classList.remove('is-on'); el.classList.add('is-in'); bottom(); i++; setTimeout(next, 1000); }, 1100);
    } else {
      el.classList.add('is-in'); bottom(); i++; setTimeout(next, i === 1 ? 400 : 900);
    }
  };
  next();
}
const demoIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { playDemo(e.target as HTMLElement); demoIO.unobserve(e.target); } }), { threshold: 0.2 });
$$<HTMLElement>('.demo[data-animate]').forEach((d) => {
  demoIO.observe(d);
  d.nextElementSibling?.addEventListener('click', () => playDemo(d));
});

/* ---------------- Barra de escribir global ---------------- */
const dock = $('[data-dock]');
const contact = $('#contacto');
if (dock && contact) {
  new IntersectionObserver(([e]) => dock.classList.toggle('is-off', e.isIntersecting), { threshold: 0 }).observe(contact);
}

/* ---------------- Segmento elegido en un CTA ---------------- */
let presetSegment = $('[data-cform]')?.getAttribute('data-preset') || '';
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-segment]');
  if (!a) return;
  presetSegment = a.dataset.segment || '';
  const radio = document.querySelector<HTMLInputElement>(`[data-lead-form] input[name="segmento"][value="${presetSegment}"]`);
  if (radio) radio.checked = true;
});
// Al pulsar un CTA hacia #contacto, poner el foco en la respuesta
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href$="#contacto"]');
  if (!a) return;
  setTimeout(() => $<HTMLInputElement>('[data-cform] [data-input]:not(:disabled)')?.focus({ preventScroll: true }), 600);
});

/* ---------------- Envío de contactos (común a los dos formularios) ---------------- */
function utm() {
  const p = new URLSearchParams(location.search);
  const out: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'].forEach((k) => {
    const v = p.get(k);
    if (v) { out[k] = v; store.set(k, v, sessionStorage); } else { const s = store.get(k, sessionStorage); if (s) out[k] = s; }
  });
  return out;
}
utm();
if (!store.get('mv_landing', sessionStorage)) store.set('mv_landing', location.pathname + location.search, sessionStorage);

async function sendLead(data: Record<string, string>, formId: string) {
  const payload = {
    ...data,
    privacidad: true,
    origen_formulario: formId,
    origen_pagina: location.pathname,
    origen_landing: store.get('mv_landing', sessionStorage) || '',
    referer: document.referrer || '',
    enviado_en: new Date().toISOString(),
    ...utm(),
  };
  const endpoint = $('[data-cform]')?.getAttribute('data-endpoint') || $('[data-lead-form]')?.getAttribute('data-endpoint') || '';
  if (endpoint === 'netlify') {
    // Netlify Forms: los contactos aparecen en el panel de Netlify y llegan por email.
    const body = new URLSearchParams({ 'form-name': 'contacto' });
    Object.entries(payload).forEach(([k, v]) => body.append(k, String(v ?? '')));
    const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
    if (!res.ok) throw new Error(String(res.status));
  } else if (endpoint) {
    const extra = endpoint.includes('formsubmit.co') ? { _subject: `Nuevo contacto Mark Vendo: ${data.nombre || ''} (${data.segmento || 'sin tipo'})`, _template: 'table', _captcha: 'false' } : {};
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...payload, ...extra }) });
    let info: { success?: string | boolean; message?: string } = {};
    try { info = await res.clone().json(); } catch { /* respuesta sin JSON */ }
    if (info.message) console.info('[Mark Vendo] Respuesta del formulario:', res.status, info.message);
    // FormSubmit pide activar el formulario la primera vez: el visitante no tiene la culpa, seguimos.
    const needsActivation = /activat/i.test(info.message || '');
    if (!needsActivation && (!res.ok || info.success === 'false' || info.success === false)) throw new Error(info.message || String(res.status));
  } else {
    console.info('[Mark Vendo] Modo demo, contacto no enviado:', payload);
  }
  store.set('mv_lead', JSON.stringify({ segmento: data.segmento, nombre: data.nombre }), sessionStorage);
  let done = false;
  const go = () => { if (!done) { done = true; location.href = `/gracias/?tipo=${encodeURIComponent(data.segmento || '')}`; } };
  track('form_submit', { form_id: formId, lead_segment: data.segmento, events_per_month: data.eventos_mes, eventCallback: go, eventTimeout: 800 });
  setTimeout(go, window.__gtmLoaded ? 900 : 50);
}

/* ---------------- Formulario conversacional ---------------- */
type Step = {
  key: string;
  q: (d: Record<string, string>) => string;
  type?: string; ph?: string; ac?: string; mode?: string;
  chips?: { v: string; l: string }[];
  skip?: string;
  check?: (v: string) => string | '';
};
const first = (d: Record<string, string>) => (d.nombre || '').trim().split(/\s+/)[0];
const STEPS: Step[] = [
  { key: 'nombre', q: () => 'Para empezar, ¿cómo te llamas? 😊', type: 'text', ph: 'Escribe tu nombre', ac: 'name', check: (v) => (v.length < 2 ? '¿Me dices tu nombre? Con el nombre de pila me vale.' : '') },
  { key: 'email', q: (d) => `Encantado, ${esc(first(d))}. ¿A qué email te escribo?`, type: 'email', ph: 'tu@email.com', ac: 'email', mode: 'email', check: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Mmm, ese email no me cuadra. ¿Lo revisas?') },
  { key: 'empresa', q: () => '¿Cómo se llama tu sala, tu empresa o tu nombre artístico?', type: 'text', ph: 'Sala, empresa o nombre artístico', ac: 'organization', check: (v) => (v ? '' : 'Dime cómo te llamas en el mundo del espectáculo 🙂') },
  { key: 'segmento', q: () => '¿Y qué eres?', chips: [
    { v: 'sala', l: 'Sala o teatro' }, { v: 'productora', l: 'Productora' }, { v: 'promotor', l: 'Promotor' },
    { v: 'artista', l: 'Artista' }, { v: 'monologuista', l: 'Monologuista' }, { v: 'otro', l: 'Otro' }] },
  { key: 'web', q: () => '¿Tienes web o Instagram? Pásame el enlace o tu @ y le echo un ojo.', type: 'text', ph: '@tusala o tusala.com', ac: 'url', mode: 'url', skip: 'Todavía no tengo' },
  { key: 'eventos_mes', q: () => '¿Cuántos eventos o actuaciones tienes al mes, más o menos?', chips: [
    { v: '1-2', l: '1 o 2' }, { v: '3-5', l: 'De 3 a 5' }, { v: '6-10', l: 'De 6 a 10' }, { v: '10+', l: 'Más de 10' }, { v: 'ninguno-ahora', l: 'Ahora ninguno' }] },
  { key: 'telefono', q: () => 'Si prefieres que hablemos por WhatsApp, déjame tu móvil. Es opcional.', type: 'tel', ph: '+34 600 000 000', ac: 'tel', mode: 'tel', skip: 'Mejor por email', check: (v) => (v.replace(/\D/g, '').length >= 9 ? '' : 'Creo que a ese número le faltan cifras.') },
  { key: 'mensaje', q: () => '¿Algo más que quieras contarme? Por ejemplo, qué tipo de espectáculos haces.', type: 'text', ph: 'Cuéntame…', skip: 'Nada más' },
  { key: 'privacidad', q: () => 'Último paso: para escribirte necesito que aceptes la <a href="/privacidad/" target="_blank" rel="noopener">política de privacidad</a>.', chips: [{ v: 'si', l: 'Acepto y envío ✓' }] },
];

const cform = $('[data-cform]');
if (cform) {
  const log = $('[data-log]', cform)!;
  const chips = $('[data-chips]', cform)!;
  const composer = $<HTMLFormElement>('[data-composer]', cform)!;
  const input = $<HTMLInputElement>('[data-input]', cform)!;
  const send = $<HTMLButtonElement>('.send', composer)!;
  const data: Record<string, string> = {};
  const nodes: HTMLElement[][] = STEPS.map(() => []);
  let step = 0;
  let busy = false;
  let started = false;

  const bubble = (from: 'mark' | 'you', html: string, i: number, tail = true) => {
    const el = document.createElement('div');
    el.className = `msg msg--${from}${tail ? ' msg--tail' : ''} appear`;
    el.innerHTML = `${html}<span class="meta">${now()}${from === 'you' ? TICKS : ''}</span>`;
    log.appendChild(el);
    nodes[i].push(el);
    return el;
  };
  const keepInView = () => {
    const r = composer.getBoundingClientRect();
    if (r.bottom > innerHeight || r.top < 0) composer.scrollIntoView({ block: 'end', behavior: reduce ? 'auto' : 'smooth' });
  };
  async function markSays(html: string, i: number) {
    busy = true;
    const dots = document.createElement('div');
    dots.className = 'msg msg--mark msg--tail typing';
    dots.style.display = 'inline-flex';
    dots.innerHTML = '<span></span><span></span><span></span>';
    log.appendChild(dots);
    typing(true);
    keepInView();
    await wait(650);
    dots.remove();
    typing(false);
    bubble('mark', html, i);
    busy = false;
  }

  function setupInput() {
    const s = STEPS[step];
    chips.innerHTML = '';
    const opts = [...(s.chips || [])];
    if (s.key === 'segmento' && presetSegment) opts.sort((a, b) => (a.v === presetSegment ? -1 : b.v === presetSegment ? 1 : 0));
    opts.forEach((c) => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = c.l; b.dataset.v = c.v;
      chips.appendChild(b);
    });
    if (s.skip) {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = s.skip; b.className = 'skip-btn'; b.dataset.skip = '1';
      chips.appendChild(b);
    }
    chips.hidden = chips.children.length === 0;
    const textual = !!s.type;
    input.disabled = !textual;
    send.disabled = !textual;
    input.value = '';
    input.type = s.type || 'text';
    input.placeholder = textual ? s.ph || 'Escribe aquí' : 'Elige una opción ☝️';
    input.autocomplete = (s.ac || 'off') as AutoFill;
    if (s.mode) input.inputMode = s.mode; else input.removeAttribute('inputmode');
    $('[data-q-label]', cform)!.textContent = STEPS[step].q(data).replace(/<[^>]+>/g, '');
  }

  async function answer(value: string, shown: string) {
    if (busy) return;
    const s = STEPS[step];
    const i = step;
    if (!started) { started = true; track('form_start', { form_id: 'chat' }); }
    const you = bubble('you', esc(shown), i);
    you.setAttribute('role', 'button');
    you.setAttribute('tabindex', '0');
    you.title = 'Toca para cambiar esta respuesta';
    you.dataset.step = String(i);
    chips.hidden = true;
    const err = value && s.check ? s.check(value) : '';
    if (err) { await markSays(esc(err), i); you.remove(); nodes[i] = nodes[i].filter((n) => n !== you); setupInput(); input.focus(); return; }
    data[s.key] = value;
    step++;
    if (step < STEPS.length) {
      await markSays(STEPS[step].q(data), step);
      setupInput();
      if (!input.disabled) input.focus({ preventScroll: true });
      keepInView();
    } else {
      input.disabled = true; send.disabled = true;
      await markSays('¡Perfecto! Te lo envío ahora mismo… 📨', i);
      try {
        await sendLead(data, 'chat');
      } catch {
        track('form_error', { form_id: 'chat', reason: 'network' });
        const wa = document.querySelector<HTMLAnchorElement>('a[href^="https://wa.me/"]')?.href;
        await markSays(`Vaya, no he podido enviarlo. ¿Lo intentamos otra vez? Si sigue fallando, ${wa ? `<a href="${wa}" target="_blank" rel="noopener">escríbeme por WhatsApp</a> o ` : ''}mándame un email a <a href="mailto:${document.querySelector('[data-cform]')?.getAttribute('data-email') || ''}">${document.querySelector('[data-cform]')?.getAttribute('data-email') || ''}</a>.`, i);
        step = STEPS.length - 1;
        setupInput();
      }
    }
  }

  composer.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = input.value.trim();
    if (!v || input.disabled) return;
    answer(v, v);
  });
  chips.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
    if (!b) return;
    if (b.dataset.skip) answer('', b.textContent || '');
    else answer(b.dataset.v || '', b.textContent || '');
  });
  // Tocar una respuesta anterior para cambiarla
  log.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('.msg--you[data-step]');
    if (!el || busy) return;
    const i = Number(el.dataset.step);
    for (let k = i; k < STEPS.length; k++) {
      const keep = k === i ? 1 : 0; // en el paso elegido se conserva la pregunta de Mark
      nodes[k].slice(keep).forEach((n) => n.remove());
      nodes[k] = nodes[k].slice(0, keep);
      delete data[STEPS[k].key];
    }
    step = i;
    setupInput();
    input.focus();
  });
  log.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && (e.target as HTMLElement).matches('.msg--you[data-step]')) { e.preventDefault(); (e.target as HTMLElement).click(); } });

  // La primera pregunta ya está en el HTML: se registra como nodo del paso 0
  nodes[0].push(log.firstElementChild as HTMLElement);
  setupInput();

  // Alternativa: formulario clásico
  $('[data-show-classic]', cform)?.addEventListener('click', () => {
    const c = $('[data-classic]');
    c?.classList.add('is-on');
    cform.hidden = true;
    $<HTMLInputElement>('input', c!)?.focus();
  });
}

/* ---------------- Formulario clásico ---------------- */
const MSG = {
  required: 'Este campo es obligatorio.',
  email: 'Revisa el email, parece que falta algo.',
  segmento: 'Elige la opción que mejor te describa.',
  privacidad: 'Necesito que aceptes la política de privacidad para poder escribirte.',
  network: 'No he podido enviar el formulario. Inténtalo de nuevo en un momento o escríbeme por email.',
};
function setErr(field: Element | null, msg: string) {
  const wrap = field?.closest('.f');
  if (!wrap) return;
  wrap.classList.toggle('is-invalid', !!msg);
  const err = $('.f__err', wrap);
  if (err) err.textContent = msg;
  (field as HTMLElement).setAttribute('aria-invalid', msg ? 'true' : 'false');
}
function validate(form: HTMLFormElement) {
  let firstBad: HTMLElement | null = null;
  const fail = (el: HTMLElement, m: string) => { setErr(el, m); if (!firstBad) firstBad = el; };
  ['nombre', 'empresa', 'web'].forEach((n) => {
    const el = form.elements.namedItem(n) as HTMLInputElement;
    if (!el.value.trim()) fail(el, MSG.required); else setErr(el, '');
  });
  const email = form.elements.namedItem('email') as HTMLInputElement;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) fail(email, email.value.trim() ? MSG.email : MSG.required); else setErr(email, '');
  const segFirst = form.querySelector<HTMLInputElement>('input[name="segmento"]')!;
  if (!form.querySelector('input[name="segmento"]:checked')) fail(segFirst, MSG.segmento); else setErr(segFirst, '');
  const ev = form.elements.namedItem('eventos_mes') as HTMLSelectElement;
  if (!ev.value) fail(ev, MSG.required); else setErr(ev, '');
  const priv = form.elements.namedItem('privacidad') as HTMLInputElement;
  if (!priv.checked) fail(priv, MSG.privacidad); else setErr(priv, '');
  (firstBad as HTMLElement | null)?.focus();
  return !firstBad;
}
const loadedAt = Date.now();
$$<HTMLFormElement>('[data-lead-form]').forEach((form) => {
  let started = false;
  form.addEventListener('focusin', () => { if (!started) { started = true; track('form_start', { form_id: form.id }); } });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const st = $('.form__status', form)!;
    st.textContent = ''; st.classList.remove('is-error');
    if (!validate(form)) { track('form_error', { form_id: form.id, reason: 'validation' }); return; }
    const fd = new FormData(form);
    if ((fd.get('website_url') as string) || Date.now() - loadedAt < 3000) { location.href = '/gracias/'; return; }
    fd.delete('website_url');
    const data = Object.fromEntries([...fd.entries()].map(([k, v]) => [k, String(v)]));
    const btn = $<HTMLButtonElement>('.form__submit', form)!;
    btn.disabled = true; btn.textContent = 'Enviando…';
    try { await sendLead(data, form.id); }
    catch { st.textContent = MSG.network; st.classList.add('is-error'); track('form_error', { form_id: form.id, reason: 'network' }); btn.disabled = false; btn.textContent = 'Quiero conocer a Mark'; }
  });
});

/* ---------------- Página de gracias ---------------- */
const thanks = $('[data-thanks]');
if (thanks) {
  const tipo = new URLSearchParams(location.search).get('tipo') || '';
  let nombre = '';
  try { nombre = JSON.parse(store.get('mv_lead', sessionStorage) || '{}').nombre || ''; } catch { /* */ }
  const hi = $('[data-thanks-name]');
  if (hi && nombre) hi.textContent = `, ${String(nombre).split(' ')[0]}`;
  const match = $(`[data-tipo="${tipo}"]`);
  $$<HTMLElement>('[data-tipo]').forEach((el) => { el.hidden = match ? el !== match : el.dataset.tipo !== 'default'; });
  if (store.get('mv_lead_tracked', sessionStorage) !== '1') { store.set('mv_lead_tracked', '1', sessionStorage); track('generate_lead', { lead_segment: tipo }); }
}
