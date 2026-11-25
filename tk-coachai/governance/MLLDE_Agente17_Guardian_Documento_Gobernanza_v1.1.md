# MLLDE · Agente 17 (no confirmado) — AGENTE GUARDIÁN
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 17 (no confirmado) · **Fase:** Fuera del loop / vigilancia
**Mapa canónico:** **NO declarado en la arquitectura** · **Estado:** PROHIBIDO con acceso de escritura
**¿Mide?** NO · **¿Decide?** NO (permitido solo como vigilante que alerta; prohibido con escritura)
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **ALERTA DE GOBERNANZA.**
> El Agente Guardián presenta el **riesgo máximo** en el modelo de gobernanza MLLDE: si analiza y corrige el sistema de forma autónoma, es un agente auto-modificante.
> **Veredicto:** PROHIBIDO con acceso de escritura a cualquier componente del sistema. Permitido ÚNICAMENTE como vigilante de solo lectura que emite alertas (fail-closed) hacia supervisión humana.
> La prueba N3 (prompt-hash) sustituye la función de «guardián» en el flujo de gobernanza normal.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito (permitido)
- **id real:** `guardian` (no confirmado). Detectado el 18 de septiembre de 2026; no está declarado en la arquitectura oficial del sistema.
- **Función permitida (única):** monitorización de solo lectura del sistema. Lee logs, sentencias xAPI y métricas. **Alerta** al equipo humano cuando detecta anomalías. Nunca actúa por sí mismo.
- **Función prohibida:** cualquier modificación autónoma de prompts, configuración, datos de alumno, sentencias LRS o cualquier componente del sistema.

## A.2 Estado actual
- Componente detectado pero **no confirmado en la arquitectura**. No hay evidencia de que esté activo en producción.
- **Acción requerida:** confirmar si está activo; si lo está, auditar si tiene acceso de escritura a cualquier componente.

## A.3 Riesgo de gobernanza
- **Riesgo máximo (Reglamento IA, art. 9 — gestión de riesgos):** un agente con capacidad de modificar otros agentes, prompts o datos de alumnos constituye un sistema de IA que toma decisiones de alto impacto sin supervisión humana directa.
- **Categoría según Reglamento IA 2024/1689:** potencialmente «riesgo inaceptable» si modifica sistemas que afectan a la evaluación educativa.

## A.4 Restricciones de diseño (si se activa)
| PERMITIDO | PROHIBIDO |
|---|---|
| Lectura de logs y métricas | Escritura en la LRS |
| Emisión de alertas a supervisión humana | Modificación de prompts |
| Fail-closed (alerta + parada, no corrección) | Modificación de datos del alumno |
| — | Acceso a claves de API o configuración del sistema |

## A.5 Emisión xAPI
- Si se activa: `flagged` → alerta a supervisión humana. Solo lectura de la LRS; nunca escritura.

## A.6 Sustitución por N3
- La prueba N3 (prompt-hash verificado en cada inicio de sesión) **cubre la función de vigilancia** del Guardián en el flujo normal de gobernanza. El Guardián como entidad separada es redundante y peligrosa; N3 es la implementación segura.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

| Componente | Estado |
|---|---|
| Confirmación de existencia en arquitectura | 🔴 NO CONFIRMADO |
| Acceso de escritura auditado | 🔴 NO AUDITADO |
| Fail-closed implementado | ⚫ no verificable |
| N3 como sustituto de gobernanza | 🔴 FALTA (en todos los agentes) |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C17.1 | Componente no confirmado | Auditar si `guardian` está activo en producción | Estado confirmado (activo / inactivo) | **P0 — URGENTE** |
| C17.2 | Acceso de escritura desconocido | Si está activo: auditar permisos; eliminar cualquier acceso de escritura | 0 permisos de escritura en ningún componente | **P0 — URGENTE** |
| C17.3 | Función cubierta por N3 | Implementar N3 en todos los agentes | N3 activo en los 5 agentes canónicos; Guardián retirado o limitado a alertas | **P0** |
| C17.4 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Estado actual | Acción requerida |
|---|---|---|
| Sin decisión automatizada (RGPD art. 22) | ⚫ No verificable | C17.1 — confirmar estado |
| Sin modificación autónoma de agentes | ⚫ No verificable | C17.2 — auditar permisos |
| Supervisión humana (Reglamento IA art. 14) | ⚫ No verificable | C17.1 + C17.3 |

**Estado de conformidad:** 🔴 — componente no confirmado con riesgo máximo potencial. C17.1–C17.2 (P0) bloquean cualquier activación o continuidad en producción.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
