---
trigger: model_decision
description: Aplicar únicamente durante la fase inicial del proyecto para comprender su contexto, objetivos, alcance y restricciones. No utilizar este archivo como guía para implementar, modificar o revisar código.
---

# Project Context

## 1. Propósito

Este proyecto consiste en el desarrollo de un sitio web estático utilizando **Astro**.

El sitio tiene como objetivo principal presentar información de forma clara, rápida y responsive, además de proporcionar enlaces y redirecciones hacia recursos o servicios externos.

## 2. Alcance

El proyecto está orientado a:

* Mostrar información y contenido de forma estructurada.
* Facilitar la navegación entre diferentes secciones.
* Proporcionar enlaces hacia servicios, plataformas o recursos externos.
* Ofrecer una experiencia adecuada en dispositivos móviles y de escritorio.
* Mantener tiempos de carga bajos y una estructura sencilla de mantener.

## 3. Límites del proyecto

El sitio **no requiere**:

* Backend propio.
* Base de datos.
* Autenticación de usuarios.
* Lógica de negocio compleja.
* APIs propias.
* Arquitecturas distribuidas.
* Un sistema de diseño o arquitectura de software complejo.

Si una funcionalidad puede resolverse mediante contenido estático, navegación, componentes de Astro o JavaScript puntual en el cliente, se debe preferir esa solución antes que introducir infraestructura adicional.

## 4. Principios del proyecto

Las decisiones de desarrollo deben priorizar, en este orden:

1. **Simplicidad:** evitar complejidad que no aporte valor.
2. **Claridad:** el contenido y la navegación deben ser fáciles de comprender.
3. **Rendimiento:** aprovechar las características de Astro y mantener el JavaScript del cliente al mínimo necesario.
4. **Responsive:** el sitio debe funcionar correctamente en diferentes tamaños de pantalla.
5. **Mantenibilidad:** la estructura debe permitir modificar y ampliar el sitio sin introducir complejidad innecesaria.

## 5. Criterio de desarrollo

Los agentes deben tomar decisiones proporcionales al alcance real del proyecto. No se debe introducir infraestructura, patrones, abstracciones o dependencias únicamente por seguir prácticas destinadas a aplicaciones de mayor complejidad.

Ante varias soluciones válidas, se debe preferir la que:

* Resuelva directamente el requerimiento.
* Tenga menor complejidad.
* Sea fácil de entender y mantener.
* Introduzca la menor cantidad de dependencias o infraestructura adicional.

Los detalles técnicos, estructurales, visuales y de implementación se definen en sus respectivos documentos de contexto.
