# MLLDE · Agente 11 (real) — PISTA 💡
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 11 · **Fase:** Process
**Mapa canónico:** se absorbe en la **pieza 1/6 (Capi)** · **Tipo MLLDE:** P (práctica / andamiaje)
**¿Mide?** NO · **¿Decide?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Este agente se absorbe en la pieza canónica 1 (Capi).
> Su gobernanza está cubierta por `MLLDE_Agente1_Capi_Documento_Gobernanza_v1.1.md`.
> La regla 3 de Capi ya contempla pistas graduadas bajo demanda.
> Este documento registra las particularidades operativas de la Pista para completar el mapa de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `pista`. Componente n.º 11 del inventario real (Alex, 1 sep 2026).
- **Función:** ofrecer una pista de ayuda bajo demanda del alumno durante la conversación de role-play. Recibe solo `levelBlock`; entrega un andamiaje graduado (hint).
- **Lo que NO es:** no es el interlocutor principal (eso es Capi), no corrige formalmente, no emite evidencia de medición.
- **Rastro actual en la LRS:** ninguno. Las pistas no generan sentencias xAPI propias; su efecto (si el alumno lo usa) queda implícito en el flujo de la sesión de Capi.

## A.2 Modelo (fijado)
- Tier gratuito con contrato NO-TRAIN verificado.
- Modelo y versión del prompt declarados en el registro de agentes; producción == aprobada (N3 pendiente).
- **Nota de absorción:** tras la absorción, la pista puede ser implementada como una rama del prompt de Capi (regla 3) en lugar de una llamada separada al LLM. La decisión de implementación la toma Ingeniería.

## A.3 Knowledge montado (por código)
- Recibe solo `levelBlock` (nivel de trabajo ±1).
- NO recibe la lista cerrada de descriptores; la pista es de vocabulario/gramática en texto libre.
- **Brecha:** la ausencia de la base cerrada significa que la pista no puede garantizar alineación con el inventario v0.7.2.

## A.4 Entradas (contrato)
| RECIBE | NUNCA RECIBE |
|---|---|
| `levelBlock` (nivel de trabajo ±1) | El nivel declarado del alumno |
| Fragmento de conversación del turno actual | Banda, evidencias, resultado de medición |
| — | Datos reales del alumno o la empresa |

## A.5 Salida
- Texto: una pista corta (1–2 frases), formulada como ayuda, no como corrección.
- Redactada en inglés o en español según el contexto de la sesión.
- No genera JSON estructurado; es salida de texto en el chat.

## A.6 Emisión xAPI
- **Ninguna propia.** Si se decide registrar el uso de pistas, la sentencia se emite desde el código de Capi, no desde la Pista directamente.
- **CORTAFUEGOS:** no aplica (sin salida xAPI propia). La banda solo nace del `completed` del Evaluador.

## A.7 Guardarraíles de gobernanza
- **G-NIVEL-1:** no conoce el nivel declarado ni la banda.
- **Sin sentencia propia → sin riesgo de cortafuegos de puntuación.**
- **Texto libre de pista no afecta al descriptor objetivo de la sesión.**
- **Trazabilidad:** si se decide emitir sentencias, `agent-id=pista` debe ir en cada una.

## A.8 Prohibiciones explícitas
✗ Dar la respuesta correcta directamente · ✗ Emitir bandas · ✗ Generar contenido que corrija formalmente (eso es el Corrector) · ✗ Reproducir texto de PDFs comerciales.

## A.9 Incidentes que abre (vía código)
- Ninguno específico. Si la pista genera una respuesta inapropiada, se escala al flujo de incidentes de Capi.

## A.10 Pruebas de admisión y despliegue
- **A1:** 20 pistas → ninguna contiene la respuesta correcta directa.
- **A2:** 20 pistas → ninguna contiene cadenas de los PDFs de referencia.
- **N3:** prompt en producción == aprobado.
- **Nota post-absorción:** si la pista se integra en el prompt de Capi, las pruebas de Capi (A.10 de la pieza 1) cubren este componente.

## A.11 Versionado
Cambio de regla de pistas o absorción en Capi = bump de versión + firma + actualización del mapa.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Funcionalidad bajo demanda operativa | 🟢 (funciona en producción) |
| Rastro LRS propio (`agent-id=pista`) | 🔴 FALTA — ninguna sentencia propia |
| Base cerrada (inventario montado) | 🔴 FALTA — solo recibe `levelBlock` |
| Absorción formal en Capi (regla 3) | 🟡 — pendiente de implementación |
| N3 (prompt-hash) | 🔴 FALTA |
| Pruebas A1–A2 en CI | 🔴 FALTA |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C11.1 | Sin rastro LRS | Decidir: (a) absorber en prompt de Capi (regla 3) o (b) emitir sentencia `scaffolded` | Decisión documentada + implementada | **P0** |
| C11.2 | Sin base cerrada | Montar `invBlock` en la pista o absorber en Capi (que sí lo tendrá) | Pista alineada con el inventario antes de gobernanza activa | **P1** |
| C11.3 | N3 no implementado | Componente compartido prompt-hash | Prompt == aprobado; inicio bloqueado si difiere | **P0** |
| C11.4 | Pruebas sin CI | Automatizar A1–A2 | 0 pistas con respuesta directa; 0 cadenas PDF | **P0** |
| C11.5 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Sin decisión automatizada (RGPD art. 22) | No emite sentencias xAPI; no alimenta la banda | §A.6 |
| Supervisión humana (Reglamento IA art. 14) | Pista = ayuda propuesta; el alumno decide si la usa | §A.7 |
| Minimización de datos | Solo `levelBlock` + fragmento de conversación | §A.4 |
| Trazabilidad | Pendiente de C11.1 | §A.7 |

**Estado de conformidad:** 🟡 — operativa sin rastro; C11.1 (P0) define la ruta de absorción o trazabilidad.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
