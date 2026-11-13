# Checklist de evaluación · Simulador 4D · Surcido Cero-Error
### Evaluation checklist · 4D Simulator · Zero-Error Suturing

> **Fase:** test & evaluación del *primer draft* (v0.1).
> **Marco:** verificación de *Technical & Compliance Training Architect* (ID) + *CUXedTech · UX Quality Framework* (UXEdTech) + WCAG 2.1 AA.
> **Autoría:** Ana Eslava-Graterol · Asistido por IA, revisado por la autora.

## Cómo puntuar
Para cada ítem marca: **✅ Cumple** · **🟡 Parcial** (para revisar) · **⬜ No cumple**.
Usamos ámbar "para revisar", nunca rojo (decisión pedagógica — filtro afectivo).

**Umbral de salida (gate):**
- **GO** → todos los ítems *críticos* (marcados 🔒) en ✅ y ≥ 90 % del resto en ✅.
- **FIX FIRST** → algún 🔒 en 🟡/⬜, o 1–3 ítems no críticos en ⬜.
- **HOLD** → ≥ 2 ítems 🔒 en ⬜, o fallo estructural (no carga / sin bilingüe / sin trazabilidad).

---

## A · Alineación instruccional (ID)
- [ ] 🔒 **Trazabilidad sin huérfanos:** cada pantalla → un objetivo (D3) → una tarea (D2) → un ítem de evaluación (D6) → un registro (D7). *Test:* recorre los 9 pasos y traza una fila de ejemplo de punta a punta.
- [ ] 🔒 **Decisión "¿formación o no?"** visible: el entregable-cero (brecha de práctica, no de ingeniería) está argumentado. *Test:* paso 0, callout senior.
- [ ] **DIF coherente:** solo los pasos críticos reciben simulación; el paso de bajo DIF (recorte) va a job aid. *Test:* tabla D2.
- [ ] **ADDIE justificado** frente a SAM para contexto regulado. *Test:* callout D1.
- [ ] **Métricas de éxito** acordables y medibles (FPY, scrap/operario, time-to-first-good-unit, 100 % maestría). *Test:* tabla D1.

## B · Objetivos y evaluación
- [ ] 🔒 **Objetivos Mager** (desempeño + condición + criterio), observables. *Test:* tabla D3; ninguno empieza por "comprender/saber".
- [ ] 🔒 **Compuerta cero-error** aplicada *solo* a pasos críticos (no sobre-compuertar). *Test:* D6 + simulador (el salto se bloquea; las puntadas correctas avanzan).
- [ ] **Kirkpatrick L1–L4** con instrumento por nivel y honestidad L3–L4 (se *enganchan*, no se prometen). *Test:* tabla D6 + anchor.
- [ ] **Checkpoint D7** (completion ≠ success) responde y puntúa. *Test:* paso 7, responde la pregunta.

## C · Calidad UX — CUXedTech
- [ ] 🔒 **UX Writing: claro · consistente · útil** en microcopy, botones y feedback. *Test:* lee CTAs y estados; ¿se entienden sin contexto?
- [ ] 🔒 **Feedback de error = ámbar "para revisar"**, nunca rojo. *Test:* pulsa "Intentar saltar un orificio".
- [ ] **CTAs con patrón claro** (verbo + objeto; una acción primaria por pantalla). *Test:* nav inferior y controles del simulador.
- [ ] **Jerarquía y arquitectura de la información** legibles (eyebrow → H2 → cuerpo → anchor). *Test:* escaneo de 5 s por paso.
- [ ] **Voz vs. tono** consistente (profesional, llano, adulto; sin marketing). *Test:* muestreo EN y ES.
- [ ] **Estados del sistema** siempre visibles (progreso, puntada X/12, saltos bloqueados). *Test:* línea de estado + métrica del simulador.

## D · Accesibilidad WCAG 2.1 AA (POUR)
- [ ] 🔒 **Contraste** cuerpo ≥ 4.5:1, UI/grande ≥ 3:1 en tema claro y oscuro. *Test:* tokens Ocean Ink (pre-medidos) + verificación puntual.
- [ ] 🔒 **Teclado total:** todo operable con Tab/Enter/flechas; foco visible (anillo 3px). *Test:* recorre sin ratón.
- [ ] **Color nunca solo:** estados con glifo + etiqueta (✓ hecho, ! revisar, ▸ activo). *Test:* simula escala de grises.
- [ ] **`prefers-reduced-motion`** respetado (auto-rotación y transiciones). *Test:* activa reduce-motion y pulsa Auto-rotar.
- [ ] **Lector de pantalla:** `aria-live` en estado/resumen; `aria-pressed` en toggles; etiquetas en slider/grupos. *Test:* VoiceOver/NVDA en el simulador.
- [ ] **Nueva pestaña con aviso visible** (WCAG 3.2.5) si algún enlace abre fuera. *Test:* revisa enlaces externos (hoy no hay).
- [ ] **Tap targets ≥ 44×44 px.** *Test:* botones del simulador y nav.

