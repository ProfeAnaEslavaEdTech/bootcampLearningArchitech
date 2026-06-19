# 🎯 Bootcamp: Learning Architect

A self-paced, gamified training app built to prepare for a **Learning Architect** interview — and, more broadly, as a working demonstration of instructional design applied to itself.

**Live demo:** *[add your GitHub Pages link here once enabled — see below]*

---

## What this is

Ten levels. One self-contained HTML file. Zero build steps.

This app trains the exact skill set a modern **Product Education / Learning Architect** role requires — and it trains it *by being* an example of that skill set: gamified, mobile-responsive, accessible, and built with AI as a documented collaborator rather than a black box.

| # | Level | Trains | Interaction |
|---|---|---|---|
| 01 | The Brief | Decoding a job description into trainable pillars | Checklist |
| 02 | Self-Audit | Honest skills self-assessment | Sliders |
| 03 | SCORM vs. xAPI | The core LMS interoperability standards | Quiz + model answer |
| 04 | Rise or Storyline? | Authoring-tool decision logic | Drag/click matching |
| 05 | Telemetry Thinking | Reading completion/drop-off data to redesign content | Scenario + quiz |
| 06 | The Adult Learner | Gamification for professional audiences, not children | Checklist |
| 07 | Build the Pitch | Designing a gamified onboarding flow, from scratch | Free-text builder |
| 08 | The Recording | Rehearsing STAR answers against the clock | Timer |
| 09 | Know the Terrain | Structured pre-interview product research | Checklist |
| 10 | Final Boss | Five-question mock panel, model answers on reveal | Sequential Q&A |

---

## Why it's built this way

Every design decision mirrors a principle a Learning Architect would actually apply on the job:

- **Self-paced + structured** — same blended-learning philosophy the role itself requires designing
- **XP and level-gating** — game mechanics chosen for *competence signaling*, not decoration (see Level 06 for the reasoning behind that distinction)
- **Accessible by default** — visible focus states, keyboard-operable interactions, `prefers-reduced-motion` respected
- **No external dependencies** — the entire app is one HTML file. Open it. It works. That constraint forces every design decision to earn its place.

---

## Tech

Vanilla HTML/CSS/JS. No frameworks, no build tooling, no package manager. Intentional — a Learning Architect should be able to ship something real without infrastructure overhead getting in the way of the pedagogy.

- `Space Grotesk` for display/body type, `IBM Plex Mono` for data and labels
- In-browser state management (no backend)
- Single-file architecture for maximum portability — clone it, open `index.html`, done

---

## Running it locally

```bash
git clone https://github.com/ProfeAnaEslavaEdTech/bootcampLearningArchitech.git
cd bootcampLearningArchitech
open index.html   # or just double-click it
```

No install step. That's the point.

---

## Project context

Built as live preparation for a Learning Architect interview, then kept as a portfolio artifact because the build process — researching the role, mapping it to ten trainable competencies, and shipping a working instructional tool around that map — *is* the job.

For full project context and development notes, see [`CLAUDE_CODE_CONTEXT.md`](./CLAUDE_CODE_CONTEXT.md).

---

## Author

**Ana Eslava** — Language Designer & eLearning Architect
Bilingual (Spanish native, English C1) · 20+ years in language pedagogy and instructional design · AI-assisted content workflows

🔗 [profeanaeslavaedtech.github.io/Gamification](https://profeanaeslavaedtech.github.io/Gamification/) — *Academic Writing Journey*, a gamified eLearning app independently evaluated **10/10** for inclusive design (UPV, 2026)
🔗 [LinkedIn](https://linkedin.com/in/anaeslava)
