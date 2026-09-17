---
trigger: always_on
---

# Coding Guidelines

## 1. Principios

El código debe priorizar:

* Claridad.
* Simplicidad.
* Mantenibilidad.
* Consistencia.
* Bajo acoplamiento.

Se debe evitar implementar abstracciones, patrones o estructuras que no aporten un beneficio concreto al proyecto.

## 2. Astro

Los componentes `.astro` deben mantenerse enfocados en una responsabilidad clara.

Preferir:

* Componentes pequeños y reutilizables cuando aporten valor.
* Props explícitas.
* HTML semántico.
* Lógica mínima dentro de los componentes.
* Composición de componentes antes que duplicación de markup.

Evitar componentes excesivamente genéricos que dificulten entender cómo se utiliza la interfaz.

## 3. TypeScript

Utilizar TypeScript cuando mejore la seguridad o claridad del código.

Preferir:

* Tipos explícitos para estructuras de datos relevantes.
* Interfaces o `type` cuando exista una estructura reutilizada.
* Inferencia de tipos cuando el tipo sea evidente.

Evitar:

* Tipado excesivamente complejo.
* Abstracciones genéricas innecesarias.
* Uso indiscriminado de `any`.

## 4. JavaScript

JavaScript debe utilizarse únicamente cuando exista una necesidad de comportamiento en el cliente.

Antes de implementar JavaScript, comprobar si el comportamiento puede resolverse mediante:

1. HTML.
2. CSS.
3. Astro.
4. JavaScript.

El código del cliente debe mantenerse pequeño y específico para la interacción que resuelve.

## 5. Tailwind CSS

Tailwind CSS es la herramienta principal para estilos.

Preferir:

* Utilidades de Tailwind.
* Clases consistentes.
* Variantes responsive.
* Reutilización mediante componentes cuando exista UI repetida.

Evitar:

* CSS personalizado innecesario.
* Estilos inline.
* Valores arbitrarios cuando exista una utilidad adecuada.
* Cadenas excesivamente complejas de clases cuando indiquen que el componente necesita una mejor organización.

## 6. Nombres

Los nombres deben ser descriptivos y consistentes.

* Componentes: `PascalCase`.
* Variables y funciones: `camelCase`.
* Constantes: `UPPER_SNAKE_CASE` cuando represente una constante global o configuración.
* Archivos de componentes: `PascalCase.astro`.
* Archivos utilitarios: nombres descriptivos en `camelCase`.

Evitar abreviaciones cuyo significado no sea evidente.

## 7. Imports

Los imports deben mantenerse organizados y limpios.

* Eliminar imports que no se utilicen.
* Evitar imports duplicados.
* Utilizar los aliases configurados por el proyecto cuando mejoren la claridad.
* Evitar rutas relativas excesivamente largas cuando exista un alias apropiado.

## 8. Código duplicado

No duplicar lógica o estructuras cuando exista una reutilización clara y sencilla.

Sin embargo, no se debe crear una abstracción únicamente para eliminar unas pocas líneas de código. La reutilización debe mejorar realmente la mantenibilidad.

## 9. Manejo de errores

Los errores deben manejarse de forma proporcional a la funcionalidad.

No se deben crear sistemas complejos de manejo de errores para operaciones simples.

Los errores producidos por funcionalidades dinámicas deben:

* Ser detectables durante el desarrollo.
* Evitar romper innecesariamente la interfaz.
* Mostrar información útil al usuario cuando corresponda.

## 10. Comentarios

El código debe ser suficientemente claro para reducir la necesidad de comentarios.

Los comentarios deben utilizarse para explicar:

* Decisiones no obvias.
* Restricciones técnicas.
* Comportamientos que puedan resultar contraintuitivos.

No utilizar comentarios para describir literalmente lo que hace una línea de código evidente.

## 11. Cambios y refactorización

Antes de modificar código existente:

1. Comprender cómo funciona actualmente.
2. Identificar los componentes o archivos afectados.
3. Realizar el cambio mínimo necesario.
4. Comprobar que no se introduzcan regresiones.

No realizar refactorizaciones generales como parte de una tarea específica salvo que sean necesarias para implementar correctamente el requerimiento.

## 12. Dependencias y complejidad

No añadir librerías, patrones o infraestructura sin una necesidad concreta.

Ante dos soluciones funcionalmente equivalentes, preferir la que tenga:

* Menos dependencias.
* Menos código.
* Menos abstracciones.
* Menor complejidad de mantenimiento.

El código debe reflejar el alcance real del proyecto y no el de una aplicación de mayor escala.
