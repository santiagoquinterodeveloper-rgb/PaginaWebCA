# Guía de despliegue: sitio Astro en cPanel (clinicantioquia.com.co)

Esta guía resume cómo reemplazar el WordPress del dominio principal por el sitio estático hecho con Astro, **sin afectar la intranet ni los cursos**, y cómo volver atrás si algo sale mal.

---

## 1. Contexto del hosting

- Dominio principal: `clinicantioquia.com.co` → carpeta `/public_html`
- `clinicantioquia.com` es un **dominio alias**: comparte la carpeta del principal (no se le puede cambiar el Document Root).
- `intranet.clinicantioquia.com...` → carpeta `/public_html/intranet`
- La cuenta ya alcanzó el límite de dominios: no se pueden crear subdominios nuevos.
- Los respaldos automáticos están en JetBackup (destino `s3-backup`, diarios y semanales).
- Ruta base de la cuenta: `/home3/clinican`

Como WordPress, la intranet y los cursos conviven dentro de `public_html`, **nunca se debe vaciar ni reemplazar toda la carpeta**.

---

## 2. Antes de empezar (checklist)

- [ ] Confirmar en JetBackup (*Restore & Download → Full Account*) que existe un respaldo reciente.
- [ ] Descargar la base de datos de WordPress desde phpMyAdmin (*Exportar → SQL*). El nombre exacto está en `wp-config.php`, línea `DB_NAME`.
- [ ] Descargar una copia del `.htaccess` actual.
- [ ] Abrir la intranet, `/cursos` y `/cursos2` y confirmar que funcionan (para comparar después).
- [ ] Probar el sitio nuevo en local con `npm run build` y `npm run preview`.

---

## 3. Preparar el sitio (en el computador)

1. Optimizar las imágenes de `public/` (convertir a WebP, ancho máximo 1920 px). El proyecto incluye el script `optimize-images.mjs`.
2. Comprimir o enlazar desde Google Drive los PDFs pesados (meta: menos de 15 MB cada uno).
3. En `astro.config.mjs`, verificar que `site` sea `https://clinicantioquia.com.co`.
4. Verificar que exista `src/pages/404.astro` (genera `404.html`).
5. Ejecutar `npm run build`.
6. Revisar que `dist/` pese poco (idealmente entre 10 y 50 MB).
7. Comprimir **el contenido** de `dist/` (no la carpeta `dist`) en `sitio.zip`. Al abrir el zip debe verse `index.html` directamente.
8. En cPanel (*File Manager*), subir y extraer el zip en `/nuevo_sitio` (carpeta fuera de `public_html`).

> Nota: la cuenta tiene poco espacio libre. El zip y los archivos extraídos ocupan espacio a la vez. Borra el `.zip` apenas lo extraigas.

---

## 4. Qué NO tocar nunca

**En la raíz de la cuenta (`/home3/clinican`):**
- `moodledata2` (datos de los cursos)
- `mail` (correos)
- `ssl`, `etc`, `.cpanel`, `logs`, `tmp`, `public_ftp`

**En cPanel:**
- Zone Editor (DNS) y cuentas de correo
- Base de datos de WordPress y de otras aplicaciones (no borrar hasta estar seguros)
- Botón "Remove Domain" de cualquier dominio
- Document Root de `clinicantioquia.com.co` e `intranet`

---

## 5. Qué va a `public_html/wp-viejo` (se MUEVE, no se borra)

Crear primero la carpeta `public_html/wp-viejo`. Luego **mover** (botón *Move*, nunca *Delete*) todo lo que sea de WordPress:

**Carpetas**
- `wp-admin`
- `wp-content`
- `wp-includes`

**Archivos**
- Todos los `wp-*.php`: `wp-activate.php`, `wp-blog-header.php`, `wp-comments-post.php`, `wp-config.php`, `wp-config-sample.php`, `wp-cron.php`, `wp-links-opml.php`, `wp-load.php`, `wp-login.php`, `wp-mail.php`, `wp-settings.php`, `wp-signup.php`, `wp-trackback.php`
- `xmlrpc.php`
- `index.php`
- `license.txt`
- `readme.html`
- `.htaccess.bk` (respaldo antiguo)
- `.htaccess` (ver sección 7: se reemplaza por uno nuevo)

> Truco en File Manager: activa *Settings → Show Hidden Files (dotfiles)*. Usa *Select All*, quita con **Ctrl+clic** lo que debe quedarse (sección 6) y pulsa *Move*.

