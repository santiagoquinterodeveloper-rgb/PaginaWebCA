// ---------------------------------------------------------------------------
// scripts/sync-pagefind.mjs
// Copia el índice de Pagefind generado en `dist/pagefind` a `public/pagefind`
// para que `astro dev` lo sirva estáticamente. Se ejecuta vía `postbuild`.
// ---------------------------------------------------------------------------
import { rmSync, cpSync, existsSync } from 'node:fs';

const src = 'dist/pagefind';
const dest = 'public/pagefind';

if (!existsSync(src)) {
  console.warn(`[sync-pagefind] ${src} no existe; omitiendo. ¿Falló Pagefind?`);
  process.exit(0);
}

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log(`[sync-pagefind] Copiado ${src} -> ${dest}`);
