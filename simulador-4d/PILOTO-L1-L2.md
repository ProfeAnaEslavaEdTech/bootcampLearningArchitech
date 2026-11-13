# Guion de piloto L1-L2 - Simulador 4D - Surcido Cero-Error (Clase III)
### Prueba del curso con operarios reales - niveles Kirkpatrick 1 (Reaccion) y 2 (Aprendizaje)

> Proyecto: Simulador 4D - prótesis implantable Clase III (sewing cuff de válvula cardíaca).
> Version: v0.1 (primer draft). Autoria: Ana Eslava-Graterol. Asistido por IA bajo gobernanza humana.
> Alcance: validar reaccion (L1) y aprendizaje (L2); recoger friccion UX y drop-off para iterar con SAM.
> Marca neutra. [DEFINIR] = decision de stakeholder. [VERIFY] = contra SOP/espec. validada del sitio.

---

## 1. Proposito
Comprobar, antes de desplegar, que el curso:
1. Es creible y usable, y baja el filtro afectivo (seguridad psicologica) - L1.
2. Logra que el operario alcance el dominio cero-error sin ayuda - L2.
3. No tiene puntos de friccion ni abandono (drop-off) que impidan terminar.
No valida L3 (conducta en el puesto) ni L4 (resultados): eso se mide despues, con datos de calidad de la planta.

## 2. Participantes
- Muestra: [DEFINIR] 3-5 operarios nuevos (semanas 1-6) + 1 formador/supervisor.
- Criterio: no haber hecho antes el surcido real; perfil representativo (idioma, mano dominante, experiencia).
- Nota: muestra pequena = hallazgos cualitativos (descubrir problemas), no estadistica.

## 3. Materiales y preparacion
- Dispositivo de prueba: [DEFINIR] (tablet tactil recomendada, para capturar pointerType=touch) y/o PC.
- El curso: `simulador-4d/index.html` (demo) o el paquete Rise/Storyline cmi5.
- Hoja de consentimiento (anonimato, uso no punitivo, grabacion de interaccion). Ver seccion 9.
- Captura de datos: al final de cada sesion, boton "Exportar cmi5/xAPI" -> guardar el JSON con un codigo de participante (P1, P2...). NO usar nombres.
- Cronometro (opcional; el tiempo ya viaja en el export).
- Esta hoja de observacion impresa o en pantalla (seccion 7).

## 4. Tareas del participante (think-aloud: "piensa en voz alta")
El facilitador no guia ni corrige; solo observa y anima a verbalizar.
| # | Tarea | Que se observa |
|---|---|---|
| T1 | Ver la intro y decir, con sus palabras, por que importa esta puntada | Comprension del proposito (L1 relevancia) |
| T2 | Leer los objetivos y decir que cree que va a aprender | Claridad de objetivos |
| T3 | En el simulador: explosionar la pieza y nombrar manguito, stent y linea de surcido | Objetivo "etiquetar la parte" (L2) |
| T4 | Elegir clase (ISO 7 u ISO 8) y completar el vestido en orden | Compuerta de cleanroom-readiness (L2) |
| T5 | Provocar un error de orden a proposito y describir que pasa | Entiende el bloqueo "para revisar" (no castigo) |
| T6 | Completar una pasada de surcido sin saltos (maestria cero-error) | Objetivo terminal (L2) |
| T7 | Exportar la traza y decir que cree que mide | Transparencia/confianza en los datos |

## 5. Metricas e instrumentos
### 5.1 L1 - Reaccion (al terminar, 1-5; 5 = muy de acuerdo)
- Claridad: "Entendi que tenia que hacer en cada paso."
- Utilidad: "Practicar aqui me prepara para el trabajo real."
- Seguridad psicologica: "Me senti comodo equivocandome; el error no se sintio como castigo."
- Usabilidad (SUS corto, 4 items): facil de usar / consistente / me orientaria sin ayuda / lo recomendaria.

