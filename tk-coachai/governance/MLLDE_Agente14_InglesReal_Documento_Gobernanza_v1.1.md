# MLLDE · Agente 14 (real) — INGLÉS REAL (OCULTO)
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 14 · **Fase:** Fuera del loop
**Mapa canónico:** **NO declarado en la arquitectura** · **Estado:** ⏳ PENDIENTE DE DECISIÓN
**¿Mide?** DESCONOCIDO · **¿Decide?** DESCONOCIDO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **ALERTA DE GOBERNANZA.**
> «Inglés Real» es un componente oculto no declarado en la arquitectura oficial de TK CoachAI.
> Localizado en `api/tk-coach.js`. Función desconocida. Sin rastro en la LRS.
> **Veredicto:** pendiente de decisión de Ana Eslava-Graterol: retirar o examen R-ADM.
> **Regla de gobernanza:** ningún componente no declarado puede quedar activo en producción.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `ingles-real`. Componente n.º 14 del inventario real (Alex, 1 sep 2026).
- **Localización en código:** `api/tk-coach.js` (oculto).
- **Función:** desconocida. No está declarado en la arquitectura del sistema ni en el inventario documentado. El nombre sugiere una posible funcionalidad relacionada con exposición a inglés auténtico («real English»), pero no hay confirmación.
- **Rastro en la LRS:** ninguno.
- **Estado:** oculto — no visible para el alumno ni para el sistema de gobernanza hasta su descubrimiento en la auditoría del 9 de noviembre de 2026.

## A.2 Riesgo de gobernanza
- Mismo nivel de riesgo que `prensa` (componente no declarado en producción).
- Riesgo adicional: si la función involucra exposición a contenido externo («inglés real»), podría implicar:
  - Uso de materiales con derechos de autor.
  - Contenido no filtrado por la base cerrada del inventario v0.7.2.
  - Métricas de exposición no registradas en la LRS.

## A.3 Opciones de decisión
| Opción | Descripción | Requisito |
|---|---|---|
| **Retirar** | Eliminar `ingles-real` del código | Verificar que no hay dependencias activas antes de retirar |
| **Examen R-ADM** | Someter a admisión formal (R-ADM) | Documentar función + modelo + contrato + base cerrada + pruebas A1–A3 + N3 |

## A.4 Mientras está pendiente de decisión
- El componente no debe ejecutarse en ninguna sesión de alumno hasta que se tome la decisión.
- Si está activo: **desactivar de inmediato** (feature flag a false) y abrir incidente.
- Si involucra materiales externos: verificar derechos de uso antes de cualquier reactivación.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

| Componente | Estado |
|---|---|
| Función documentada | 🔴 DESCONOCIDA |
| Contrato NO-TRAIN | 🔴 NO VERIFICADO |
| Rastro LRS | 🔴 NINGUNO |
| Derechos sobre materiales externos (si aplica) | 🔴 NO VERIFICADO |
| Decisión Ana (retirar / R-ADM) | ⏳ PENDIENTE |
| Especificación firmada | 🔴 IMPOSIBLE hasta conocer la función |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C14.1 | Función desconocida | Auditar el código en `api/tk-coach.js` para localizar `ingles-real` | Función documentada | **P0 — URGENTE** |
| C14.2 | Componente activo sin declarar | Desactivar (feature flag a false) hasta la decisión | 0 ejecuciones de `ingles-real` en producción hasta decidir | **P0 — URGENTE** |
| C14.3 | Derechos sobre materiales (si aplica) | Si usa contenido externo: verificar licencias y compatibilidad con NO-TRAIN | Derechos verificados y documentados | **P0 (si aplica)** |
| C14.4 | Decisión pendiente | Ana decide: retirar o examen R-ADM | Decisión documentada y firmada | **P0** |
| C14.5 | Si R-ADM: documentar completamente | Seguir el proceso de admisión estándar | Ficha completa v1.1 firmada | **P0 (si R-ADM)** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

**Estado de conformidad:** 🔴 — componente no declarado; imposible declarar conformidad hasta conocer su función y verificar derechos sobre materiales. C14.1–C14.4 (P0) son bloqueantes.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
