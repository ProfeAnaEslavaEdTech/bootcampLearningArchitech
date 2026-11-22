# Instructivo — Skill "id-golden-deliverables"

Guía para crear, instalar y usar el skill que entrega tus proyectos de diseño instruccional
en el formato profesional (golden), con ficha de demos 3D incluida.

## 1 · Qué hace
Convierte un proyecto de ID en un paquete de entregables con nivel de portafolio:
- **Página de portafolio** (Título · The Problem · Tools used · enlaces a entregables).
- **Design Document** (esquema e-learning o VILT/ILT; para blended, ambos).
- **Storyboard / Design Script** (slide a slide: en pantalla · narración · notas · interacción).
- **Facilitator Guide (VILT/ILT)** con **checklist L3 (6 criterios)** y **hoja de resultados L4**.
- **Ficha técnica y pedagógica de demos 3D** (telemetría xAPI/SCORM + horas de producción).
  Esta ficha se añade SIEMPRE que el proyecto incluya un demo 3D.

## 2 · Estructura de archivos (así es un skill)
```
id-golden-deliverables/
├── SKILL.md                      ← instrucciones + frontmatter (name, description con triggers)
├── INSTRUCTIVO.md                ← este archivo
└── references/
    ├── design-document.md        ← esquemas e-learning y VILT/ILT
    ├── storyboard-script.md      ← columnas del storyboard
    ├── portfolio-page.md         ← página de portafolio
    ├── facilitator-guide.md      ← guía del formador + checklist L3/L4
    └── 3d-demo-factsheet.md      ← ficha de demos 3D (obligatoria)
```
El `description` del frontmatter es lo que hace que el skill se "dispare" solo: incluye las
palabras clave (Design Document, storyboard, facilitator guide, portfolio, formato golden,
demo 3D). Mantenlo específico.

## 3 · Cómo instalarlo
Elige una ubicación según el alcance:
- **Personal (todas tus sesiones):** copia la carpeta `id-golden-deliverables/` a
  `~/.claude/skills/`.
- **Por proyecto (este repo):** ya está en `.claude/skills/id-golden-deliverables/`
  (se versiona con el repo).
- **Como plugin (para compartir con un equipo):** empaqueta la carpeta dentro de un plugin
  y publícalo en tu marketplace.

Tras copiarla, en una sesión nueva el skill aparece en la lista de skills disponibles.

## 4 · Cómo usarlo
- **Automático:** pídelo en lenguaje natural — "prepárame los entregables de X en formato
  golden", "hazme el design document / storyboard / facilitator guide de X", "reorganiza
  estos archivos al formato de portafolio". El skill se activa por su `description`.
- **Explícito:** invócalo con `/id-golden-deliverables` (barra + nombre).

Flujo que seguirá:
1. Clasifica el modelo de entrega (e-learning · VILT/ILT · blended).
2. Genera la página de portafolio.
3. Genera el Design Document en el esquema correcto.
4. Genera el Storyboard / Design Script.
5. Si hay demo 3D, añade la ficha 3D con telemetría y horas de producción.
6. Entrega en **Word (.docx) editable** (tu estándar de carpeta de diseño), estilo tabla
   navy/blanco, salvo que pidas otro formato. Bilingüe EN/ES cuando lo pidas.

## 5 · Estándares que aplica siempre
- Encuadre honesto Kirkpatrick: el e-learning/simulador mide **decisión + secuencia (L2)**;
  la **motricidad fina** se evalúa en práctica supervisada (**L3**); transferencia en **L4**.
- **Zero-Gate**: ítems críticos al 100%, reintentos ilimitados.
- Objetivos medibles (Terminal/Enabling) alineados a la evaluación.
- **Art. 50 (UE) 2024/1689**: nota de divulgación de IA en cada entregable.
- Horas de producción (por fase) como detalle de producción.

## 6 · Cómo extenderlo o mejorarlo
- Edita `SKILL.md` para cambiar reglas globales; edita los `references/*.md` para ajustar la
  estructura de cada entregable.
- Para medir/afinar el disparo del skill, usa el skill `skill-creator` (evals del `description`).
- Si añades un tipo de entregable nuevo (p. ej., guía de accesibilidad), crea otro
  `references/<nombre>.md` y nómbralo en el workflow de `SKILL.md`.

## 7 · Nota
Desarrollado con asistencia de IA generativa, revisado y aprobado por Ana Eslava-Graterol.
Divulgado conforme al Art. 50 del Reglamento (UE) 2024/1689.
