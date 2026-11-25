# MLLDE · Agente 9 (real) — GENERADOR DE MEDIACIÓN
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 9 · **Fase:** Input / Process
**Mapa canónico:** se absorbe en la **pieza 5/6 (Generadores)** · **Tipo MLLDE:** P (práctica)
**¿Mide?** NO · **¿Decide?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente se absorbe en la pieza canónica 5 (Generadores).
> Su gobernanza está cubierta por `MLLDE_Agente5_Generadores_Documento_Gobernanza_v1.1.md`.
> Este documento registra las particularidades operativas de la mediación para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `generador-mediacion`. Componente n.º 9 del inventario real (Alex, 1 sep 2026).
- **Función:** generar actividades de mediación (5.ª destreza MLLDE, decisión 2026-08-04) a partir del descriptor y nivel que el código le pasa. Opera tanto en Input (antes de la sesión) como en Process (turno a turno).
- **Quinta destreza MLLDE:** mediación según el Companion Volume (MCER 2020). Las sentencias emitidas llevan **dos IRI simultáneos**: el IRI de la escala de mediación Y el IRI de la destreza canal de salida (oral o escrita), según la decisión de diseño 2026-08-04.
- **Lo que NO es:** no elige el descriptor de mediación, no evalúa el resultado para la banda, no emite evidencia de medición.
- **Rastro actual en la LRS:** pendiente de auditoría separada para sentencias de mediación; hoy no distinguible del pool general.

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- Modelo y versión del prompt declarados en el registro de agentes; producción == aprobada (N3 pendiente).

## A.3 Knowledge montado (por código)
- Bloque común: registry v0.8.3 + inventario v0.7.2 (382 descriptores, escalas de mediación incluidas) + glosario + §10.
- La actividad se redacta SOLO en torno al descriptor de mediación y el canal de salida que da el código.

## A.4 Entradas (contrato)
| RECIBE | NUNCA RECIBE |
|---|---|
| `target {id, label}` (descriptor de mediación) elegido por el código | El nivel declarado del alumno |
| Canal de salida: `oral` o `written` | Banda, evidencias, resultado de medición |
| Nivel de trabajo (±1) | Datos reales del alumno o la empresa |

## A.5 Salida
- JSON: `{task_description, source_text, instructions, expected_output_channel}`.
- Redactado en inglés (nivel de trabajo ±1); instrucciones pueden ir en español.
- Validación en código: IRI de mediación + IRI de canal en allow-list; ambos deben estar presentes.

## A.6 Emisión xAPI (flujo ACTIVIDAD — nunca medición)
- `answered` con **dos IRI de objeto**: IRI de escala de mediación + IRI de destreza canal.
- **CORTAFUEGOS:** plantilla `answered-practice-firewall` del Profile v0.8.3. La banda solo nace del `completed` del Evaluador.
- Hoy: pendiente separación del pool para contar sentencias de mediación correctamente atribuidas.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no conoce el nivel declarado ni la banda; trabaja con el nivel de trabajo del código.
- **Doble IRI obligatorio:** toda sentencia de mediación lleva escala de mediación + canal de salida.
- **Cortafuegos de puntuación:** un `answered` de mediación **jamás lleva `rubric-scores` ni alimenta la medición**.
- **Sin descriptor de mediación verificado → la actividad no se publica**.
- **Trazabilidad:** `agent-id=generador-mediacion` + `agent-version` en cada artefacto.

## A.8 Prohibiciones explícitas
✗ Elegir o cambiar el descriptor de mediación · ✗ Omitir uno de los dos IRI · ✗ Emitir bandas · ✗ Publicar una actividad con descriptor no verificado · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- `incident/coverage-insufficient` — no hay descriptores de mediación para el nivel pedido.
- `incident/missing-channel-iri` — falta el IRI del canal de salida → actividad descartada.

## A.10 Pruebas de admisión y despliegue
- **A1:** 20 generaciones → 100 % con IRI de mediación válido en el inventario.
- **A2:** 20 generaciones → 100 % con IRI de canal de salida (`oral` o `written`).
- **A3:** ninguna actividad contiene cadenas de los PDFs de referencia.
- **N3:** prompt en producción == aprobado.

## A.11 Versionado
Cambio de plantilla mediación o de la decisión de doble-IRI = bump de versión + firma + actualización del mapa.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Código elige descriptor de mediación (R-OBJ-1) | 🟢 (por diseño) |
| Doble IRI implementado (decisión 2026-08-04) | 🟡 — diseño correcto; auditoría de sentencias pendiente |
| Sentencias de mediación separadas en la LRS | 🔴 FALTA — hoy no distinguibles del pool general |
| Cortafuegos `answered-practice-firewall` activo | 🟡 — diseño correcto, verificación pendiente |
| N3 (prompt-hash) | 🔴 FALTA |
| Pruebas A1–A3 en CI | 🔴 FALTA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C9.1 | Sentencias no separadas en la LRS | Añadir filtro de auditoría `agent-id=generador-mediacion` | 100 % de sentencias de mediación identificables | **P0** |
| C9.2 | Doble IRI sin verificar | Auditoría de las sentencias existentes; confirmar presencia de ambos IRI | 100 % con escala-mediación + canal antes de gobernanza activa | **P0** |
| C9.3 | N3 no implementado | Componente compartido prompt-hash | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C9.4 | Pruebas sin CI | Automatizar A1–A3 | 100 % ids válidos; 100 % doble IRI; 0 cadenas PDF | **P0** |
| C9.5 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Base cerrada (la base define) | Solo redacta en torno al descriptor de mediación + canal que da el código | R-OBJ-1; prueba A1–A2 |
| Sin decisión automatizada (RGPD art. 22) | Flujo actividad/XP; nunca alimenta la banda | Plantilla `answered-practice-firewall` |
| Supervisión humana (Reglamento IA art. 14) | Contenido generado = propuesto; doble IRI validado por código | §A.7 |
| Minimización de datos | Solo uuid + nivel de trabajo; sin datos reales del alumno | §A.4 |
| Trazabilidad | `agent-id=generador-mediacion` + `agent-version` por artefacto | §A.7 |

**Estado de conformidad:** 🟡 — diseño correcto; C9.1–C9.2 (P0) pendientes para verificar la implementación del doble IRI en producción.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
