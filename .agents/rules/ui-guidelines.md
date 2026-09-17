---
trigger: always_on
---

# UI Guidelines

## 1. Objetivo

La interfaz debe priorizar claridad, legibilidad y facilidad de navegación.

El diseño debe ser visualmente consistente sin introducir complejidad innecesaria. Cada elemento debe tener una función clara y contribuir a la experiencia del usuario.

## 2. Responsive Design

El sitio debe funcionar correctamente en:

* Móviles.
* Tablets.
* Computadores de escritorio.

El diseño debe desarrollarse con un enfoque **mobile-first** utilizando las capacidades responsive de Tailwind CSS.

No se deben crear diseños independientes para cada dispositivo. Los componentes deben adaptarse mediante breakpoints y layouts flexibles.

## 3. Jerarquía visual

La interfaz debe utilizar una jerarquía visual clara.

Se debe prestar especial atención a:

* Títulos y subtítulos.
* Tamaño y peso tipográfico.
* Espaciado entre secciones.
* Contraste.
* Agrupación de contenido relacionado.
* Elementos interactivos.

El usuario debe poder identificar rápidamente qué información es principal y qué acciones puede realizar.

## 4. Layout y espaciado

Se debe utilizar un sistema de espaciado consistente basado en las utilidades de Tailwind.

Preferir:

* Contenedores con ancho máximo cuando el contenido lo requiera.
* Layouts mediante `flex` y `grid`.
* Espaciado consistente entre elementos.
* Márgenes y padding definidos mediante las escalas de Tailwind.

Evitar valores arbitrarios cuando exista una utilidad de Tailwind adecuada.

## 5. Tipografía

La tipografía debe priorizar:

* Legibilidad.
* Contraste adecuado.
* Jerarquía clara.
* Tamaños apropiados para cada dispositivo.

Los tamaños, pesos y alturas de línea deben mantenerse consistentes entre elementos equivalentes.

No se deben utilizar múltiples familias tipográficas sin una razón de diseño clara.

## 6. Color

La paleta de colores debe mantenerse limitada y consistente.

Los colores deben utilizarse de manera semántica para diferenciar:

* Contenido principal.
* Elementos secundarios.
* Acciones.
* Estados.
* Advertencias o errores.

No se deben introducir colores aislados para elementos individuales si existe una alternativa dentro de la paleta establecida.

## 7. Componentes

Los componentes visuales deben mantener una apariencia y comportamiento consistente.

Elementos recurrentes como:

* Botones.
* Enlaces.
* Cards.
* Navegación.
* Secciones.
* Elementos informativos.

deben seguir patrones visuales comunes.

La reutilización debe utilizarse cuando realmente mejore la consistencia o mantenimiento. No se debe abstraer cada elemento visual en un componente independiente.

## 8. Interactividad

Los elementos interactivos deben proporcionar señales visuales claras.

Los estados relevantes deben contemplarse cuando corresponda:

* `hover`.
* `focus`.
* `active`.
* `disabled`.

Los enlaces y botones deben ser visualmente distinguibles del contenido no interactivo.

La interactividad debe mantenerse simple y utilizar JavaScript únicamente cuando HTML, CSS o Astro no sean suficientes.

## 9. Accesibilidad

La interfaz debe seguir buenas prácticas básicas de accesibilidad:

* Utilizar HTML semántico.
* Mantener contraste suficiente.
* Proporcionar `alt` descriptivo en imágenes relevantes.
* Utilizar elementos interactivos nativos cuando sea posible.
* Mantener indicadores visibles de `focus`.
* No depender exclusivamente del color para comunicar información.

## 10. Consistencia

Antes de crear un nuevo patrón visual, se debe comprobar si existe uno equivalente en el proyecto.

Las nuevas páginas y componentes deben reutilizar los patrones existentes siempre que sean adecuados.

La prioridad es mantener una interfaz coherente, no maximizar la cantidad de componentes o estilos reutilizables.
