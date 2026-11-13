# Notas de corrección - Simulador 4D (backlog de iteración SAM)
### Revisión de diseño - v0.1 -> v0.2 (pendiente de implementar)

> Estado: NOTAS. Nada de esto está implementado todavía. Autoría de las notas: Ana Eslava-Graterol.
> Origen: revisión del draft v0.1. Prioridad de la iteración: experiencia de manipulación real + instrucción just-in-time.

---

## N1. Menos explicación por adelantado; instrucción just-in-time
- Problema: ahora se explica demasiado tanto los objetivos como "lo que hay que hacer" antes de empezar. Se solapa y cansa.
- Cambio deseado: que las instrucciones vayan apareciendo a medida que se mueve/manipula el simulador 4D (just-in-time), no todas de golpe al inicio.
- Implicación: recortar el texto introductorio del paso "Simular" (p. ej. la lista de 4 etapas) y trasladar el "qué hacer" a mensajes contextuales que se disparan con la acción.
- Criterio de aceptación: el aprendiz puede empezar a manipular sin leer un bloque largo; la siguiente instrucción se revela según avanza.

## N2. Pestaña adicional de instrucciones paso a paso
- Cambio deseado: incluir la pieza del simulador en una tab, y una tab adicional donde se vayan diseñando/mostrando las instrucciones paso a paso.
- Comportamiento: a medida que el simulador avanza, el paso correspondiente se resalta en esa pestaña (sincronizado con la manipulación).
- Nota: esa pestaña también sirve como lienzo de diseño de la secuencia de instrucciones (para la ID/autora).
- Criterio de aceptación: dos pestañas (Simulador | Instrucciones); el paso activo se marca solo según la acción del aprendiz.

## N3. Manipulación real, no botones/teclado
- Problema: avanzar pulsando botones ("Siguiente puntada", "surce") equivale a teclear; no permite que el operario manipule el simulador.
- Cambio deseado: que el operario manipule directamente el simulador (gesto táctil), no que confirme con botones.
- Criterio de aceptación: el avance de la sutura ocurre por manipulación directa (arrastrar), no por pulsar un botón de "siguiente".

## N4. Aguja arrastrable e hilo (idea concreta)
- Idea: crear una aguja que, con el dedo, se arrastre hasta el punto de sutura resaltado.
- Simular el hilo y la aguja entrando en los puntos de costura/cosido: el hilo sigue a la aguja y se va "cosiendo" punto a punto.
- Orden correcto: llevar la aguja al punto resaltado = puntada colocada; punto equivocado = bloqueo "para revisar" (ámbar, no rojo).
- Criterio de aceptación: arrastrar la aguja al punto activo cose ese punto y extiende el hilo; soltar en otro punto bloquea y lo indica.

---

## Notas de implementación (para cuando se autorice codificar)
- Mantener telemetría: cada arrastre/soltar = sentencia xAPI (verbo ADL `interacted`; resultado correcto/bloqueado en `result`).
- Mantener WCAG 2.2 AA: el arrastre de la aguja debe tener alternativa accesible (teclado/slider) por 2.5.7; foco y etiquetas.
- Reduce-motion: respetar en el movimiento del hilo/aguja.
- Conservar: rotar, explosionar, reset, branch ISO 7/ISO 8 y el panel REC/exportación.
- Hit-test de la aguja sobre los puntos: usar posición en pantalla (getBoundingClientRect) para que funcione aunque la pieza esté rotada.

## Pendiente de decisión
- [DEFINIR] ¿La aguja vuelve sola a su posición tras cada puntada o se queda en el último punto?
- [DEFINIR] ¿El hilo se dibuja pegado a la pieza (rota con ella) o en capa fija?
- [DEFINIR] ¿Las instrucciones paso a paso en la tab son editables por la autora o fijas?
