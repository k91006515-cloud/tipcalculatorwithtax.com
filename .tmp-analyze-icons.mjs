import sharp from 'sharp';
import fs from 'fs';

const files = [
  'public/favicon.svg',
  'public/apple-touch-icon.png',
  'public/favicon-96x96.png',
  'public/web-app-manifest-192x192.png',
  'public/web-app-manifest-512x512.png',
  'public/og-image.png',
];

function nearest(r, g, b) {
  const swatches = {
    '#6be923': [107, 233, 35], // lime green from favicon.svg
    '#050505': [5, 5, 5],      // near-black ink from favicon.svg
    '#ffffff': [255, 255, 255],
    '#e8ebe6': [232, 235, 230], // canvas-soft
    '#9fe870': [159, 232, 112], // wise green primary
  };
  let best = null, bestD = Infinity;
  for (const [hex, [cr, cg, cb]] of Object.entries(swatches)) {
    const d = Math.abs(r - cr) + Math.abs(g - cg) + Math.abs(b - cb);
    if (d < bestD) { bestD = d; best = hex; }
  }
  return `${best}(${bestD})`;
}

for (const f of files) {
  if (f.endsWith('.svg')) {
    const src = fs.readFileSync(f, 'utf8');
    console.log(`=== ${f} (SVG source, ${src.length} bytes) ===`);
    console.log(src);
    continue;
  }
  const img = sharp(f);
  const meta = await img.metadata();
  const buf = await img.raw().toBuffer();
  const { width, height, channels } = meta;
  const counts = {};
  let lime = 0, ink = 0, nonwhite = 0, total = 0;
  for (let i = 0; i < buf.length; i += channels) {
    if (channels === 4 && buf[i + 3] < 10) continue;
    const r = buf[i], g = buf[i + 1], b = buf[i + 2];
    total++;
    const hex = nearest(r, g, b).slice(0, 7);
    counts[hex] = (counts[hex] || 0) + 1;
    if (r < 40 && g < 40 && b < 40) ink++;
    if (Math.abs(r - 107) < 40 && Math.abs(g - 233) < 40 && Math.abs(b - 35) < 40) lime++;
    if (!(r > 245 && g > 245 && b > 245)) nonwhite++;
  }
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  console.log(`=== ${f} ===`);
  console.log(`size: ${width}x${height}, channels: ${channels}, opaque pixels: ${total}`);
  console.log(`lime(#6be923-ish): ${lime} (${(100 * lime / total).toFixed(1)}%), ink(#050505-ish): ${ink} (${(100 * ink / total).toFixed(1)}%), non-white: ${(100 * nonwhite / total).toFixed(1)}%`);
  console.log('top colors:', top.map(([hex, n]) => `${hex} ${n} (${(100 * n / total).toFixed(1)}%)`).join(', '));
  console.log('');
}

console.log('=== Pairwise diff (64x64 grayscale on white, lower = more similar) ===');
const pngs = files.filter(f => f.endsWith('.png'));
const bufs = {};
for (const f of pngs) {
  bufs[f] = await sharp(f).resize(64, 64).flatten({ background: { r: 255, g: 255, b: 255 } }).greyscale().toBuffer();
}
for (let i = 0; i < pngs.length; i++) {
  for (let j = i + 1; j < pngs.length; j++) {
    const a = bufs[pngs[i]], b = bufs[pngs[j]];
    let diff = 0;
    for (let k = 0; k < a.length; k++) diff += Math.abs(a[k] - b[k]);
    const label = `${pngs[i]} vs ${pngs[j]}`.padEnd(56);
    console.log(`${label} meanAbsDiff=${(diff / a.length).toFixed(2)}`);
  }
}
