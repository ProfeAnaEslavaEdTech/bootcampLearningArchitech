# Storyboard & Build Spec — Surcido Cero-Error (Clase III)
### Para implementar en Articulate Rise 360 + bloque Storyline 360 · D4 (storyboard) + D5 (build spec)

> **Proyecto:** Simulador 4D · Surcido Cero-Error (prótesis implantable **Clase III**, sewing cuff de válvula cardíaca).
> **Versión:** v0.1 (primer draft) · **Autoría:** Ana Eslava-Graterol · Asistido por IA bajo gobernanza humana.
> **Idiomas:** EN/ES (diseñar en EN, texto del aprendiz en paralelo ES). **Accesibilidad:** WCAG 2.2 AA.
> **Datos:** xAPI (verbos ADL) → LRS, **publicar cmi5** (compatible Cornerstone). `completion ≠ success`.
> **Marca:** neutra — no nombrar ninguna empresa. **[VERIFY]** = sustituir por el SOP/espec. validada del sitio.

---

## 0 · Mapa de herramientas (por qué Rise + Storyline)
| Capa | Herramienta | Motivo |
|---|---|---|
| Shell de la lección (texto, vídeo, objetivos, knowledge checks, quiz) | **Rise 360** | Rápido, responsive nativo, bloques accesibles |
| **Simulador 4D** (rotar/explosionar/surcir, compuerta cero-error) | **Storyline 360** insertado como **bloque Storyline** en Rise | Rise no hace interacción libre/variables; Storyline sí |
| **Branch ISO 7 / ISO 8** (vestido en orden) | Storyline (o bloque **Tabs/Labeled Graphic** en Rise si se simplifica) | Lógica de orden cero-error → Storyline |

**Arquitectura Rise:** 1 curso → lecciones = las 6 fases (Brief · Analizar · Objetivos · Simular · Evaluar · Empaquetar). Cada lección = varios bloques. La traza objetivo↔tarea↔evaluación↔registro se mantiene (sin huérfanos).

---

## 1 · Apertura de la unidad (Gagné: captar atención → informar objetivos)

### 1.1 Vídeo de concienciación (90 s) — **bloque Multimedia / Video** en Rise
**Objetivo pedagógico:** conectar el cumplimiento con la vida del paciente (filtro afectivo + relevancia adulta).
**Producción:** vídeo real o motion-graphic; **subtítulos (CC) obligatorios** + transcripción + audiodescripción. Sin autoplay; controles visibles (WCAG 2.2: 1.2.2, 1.2.5, 2.2.2).

**Guion / storyboard del vídeo:**
| Tiempo | Visual | VO (EN) | VO (ES) |
|---|---|---|---|
| 0–15 s | Persona en casa, viviendo su día; late un gráfico de válvula cardíaca | "Somewhere, someone's heart depends on a valve." | «En algún lugar, el corazón de alguien depende de una válvula.» |
| 15–45 s | Puesto de costura: mano con guante coloca una puntada en el manguito | "That valve is held by the cuff you sew — stitch by stitch." | «Esa válvula la sostiene el manguito que coses — puntada a puntada.» |
| 45–75 s | Un orificio saltado se resalta en **ámbar** (nunca rojo) | "One skipped stitch can fail where it matters most. That is why the standard exists — not for the audit, for the patient." | «Una puntada saltada puede fallar donde más importa. Por eso existe la norma — no para la auditoría, para el paciente.» |
| 75–90 s | Aparece el simulador | "So we rehearse here, where a mistake costs nothing — and never reaches them." | «Así que ensayamos aquí, donde un error no cuesta nada — y nunca les llega.» |

**xAPI:** al reproducir → `experienced` (`object: intro.awareness`). Rise emite `experienced/played` del bloque de vídeo.

