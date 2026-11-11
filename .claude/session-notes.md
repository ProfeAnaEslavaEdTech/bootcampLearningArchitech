# Session Notes — 2026-11-11

## Decisiones tomadas hoy

### Módulo WCAG 2.2 AA añadido al bootcamp
- **Card c24** insertada en Sector 06 "Career & Transversal" (`index.html`)
  - Después de c23 (SCORM Guide), en el mismo `card-row-5`
  - CTA apunta a `./resources/index.html`
  - i18n en EN y ES añadidos en ambos diccionarios
- **`resources/index.html`** — página HTML nueva con el módulo completo
  - Ocean Ink design system (tokens `--primary`, `--canvas`, `--ink`, etc.)
  - Accesible: skip link (2.4.1), `aria-current` en breadcrumb, contraste ≥ 4.5:1
  - 6 secciones: por qué WCAG 2.2, POUR, 6-step audit, fixes con código antes/después, herramientas, ejercicio
  - Marco legal: Ley 11/2023 (ES) · EN 301 549 v3.2.1 · Directiva UE 2016/2102 · Section 508
- **`resources/wcag22-audit-guide.md`** — fuente Markdown del módulo (commit feb88ff)
  - ⚠ GitHub Pages sin Jekyll NO renderiza .md como HTML → usar siempre `resources/index.html` para enlazar

## PRs cerrados hoy
- **#65** — feat(s6): WCAG 2.2 AA Audit Guide card c24 + resources/index.html → mergeado a main

## Estado actual de main
- 24 cards (c1–c24) en 6 sectores
- Módulo WCAG accesible en `https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/resources/`

## Pendiente / Para mañana
- Verificar live en GitHub Pages que `resources/index.html` carga correctamente
- Comprobar que el card c24 aparece bien en móvil (grid `card-row-5` con 7 cards)
- Posible: crear `resources/wcag22-checklist.html` como página standalone del bootcamp
- Posible: PR para añadir checklist WCAG interactivo (artifact ya publicado en claude.ai/artifact/A2otBUyujNmQribaW2B4ec)