## E · Responsive & multidispositivo
- [ ] 🔒 **Móvil (≤ 414 px):** sin scroll horizontal; controles a ancho completo; pieza y orificios escalan. *Test:* iPhone.
- [ ] 🔒 **Tablet portrait y landscape (768–1024 px):** simulador centrado; metodología a 2 columnas; sin scroll horizontal. *Test:* iPad ✅ (validado).
- [ ] **Desktop (≥ 1024 px):** ancho de lectura ≈ 65ch; nada estirado. *Test:* navegador ancho.
- [ ] **Rotación de dispositivo** recalcula el simulador sin romperse. *Test:* gira la tablet con el simulador abierto.
- [ ] **Tablas** con scroll propio en estrecho (`.tbl-wrap`), sin romper la página. *Test:* D1/D2/D3/D6 en móvil.

## F · Telemetría táctil auditable
- [ ] 🔒 **`pointerType` capturado** (touch / mouse / pen) por evento. *Test:* en tablet, el log muestra `[touch]`.
- [ ] 🔒 **Export xAPI (JSON)** descarga una traza íntegra (envelope + statements). *Test:* pulsa Exportar; abre el archivo.
- [ ] **Timestamp ISO + offset en ms + coordenadas** por sentencia. *Test:* inspecciona el JSON.
- [ ] **Resumen auditable:** nº eventos, taps, drags, touch sí/no. *Test:* cabecera del panel REC.
- [ ] **Copiar / Limpiar** funcionan. *Test:* ambos botones.
- [ ] 🔒 **Privacidad:** actor anónimo; sin datos personales en la traza. *Test:* revisa `actor` en el JSON.
- [ ] **Verbos legibles** (progressed / blocked / rotated / passed / exported). *Test:* log.
- [ ] *(Producción)* Nota visible de que la demo guarda en cliente; en real iría a un **LRS** vía cmi5/xAPI. *Test:* `rec-note` + disclaimer.

## G · Bilingüe EN/ES
- [ ] 🔒 **Paridad total** (161/161 claves; sin huérfanos). *Test:* script de cobertura ✅.
- [ ] 🔒 **Conmutación completa** incluye navegación dinámica (Continuar/Atrás, "Paso X de 9") y simulador. *Test:* cambia ES↔EN en varios pasos.
- [ ] **Registro equivalente** (no traducción literal torpe; términos técnicos correctos). *Test:* muestreo nativo ES.
- [ ] **Persistencia** del idioma entre páginas (`localStorage oi-lang`). *Test:* vuelve al Bootcamp y regresa.

## H · Rendimiento & robustez
- [ ] 🔒 **Cero errores de consola** al cargar y al interactuar. *Test:* DevTools ✅.
- [ ] **Carga como sitio estático** (GitHub Pages), sin dependencias externas salvo fuentes. *Test:* abre el `index.html`.
- [ ] **Sin bloqueos** al repetir acciones (reset, export múltiple, cambio de idioma). *Test:* estrés manual.

## I · Cumplimiento & registro (MedTech)
- [ ] 🔒 **Placeholders marcados:** pasos, DIF y cifras etiquetados como ilustrativos a sustituir por el SOP real. *Test:* disclaimer paso 8.
- [ ] 🔒 **Sin citas normativas inventadas** (ISO 13485 / 21 CFR 820 / EU MDR nombradas, no citadas textualmente). *Test:* búsqueda de números/artículos.
- [ ] **Disclosure de IA** presente (EU AI Act Art. 50, voluntaria). *Test:* disclaimer.
- [ ] **Versión/traza** del artefacto registrable (commit, fecha). *Test:* git log.

## J · Plan de test con usuarios (piloto L1–L2)
- [ ] **Muestra:** 3–5 operarios nuevos + 1 supervisor/formador. *(definir)*
- [ ] **Tareas:** (1) desmontar y nombrar partes; (2) completar una pasada sin saltos; (3) provocar y leer un bloqueo; (4) exportar la traza.
- [ ] **Métricas L1 (reacción):** credibilidad y usabilidad (2 ítems + SUS corto).
- [ ] **Métricas L2 (aprendizaje):** % que alcanza maestría cero-error sin ayuda; intentos-hasta-maestría; errores de etiquetado.
- [ ] **UX (CUXedTech):** puntos de fricción, mis-taps, abandono por paso (de la telemetría).
- [ ] **Umbral de éxito del piloto:** *(definir con stakeholders — p. ej. ≥ 80 % alcanza maestría en ≤ 3 intentos)*.

---

## K · Veredicto
| Dimensión | Resultado | Notas |
|---|---|---|
| A Instruccional | ⬜ | |
| B Objetivos/Evaluación | ⬜ | |
| C UX (CUXedTech) | ⬜ | |
| D Accesibilidad | ⬜ | |
| E Responsive/Tablet | ⬜ | |
| F Telemetría auditable | ⬜ | |
| G Bilingüe | ⬜ | |
| H Rendimiento | ⬜ | |
| I Cumplimiento | ⬜ | |
| J Piloto L1–L2 | ⬜ | |

**Veredicto global:** ⬜ GO · ⬜ FIX FIRST · ⬜ HOLD
**Evaluador/a:** __________ **Fecha:** __________ **Versión:** v0.1 (primer draft)
