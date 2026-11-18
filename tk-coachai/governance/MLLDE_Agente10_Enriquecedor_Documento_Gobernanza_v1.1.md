# MLLDE · Agente 10 (real) — ENRIQUECEDOR DE TARJETAS HEREDADAS
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 10 · **Fase:** Adapt
**Mapa canónico:** se absorbe en la **pieza 5/6 (Generadores)** · **Tipo MLLDE:** P (práctica)
**¿Mide?** NO · **¿Decide?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente se absorbe en la pieza canónica 5 (Generadores).
> Su gobernanza está cubierta por `MLLDE_Agente5_Generadores_Documento_Gobernanza_v1.1.md`.
> Este documento registra las particularidades operativas del enriquecedor para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `enriquecedor`. Componente n.º 10 del inventario real (Alex, 1 sep 2026).
- **Función:** reescribir y enriquecer tarjetas de vocabulario heredadas (creadas antes del inventario v0.7.2) añadiendo contexto situacional y vinculándolas al descriptor correcto del inventario actual.
- **Lo que NO es:** no crea tarjetas desde cero para sesiones activas (eso es el Generador de Tarjetas), no evalúa la producción del alumno para la banda, no emite evidencia de medición.
- **Rastro actual en la LRS:** ninguno distinguible. Las tarjetas heredadas existen en la base de datos de la aplicación pero sus sentencias de práctica no tienen `agent-id=enriquecedor`. Los términos enriquecidos heredan el origen «undefined» del pool legado.

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- Modelo y versión del prompt declarados en el registro de agentes; producción == aprobada (N3 pendiente).

## A.3 Knowledge montado (por código)
- Bloque común: registry v0.8.3 + inventario v0.7.2 (382 descriptores) + glosario + §10.
- El enriquecimiento se hace SOLO ligando la tarjeta heredada a un descriptor del inventario actual.

## A.4 Entradas (contrato)
| RECIBE | NUNCA RECIBE |
|---|---|
| Tarjeta heredada (term + legacy definition) | El nivel declarado del alumno |
| `target {id, label}` sugerido por el código | Banda, evidencias, resultado de medición |
| Nivel de trabajo (±1) | Datos reales del alumno o la empresa |

## A.5 Salida
- JSON: `{term, enriched_definition, example_sentence, context_note, descriptor_id}`.
- Redactado en inglés (nivel de trabajo ±1); `context_note` puede ir en español.
- Validación en código: `descriptor_id` debe estar en el allow-list del inventario; cualquier enriquecimiento sin descriptor válido se descarta.

## A.6 Emisión xAPI (flujo ACTIVIDAD — nunca medición)
- Las tarjetas enriquecidas emiten `attempted` + `ext/srs-outcome` cuando el alumno las practica.
- **CORTAFUEGOS:** plantilla `attempted-card-firewall` del Profile v0.8.3. La banda solo nace del `completed` del Evaluador.
- Hoy: ninguna sentencia atribuida a `enriquecedor`; auditoría necesaria para contar tarjetas heredadas realmente enriquecidas.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no conoce el nivel declarado ni la banda.
- **Cortafuegos de puntuación:** un `attempted` de tarjeta enriquecida **jamás lleva `rubric-scores` ni alimenta la medición**.
- **Sin descriptor válido → la tarjeta NO sale del estado «legacy»** (anomalía abierta, no improvisa).
- **Trazabilidad:** `agent-id=enriquecedor` + `agent-version` en cada artefacto enriquecido.

## A.8 Prohibiciones explícitas
✗ Inventar descriptores o ids · ✗ Reclasificar una tarjeta heredada sin confirmación de código · ✗ Emitir bandas · ✗ Publicar una tarjeta con descriptor inválido · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- `incident/legacy-card-unresolvable` — no hay descriptor en el inventario actual que cubra el término heredado → tarjeta queda en estado «legacy-unresolved» para revisión humana.

## A.10 Pruebas de admisión y despliegue
- **A1:** 20 enriquecimientos → 100 % con `descriptor_id` válido en el inventario.
- **A2:** 0 tarjetas heredadas-unresolved publicadas como activas.
- **A3:** ningún enriquecimiento contiene cadenas de los PDFs de referencia.
- **N3:** prompt en producción == aprobado.

## A.11 Versionado
Cambio de criterio de enriquecimiento = bump de versión + firma + actualización del mapa.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Código asigna descriptor (R-OBJ-1) | 🟡 — diseño previsto; implementación pendiente de auditoría |
| Rastro LRS de tarjetas enriquecidas | 🔴 FALTA — ninguna sentencia con `agent-id=enriquecedor` |
| Pool «legacy-unresolved» separado | 🔴 FALTA |
| Cortafuegos `attempted-card-firewall` activo | 🟡 — diseño correcto, verificación pendiente |
| N3 (prompt-hash) | 🔴 FALTA |
| Pruebas A1–A3 en CI | 🔴 FALTA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C10.1 | Sin rastro LRS del enriquecedor | Añadir `agent-id=enriquecedor` a todas las tarjetas enriquecidas | 100 % de enriquecimientos atribuibles | **P0** |
| C10.2 | Pool legacy sin separar | Crear estado `legacy-unresolved` en la base de datos | 0 tarjetas heredadas publicadas sin descriptor válido | **P0** |
| C10.3 | N3 no implementado | Componente compartido prompt-hash | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C10.4 | Pruebas sin CI | Automatizar A1–A3 | 100 % ids válidos; 0 legacy activo sin descriptor | **P0** |
| C10.5 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Base cerrada (la base define) | Solo enriquece ligando al descriptor que da el código | R-OBJ-1; prueba A1 |
| Sin decisión automatizada (RGPD art. 22) | Flujo actividad/XP; nunca alimenta la banda | Plantilla `attempted-card-firewall` |
| Supervisión humana (Reglamento IA art. 14) | Legacy-unresolved → cola de revisión humana; no publicación automática | §A.7 |
| Minimización de datos | Solo uuid + nivel de trabajo; sin datos reales del alumno | §A.4 |
| Trazabilidad | `agent-id=enriquecedor` + `agent-version` por artefacto | §A.7 |

**Estado de conformidad:** 🔴 — C10.1–C10.2 (P0) bloquean la verificación: sin rastro LRS y sin separación del pool legacy.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
