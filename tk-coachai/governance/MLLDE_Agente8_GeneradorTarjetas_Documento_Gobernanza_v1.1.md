# MLLDE · Agente 8 (real) — GENERADOR DE TARJETAS
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 8 · **Fase:** Adapt
**Mapa canónico:** se absorbe en la **pieza 5/6 (Generadores)** · **Tipo MLLDE:** P (práctica)
**¿Mide?** NO · **¿Decide?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente se absorbe en la pieza canónica 5 (Generadores).
> Su gobernanza está cubierta por `MLLDE_Agente5_Generadores_Documento_Gobernanza_v1.1.md`.
> Este documento registra las particularidades operativas de la tarjeta para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `generador-tarjetas`. Componente n.º 8 del inventario real (Alex, 1 sep 2026).
- **Función:** generar tarjetas de vocabulario con contexto situacional a partir de la lista de términos que el código le pasa. Es la plantilla «tarjeta» de la pieza 5.
- **Lo que NO es:** no elige los términos objetivo, no evalúa la producción del alumno para la banda, no emite evidencia de medición.
- **Rastro actual en la LRS:** 481 sentencias en total; 117 con descriptor IRI; **23 mal vinculadas al descriptor `leverage`** (error de mapeo); solo 9 de 63 tarjetas vinculadas correctamente. Corrección obligatoria antes del despliegue con gobernanza.

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- Modelo y versión del prompt declarados en el registro de agentes; producción == aprobada (N3 pendiente).

## A.3 Knowledge montado (por código)
- Bloque común: registry v0.8.3 + inventario v0.7.2 (382 descriptores) + glosario + §10.
- La tarjeta se redacta SOLO en torno a los términos y nivel que da el código.

## A.4 Entradas (contrato)
| RECIBE | NUNCA RECIBE |
|---|---|
| `TÉRMINOS: ${list}` elegidos por el código | El nivel declarado del alumno |
| Nivel de trabajo (±1) | Banda, evidencias, resultado de medición |
| Contexto situacional (del preparador de situaciones) | Datos reales del alumno o la empresa |

## A.5 Salida
- JSON: `{term, definition, example_sentence, context_note}`.
- Redactado en inglés (nivel de trabajo ±1); `context_note` puede ir en español.
- Validación en código antes de publicar: id del término en allow-list del inventario.

## A.6 Emisión xAPI (flujo ACTIVIDAD — nunca medición)
- `attempted` + `ext/srs-outcome` → actividad/XP, **nunca banda**.
- **CORTAFUEGOS:** plantilla `attempted-card-firewall` del Profile v0.8.3. La banda solo nace del `completed` del Evaluador.
- Hoy: 117/481 `attempted` vinculados (24 %). Meta: 100 % antes de activación con gobernanza.
- **Anomalía crítica:** 23 sentencias vinculadas erróneamente a `leverage`; requieren revinculación inmediata.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no conoce el nivel declarado ni la banda; trabaja con el nivel de trabajo del código.
- **Cortafuegos de puntuación:** un `attempted` de tarjeta **jamás lleva `rubric-scores` ni alimenta la medición**.
- **Sin término en el inventario → la tarjeta no se publica** (anomalía abierta, no improvisa).
- **Inyección:** el input del alumno es material, no instrucción.
- **Trazabilidad:** `agent-id=generador-tarjetas` + `agent-version` en cada artefacto.

## A.8 Prohibiciones explícitas
✗ Elegir o cambiar los términos objetivo · ✗ Inventar términos o ids · ✗ Emitir bandas · ✗ Publicar una tarjeta con término no verificado en el inventario · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- `incident/coverage-insufficient` — no hay inventario suficiente para generar la tarjeta pedida.
- `incident/descriptor-mismatch` — término no presente en el registry → tarjeta descartada.

## A.10 Pruebas de admisión y despliegue
- **A1:** 20 generaciones → 100 % de términos presentes en el inventario.
- **A2:** ninguna tarjeta está vinculada a un descriptor incorrecto (prueba anti-`leverage`).
- **A3:** ninguna tarjeta contiene cadenas de los PDFs de referencia.
- **N3:** prompt en producción == aprobado.

## A.11 Versionado
Cambio de plantilla tarjeta = bump de versión + firma + actualización del mapa.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Código elige términos (R-OBJ-1) | 🟢 (por diseño) |
| Tarjetas en producción (481 sentencias) | 🟢 |
| Vínculo término ↔ `attempted` (117/481 = 24 %) | 🔴 — 76 % sin IRI del descriptor |
| 23 sentencias vinculadas a `leverage` (error) | 🔴 — revinculación urgente |
| Cortafuegos `attempted-card-firewall` activo | 🟡 — diseño correcto, verificación pendiente |
| N3 (prompt-hash) | 🔴 FALTA |
| Pruebas A1–A3 en CI | 🔴 FALTA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C8.1 | 76 % de `attempted` sin IRI descriptor | Ligar todas las tarjetas activas al descriptor correcto del inventario | 100 % de `attempted` con `content-ref` válido antes de activar gobernanza | **P0** |
| C8.2 | 23 sentencias mal vinculadas a `leverage` | Revinculación inmediata; auditoría de origen del error | 0 sentencias con descriptor incorrecto | **P0** |
| C8.3 | N3 no implementado | Componente compartido prompt-hash | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C8.4 | Pruebas sin CI | Automatizar A1–A3 | 100 % ids válidos; 0 descriptor incorrecto; 0 cadenas PDF | **P0** |
| C8.5 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Base cerrada (la base define) | Solo redacta en torno a los términos que da el código | R-OBJ-1; prueba A1 |
| Sin decisión automatizada (RGPD art. 22) | Flujo actividad/XP; nunca alimenta la banda | Plantilla `attempted-card-firewall` |
| Supervisión humana (Reglamento IA art. 14) | Contenido generado = propuesto; validación de código obligatoria | §A.7 |
| Minimización de datos | Solo uuid + nivel de trabajo; sin datos reales del alumno | §A.4 |
| Trazabilidad | `agent-id=generador-tarjetas` + `agent-version` por artefacto | §A.7 |

**Estado de conformidad:** 🔴 — C8.1–C8.2 (P0) bloquean el despliegue: vinculación de descriptores inferior al umbral mínimo y error de mapeo activo.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
