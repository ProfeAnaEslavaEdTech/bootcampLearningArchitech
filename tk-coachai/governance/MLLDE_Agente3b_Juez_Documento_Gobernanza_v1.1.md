# MLLDE · Agente 3b (real) — JUEZ / VERIFICADOR
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 3 · **Fase:** Process
**Mapa canónico:** integrado dentro de la **pieza 2/6 (Corrector/Juez)** · **Tipo MLLDE:** P (proceso)
**¿Mide?** NO · **¿Decide?** NO (valida, no sentencia)
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente está integrado dentro de la pieza canónica 2 (Corrector/Juez).
> Su gobernanza está cubierta por `MLLDE_Agente2_Corrector_Documento_Gobernanza_v1.1.md`.
> Este documento registra las particularidades operativas del Juez para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `juez`. Componente n.º 3 del inventario real (Alex, 1 sep 2026).
- **Función:** validar cada tip o corrección generado por el Corrector **antes** de mostrárselo al alumno. Actúa como filtro de calidad pedagógica: rechaza tips falsos, ambiguos o inapropiados para el nivel de trabajo.
- **Lo que NO es:** no genera el tip (eso es el Corrector), no evalúa la producción del alumno para la banda, no emite evidencia de medición.
- **Estado crítico:** el prompt del Juez **nunca ha sido documentado** en el registro de agentes. Las «tips falsas» han pasado el filtro (hallazgo activo). Sin trazabilidad LRS propia.

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- **BRECHA CRÍTICA:** modelo y versión del prompt NO están declarados en el registro. El prompt del Juez es desconocido para el sistema de gobernanza.

## A.3 Knowledge montado (por código)
- Desconocido (prompt no documentado).
- **Mínimo requerido:** registry v0.8.3 + nivel de trabajo + el tip a validar.

## A.4 Entradas (contrato esperado)
| RECIBE | NUNCA DEBE RECIBIR |
|---|---|
| Tip generado por el Corrector | El nivel declarado del alumno |
| Nivel de trabajo (±1) | Banda, evidencias, resultado de medición |
| Turno del alumno (contexto) | Datos reales del alumno o la empresa |

## A.5 Salida esperada
- Binario: `{valid: true/false, reason?: string}`.
- Si `valid: false`, el tip se descarta y el Corrector regenera.
- Hoy: no hay evidencia de que el rechazo funcione correctamente (tips falsas han pasado).

## A.6 Emisión xAPI
- **Ninguna propia.** El Juez es un componente interno del flujo del Corrector; sus decisiones no generan sentencias xAPI directas.
- Si se decide registrar rechazos, se emite desde el código del Corrector con `agent-id=juez` como contexto.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no debe conocer el nivel declarado ni la banda.
- **Sin sentencia propia → sin riesgo de cortafuegos de puntuación.**
- **Riesgo activo:** tips falsas están pasando el filtro → el Juez no cumple su función de gobernanza.
- **N3 bloqueado:** sin prompt documentado no es posible implementar la prueba de hash.

## A.8 Prohibiciones explícitas
✗ Aprobar un tip que contradiga el inventario · ✗ Aprobar un tip inapropiado para el nivel · ✗ Emitir bandas · ✗ Generar contenido nuevo (solo valida) · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- `incident/tip-rejected` — tip rechazado por el Juez; Corrector regenera.
- `incident/false-tip-approved` — tip falso aprobado y mostrado al alumno (hallazgo activo, D13 pendiente).

## A.10 Pruebas de admisión y despliegue
- **A1 (bloqueada):** 20 tips falsos → 100 % rechazados. Bloqueada hasta que el prompt esté documentado.
- **A2:** 20 tips correctos → 100 % aprobados (sin falsos negativos).
- **N3:** prompt en producción == aprobado. Bloqueada (sin prompt documentado).

## A.11 Versionado
Cambio de criterios de validación = bump de versión + firma + actualización del mapa. **Hoy: versionado imposible sin prompt documentado.**

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Funcionalidad de validación operativa | 🟡 — corre en producción pero falla (tips falsas pasan) |
| Prompt documentado en el registro | 🔴 FALTA — crítico |
| Rastro LRS propio | 🔴 FALTA |
| Tips falsas bloqueadas | 🔴 FALTA — hallazgo activo |
| N3 (prompt-hash) | 🔴 BLOQUEADO hasta documentar el prompt |
| Prueba A1 en CI | 🔴 BLOQUEADA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C3b.1 | Prompt no documentado | Recuperar y documentar el prompt en producción + registrarlo | Prompt en el registro de agentes; versión asignada | **P0 — URGENTE** |
| C3b.2 | Tips falsas pasan el filtro | Revisar criterios de validación; rediseñar si es necesario | 100 % de tips falsas rechazadas en 20 pruebas | **P0 — URGENTE** |
| C3b.3 | N3 no implementable | Implementar N3 tras C3b.1 | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C3b.4 | Sin rastro LRS | Emitir `validated` (o equivalent) desde el Corrector con contexto del Juez | Decisiones del Juez trazables en la LRS | **P1** |
| C3b.5 | Prueba A1 bloqueada | Implementar A1 tras C3b.1 y C3b.2 | 100 % tips falsas rechazadas en CI | **P0** |
| C3b.6 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Sin decisión automatizada (RGPD art. 22) | No emite xAPI; no alimenta la banda | §A.6 |
| Supervisión humana (Reglamento IA art. 14) | Juez = filtro previo; código decide si muestra el tip | §A.7 |
| Trazabilidad | Pendiente de C3b.1 | §A.7 |

**Estado de conformidad:** 🔴 — C3b.1 y C3b.2 (P0) bloquean toda la gobernanza del Juez: sin prompt documentado y con hallazgo activo de tips falsas aprobadas.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
