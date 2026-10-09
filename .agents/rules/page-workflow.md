Construye la página [nombre-pagina] siguiendo este flujo:

FASE 1 — Análisis:
1. Lee el mock: public/[nombre-pagina]/mockpage.png (o el archivo que uses)
2. Inventaría los recursos en public/[nombre-pagina]/ (imágenes, iconos, etc.)
3. Describe qué ves en el mock y qué recursos hay disponibles

FASE 2 — Implementación:
1. Crea src/pages/[ruta]/[nombre-pagina].astro basándote en el mock
2. Usa los recursos hallados en public/[nombre-pagina]/
3. Aplica los principios del contexto del proyecto (Tailwind, mobile-first, Astro-first)

FASE 3 — Validación:
1. Corre `npm run dev` (o el comando de tu proyecto)
2. Abre en navegador: [ruta-pagina]
3. Toma screenshot y compáralo con el mock
4. Si hay diferencias visuales notables (tamaños, posiciones, colores, espaciado), revisa y ajusta el código
5. Itera hasta que la página coincida visualmente con el mock

Repórtame los pasos completados y cualquier ajuste que hayas hecho.