### 1.2 Objetivos de aprendizaje — **bloque Statement / List** en Rise
Encabezado: **"Al terminar esta unidad serás capaz de…" / "By the end of this unit you will be able to…"**
1. Completar un surcido de manguito completo en el simulador con **cero errores de secuencia** y tensión en tolerancia, sin ayuda.
2. Entrar a la sala blanca con el **vestido correcto y en orden** para la clase elegida (**ISO 7 / ISO 8**).
3. Identificar y nombrar el **manguito, el stent y la línea de surcido** en una vista explosionada.
4. Explicar por qué un defecto de surcido es un evento de **seguridad del paciente** bajo el sistema de calidad.

---

## 2 · Marco normativo (Brief) — **bloque Statement + Note/Callout** en Rise
Tratar la pieza como **prótesis implantable Clase III (FDA · vía PMA)**. Bajo **ISO 13485 · 21 CFR 820 (QMSR) · EU MDR**, en **sala blanca (ISO 14644)** con **GMP/GxP**; cada unidad lleva su **Device History Record (DHR)**.
**Pills (bloque "Labeled text"/Note):** `Clase III` · `PMA` · `ISO 13485` · `21 CFR 820·QMSR` · `EU MDR` · `ISO 14644` · `GMP/GxP` · `DHR`.
**[VERIFY]** clase exacta de sala blanca (ISO 7/8) y tolerancias contra la espec. validada.

> **Instinto senior (Callout):** la formación solo se justifica si la brecha es de habilidad/conocimiento. Entregable-cero: confirmar que los defectos se concentran en semanas 1–6 con utillaje correcto (brecha de práctica, no de ingeniería).

---

## 3 · Análisis (D2 DIF → KSAs) — **bloque Table** en Rise
| Paso | D | I | F | Tratamiento |
|---|---|---|---|---|
| G1 · Vestido y entrada aséptica (cleanroom) | M | H | H | **Simular · crítico** |
| G2 · Despeje de línea y control ambiental (GMP) | M | H | H | **Simular · crítico** |
| 1 · Orientar costura del manguito al poste del stent | M | H | H | **Simular · crítico** |
| 2 · Fijar profundidad de puntada y ángulo de aguja | H | H | H | **Simular · crítico** |
| 3 · Mantener tensión de hilo pareja | H | H | H | **Simular · crítico** |
| 4 · Seguir la secuencia de orificios (sin saltos) | M | H | H | **Simular · crítico** |
| 5 · Anudar y asentar el nudo final | M | H | M | **Simular · crítico** |
| 6 · Recortar hilo a longitud de espec. | L | M | H | Ayuda de trabajo |
| 7 · Completar y firmar el **DHR** | L | H | H | Ayuda + SOP |

**Modelo dual:** ADDIE para el SOP estable; **SAM** (prototipado iterativo) para pasos en evolución/nuevo producto. Los datos de **drop-off** alimentan la iteración SAM.

---

## 4 · Mapa de objetivos (D3) — **bloque Table** en Rise
Mager (**condición · conducta · criterio**), nivel Bloom **Aplicar**. Sin huérfanos.
| Objetivo (terminal/habilitante) | Tarea | Bloom | Se mide con |
|---|---|---|---|
| **Terminal:** surcido completo, cero errores de secuencia, tensión en tolerancia, sin ayuda | 1–5 | Aplicar | Pasada de maestría cero-error |
| Identificar/nombrar manguito, stent, línea de surcido (vista explosionada) | — | Comprender | Chequeo etiquetar-la-parte |
| Fijar ángulo y profundidad dentro de espec. | 2 | Aplicar | Puntuación de tolerancia del simulador |
| Mantener tensión pareja ≥ 12 puntadas | 3 | Aplicar | Compuerta de varianza de tensión |
| Secuencia de orificios sin saltos ni duplicados | 4 | Aplicar | Chequeo de secuencia (cero-error) |
| Entrar a cleanroom con vestido en orden (ISO 7/8) | G1–G2 | Aplicar | Compuerta de preparación de sala blanca |

---

## 5 · Simulador 4D — **bloque Storyline 360** (insertado en Rise)
Rise → insertar **bloque Storyline** (publicar el .story a Review 360 o al mismo paquete). Diseño del .story:

