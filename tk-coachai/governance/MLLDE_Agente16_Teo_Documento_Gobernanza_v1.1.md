# MLLDE · Agente 16 (real) — TEO (SOPORTE POR CORREO)
## Documento individual de AI Governance · v1.1 · 9 de noviembre de 2026
**Aplicación:** TK CoachAI · **Inventario real:** componente n.º 16 · **Fase:** Fuera del loop
**Mapa canónico:** **dominio separado (soporte)** — no tiene pieza canónica · **Tipo:** Soporte / canal correo
**¿Mide?** NO · **¿Decide?** NO · **¿Toca la LRS?** NO
**Principio rector:** La base define · la IA localiza · el código calcula · el profesor decide · la LRS lo registra.
**Firmas:** Dirección pedagógica MLLDE ______ · Ingeniería ______

> **Nota de gobernanza.** Teo es un agente de soporte que opera por canal de correo electrónico.
> No tiene pieza canónica porque está completamente fuera del loop pedagógico.
> Nunca toca datos de aprendizaje ni la LRS. Firma sus respuestas como «agente de IA supervisado».
> Este documento registra su ficha de gobernanza para completar el inventario de los 16 componentes reales.

---

# PARTE A — FICHA OPERATIVA

## A.1 Identidad y propósito
- **id real:** `teo`. Componente n.º 16 del inventario real (Alex, 1 sep 2026).
- **Función:** asistente de soporte al alumno/usuario por canal de correo electrónico. Responde dudas de uso de la aplicación, problemas técnicos y preguntas generales. Firma como «agente de IA supervisado».
- **Dominio:** soporte — completamente separado del dominio pedagógico.
- **Lo que NO es:** no genera contenido pedagógico, no accede a datos de aprendizaje ni a la LRS, no emite xAPI.

## A.2 Modelo
- Modelo con contrato NO-TRAIN verificado.
- Versión del prompt declarada en el registro de agentes.

## A.3 Separación de dominios
- **Canal:** correo electrónico únicamente. Teo nunca tiene acceso a:
  - La LRS (Veracity o cualquier otro).
  - El perfil del alumno (nivel declarado, banda, histórico de sentencias).
  - Los prompts de los agentes pedagógicos.
  - El inventario de descriptores MCER.

## A.4 Entradas y salidas
| ENTRADA | SALIDA |
|---|---|
| Mensaje de correo del usuario | Respuesta de soporte (texto) |
| — | Firma: «agente de IA supervisado» |

## A.5 Emisión xAPI
- **Ninguna.** El canal de correo es externo a la LRS. Ningún dato del hilo de soporte entra en la LRS.

## A.6 Transparencia hacia el usuario
- Toda respuesta de Teo incluye la firma visible «agente de IA supervisado».
- El usuario puede escalar a soporte humano en cualquier momento.

## A.7 Guardarraíles de gobernanza
- **Separación estricta de dominios:** sin acceso a datos pedagógicos.
- **Sin decisión sobre el aprendizaje:** Teo no puede ni confirmar ni negar el nivel del alumno, ni su progreso, ni ningún dato de la LRS.
- **Supervisión humana:** equipo de soporte revisa las respuestas de Teo según el protocolo de Talketika.

## A.8 Prohibiciones explícitas
✗ Acceder a la LRS · ✗ Acceder al perfil del alumno · ✗ Dar información sobre niveles o bandas · ✗ Generar contenido pedagógico · ✗ Firmar sin identificarse como agente de IA.

---

# PARTE B — ESTADO DE DESARROLLO (al 9-nov-2026)

🟢 conforme · 🟡 parcial · 🔴 FALTA · ⚫ no verificable

| Componente | Estado |
|---|---|
| Canal de correo separado del dominio pedagógico | 🟢 |
| Firma visible «agente de IA supervisado» | 🟢 |
| Sin acceso a la LRS ni al perfil del alumno | 🟢 (por separación de dominio) |
| Contrato NO-TRAIN verificado | 🟡 — asumido; verificación documentada pendiente |
| Protocolo de escalada a soporte humano | 🟡 — operativo; documentación formal pendiente |
| N3 (prompt-hash) | 🟡 — recomendado aunque no bloqueante |
| Especificación firmada | 🟡 (escrita; firmas pendientes) |

---

# PARTE C — PLAN DE CIERRE

| # | Brecha | Acción concreta | Criterio de aceptación | Prioridad |
|---|---|---|---|---|
| C16.1 | Contrato NO-TRAIN no documentado | Verificar y documentar el contrato del modelo usado por Teo | Contrato verificado en el registro | **P0** |
| C16.2 | Protocolo de escalada sin formalizar | Documentar el protocolo de escalada a soporte humano | Protocolo firmado por Talketika | **P1** |
| C16.3 | N3 no implementado | Implementar prompt-hash para Teo | Prompt == aprobado | **P1** |
| C16.4 | Firmas | Sesión de firma | v1.1 firmada en el repositorio | **P0** |

---

# PARTE D — DECLARACIÓN DE CONFORMIDAD

| Principio de gobernanza | Cómo cumple este componente | Evidencia |
|---|---|---|
| Sin decisión automatizada (RGPD art. 22) | No toca datos de aprendizaje ni la LRS | §A.3 |
| Transparencia (Reglamento IA art. 50) | Firma visible «agente de IA supervisado» | §A.6 |
| Supervisión humana (Reglamento IA art. 14) | Revisión del equipo de soporte; escalada disponible | §A.7 |
| Minimización de datos | Solo el mensaje del usuario; sin datos pedagógicos | §A.4 |

**Estado de conformidad:** 🟢 — operativa con separación de dominios correcta; C16.1 (P0) para documentar formalmente el contrato NO-TRAIN.

**Firmas:** Dirección pedagógica MLLDE ____________________ · Ingeniería ____________________ · Fecha: ____________

---
*MLLDE © Ana Eslava-Graterol. Registro de derechos de autor en trámite. Documento preparado con asistencia de IA y revisado por la autora, en el espíritu del art. 50 del Reglamento (UE) 2024/1689.*
