# Evaluación · Pasada 1 (evidencia) · Simulador 4D v0.1
### Evaluator: Claude (Opus 4.8) assist · Reviewed by: Ana Eslava-Graterol · Fecha: 2026-11-13

> Pasada técnica sobre el *primer draft*. **A–I rellenadas con evidencia**; **J–K requieren el piloto con usuarios**.
> Leyenda: **✅ Cumple** · **🟡 Parcial / para revisar** · **⬜ No cumple**. Gate: **GO / FIX FIRST / HOLD**.

---

## A · Alineación instruccional (ID)
- ✅ 🔒 **Trazabilidad sin huérfanos** — cadena pantalla→D3→D2→D6→D7 explícita en el anchor de D7; tablas D2/D3/D6 enlazan tarea↔objetivo↔ítem.
- ✅ 🔒 **Decisión "¿formación o no?"** — entregable-cero argumentado en el paso 0 (brecha de práctica vs. ingeniería).
- ✅ **DIF coherente** — 5 pasos críticos a *Simular*, paso 6 (recorte) a *Job aid*.
- ✅ **ADDIE justificado** — callout D1 (auditabilidad > velocidad SAM).
- ✅ **Métricas de éxito** acordables — FPY, scrap/operario, time-to-first-good-unit, 100 % maestría (tabla D1).

## B · Objetivos y evaluación
- ✅ 🔒 **Objetivos Mager** — tabla D3; ninguno empieza por "comprender/saber"; terminal observable.
- ✅ 🔒 **Compuerta cero-error solo en críticos** — el simulador bloquea el salto y deja avanzar las puntadas correctas; D6 la limita a pasos críticos.
- ✅ **Kirkpatrick L1–L4 honesto** — L3–L4 se *enganchan* (xAPI + línea base), no se prometen (anchor D6).
- ✅ **Checkpoint D7** — pregunta completion≠success funcional y puntuada (+30 XP).

## C · Calidad UX — CUXedTech
- ✅ 🔒 **UX Writing claro · consistente · útil** — CTAs verbo+objeto; microcopy de estado comprensible sin contexto.
- ✅ 🔒 **Error = ámbar "para revisar", nunca rojo** — bloqueo de salto en `#F3B861`; log en rosa `#F0A6A6` (permitido por Ocean Ink), sin rojo.
- ✅ **CTAs con patrón claro** — una acción primaria por pantalla (Continuar) + controles agrupados.
- ✅ **Jerarquía / IA** — eyebrow → H2 → cuerpo → anchor consistente en los 9 pasos.
- ✅ **Voz/tono** — profesional, llano, adulto; sin marketing (muestreo EN+ES).
- ✅ **Estados del sistema visibles** — rail de progreso, "puntada X/12", "saltos bloqueados", resumen REC.

## D · Accesibilidad WCAG 2.1 AA (POUR)
- ✅ 🔒 **Contraste** — tokens Ocean Ink pre-medidos (cuerpo 15.5:1; primario 5.75:1; oro-600 5.11:1); ámbar/rosa sobre panel oscuro del simulador OK.
- ✅ 🔒 **Teclado + foco** — 9/9 controles enfocables; anillo de foco 3px global.
- 🟡 **Color nunca solo** — las tablas usan glifo+etiqueta; **los orificios del simulador codifican hecho/activo/bloqueado solo por color**. *Mitigación:* el significado está en el texto en vivo (estado + métrica), así que **1.4.1 pasa**. *Recomendado producción:* añadir glifo ✓ (hecho) y ▸ (activo) a los puntos.
- ✅ **`prefers-reduced-motion`** — auto-rotación hace 1 salto sin bucle (medido: 20°→65°).
- ✅ **Estructura para lector de pantalla** — 4 `aria-live`, 2 `aria-pressed`, 6 `aria-label`, slider etiquetado. *Nota:* ejecutar pase real con VoiceOver/NVDA en el piloto.
- ✅ **Nueva pestaña con aviso** — no hay enlaces que abran fuera (N/A, sin incumplimiento).
- ✅ **Tap targets ≥ 44px** — botones del simulador y nav con `min-height:40–44px` + padding.