### 5.1 Variables (Storyline)
`partsPlaced` (num 0–3) · `angleOK` (bool) · `tensionVar` (num) · `seqErrors` (num) · `skipBlocked` (num) · `currentHole` (num 0–12) · `cleanClass` (text "iso7"/"iso8") · `gownIdx` (num) · `masteryPassed` (bool).

### 5.2 Storyboard (dos columnas) — escena central de surcido
| En pantalla | Notas de desarrollo (Storyline) |
|---|---|
| **Etapa 1 · Desmontar:** gemelo explosionado; el aprendiz arrastra cada parte (manguito/stent/núcleo) a su ranura etiquetada | `States` normal/hover/correct en cada destino; `trigger`: al soltar correcto → `partsPlaced +1`; ramificar a Etapa 2 solo cuando `partsPlaced = 3` |
| **Etapa 2 · Comprender:** rotar la pieza (slider 0–360 **y** arrastre) para ver costura y orificios | Alternativa de arrastre = **slider** (WCAG 2.2 **2.5.7**); `aria`/focus visibles |
| **Etapa 3 · Manipular:** reasentar partes en la orientación del jig real | Feedback de orientación correcta/incorrecta como estado, no color solo (glifo ✓) |
| **Etapa 4 · Surcir en el tiempo:** punto de surcido resaltado **oro**; fijar ángulo (slider), confirmar; avanzar orificio a orificio | `var angleOK` del rango del slider; `trigger`: si en tolerancia → +score, `currentHole +1`; si no → capa ámbar **"para revisar"** |
| **Intento de salto:** el aprendiz intenta el siguiente orificio fuera de orden | **Rama cero-error:** `trigger` **bloquea** avance, repite el orificio correcto; `skipBlocked +1` (registrado, no penaliza maestría) |
| **Fin de pasada:** resumen | `masteryPassed = (seqErrors = 0) AND (tensionVar ≤ tol)`; dispara `completed`/`passed` |

### 5.3 Compuerta cero-error (mastery gate)
Aplicada **solo** a pasos críticos. El aprendiz **no** se marca `success` hasta una pasada con **cero errores de secuencia y tensión en tolerancia**. (No sobre-compuertar.) Clase III: la compuerta L2 es **prerrequisito de la firma del DHR**.

### 5.4 Telemetría (xAPI, verbos ADL) desde Storyline
Enviar `actor · verb · object · result` al LRS:
**Solo verbos canónicos ADL** (no inventar IRIs): `launched`, `initialized`, `interacted` (rotar/explosionar/seleccionar/salto-bloqueado — la acción concreta va en `object.definition.name` y `result.extensions.action`), `experienced` (intro), `progressed` (puntada/paso), `passed`/`completed` (maestría), `suspended` (abandono), `terminated`.
Extensiones (IRIs de tu dominio, permitido): `action`, `pointerType`, coordenadas, `msOffset`. Registrar `cleanClass`, `skipBlocked`, `tensionVar`. Un salto bloqueado = `interacted` con `result.success=false`.

---

## 6 · Branch ISO 7 / ISO 8 — dos diseños complementarios
**ISO 8 · base** (onboarding, ≈ Grado D) e **ISO 7 · avanzado** (zona crítica, ≈ Grado C) que se construye sobre el anterior. Mismo aprendiz, dos diseños enlazados, **una sola traza**.
| | ISO 8 (6 pasos) | ISO 7 (8 pasos) |
|---|---|---|
| Vestido en orden | Higiene → cubrecalzado → cubrecabello/barba → mascarilla → bata → guantes | Higiene+sanitizado → cubrebotas → capucha+cubrebarba → mascarilla → mono completo → gafas → guantes internos → guantes externos+sanitizado |
| Parámetros | ACH ~10–25 · MA periódico | ACH ~30–60 · MA frecuente · flujo laminar |

**Lógica (Storyline o Tabs Rise):** seleccionar clase → `cleanClass`; "Poner siguiente" avanza en orden (`gownIdx +1`); **orden incorrecto = bloqueo ámbar** "romper el orden rompe la asepsia"; compuerta abre con secuencia completa y correcta → habilita surcido. xAPI: `selected`, `progressed` (gown), `blocked` (gownOrder), `passed` (readinessGate).
**[VERIFY]** secuencias, ACH y mapeo a Annex 1 contra el SOP de gowning validado.

