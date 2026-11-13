# Reporte - Implementacion del diseno y ruta a Realidad Virtual
### Simulador 4D - Surcido Cero-Error (prototesis implantable Clase III)

> Autoria: Ana Eslava-Graterol. Asistido por IA bajo gobernanza humana. Marca neutra.
> [ESTIMACION] = cifra orientativa a validar. [VERIFY] = contra SOP/espec. del sitio. [DEFINIR] = decision de stakeholder.

---

## 1. Resumen ejecutivo
El diseno esta listo para implementarse en un LMS estandar con esfuerzo medio, conservando lo que lo hace valioso: compuerta de maestria cero-error, trazabilidad auditable (xAPI/cmi5, verbos ADL), drop-off para iterar con SAM, bilingue EN/ES y accesibilidad WCAG 2.2 AA. La via recomendada es Articulate Rise 360 + bloque Storyline, publicada como cmi5 (o SCORM 2004 como alternativa). La evolucion a Realidad Virtual (VR) es viable y natural: el mismo modelo de medicion xAPI recibe los datos de guantes y seguimiento ocular; requiere hardware XR, desarrollo en Unity/Unreal, un equipo con rol de Learning Experience Architect y validacion del simulador bajo el sistema de calidad si se usa para competencia de Clase III.

---

## 2. Que existe hoy (activos del proyecto)
- Curso/simulador interactivo funcional (web): simulador 4D con aguja arrastrable e hilo, compuerta cero-error, branch ISO 7/ISO 8, apertura con vide de concienciacion y objetivos, panel de telemetria y export.
- Export cmi5/xAPI conforme (verbos ADL) con registro de drop-off. Muestra en `ejemplo-cmi5-xapi.json`.
- Storyboard + build spec para Rise/Storyline (`STORYBOARD-RISE.md`).
- Checklist de evaluacion y primera pasada; guion de piloto L1-L2.
- Version autocontenida (un solo HTML) para abrir sin servidor.

Pendiente de produccion: vide real con subtitulos/audiodescripcion, modelo grafico del manguito/stent de mayor fidelidad, narracion EN/ES, y las cifras/tolerancias reales [VERIFY].

---

## 3. Posibilidades de implementacion en un LMS

### Opcion A - Incrustar la web app (rapido)
- Que es: alojar el HTML y mostrarlo en el LMS (iframe o bloque web/embed).
- Pros: inmediato; conserva toda la interaccion tal cual.
- Contras: no es un paquete de curso estandar; el reporte al LMS requiere cablear la telemetria a un LRS; el seguimiento de finalizacion/aprobado no es nativo.
- Esfuerzo: bajo. Recomendado solo para demo o proyecto piloto interno.

### Opcion B - Rise 360 + bloque Storyline (RECOMENDADA)
- Que es: construir la leccion en Rise (texto, vide, objetivos, knowledge checks) e insertar el simulador como bloque Storyline; publicar como cmi5 (preferente) o SCORM 2004.
- Pros: portatil a practicamente cualquier LMS que acepte cmi5 o SCORM (p. ej. Cornerstone, SuccessFactors, Docebo, Moodle, Canvas); finalizacion/aprobado nativos; mantiene compuerta cero-error, accesibilidad, bilingue y telemetria a un LRS.
- Contras: el simulador se reconstruye en Storyline (no se reutiliza el codigo web tal cual); requiere licencias Articulate.
- Esfuerzo: medio. Es la via estandar de la industria para este caso.

### Opcion C - Desarrollo a medida (web app + LRS)
- Que es: evolucionar la web app actual a producto (framework, backend, LRS propio o comercial).
- Pros: maxima flexibilidad, reutiliza el codigo, mejor para VR futura e integraciones.
- Contras: mayor coste y mantenimiento; valida tu propio stack.
- Esfuerzo: alto. Recomendado si hay vision de producto/escala o VR.

### Requisitos por LMS (independiente de la opcion)
- Para xAPI/cmi5: el LMS debe tener o conectarse a un LRS (Learning Record Store).
- Para solo SCORM: publicar SCORM 2004 4a ed.; se pierde parte de la riqueza de datos (menos granularidad que xAPI).
- Logica: `completion` (recorrido) distinta de `success` (compuerta cero-error aprobada); el operario no habilita trabajo real sin `success`.
- Datos que llegan al LMS/LRS: aprobado de maestria, errores de secuencia, intentos, tiempo, y drop-off (paso mas lejano, tiempo por paso).

### Que se conserva y que falta
- Se conserva: metodologia (ADDIE+SAM, DIF->KSAs, Mager/Bloom, Kirkpatrick x cero-error), trazabilidad, accesibilidad WCAG 2.2 AA, bilingue, telemetria ADL.
- Falta producir: vide con CC/AD, arte final, narracion, y sustituir placeholders por SOP/tolerancias reales [VERIFY].

---