## E · Responsive & multidispositivo
- ✅ 🔒 **Móvil (≤414px)** — iPhone 12: sin scroll horizontal; controles a ancho completo; pieza/orificios escalan.
- ✅ 🔒 **Tablet portrait + landscape (768–1024px)** — iPad: simulador centrado; metodología a 2 columnas; sin scroll horizontal.
- ✅ **Desktop (≥1024px)** — ancho de lectura acotado (~820px main / 65ch cuerpo).
- ✅ **Rotación** — `resize` recalcula tamaño de pieza y radio de orificios (debounce 150ms).
- ✅ **Tablas** — 5/5 con `.tbl-wrap` (scroll propio en estrecho).

## F · Telemetría táctil auditable
- ✅ 🔒 **`pointerType` capturado** — en tablet/móvil el log muestra `[touch]`; resumen `touch:yes`.
- ✅ 🔒 **Export xAPI (JSON)** — descarga `touchscreen-audit.json` (envelope + statements) verificada.
- ✅ **Timestamp ISO + offset ms + coordenadas** — por sentencia.
- ✅ **Resumen auditable** — nº eventos, taps, drags, touch sí/no (medido: 7 eventos · 6 taps · 1 drag · touch:yes).
- ✅ **Copiar / Limpiar** — funcionan (clipboard con fallback).
- ✅ 🔒 **Privacidad** — `actor:"operator-anonymous"`; sin datos personales.
- ✅ **Verbos legibles** — progressed / blocked / rotated / passed / exported.
- 🟡 **(Producción)** — la demo guarda en cliente *por diseño*; en real iría a un **LRS** vía cmi5/xAPI con actor firmado. Declarado en `rec-note` + disclaimer. (No es defecto de v0.1.)

## G · Bilingüe EN/ES
- ✅ 🔒 **Paridad total** — 161/161 claves; sin huérfanos (script de cobertura).
- ✅ 🔒 **Conmutación completa** — nav dinámica (Continuar/Atrás, "Paso X de 9") y simulador se re-traducen; medido ES↔EN.
- ✅ **Registro equivalente** — términos técnicos correctos en ambos idiomas.
- ✅ **Persistencia** — `localStorage oi-lang` compartido con el Bootcamp.

## H · Rendimiento & robustez
- ✅ 🔒 **Cero errores de consola** — carga + interacción (móvil/tablet/desktop).
- ✅ **Sitio estático** — solo `../shared/oi.css` (+ fuentes Google) e `i18n.js`; sin otras dependencias.
- ✅ **Sin bloqueos** — reset, export múltiple y cambio de idioma repetidos sin fallo; 4/4 scripts parsean.

## I · Cumplimiento & registro (MedTech)
- ✅ 🔒 **Placeholders marcados** — disclaimer paso 8 (pasos, DIF, cifras = ilustrativos a sustituir por SOP real).
- ✅ 🔒 **Sin citas normativas inventadas** — ISO 13485 / 21 CFR 820 / EU MDR *nombradas*, no citadas textualmente; única cifra en copy = objetivo "100 % maestría" (criterio, no estadística).
- ✅ **Disclosure de IA** — presente (EU AI Act Art. 50, voluntaria).
- ✅ **Versión/traza** — commits `b5e6e26` → `9337b98` en rama del proyecto.

## J · Plan de test con usuarios (piloto L1–L2) — PENDIENTE
- ⬜ Requiere muestra real (3–5 operarios + formador), umbral de éxito y SOP/tolerancias reales. *(decisión de stakeholder)*

---

## K · Veredicto (pasada técnica)
| Dimensión | Resultado |
|---|---|
| A Instruccional | ✅ |
| B Objetivos/Evaluación | ✅ |
| C UX (CUXedTech) | ✅ |
| D Accesibilidad | 🟡 (1 mejora menor) |
| E Responsive/Tablet | ✅ |
| F Telemetría auditable | ✅ |
| G Bilingüe | ✅ |
| H Rendimiento | ✅ |
| I Cumplimiento | ✅ |
| J Piloto L1–L2 | ⬜ pendiente |

**Veredicto:** ✅ **GO a piloto** — el draft v0.1 pasa la verificación técnica. Todos los ítems 🔒 en ✅.
**Para revisar (no bloqueantes, producción):**
1. 🟡 Añadir glifo ✓/▸ a los orificios del simulador (reforzar color con forma — regla tier instruccional Ocean Ink).
2. 🟡 Conectar la telemetría a un LRS real (cmi5/xAPI) al salir de demo.
3. ▫️ Ejecutar pase real con lector de pantalla durante el piloto.

**Siguiente paso:** definir con stakeholders la muestra y el umbral de éxito del piloto (sección J) y sustituir placeholders por el SOP validado.
