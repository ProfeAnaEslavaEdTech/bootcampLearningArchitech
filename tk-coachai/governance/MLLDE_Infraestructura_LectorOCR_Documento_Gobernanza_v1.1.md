# MLLDE · Infraestructura — LECTOR DE IMÁGENES (OCR)
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 15 · **Fase:** Input
**Mapa canónico:** **NO es un agente → infraestructura** (igual que el ASR) · **Tipo:** Determinista / puerta de confianza
**¿Mide?** NO · **¿Decide?** NO · **¿Es IA generativa?** PARCIAL (transcripción determinista + interpretación inicial)
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este componente NO es un agente de IA en el sentido MLLDE: su función principal es determinista (transcripción exacta del texto de la imagen).
> No tiene pieza canónica asignada. Se clasifica como **infraestructura de entrada**, igual que el reconocimiento automático de voz (ASR).
> Este documento registra su ficha de gobernanza para completar el inventario de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `lector-ocr`. Componente n.º 15 del inventario real (Alex, 1 sep 2026). Añadido el 15 de septiembre de 2026.
- **Función:** transcribir el texto exacto de una imagen enviada por el alumno y presentarlo como input de texto para el flujo de la sesión. Función primaria: determinista (OCR). Función secundaria: interpretación inicial del visual («Presenta tu visual», 15 sep).
- **Lo que NO es:** no elige descriptores, no genera contenido pedagógico, no emite evidencia de medición.
- **Rastro actual en la LRS:** ninguno propio. Sus 16 términos extraídos aparecen con origen «undefined» en el pool de vocabulario.

## A.2 Modelo / tecnología
- OCR: servicio determinista (no generativo) con contrato NO-TRAIN verificado.
- La capa de interpretación («Presenta tu visual») puede ser LLM: **verificar contrato NO-TRAIN si se usa modelo generativo**.
- **REGLA DE INFRAESTRUCTURA:** la imagen se descarta tras la transcripción. No se almacena ni se usa para entrenamiento.

## A.3 Función como puerta de confianza
- Entrada: imagen enviada por el alumno.
- Salida: texto transcrito → entregado al flujo como input de texto.
- La imagen NUNCA entra directamente al loop pedagógico; el texto transcrito sí.
- El texto transcrito pasa por las mismas salvaguardas de inyección que cualquier input de alumno.

## A.4 Entradas y salidas
| ENTRADA | SALIDA |
|---|---|
| Imagen del alumno (JPG/PNG) | Texto transcrito |
| — | Interpretación inicial del visual (si se activa la capa LLM) |

## A.5 Rastro xAPI
- Ninguno propio. Si el vocabulario extraído de la imagen se usa en una sesión, las sentencias correspondientes se emiten desde el Redactor o el Generador de Tarjetas, con `origin=image-ocr` como atributo de contexto.

## A.6 Guardarraíles de gobernanza
- **Imagen descartada tras lectura** — nunca almacenada ni enviada a terceros fuera del servicio OCR.
- **Texto transcrito = input de alumno** → sanitización idéntica al input de texto libre.
- **16 términos con origen «undefined»** → requieren reatribución a `origin=image-ocr` en la LRS.

## A.7 Prohibiciones explícitas
✗ Almacenar la imagen original · ✗ Usar la imagen para entrenar modelos · ✗ Enviar la imagen a servicios fuera del contrato NO-TRAIN · ✗ Generar contenido pedagógico directamente.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| OCR determinista operativo | 🟢 |
| Imagen descartada tras lectura | 🟡 — asumido por diseño; verificación pendiente |
| Contrato NO-TRAIN (capa LLM si existe) | 🟡 — verificar si «Presenta tu visual» usa LLM |
| 16 términos con origen «undefined» | 🔴 — reatribución a `origin=image-ocr` pendiente |
| Sanitización del texto transcrito | 🟡 — asumida; documentación explícita pendiente |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C15.1 | 16 términos con origen «undefined» | Reatribuir a `origin=image-ocr` en la LRS | 0 términos con origen indefinido | **P0** |
| C15.2 | Contrato NO-TRAIN capa LLM | Verificar si «Presenta tu visual» usa LLM; confirmar NO-TRAIN | Contrato verificado y documentado | **P0** |
| C15.3 | Descarte de imagen no verificado | Auditar que la imagen no se almacena ni se envía fuera del servicio OCR | Verificación técnica documentada | **P0** |
| C15.4 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Determinista, no generativo (función principal) | OCR = transcripción exacta; sin decisión pedagógica | §A.1 |
| Sin decisión automatizada (RGPD art. 22) | No genera contenido pedagógico; no alimenta la banda | §A.5 |
| Protección de datos (RGPD art. 5) | Imagen descartada tras lectura; sin almacenamiento | §A.2 |
| Supervisión humana | Texto transcrito = input procesado por el flujo normal | §A.3 |

**Estado de conformidad:** 🟡 — operativo; C15.1–C15.3 (P0) pendientes para verificar las garantías de privacidad de imagen y limpiar el origen «undefined».

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
