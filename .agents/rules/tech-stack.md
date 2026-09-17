---
trigger: model_decision
description: Aplicar únicamente durante la fase inicial del proyecto para comprender sus tecnologias.
---

# Tech Stack

## 1. Tecnologías principales

El proyecto utiliza:

* **Astro** como framework principal.
* **TypeScript** para tipado y lógica cuando aporte valor.
* **HTML** para la estructura del contenido.
* **CSS** mediante **Tailwind CSS** para los estilos.
* **JavaScript** únicamente cuando sea necesario para interactividad en el cliente.

## 2. Astro

Astro es el framework principal del proyecto y debe utilizarse aprovechando su enfoque orientado a contenido y generación de sitios estáticos.

Se debe priorizar:

* Renderizado estático.
* Componentes Astro para estructurar y reutilizar UI.
* Mínimo JavaScript enviado al cliente.
* Uso de las capacidades nativas de Astro antes de introducir soluciones externas.

No se debe incorporar un framework frontend adicional como React, Vue o Svelte salvo que exista una necesidad concreta que lo justifique.

## 3. TypeScript

TypeScript puede utilizarse cuando mejore la seguridad, claridad o mantenibilidad del código.

Debe evitarse utilizar TypeScript de forma innecesariamente compleja para funcionalidades simples.

## 4. Tailwind CSS

**Tailwind CSS** será la solución principal para los estilos del proyecto.

Se debe priorizar:

* Utilizar clases utilitarias de Tailwind directamente en los componentes.
* Mantener consistencia en espaciado, tipografía, tamaños y responsive design.
* Reutilizar componentes cuando exista UI repetida.
* Evitar CSS personalizado cuando Tailwind pueda resolver correctamente el requerimiento.

El CSS personalizado se utilizará únicamente cuando exista una necesidad que no sea conveniente o razonable resolver con Tailwind.

## 5. JavaScript

JavaScript debe mantenerse al mínimo necesario.

Solo debe utilizarse para funcionalidades que requieran ejecución en el navegador, como:

* Interacciones específicas.
* Menús o elementos dinámicos.
* Eventos de usuario.
* Funcionalidades que no puedan resolverse mediante HTML y CSS.

No se debe añadir JavaScript para comportamientos que puedan resolverse de forma más sencilla con Astro, HTML o CSS.

## 6. Dependencias

Las nuevas dependencias deben incorporarse únicamente cuando resuelvan una necesidad real del proyecto.

Antes de añadir una dependencia, se debe considerar si la funcionalidad puede implementarse razonablemente utilizando las capacidades existentes de Astro, Tailwind, TypeScript, HTML, CSS o JavaScript.

Se debe evitar agregar librerías por conveniencia cuando introduzcan más complejidad de la que eliminan.