---

## 7 · Evaluación (D6) — Kirkpatrick × cero-error — **bloques Knowledge Check / Quiz** en Rise
| Nivel | Qué medimos | Instrumento en Rise/Storyline |
|---|---|---|
| **L1** Reacción | Claridad + **seguridad psicológica** (práctica sin culpa) | Knowledge Check de confianza (2 ítems) + prompt de usabilidad |
| **L2** Aprendizaje | **Dominio total**: surcir a espec., sin ayuda | **Pasada de maestría cero-error** (Storyline, con compuerta) + etiquetar-la-parte |
| **L3** Comportamiento | Desempeño **supervisado** en unidades reales | Firma del supervisor (primeras 5 unidades); xAPI desde el puesto |
| **L4** Resultados | **Ausencia de incidentes y hallazgos de auditoría**; rendimiento | FPY, desperdicio/operario y desviaciones vs. línea base |

**Checkpoint (Quiz Rise):** *¿por qué separar `completion` de `success`?* → para que el aprendiz pueda terminar la lección pero siga **bloqueado del trabajo real** hasta pasar la compuerta cero-error.
**Leading indicators:** tiempo-a-competencia y tasa de reentrenamiento, vinculados a desviaciones del sistema de calidad.

---

## 8 · Empaquetado y publicación (D7) — Rise/Storyline → **cmi5 (Cornerstone)**
- **Rise:** *Export → cmi5* (o SCORM 2004 4ª ed. si el LMS solo acepta SCORM). Completion: todas las secciones vistas. Success: quiz/compuerta aprobada.
- **Storyline (simulador):** *Publish → cmi5* o *xAPI*; "Track using… completion & passing (resultado de la compuerta)". Passing = `masteryPassed`.
- **Reportado al LMS/LRS:** aprobado de maestría, errores de secuencia, varianza de tensión, intentos-hasta-maestría, tiempo-en-sim, **drop-off** (paso más lejano, tiempo por paso, abandono) para iteración SAM.
- **Registro (GUID):** usar `registration` por intento; actor **anónimo** o cuenta del LMS; IRIs con el **dominio real** (sustituir `profeanaeslava.example`).

---

## 9 · Accesibilidad del build (WCAG 2.2 AA) — checklist de implementación
- [ ] Vídeo con **subtítulos + transcripción + audiodescripción**; sin autoplay.
- [ ] Simulador: **alternativa de arrastre** (slider) para rotar [2.5.7]; targets ≥ 44 px [2.5.8]; foco visible y **no tapado** por barras [2.4.11].
- [ ] Estados por **glifo + etiqueta**, no color solo (✓ hecho, ▸ activo, ámbar "para revisar").
- [ ] `prefers-reduced-motion` respetado (ECG, auto-rotación).
- [ ] Lectores de pantalla: texto alternativo, orden de foco, `aria` en interacciones Storyline.
- [ ] Contraste AA en ambos temas; sin rojo para error (ámbar/rosa).
- [ ] EN/ES completos (Rise: curso duplicado por idioma o variables de texto).

---

## 10 · Lista de assets y pendientes [VERIFY]
**Assets a producir:** vídeo de concienciación (90 s) con CC/AD · modelo 3D/2D del manguito+stent (o el gemelo del simulador web como referencia) · íconos de EPI para el branch · narración VO EN/ES.
**[VERIFY] antes de construir:** clase de sala blanca (ISO 7/8) · tolerancias de ángulo/tensión · secuencia de gowning del sitio · SOP de surcido · política de DHR · dominio IRI real del LRS · umbral de éxito del piloto.

> **Nota de disclosure (EU AI Act Art. 50):** contenido de diseño asistido por IA bajo gobernanza humana; el vídeo y las cifras son placeholders hasta validación. Incluir la nota de IA en el pie del curso Rise.