## 4. Ruta a Realidad Virtual (VR)

### 4.1 Por que VR para esta destreza
Es una tarea manual de precision realizada bajo EPI (guantes, gafas, mascarilla), donde importan la trayectoria y fuerza del gesto y la atencion visual al punto critico. VR permite ensayar el gesto real (no solo apuntar en pantalla) y capturar como se mueve la mano y a donde mira el operario - exactamente lo que predice el desempeno en el puesto.

### 4.2 Que se necesita
Hardware:
- Casco VR con seguimiento ocular (eye tracking) para medir fijaciones y atencion (familias como Varjo, HTC Vive, Meta de gama pro).
- Guantes de datos o hapticos para capturar angulos de dedos, fuerza de pinza y trayectoria de la mano (familias como Manus, SenseGlove, HaptX). La haptica (retorno de fuerza) es opcional en fase 1.
- Estacion por operario (PC con GPU capaz, o casco autonomo segun arquitectura).

Software:
- Motor XR: Unity o Unreal.
- Modelo 3D del manguito/stent y fisica de sutura (aguja-hilo-tejido).
- Integracion xAPI para enviar eventos al LRS (reutiliza el modelo actor-verbo-objeto-resultado ya definido).
- Capa de contenido: objetivos, vide de concienciacion, instrucciones just-in-time, compuerta cero-error (misma logica que la web).

Datos y medicion (el puente ya existe):
- El mismo modelo xAPI/cmi5 recibe extensiones espaciales/hapticas: pose de mano, longitud de trayectoria, temblor, tiempo-en-objetivo, fuerza de pinza, fijaciones de mirada y dwell en el punto critico.
- Alimenta el mismo LRS y las mismas metricas de maestria/drop-off que ya disenamos.

### 4.3 Equipo y roles
- Learning Experience Architect (LXA): dueno del diseno de experiencia + medicion (lo que arquitecta el skill `senior-instructional-designer-cux`). Este rol es tuyo.
- Desarrollador XR (Unity/Unreal): construye la escena, la fisica y la integracion.
- Learning engineer / analista LRS: tuberia de datos, dashboards, drop-off.
- Calidad/regulatorio: si el simulador VR se usa para evidenciar competencia de Clase III, el propio simulador entra en validacion bajo el QMS.

### 4.4 Estandares, cumplimiento y privacidad
- Datos: xAPI (con perfil/estensiones para VR); mantener cmi5 para el ciclo de vida.
- Validacion: un simulador usado para competencia regulada se valida (IQ/OQ/PQ segun el sistema del sitio) [VERIFY].
- Privacidad: los datos de guante y mirada son biometricos; requieren base legal, consentimiento y minimizacion (p. ej. GDPR). Actor anonimo o seudonimo por defecto.

### 4.5 Roadmap por fases
- F0 (hoy): web / 2.5D interactivo, telemetria cmi5/xAPI, piloto L1-L2. Listo.
- F1: VR piloto de un procedimiento, sin haptica; eye tracking basico; prueba de concepto de captura xAPI en VR.
- F2: VR + guantes de datos (trayectoria/fuerza) + eye tracking completo; dashboards de desempeno manual y visual.
- F3: VR validado bajo el QMS para evidenciar competencia; integracion con el LMS/LRS de produccion; haptica si el caso lo justifica.

### 4.6 Estimaciones orientativas [ESTIMACION - a validar con proveedores]
- Hardware por estacion: casco con eye tracking y PC en rango de miles de EUR/USD; guantes de datos por pares en rango de miles; haptica avanzada, notablemente mas. Cifras exactas dependen de marca/volumen [VERIFY].
- Desarrollo: un piloto F1 es del orden de semanas-pocos meses de un equipo pequeno; F2-F3 crecen con fidelidad, validacion y numero de procedimientos.
- No son cotizaciones; sirven para dimensionar, no para presupuestar.

### 4.7 Riesgos y mitigaciones
- Coste/escala: empezar con pocas estaciones y un procedimiento (F1).
- Mareo/fatiga VR: sesiones cortas, buenas practicas de confort.
- Validacion regulatoria: involucrar a calidad desde F1 si se usara para competencia.
- Privacidad biometrica: consentimiento, anonimizacion, retencion limitada.
- Dependencia de proveedor (guantes/casco): elegir con SDK abierto y soporte xAPI.

---

## 5. Recomendacion y proximos pasos
1. Corto plazo: implementar en el LMS por la Opcion B (Rise + Storyline, cmi5), correr el piloto L1-L2 y sustituir placeholders por datos reales [VERIFY].
2. Medio plazo: decidir si hay caso para VR (presupuesto, procedimientos, competencia regulada) [DEFINIR]; si si, arrancar F1 como prueba de concepto reutilizando el modelo de medicion actual.
3. Constante: usar el drop-off y los resultados del piloto para iterar el diseno (SAM).