---

## 6. Qué se QUEDA en `public_html`

- `intranet`
- `cursos`
- `cursos2`
- `.well-known` (validación del certificado SSL)
- `cgi-bin`
- `.tmb`
- `.monarx-user` (protección contra malware)
- `error_log`
- `wp-viejo` (la carpeta de respaldo)

Más, por supuesto, **el contenido del sitio nuevo**.

---

## 7. Publicar el sitio nuevo

1. Mover los archivos de WordPress a `wp-viejo` (sección 5).
2. En `/nuevo_sitio`: *Select All → Copy* → destino `/public_html`.
3. Verificar que `public_html/index.html` existe y que las carpetas del sitio (`inicio`, `servicios`, etc.) quedaron dentro de `public_html`.

### `.htaccess` nuevo

Antes de editarlo, guarda una copia del viejo en `public_html/wp-viejo/.htaccess.wp`.

Luego edita `public_html/.htaccess`, borra todo su contenido y deja:

```apache
# Forzar HTTPS (deja pasar la validación del SSL automático)
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} !=on [NC]
RewriteCond %{REQUEST_URI} !^/\.well-known/acme-challenge/
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
</IfModule>

# No listar el contenido de carpetas
Options -Indexes

# Página 404 del sitio nuevo
ErrorDocument 404 /404.html
```

**Por qué hay que reemplazarlo:** el `.htaccess` de WordPress contiene `RewriteRule . /index.php [L]`, que envía toda URL inexistente a `index.php`. Como `index.php` ya no existe, se vería el 404 genérico del servidor en lugar del 404 propio de Astro. El archivo viejo solo tenía reglas de WordPress, LiteSpeed Cache y Really Simple Security, así que no hay bloques de cPanel que conservar.

---

## 8. Verificación final

Abrir en ventana de incógnito (o con Ctrl+F5):

- [ ] `https://clinicantioquia.com.co` → sitio nuevo
- [ ] `https://clinicantioquia.com` → sitio nuevo
- [ ] La intranet → funciona igual que antes
- [ ] `/cursos` y `/cursos2` → abren
- [ ] Una URL inexistente → muestra la página 404 de Astro
- [ ] Menú, enlaces, imágenes y PDFs, en escritorio y celular

---

## 9. Reversa (si algo sale mal)

1. Mover (o borrar) de `public_html` los archivos del sitio nuevo.
2. Mover de `public_html/wp-viejo` de regreso a `public_html` todos los archivos y carpetas de WordPress.
3. Restaurar el `.htaccess` desde `wp-viejo/.htaccess.wp`.
4. Si no basta, restaurar desde JetBackup (*Restore & Download → Home Directory*, eligiendo la fecha anterior a la publicación).

---

## 10. Limpieza posterior

- [ ] Borrar la carpeta `/nuevo_sitio` (libera espacio).
- [ ] Mantener `wp-viejo` unas dos semanas; después eliminarla.
- [ ] Mantener la base de datos de WordPress hasta estar totalmente seguros de no necesitarla.
- [ ] Activar *Force HTTPS Redirect* en *Domains*, o dejar solo la regla del `.htaccess` (no hace falta ambas).
- [ ] Opcional: redirigir `clinicantioquia.com` hacia `clinicantioquia.com.co`, para tener una sola dirección oficial. Como es un dominio alias, se hace con una regla en el `.htaccess` o desde *Domains → Modify The Redirects*.

---

## 11. Pendientes recomendados

- **SEO:** las URLs antiguas de WordPress (por ejemplo `/nosotros/` o `/?p=123`) ya no existen. Conviene redirigir las más importantes a las páginas nuevas con reglas `Redirect 301 /ruta-vieja /ruta-nueva` en el `.htaccess`.
- **Espacio en disco:** la cuenta tenía solo unos 376 MB libres. Revisar *Disk Usage* en cPanel para ver qué ocupa más espacio (sin borrar `moodledata2`, `mail` ni `intranet`).
- **Futuras actualizaciones:** para cambiar contenido, repetir `npm run build` y subir el contenido de `dist/` a `public_html`, sin tocar `intranet`, `cursos`, `cursos2`, `wp-viejo`, `.well-known`, `cgi-bin` ni `.htaccess`.

## 12. htaccess

- Se añadio el archivo original **htaccess** del wp viejo a este proyecto en la carpeta raiz `/deeply-dwarf/` 
por si en algun momento se requiere restaurar la antigua pagina