---
trigger: always_on
---

# Agent Instructions

## 1. Propósito

Este archivo define las reglas operativas para los agentes que trabajen en el proyecto.

Los agentes deben utilizar este documento junto con el resto de la documentación del proyecto para tomar decisiones e implementar cambios de forma consistente.

## 2. Documentación de referencia

Antes de realizar cambios relevantes, consultar la documentación correspondiente:

* `ARCHITECTURE.md` — organización y estructura del proyecto.
* `UI_GUIDELINES.md` — criterios de interfaz y experiencia de usuario.
* `CODING_GUIDELINES.md` — convenciones y prácticas de código.

No duplicar en este archivo las reglas definidas en esos documentos.

## 3. Antes de implementar

Antes de modificar el proyecto:

1. Revisar la estructura existente.
2. Identificar los archivos y componentes relacionados con la tarea.
3. Comprender el comportamiento actual antes de modificarlo.
4. Verificar si ya existe un componente, utilidad o patrón que pueda reutilizarse.
5. Determinar la solución más sencilla que cumpla el requerimiento.

No asumir que es necesario crear nuevos archivos, componentes o dependencias.

## 4. Implementación

Los agentes deben:

* Realizar cambios directamente relacionados con la tarea solicitada.
* Mantener la solución proporcional a la complejidad del proyecto.
* Reutilizar código existente cuando sea apropiado.
* Mantener consistencia con la estructura actual.
* Evitar modificar funcionalidades no relacionadas.
* Priorizar soluciones simples y fáciles de mantener.

Si una solución sencilla es suficiente, no introducir una arquitectura más compleja.

## 5. Decisiones técnicas

Ante varias alternativas válidas, priorizar:

1. La solución más simple.
2. La que mejor se integre con la arquitectura existente.
3. La que requiera menos dependencias.
4. La que genere menos código y mantenimiento.
5. La que preserve el enfoque estático del proyecto.

No introducir tecnologías, patrones o infraestructura adicionales sin justificar previamente su necesidad.

## 6. Interfaz

Al trabajar en la interfaz:

* Seguir `UI_GUIDELINES.md`.
* Utilizar los componentes existentes cuando sean adecuados.
* Mantener consistencia visual entre páginas y componentes.
* Verificar el comportamiento responsive.
* Considerar accesibilidad básica.

No crear nuevos patrones visuales si puede reutilizarse uno existente.

## 7. Código

Al escribir o modificar código:

* Seguir `CODING_GUIDELINES.md`.
* Mantener los componentes enfocados.
* Evitar lógica innecesaria en el cliente.
* Mantener JavaScript al mínimo necesario.
* Utilizar Tailwind para los estilos.
* Evitar abstracciones prematuras.

## 8. Validación

Después de realizar cambios:

1. Verificar que no existan errores de compilación.
2. Ejecutar las comprobaciones disponibles del proyecto cuando corresponda.
3. Revisar visualmente las páginas afectadas cuando el cambio sea de UI.
4. Comprobar especialmente el comportamiento responsive cuando se modifique la interfaz.
5. Confirmar que el cambio solicitado funciona sin afectar funcionalidades relacionadas.

Si una validación no puede ejecutarse, indicarlo en lugar de asumir que el cambio funciona.

## 9. Manejo de incertidumbre

Si una decisión no está definida en la documentación:

* Revisar primero el código existente.
* Buscar patrones ya utilizados en el proyecto.
* Elegir la solución más simple compatible con el contexto.
* No introducir una solución compleja únicamente para resolver una incertidumbre.

Si existen varias alternativas con consecuencias importantes, solicitar aclaración antes de implementar.

## 10. Alcance de los cambios

Los agentes deben evitar el *scope creep*.

Una tarea debe resolverse sin:

* Refactorizaciones no relacionadas.
* Cambios generales de arquitectura.
* Nuevas dependencias innecesarias.
* Reestructuraciones completas sin requerimiento.
* Modificaciones de funcionalidades que no forman parte de la tarea.

Si durante una tarea se identifica una mejora independiente, debe señalarse como recomendación separada en lugar de implementarla automáticamente.

## 11. Actualización de documentación

La documentación debe actualizarse únicamente cuando una decisión permanente del proyecto haya cambiado.

No modificar los documentos de contexto por cambios menores de implementación.

Cuando una decisión afecte el alcance, stack, arquitectura, UI o convenciones generales, actualizar únicamente el documento responsable de esa información.
