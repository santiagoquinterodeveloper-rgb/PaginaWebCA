---
trigger: always_on
---

# Architecture

## 1. Enfoque

El proyecto utiliza una arquitectura simple orientada a un sitio web estático construido con Astro.

La estructura debe mantenerse proporcional al alcance del proyecto. No se requiere una arquitectura por capas, patrones complejos, separación de servicios ni un sistema de diseño formal.

La organización debe facilitar principalmente:

* Localizar rápidamente los archivos.
* Reutilizar componentes cuando sea necesario.
* Mantener las páginas independientes y fáciles de modificar.
* Evitar acoplamiento y abstracciones innecesarias.

## 2. Estructura principal

La estructura base del proyecto seguirá la organización convencional de Astro:

```text
src/
├── components/
├── layouts/
├── pages/
├── assets/
└── styles/
```

### `src/pages/`

Contiene las páginas y rutas del sitio.

Cada archivo representa una ruta de la aplicación según las convenciones de Astro.

Las páginas deben encargarse principalmente de:

* Componer el contenido.
* Utilizar layouts y componentes.
* Definir la estructura específica de cada ruta.

No deben contener lógica compleja.

### `src/components/`

Contiene componentes reutilizables de interfaz.

Un componente debe crearse cuando:

* Existe una sección reutilizable.
* Un elemento tiene una responsabilidad visual clara.
* La extracción mejora la legibilidad o mantenimiento.

No se deben crear componentes únicamente para fragmentos pequeños que no aporten reutilización o claridad.

### `src/layouts/`

Contiene layouts compartidos entre páginas.

Los layouts deben utilizarse para elementos estructurales comunes, como:

* Estructura general del documento HTML.
* `<head>`.
* Metadatos comunes.
* Elementos globales de la página.

### `src/assets/`

Contiene recursos que forman parte del proyecto y que requieren procesamiento o importación desde Astro.

Ejemplos:

* Imágenes.
* Iconos.
* Fuentes locales, si fueran necesarias.

Los recursos estáticos que deban servirse directamente sin procesamiento pueden ubicarse en `public/`.

### `src/styles/`

Contiene estilos globales o CSS que no sea conveniente gestionar mediante Tailwind.

Debe mantenerse al mínimo, ya que Tailwind es la solución principal de estilos.

## 3. `public/`

Los archivos de `public/` se utilizan para recursos que deben estar disponibles directamente mediante una URL pública.

Ejemplos:

* Favicons.
* Archivos estáticos.
* Imágenes que no requieren procesamiento.
* Recursos externos que deban conservar su nombre o ruta.

## 4. Organización de contenido

El contenido debe permanecer cercano a la página o componente que lo utiliza cuando sea específico de una sola sección.

Si existe contenido reutilizado en varias partes del sitio, se puede extraer a una ubicación compartida.

No se debe introducir un sistema de gestión de contenido, base de datos u otra infraestructura mientras el contenido pueda mantenerse como parte del proyecto estático.

## 5. Flujo de composición

La composición esperada de una página es:

```text
Page
 ├── Layout
 ├── Section components
 │    ├── Content
 │    └── UI elements
 └── Static assets
```

La composición debe mantenerse simple. Los componentes deben recibir únicamente los datos necesarios y evitar cadenas innecesarias de abstracciones.

## 6. Regla de complejidad

La arquitectura debe evolucionar únicamente cuando el proyecto lo requiera.

No se deben introducir:

* Capas de servicios sin necesidad.
* Repositorios.
* Controladores.
* Estado global.
* Sistemas de gestión de estado.
* APIs internas.
* Patrones arquitectónicos complejos.

Si una nueva funcionalidad requiere una decisión arquitectónica diferente, esta debe evaluarse primero frente al alcance y naturaleza estática del proyecto.
