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

## N5. Zoom / ampliar la imagen (diseño para EPI)
- Problema: si la imagen queda estática, aunque sea 4D, hay un problema de visión. Los operarios trabajan con EPI (guantes, gafas/goggles, mascarilla), lo que dificulta mucho la visión y la destreza.
- Cambio deseado: poder abrir / agrandar la imagen del simulador (zoom in/out, desplazamiento/pan, y pantalla completa) para ver con claridad los puntos de sutura.
- Consideraciones EPI (transversal, afecta a N3/N4):
  - Objetivos táctiles grandes (con guantes, >44px puede no bastar; probar tamaños mayores y separación entre puntos).
  - Gestos amplios y tolerantes (pinch-to-zoom; margen de acierto generoso al soltar la aguja).
  - Alto contraste y tamaño de texto suficiente (gafas/mascarilla empañan la visión).
- Criterio de aceptación: el operario puede ampliar la pieza y distinguir cada punto de sutura; el zoom y la manipulación funcionan con guantes y con gafas de seguridad.

---

## Notas de implementación (para cuando se autorice codificar)
- Mantener telemetría: cada arrastre/soltar = sentencia xAPI (verbo ADL `interacted`; resultado correcto/bloqueado en `result`).
- Mantener WCAG 2.2 AA: el arrastre de la aguja debe tener alternativa accesible (teclado/slider) por 2.5.7; foco y etiquetas.
- Reduce-motion: respetar en el movimiento del hilo/aguja.
- Conservar: rotar, explosionar, reset, branch ISO 7/ISO 8 y el panel REC/exportación.
- Hit-test de la aguja sobre los puntos: usar posición en pantalla (getBoundingClientRect) para que funcione aunque la pieza esté rotada.

## Roadmap futuro

### R1. VR + telemetría de guantes + eye tracking (proyecto a futuro)
- Idea: llevar la simulación a VR, con guantes que capturen la telemetría de los movimientos manuales, junto con la visión VR (eye tracking).
- Viabilidad: tecnológicamente real y en crecimiento. Hardware: cascos VR con seguimiento ocular (p. ej. Varjo, Quest Pro, Vive Pro Eye) y guantes de datos/hápticos (p. ej. Manus, SenseGlove, HaptX) que miden ángulos de dedos, fuerza de pinza y trayectoria de la mano.
- Qué mediría (lo que importa en una destreza manual cero-error): trayectoria/fuerza correcta del gesto (guante) + atención visual al punto crítico (mirada: fijaciones, dwell). 
- Puente con lo que ya tenemos: el mismo modelo xAPI/cmi5 (actor·verbo·objeto·resultado + extensiones) recibe los datos espaciales/hápticos (pose de mano, longitud de trayectoria, temblor, tiempo-en-objetivo, fuerza, fijación de mirada) y alimenta el mismo LRS y las mismas métricas de maestría/drop-off. Evolución natural de este proyecto.
- Quién lo hace: territorio del Learning Experience Architect (LXA) / XR Learning Engineer. El LXA posee el diseño de experiencia + medición (justo lo que arquitecta el skill `senior-instructional-designer-cux`); se empareja con un desarrollador XR (Unity/Unreal) y, para analítica, un learning engineer del LRS.
- Cautelas: coste de hardware, producción de contenido, validación del simulador VR bajo el QMS (si se usa para competencia de Clase III, el propio simulador se valida), y privacidad de los datos de guante/mirada (biométricos). Marcar como fase futura.
- Criterio para avanzar: [DEFINIR] caso de uso, presupuesto de hardware, y si el simulador VR entra en el expediente de validación.

## Pendiente de decisión
- [DEFINIR] ¿La aguja vuelve sola a su posición tras cada puntada o se queda en el último punto?
- [DEFINIR] ¿El hilo se dibuja pegado a la pieza (rota con ella) o en capa fija?
- [DEFINIR] ¿Las instrucciones paso a paso en la tab son editables por la autora o fijas?
