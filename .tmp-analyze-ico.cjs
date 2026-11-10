const sharp = require('sharp');

async function main() {
  const f = 'public/favicon.ico';
  const meta = await sharp(f).metadata();
  console.log('favicon.ico metadata:', JSON.stringify(meta, null, 2));
  // ICO contains multiple images; analyze each page
  const pages = meta.pages || 1;
  for (let p = 0; p < pages; p++) {
    const buf = await sharp(f, { page: p }).raw().toBuffer();
    const m = await sharp(f, { page: p }).metadata();
    const { width, height, channels } = m;
    let lime = 0, ink = 0, nonwhite = 0, total = 0;
    for (let i = 0; i < buf.length; i += channels) {
      if (channels === 4 && buf[i + 3] < 10) continue;
      const r = buf[i], g = buf[i + 1], b = buf[i + 2];
      total++;
      if (Math.abs(r - 107) < 40 && Math.abs(g - 233) < 40 && Math.abs(b - 35) < 40) lime++;
      if (r < 40 && g < 40 && b < 40) ink++;
      if (!(r > 245 && g > 245 && b > 245)) nonwhite++;
    }
    console.log(`page ${p}: ${width}x${height} channels=${channels} opaque=${total}`);
    console.log(`  lime: ${lime} (${(100*lime/total).toFixed(1)}%), ink: ${ink} (${(100*ink/total).toFixed(1)}%), non-white: ${(100*nonwhite/total).toFixed(1)}%`);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
