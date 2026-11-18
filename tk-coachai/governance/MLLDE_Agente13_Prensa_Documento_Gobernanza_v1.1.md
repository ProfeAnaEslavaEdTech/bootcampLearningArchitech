# MLLDE · Agente 13 (real) — PRENSA (OCULTO)
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 13 · **Fase:** Fuera del loop
**Mapa canónico:** **NO declarado en la arquitectura** · **Estado:** ⏳ PENDIENTE DE DECISIÓN
**¿Mide?** DESCONOCIDO · **¿Decide?** DESCONOCIDO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **ALERTA DE GOBERNANZA.**
> «Prensa» es un componente oculto no declarado en la arquitectura oficial de TK CoachAI.
> Localizado en `api/tk-coach.js` (línea 817). Función desconocida. Sin rastro en la LRS.
> **Veredicto:** pendiente de decisión de Ana Eslava-Graterol: retirar o examen R-ADM.
> **Regla de gobernanza:** ningún componente no declarado puede quedar activo en producción.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `prensa`. Componente n.º 13 del inventario real (Alex, 1 sep 2026).
- **Localización en código:** `api/tk-coach.js`, línea 817 (oculto).
- **Función:** desconocida. No está declarado en la arquitectura del sistema ni en el inventario de agentes documentado por Alex.
- **Rastro en la LRS:** ninguno.
- **Estado:** oculto — no visible para el alumno ni para el sistema de gobernanza hasta su descubrimiento en la auditoría del 9 de noviembre de 2026.

## A.2 Riesgo de gobernanza
- **Componente no declarado corriendo en producción** = riesgo de gobernanza de nivel máximo según la regla: «conocemos todo lo que corre».
- Sin conocer su función, es imposible evaluar si:
  - Accede a datos del alumno.
  - Genera contenido que afecta al flujo pedagógico.
  - Emite sentencias xAPI no trazadas.
  - Tiene contrato NO-TRAIN verificado.

## A.3 Opciones de decisión
| Opción | Descripción | Requisito |
|---|---|---|
| **Retirar** | Eliminar `prensa` del código | Verificar que no hay dependencias activas antes de retirar |
| **Examen R-ADM** | Someter a admisión formal (R-ADM) | Documentar función + modelo + contrato + pruebas A1–A3 + N3 |

## A.4 Mientras está pendiente de decisión
- El componente no debe ejecutarse en ninguna sesión de alumno hasta que se tome la decisión.
- Si está activo: **desactivar de inmediato** (feature flag a false) y abrir incidente.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

| Componente | Estado |
|---|---|
| Función documentada | 🔴 DESCONOCIDA |
| Contrato NO-TRAIN | 🔴 NO VERIFICADO |
| Rastro LRS | 🔴 NINGUNO |
| Decisión Ana (retirar / R-ADM) | ⏳ PENDIENTE |
| Especificación firmada | 🔴 IMPOSIBLE hasta conocer la función |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C13.1 | Función desconocida | Auditar el código en `api/tk-coach.js` línea 817 | Función documentada | **P0 — URGENTE** |
| C13.2 | Componente activo sin declarar | Desactivar (feature flag a false) hasta la decisión | 0 ejecuciones de `prensa` en producción hasta decidir | **P0 — URGENTE** |
| C13.3 | Decisión pendiente | Ana decide: retirar o examen R-ADM | Decisión documentada y firmada | **P0** |
| C13.4 | Si R-ADM: documentar completamente | Seguir el proceso de admisión estándar | Ficha completa v1.1 firmada | **P0 (si R-ADM)** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

**Estado de conformidad:** 🔴 — componente no declarado; imposible declarar conformidad hasta conocer su función. C13.1–C13.3 (P0) son bloqueantes.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
