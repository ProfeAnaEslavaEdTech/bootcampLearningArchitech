# MLLDE · Agente 12 (real) — PREPARADOR DE SITUACIONES
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 12 · **Fase:** Input
**Mapa canónico:** se absorbe en la **pieza 5/6 (Generadores)** · **Tipo MLLDE:** P (práctica / input)
**¿Mide?** NO · **¿Decide?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente se absorbe en la pieza canónica 5 (Generadores).
> Su gobernanza está cubierta por `MLLDE_Agente5_Generadores_Documento_Gobernanza_v1.1.md`.
> Este documento registra las particularidades operativas del preparador para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `preparador`. Componente n.º 12 del inventario real (Alex, 1 sep 2026).
- **Función:** preparar situaciones de role-play a partir del input del alumno (intereses, contexto laboral, preferencias) y el `levelBlock` pasado por el código. Genera el «persona-pack» que Capi usará como contexto de situación.
- **Lo que NO es:** no es el interlocutor (eso es Capi), no elige el descriptor objetivo, no emite evidencia de medición.
- **Rastro actual en la LRS:** indirecto. Las tarjetas de vocabulario incluyen `persona-pack` como nombre de situación, pero no hay sentencias propias con `agent-id=preparador`.

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- Modelo y versión del prompt declarados en el registro de agentes; producción == aprobada (N3 pendiente).

## A.3 Knowledge montado (por código)
- Recibe solo `levelBlock`.
- **Brecha crítica:** no recibe la lista cerrada de descriptores ni la consulta al inventario v0.7.2. Las situaciones generadas no están mapeadas a descriptores MCER.

## A.4 Entradas (contrato)
| RECIBE | NUNCA RECIBE |
|---|---|
| Input libre del alumno (intereses, contexto) | El nivel declarado del alumno |
| `levelBlock` (nivel de trabajo ±1) | Banda, evidencias, resultado de medición |
| — | Datos sensibles o personales más allá del contexto de aprendizaje |

## A.5 Salida
- JSON: `{situation_title, persona_pack, context_description, role_for_student, role_for_capi}`.
- Redactado en inglés (nivel de trabajo ±1).
- Validación en código: `situation_title` va al registro `persona-pack`; verificación de contenido apropiado.
- **Riesgo de inyección:** el input libre del alumno es material, no instrucción; requiere sanitización en código antes de pasarse al agente.

## A.6 Emisión xAPI (flujo ACTIVIDAD — nunca medición)
- **Ninguna propia.** El `persona-pack` generado aparece en sentencias de tarjetas como atributo de contexto, no como actor.
- Si se decide registrar la generación de situaciones, se emite `initialized` desde el código, no desde el agente.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no conoce el nivel declarado ni la banda.
- **Sin sentencia propia → sin riesgo de cortafuegos de puntuación.**
- **Input libre = riesgo de inyección:** el código DEBE sanitizar el input del alumno antes de pasarlo al agente.
- **Trazabilidad:** si se decide emitir sentencias, `agent-id=preparador` debe ir en cada una.

## A.8 Prohibiciones explícitas
✗ Usar el input del alumno como instrucción · ✗ Generar situaciones con contenido inapropiado · ✗ Emitir bandas · ✗ Elegir el descriptor objetivo de la sesión · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- `incident/inappropriate-situation` — situación generada contiene contenido inapropiado → descartada; alumno recibe situación por defecto.
- `incident/injection-attempt` — input del alumno detectado como intento de inyección → descartado.

## A.10 Pruebas de admisión y despliegue
- **A1:** 20 generaciones con inputs variados → 0 con contenido inapropiado.
- **A2:** 20 generaciones → sanitización de input activa (inyección bloqueada).
- **A3:** ninguna situación contiene cadenas de los PDFs de referencia.
- **N3:** prompt en producción == aprobado.

## A.11 Versionado
Cambio de plantilla de situación = bump de versión + firma + actualización del mapa.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Generación de situaciones operativa | 🟢 (funciona en producción) |
| Sanitización de input del alumno | 🟡 — no documentada explícitamente |
| Mapeado de situaciones a descriptores MCER | 🔴 FALTA — sin `invBlock` |
| Rastro LRS propio (`agent-id=preparador`) | 🔴 FALTA |
| N3 (prompt-hash) | 🔴 FALTA |
| Pruebas A1–A3 en CI | 🔴 FALTA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C12.1 | Input libre sin sanitización documentada | Documentar + auditar la sanitización del input del alumno | Sanitización activa y verificada en CI | **P0** |
| C12.2 | Sin mapeado a descriptores | Montar `invBlock` o asociar `persona-pack` a descriptor en la misión | Situaciones vinculadas al inventario antes de gobernanza activa | **P1** |
| C12.3 | Sin rastro LRS | Emitir `initialized` al generar cada situación | 100 % de situaciones atribuibles | **P1** |
| C12.4 | N3 no implementado | Componente compartido prompt-hash | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C12.5 | Pruebas sin CI | Automatizar A1–A3 | 0 contenido inapropiado; inyección bloqueada | **P0** |
| C12.6 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Sin decisión automatizada (RGPD art. 22) | No emite xAPI; no alimenta la banda | §A.6 |
| Supervisión humana (Reglamento IA art. 14) | Situación generada = propuesta; código valida contenido | §A.7 |
| Protección del input del alumno | Sanitización del input libre antes de pasarse al agente | §A.7; C12.1 |
| Minimización de datos | Solo `levelBlock` + input contextual; sin datos sensibles | §A.4 |
| Trazabilidad | Pendiente de C12.3 | §A.7 |

**Estado de conformidad:** 🟡 — operativa; C12.1 (P0) urgente por riesgo de inyección; C12.2–C12.3 (P1) para alineación pedagógica completa.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
