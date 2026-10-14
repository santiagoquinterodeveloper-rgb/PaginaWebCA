// Optimiza las imágenes de /public: las convierte a WebP con ancho máximo de 1920 px.
// NO modifica los originales: guarda el resultado en la carpeta "public-optimizada".
//
// Uso (desde la raíz del proyecto Astro):
//   node optimize-images.mjs
//
// Si da error "Cannot find package 'sharp'", ejecuta antes:  npm i -D sharp

import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'public';
const OUT = 'public-optimizada';
const MAX_WIDTH = 1920;
const QUALITY = 80;
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);
// Archivos que conviene dejar como están (favicons, imagen para redes sociales)
const SKIP = [/favicon/i, /apple-touch/i, /og[-_]?image/i];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for await (const file of walk(SRC)) {
  const ext = path.extname(file).toLowerCase();
  if (!EXTENSIONS.has(ext)) continue;
  if (SKIP.some((re) => re.test(path.basename(file)))) {
    console.log(`(omitido) ${file}`);
    continue;
  }

  const relative = path.relative(SRC, file);
  const target = path.join(OUT, relative).replace(/\.(png|jpe?g)$/i, '.webp');
  await mkdir(path.dirname(target), { recursive: true });

  const before = (await stat(file)).size;
  await sharp(file, { limitInputPixels: false })
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(target);
  const after = (await stat(target)).size;

  totalBefore += before;
  totalAfter += after;
  count++;
  console.log(`${relative}: ${mb(before)} MB -> ${mb(after)} MB`);
}

console.log('\n----------------------------------------');
console.log(`Imágenes procesadas: ${count}`);
console.log(`Antes:   ${mb(totalBefore)} MB`);
console.log(`Después: ${mb(totalAfter)} MB`);
console.log(`Resultado en la carpeta: ${OUT}`);
