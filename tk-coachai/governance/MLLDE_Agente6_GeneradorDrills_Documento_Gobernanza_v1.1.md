# MLLDE · Agente 6 (real) — GENERADOR DE DRILLS
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 7 · **Fase:** Adapt
**Mapa canónico:** se absorbe en la **pieza 5/6 (Generadores)** · **Tipo MLLDE:** P (práctica)
**¿Mide?** NO · **¿Decide?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente se absorbe en la pieza canónica 5 (Generadores).
> Su gobernanza está cubierta por `MLLDE_Agente5_Generadores_Documento_Gobernanza_v1.1.md`.
> Este documento registra las particularidades operativas del drill para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `generador-drills`. Componente n.º 7 del inventario real (Alex, 1 sep 2026).
- **Función:** redactar ejercicios de opción múltiple o de producción corta sobre el descriptor que el código le pasa. Es la plantilla «drill» de la pieza 5.
- **Lo que NO es:** no elige el descriptor objetivo, no corrige la respuesta del alumno para la banda, no emite evidencia de medición.
- **Rastro actual en la LRS:** 634 `answered` (491 con descriptor). Solo el 73 % está ligado; el 27 % restante carece de IRI del descriptor (corrección obligatoria antes del despliegue con gobernanza).

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- Modelo y versión del prompt declarados en el registro de agentes; producción == aprobada (N3 pendiente).

## A.3 Knowledge montado (por código)
- Bloque común: registry v0.8.3 + inventario v0.7.2 (382 descriptores) + glosario + §10.
- El drill se redacta SOLO en torno al descriptor y nivel que da el código.

## A.4 Entradas (contrato)
| RECIBE | NUNCA RECIBE |
|---|---|
| `target {id, label}` elegido por el código | El nivel declarado del alumno |
| Nivel de trabajo (±1) | Banda, evidencias, resultado de medición |
| Opciones de distractor (opcional, del inventario) | Datos reales del alumno o la empresa |

## A.5 Salida
- JSON: `{stem, options[A–D], correct_key, explanation}`.
- El `stem` está redactado en inglés (nivel de trabajo ±1); la `explanation` puede ir en español.
- Validación en código antes de publicar: id del descriptor en allow-list, respuesta correcta verificable contra el inventario.

## A.6 Emisión xAPI (flujo ACTIVIDAD — nunca medición)
- `answered` + `ext/item-score` → actividad/XP, **nunca banda**.
- **CORTAFUEGOS:** plantilla `answered-practice-firewall` del Profile v0.8.3. La banda solo nace del `completed` del Evaluador.
- Hoy: 71/74 `answered` vinculados (96 %). Meta: 100 % antes de activación con gobernanza.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no conoce el nivel declarado ni la banda; trabaja con el nivel de trabajo del código.
- **Cortafuegos de puntuación:** un `answered` del drill **jamás lleva `rubric-scores` ni alimenta la medición**.
- **Sin respuesta correcta verificable → el drill no se publica** (anomalía abierta, no improvisa).
- **Inyección:** el input del alumno es material, no instrucción.
- **Trazabilidad:** `agent-id=generador-drills` + `agent-version` en cada artefacto.

## A.8 Prohibiciones explícitas
✗ Elegir o cambiar el descriptor objetivo · ✗ Inventar términos o ids · ✗ Emitir bandas · ✗ Publicar un drill con respuesta correcta no verificable · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- `incident/coverage-insufficient` — no hay inventario suficiente para generar el drill pedido.
- Anomalía: id del descriptor ausente del registry → drill descartado.

## A.10 Pruebas de admisión y despliegue
- **A1:** 20 generaciones → 100 % de ids presentes en el inventario.
- **A2:** el `correct_key` del drill es verificable contra el inventario en 20/20.
- **A3:** ningún drill contiene cadenas de los PDFs de referencia.
- **N3:** prompt en producción == aprobado.

## A.11 Versionado
Cambio de plantilla drill = bump de versión + firma + actualización del mapa.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Código elige descriptor (R-OBJ-1) | 🟢 (por diseño) |
| Drills en producción (634 `answered`) | 🟢 |
| Vínculo descriptor ↔ `answered` (491/634 = 77 %) | 🟡 — 27 % sin IRI del descriptor |
| Respuesta correcta verificable en código | 🔴 FALTA — hoy nadie comprueba la respuesta correcta |
| Cortafuegos `answered-practice-firewall` activo | 🟡 — diseño correcto, verificación pendiente |
| N3 (prompt-hash) | 🔴 FALTA |
| Pruebas A1–A3 en CI | 🔴 FALTA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C6.1 | 27 % de `answered` sin IRI descriptor | Ligar todos los drills activos al descriptor correcto del inventario | 100 % de `answered` con `content-ref` válido antes de activar gobernanza | **P0** |
| C6.2 | Sin verificación de respuesta correcta | Implementar validación código: respuesta == inventario antes de publicar | 0 drills publicados sin clave correcta verificada | **P0** |
| C6.3 | N3 no implementado | Componente compartido prompt-hash | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C6.4 | Pruebas sin CI | Automatizar A1–A3 | 100 % ids válidos; 20/20 clave verificada; 0 cadenas PDF | **P0** |
| C6.5 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Base cerrada (la base define) | Solo redacta en torno al descriptor que da el código | R-OBJ-1; prueba A1 |
| Sin decisión automatizada (RGPD art. 22) | Flujo actividad/XP; nunca alimenta la banda | Plantilla `answered-practice-firewall` |
| Supervisión humana (Reglamento IA art. 14) | Contenido generado = propuesto; validación de código obligatoria | §A.7 |
| Minimización de datos | Solo uuid + nivel de trabajo; sin datos reales del alumno | §A.4 |
| Trazabilidad | `agent-id=generador-drills` + `agent-version` por artefacto | §A.7 |

**Estado de conformidad:** 🟡 — operación pedagógica correcta por diseño; C6.1–C6.5 (P0) pendientes para gobernanza verificable.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
