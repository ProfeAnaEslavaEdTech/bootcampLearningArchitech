# Simulador 4D - Surcido Cero-Error (Clase III) - Paquete del proyecto

Caso de diseno instruccional (compliance, MedTech Clase III) para implementar en un LMS.
Autoria: Ana Eslava-Graterol. Asistido por IA bajo gobernanza humana. Marca neutra. WCAG 2.2 AA. Bilingue EN/ES.

## Contenido
| Archivo | Que es |
|---|---|
| `index.html` | El curso/simulador interactivo (version viva; usa `../shared/`). |
| `STORYBOARD-RISE.md` | D4 storyboard + D5 build spec para construir en Rise 360 + bloque Storyline. |
| `EVALUACION.md` | Checklist de evaluacion (instrumento en blanco, gate GO/FIX/HOLD). |
| `EVALUACION-PASE1.md` | Primera pasada tecnica con evidencia (A-I). |
| `PILOTO-L1-L2.md` | Guion de piloto con usuarios (Kirkpatrick L1-L2). |
| `NOTAS-CORRECCIONES.md` | Backlog de correcciones (N1-N5) + roadmap VR (R1). |
| `REPORTE-IMPLEMENTACION-VR.md` | Posibilidades de implementacion en LMS y ruta a Realidad Virtual. |
| `ejemplo-cmi5-xapi.json` | Muestra auditable del export (verbos ADL, cmi5, drop-off). |

## Como implementarlo en otro LMS (resumen)
- Via recomendada: construir en Rise 360 + bloque Storyline (ver `STORYBOARD-RISE.md`), publicar **cmi5** (o **SCORM 2004** si el LMS no acepta cmi5), subir el paquete al LMS.
- Datos: configurar el **LRS** (xAPI) del LMS para recibir la telemetria; `completion != success`.
- Detalle completo y opciones: `REPORTE-IMPLEMENTACION-VR.md`.
