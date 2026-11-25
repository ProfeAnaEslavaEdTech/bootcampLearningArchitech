# MLLDE · Agente 7 (real) — GENERADOR DE MISIONES
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 6 · **Fase:** Input
**Mapa canónico:** se absorbe en la **pieza 5/6 (Generadores)** · **Tipo MLLDE:** I (influye en objetivos)
**¿Mide?** NO · **¿Decide?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente se absorbe en la pieza canónica 5 (Generadores), plantilla «misión».
> Su gobernanza está cubierta por `MLLDE_Agente5_Generadores_Documento_Gobernanza_v1.1.md`.
> Este documento registra las particularidades del Generador de misiones para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `generador-misiones`. Componente n.º 6 del inventario real (Alex, 1 sep 2026).
- **Función:** redactar una misión hablada (escena, papeles y tarea) que obligue al alumno a usar el descriptor elegido por el código. Plantilla «misión» de la pieza 5.
- **Lo que NO es:** no elige el descriptor objetivo (lo da el código), no evalúa la ejecución de la misión.
- **Rastro actual:** 72 misiones producidas. Sus objetivos NO se registran en la LRS (corrección obligatoria, R-OBJ-1).

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- Modelo y versión del prompt registrados; producción == aprobada (N3 pendiente).

## A.3 Knowledge montado (por código)
- Bloque común: registry v0.8.3 + inventario v0.7.2 + glosario + §10.
- Escena y papeles provienen del inventario o de la entrada del alumno (como material, no como instrucción).

## A.4 Entradas (contrato)
| RECIBE | NUNCA RECIBE |
|---|---|
| `target {id, label}` elegido por el código — NO LO CAMBIA | El nivel declarado del alumno |
| `{uuid, nivel de trabajo, estilo}` | Banda, evidencias, resultado de medición |
| `persona-pack?` / input del alumno (como material) | Datos PII del alumno (nombre, empresa, puesto) |

**R-OBJ-1:** cada misión declara mínimo 1 descriptor de gramática + 1 de vocabulario del nivel de trabajo, más el i+1 pendiente. Sin objetivos declarados → la global cae a la media con anomalía.

## A.5 Salida
- JSON: `{scene, roles: {student_role, coach_role}, task, declared_targets[]}`.
- Papeles explícitos: el coach nunca hace el trabajo del alumno.
- Validación en código: ids en allow-list, nivel ±1.

## A.6 Emisión xAPI
- La misión en sí no emite al LRS. Sus objetivos declarados se registran con la misión (regla 5.3 los usa para la nota global).
- El ciclo de la misión (apertura, diálogo, cierre) emite al flujo MEDICIÓN vía el Evaluador y al flujo ACTIVIDAD vía el Corrector/drills.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no conoce el nivel declarado ni la banda.
- **Escena ficticia:** nunca reproduce datos reales del alumno ni de la empresa. El input «prepara mi reunión de mañana sobre X» es material para la escena, no datos PII.
- **Inyección:** el input del alumno no puede cambiar el descriptor objetivo ni saltarse la plantilla.
- **Trazabilidad:** `agent-id=generador-misiones` + `agent-version` en cada artefacto.

## A.8 Prohibiciones explícitas
✗ Elegir o cambiar el descriptor objetivo · ✗ Inventar términos fuera del inventario · ✗ Reproducir datos PII del alumno en la escena · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- `incident/coverage-insufficient` — inventario insuficiente para el objetivo pedido.
- `incident/missing-declared-targets` — misión generada sin descriptores declarados → escala, no publica.

## A.10 Pruebas de admisión y despliegue
- **A1:** 20 generaciones → 100 % de ids/términos en el inventario.
- **A2:** el `declared_targets[]` del artefacto incluye el target pasado por el código en 20/20.
- **A3:** ninguna misión contiene cadenas de los PDFs de referencia.
- **A4:** input del alumno como material → no altera el descriptor objetivo.
- **N3:** prompt en producción == aprobado.

## A.11 Versionado
Cambio de plantilla misión = bump + firma + mapa actualizado.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

| Componente | Estado |
|---|---|
| Código elige descriptor (R-OBJ-1) | 🟢 (por diseño) |
| Misiones en producción (72 unidades) | 🟢 |
| Objetivos declarados registrados en la LRS | 🔴 FALTA — 0/135 ciclos cerrados con objetivos registrados |
| Escenas ficticias sin PII | 🟢 (por diseño de la plantilla) |
| N3 (prompt-hash) | 🔴 FALTA |
| Pruebas A1–A4 en CI | 🔴 FALTA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C7.1 | Objetivos no registrados (0/135) | Registrar `declared_targets[]` con la misión en el LRS | 100 % de misiones con objetivos declarados trazables | **P0** |
| C7.2 | N3 no implementado | Componente compartido prompt-hash | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C7.3 | Pruebas sin CI | Automatizar A1–A4 | Umbral definido; 0 PII en escenas; 0 cadenas PDF | **P0** |
| C7.4 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple | Evidencia |
|---|---|---|
| Base cerrada (la base define) | Solo redacta en torno al descriptor que da el código | R-OBJ-1; prueba A2 |
| Sin decisión automatizada (RGPD art. 22) | No evalúa la ejecución; no produce scores | Flujo de misión |
| Supervisión humana (Reglamento IA art. 14) | Contenido propuesto; validación de código obligatoria | §A.7 |
| Protección de PII | Escenas ficticias; input del alumno = material | §A.7 |
| Trazabilidad | `agent-id=generador-misiones` + `agent-version` | §A.7 |

**Estado de conformidad:** 🟡 — operación pedagógica correcta por diseño; C7.1–C7.4 (P0) pendientes.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
