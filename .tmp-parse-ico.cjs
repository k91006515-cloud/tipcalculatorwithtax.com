const fs = require('fs');
const buf = fs.readFileSync('public/favicon.ico');

const reserved = buf.readUInt16LE(0);
const type = buf.readUInt16LE(2);
const count = buf.readUInt16LE(4);
console.log(`ICO: reserved=${reserved} type=${type} count=${count}`);

let offset = 6;
const images = [];
for (let i = 0; i < count; i++) {
  const width = buf[offset] === 0 ? 256 : buf[offset];
  const height = buf[offset + 1] === 0 ? 256 : buf[offset + 1];
  const colorCount = buf[offset + 2];
  const planes = buf.readUInt16LE(offset + 4);
  const bitCount = buf.readUInt16LE(offset + 6);
  const bytesInRes = buf.readUInt32LE(offset + 8);
  const imageOffset = buf.readUInt32LE(offset + 12);
  images.push({ width, height, colorCount, planes, bitCount, bytesInRes, imageOffset });
  offset += 16;
}
console.log('Images:', JSON.stringify(images, null, 2));

for (const img of images) {
  const data = buf.subarray(img.imageOffset, img.imageOffset + img.bytesInRes);
  const isPng = data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4e && data[3] === 0x47;
  if (isPng) {
    console.log(`\nImage ${img.width}x${img.height}: EMBEDDED PNG, ${img.bytesInRes} bytes`);
    continue;
  }
  const bmpWidth = data.readInt32LE(4);
  const bmpHeight = Math.abs(data.readInt32LE(8));
  const bitCount2 = data.readUInt16LE(14);
  const compression = data.readUInt32LE(16);
  const pixelStart = data.readInt32LE(10);
  const bpp = bitCount2 / 8;
  const stride = Math.floor((bmpWidth * bpp + 3) / 4) * 4;
  let lime = 0, ink = 0, nonwhite = 0, all = 0;
  for (let row = 0; row < bmpHeight; row++) {
    const rowOffset = pixelStart + row * stride;
    for (let col = 0; col < bmpWidth; col++) {
      const po = rowOffset + col * bpp;
      if (po + 2 >= data.length) continue;
      const b = data[po], g = data[po + 1], r = data[po + 2];
      all++;
      if (r < 40 && g < 40 && b < 40) ink++;
      if (Math.abs(r - 107) < 40 && Math.abs(g - 233) < 40 && Math.abs(b - 35) < 40) lime++;
      if (!(r > 245 && g > 245 && b > 245)) nonwhite++;
    }
  }
  console.log(`\nImage ${bmpWidth}x${bmpHeight}: BMP bitCount=${bitCount2} compression=${compression} pixelStart=${pixelStart}`);
  console.log(`  lime(#6be923-ish): ${lime} (${(100*lime/all).toFixed(1)}%), ink(#050505-ish): ${ink} (${(100*ink/all).toFixed(1)}%), non-white: ${(100*nonwhite/all).toFixed(1)}%`);
}
