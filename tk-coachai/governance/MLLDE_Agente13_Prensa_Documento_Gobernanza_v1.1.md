# MLLDE · Agente 13 (rogue) — PRENSA
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 13 · **Fase:** Fuera del loop
**Mapa canónico:** **NO pertenece al diseño MLLDE** · **Estado:** 🔴 RETIRAR
**¿Fue diseñado por Ana Eslava-Graterol?** NO
**¿Mide?** DESCONOCIDO · **¿Decide?** DESCONOCIDO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.**
> Este componente **no fue diseñado por Ana Eslava-Graterol**. Es un agente «rogue» que apareció en el código porque Alex no implementó el harness de gobernanza en la fase de desarrollo. No forma parte de la arquitectura MLLDE ni del inventario canónico de 5 piezas + consolidador.
>
> **Decisión arquitectónica (nov 2026):** reducir el sistema al mínimo canónico. Este componente se **retira**.

---

# PARTE A — ORIGEN Y DECISIÓN

## A.1 Origen
- **id en código:** `prensa`. Localizado en `api/tk-coach.js` (línea 817) durante la auditoría del 9 de noviembre de 2026.
- **Origen:** agente no declarado que apareció en producción al no estar implementado el harness de gobernanza. No tiene ficha de diseño, no tiene misión pedagógica asignada por la Dirección MLLDE, no tiene contrato NO-TRAIN verificado.
- **Rastro en la LRS:** ninguno.
- **Visible para el alumno:** no.

## A.2 Por qué no forma parte del diseño MLLDE
El inventario canónico de TK CoachAI (versión gobernada) consta de **5 piezas + 1 consolidador de código**:
1. Capi (role-play)
2. Corrector/Juez (feedback)
3. Evaluador (única pieza que mide)
4. Redactor del resumen
5. Generadores (misión, drill, tarjeta, mediación, enriquecedor, preparador)
+ Consolidador de código

`Prensa` no cabe en ninguna de estas piezas ni responde a ninguna necesidad pedagógica identificada en el diseño MLLDE. Su presencia en el código es un artefacto de implementación, no una decisión de diseño.

## A.3 Decisión
**RETIRAR.** El componente debe eliminarse del código antes del despliegue con gobernanza.

| Paso | Acción | Responsable | Criterio |
|---|---|---|---|
| 1 | Desactivar (feature flag a false) inmediatamente | Ingeniería | 0 ejecuciones en producción |
| 2 | Auditar dependencias en `api/tk-coach.js` | Ingeniería | Ninguna dependencia activa |
| 3 | Eliminar del código | Ingeniería | Ausente en la rama de gobernanza |
| 4 | Confirmar retirada en el registro de agentes | Dirección pedagógica + Ingeniería | Registro actualizado |

---

# PARTE B — ESTADO (al 9-nov-2026)

| Componente | Estado |
|---|---|
| Pertenece al diseño MLLDE | 🔴 NO |
| Función documentada | 🔴 DESCONOCIDA |
| Contrato NO-TRAIN | 🔴 NO VERIFICADO |
| Rastro LRS | 🔴 NINGUNO |
| Decisión arquitectónica | 🔴 RETIRAR |

---

# PARTE C — DECLARACIÓN

Este componente **no tiene declaración de conformidad MLLDE** porque no es un componente del diseño MLLDE. Su único estado de gobernanza es: **retirar antes del despliegue con gobernanza.**

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
