// Patrón de fondo propio (temática de espectáculos), usado como máscara sobre el color del fondo del chat.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<g transform="translate(18 20)"><path d="M0 4c8 3 18 3 26 0v12c0 9-6 15-13 15S0 25 0 16Z"/><path d="M7 13h.1M19 13h.1M8 21c3 3 7 3 10 0"/></g>
<g transform="translate(112 14)"><path d="M6 24V4l18-4v20"/><circle cx="3" cy="24" r="4"/><circle cx="21" cy="20" r="4"/></g>
<g transform="translate(190 30)"><rect x="6" y="0" width="12" height="20" rx="6"/><path d="M0 14a12 12 0 0 0 24 0M12 26v6"/></g>
<g transform="translate(40 92)"><path d="M0 6a4 4 0 0 0 4-4h30a4 4 0 0 0 4 4v4a4 4 0 0 0 0 8v4a4 4 0 0 0-4 4H4a4 4 0 0 0-4-4v-4a4 4 0 0 0 0-8Z"/><path d="M26 2v24" stroke-dasharray="3 3"/></g>
<g transform="translate(140 84)"><path d="M12 0l3.5 7.6 8.3.9-6.2 5.6 1.8 8.2L12 18l-7.4 4.3 1.8-8.2L.2 8.5l8.3-.9Z"/></g>
<g transform="translate(196 118)"><rect x="0" y="8" width="30" height="20" rx="2"/><path d="M0 8l4-8h26l-4 8M10 0l-4 8M20 0l-4 8"/></g>
<g transform="translate(14 172)"><path d="M10 0h12l8 30H2Z"/><path d="M16 30v10M8 40h16"/></g>
<g transform="translate(96 160)"><rect x="0" y="4" width="34" height="26" rx="4"/><circle cx="17" cy="17" r="7"/><path d="M10 4l3-4h8l3 4"/></g>
<g transform="translate(176 190)"><path d="M2 20c6-14 18-14 24 0M14 6v-6M4 10 0 6M24 10l4-4"/></g>
<g transform="translate(80 220)"><circle cx="4" cy="4" r="3"/></g><g transform="translate(230 80)"><circle cx="4" cy="4" r="3"/></g><g transform="translate(70 50)"><path d="M0 0l6 6M6 0 0 6"/></g><g transform="translate(160 150)"><path d="M0 0l6 6M6 0 0 6"/></g>
</svg>`;
export const DOODLE = `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\n/g, ''))}")`;