### 5.2 L2 - Aprendizaje (objetivo-criterio)
| Objetivo | Medida | Umbral sugerido [DEFINIR] |
|---|---|---|
| Surcido terminal cero-error, sin ayuda | Pasa la compuerta de maestria | 100% de los que terminan |
| Intentos hasta maestria | Conteo (del export) | <= 3 intentos |
| Etiquetar la parte | Correcto/incorrecto | >= 80% correcto |
| Cleanroom-readiness en orden | Pasa la compuerta de vestido | 100% |
| Entiende el bloqueo (no castigo) | Verbaliza correctamente en T5 | cualitativo |

### 5.3 UX y drop-off (del export y la observacion)
- Paso mas lejano alcanzado y % completado (campo dropOff).
- Tiempo por paso (perStep) - picos = friccion.
- Mis-taps / toques bloqueados (skipBlocked, gownOrder).
- Puntos de friccion observados (donde dudan, retroceden o piden ayuda).

### 5.4 Umbral de exito del piloto (gate) [DEFINIR con stakeholders]
Sugerencia inicial: >= 80% de participantes alcanza la maestria cero-error en <= 3 intentos, con L1 medio >= 4/5 y sin friccion bloqueante no resuelta.

## 6. Guion del facilitador (que decir)
- Bienvenida (ES/EN): "Vamos a probar el curso, no a ti. Nada de lo que hagas esta mal; buscamos mejorar el diseno. Piensa en voz alta."
- Durante: no responder "como se hace"; devolver: "Que harias tu?" / "Que esperabas que pasara?".
- Ante error del participante: no corregir; observar como lo resuelve.
- Cierre: pasar el cuestionario L1 y el debrief (seccion 8). Exportar el JSON como P#.
Regla: no inducir respuestas; silencios de 5-10 s estan bien.

## 7. Hoja de observacion (una por participante)
| Campo | Registro |
|---|---|
| Participante (codigo) | P__ |
| Dispositivo / idioma | ______ |
| T1 proposito (con sus palabras) | ______ |
| T3 nombra las 3 partes | si / no / parcial |
| T4 clase elegida y vestido en orden | ISO __ / ok-bloqueos: __ |
| T5 entiende el bloqueo | si / no |
| T6 maestria cero-error (intentos) | pasa en __ intentos |
| Friccion observada (paso, descripcion) | ______ |
| Drop-off (paso mas lejano / %) | __ / __% |
| Citas textuales utiles | "______" |

## 8. Debrief (preguntas abiertas, al final)
1. Que fue lo mas facil y lo mas dificil?
2. Hubo algun momento en que no supiste que hacer?
3. Como te sentiste al equivocarte?
4. Que cambiarias de la interfaz o del texto?
5. Te sentirias preparado para una primera unidad real supervisada? Por que?

## 9. Etica y datos
- Consentimiento informado; participacion voluntaria; se puede parar en cualquier momento.
- Anonimato: codigos P#, nunca nombres; el actor del export es anonimo.
- Uso no punitivo: los datos sirven para mejorar el diseno, no para evaluar al operario.
- Disclosure IA (EU AI Act Art. 50): contenido de diseno asistido por IA; video/cifras son placeholders.
- Conservacion/retencion de los JSON: [DEFINIR] segun politica del sitio.

## 10. Analisis e iteracion (SAM)
1. Reunir los JSON (P1..Pn) + hojas de observacion.
2. Calcular: % maestria, intentos medios, L1 medio, drop-off por paso, top 3 fricciones.
3. Clasificar hallazgos: bloqueante / mejora / cosmetico.
4. Iterar el diseno (ciclo SAM) sobre lo bloqueante y volver a probar un subconjunto.
5. Veredicto del piloto: GO a despliegue / FIX FIRST / HOLD (mismo gate que EVALUACION.md).

---

## Plantilla de resultados (rellenar tras el piloto)
| Participante | L1 medio (/5) | Maestria (intentos) | Etiquetar (%) | Cleanroom en orden | Drop-off (%) | Friccion principal |
|---|---|---|---|---|---|---|
| P1 | | | | | | |
| P2 | | | | | | |
| P3 | | | | | | |
| P4 | | | | | | |
| P5 | | | | | | |

Agregado: % maestria <= 3 intentos: ____  |  L1 medio global: ____  |  Veredicto: GO / FIX FIRST / HOLD
Facilitador: __________  Fecha: __________  Version del curso: v0.1
