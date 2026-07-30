 Profe Ana Eslava EdTech · Learning Architect Bootcamp

Nine tracks. One portfolio.
🔗 Live site: https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/

---

## What this is

Knowledge without practice doesn't survive an interview, and practice without grounding doesn't either. This repo is a living collection of self-built, gamified practice labs — one per job posting I'm preparing for, plus general-purpose tool mastery and technical architecture tracks.

The rule: every time I see a genuine target posting, I build a lesson unit specifically to prepare for it — real cases drawn from the actual posting, not generic theory. Every track produces something you could open and show in an interview.

---

## The nine tracks

### 🧭 SaaS Training Bootcamp
**Knowledge & rehearsal**
Ten gamified levels covering SCORM vs. xAPI, Rise vs. Storyline, LMS telemetry thinking, adult-learner gamification, and a full mock-panel rehearsal — timed, structured, no second takes.
`10 levels · ~3h` → [`/bootcamp`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/bootcamp/)

---

### 🛠️ SaaS Hands-On Track
**Real artifacts**
Fourteen scoped mini-projects covering the full Learning Architect role. Each one produces something real you can open and show: a storyboard, a published Rise lesson, a certification blueprint.
`14 projects · 20–60 min each` → [`/handson`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/handson/)

---

### 🎨 Articulate 360
**Tool mastery**
Fourteen projects across Rise 360 and Storyline 360 — from building your first block-based course to publishing SCORM packages, adding branching logic, and designing interactive assessments.
`14 projects · Rise + Storyline` → [`/articulate360`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/articulate360/)

---

### 🏛️ EU Frameworks
**Framework fluency**
Micro-course on the five EU digital competency frameworks — DigComp 2.2, DigCompEdu, e-CF, SFIA, and ENISA ECSF. Test-Teach-Test structure with XP, quizzes, and consulting scenarios.
`~45 min · Newcomer → Pioneer` → [`/frameworks`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/frameworks/)

---

### 🏥 Learning Designer Practice Lab
**Duty-by-duty drill**
Ten real cases mapped one-to-one to an actual J&J qualifications list (req R-085222) — storyboard a decision-point frame, audit an accessibility slide, diagnose misleading performance data, and build in Articulate Rise.
`10 modules · ~3h` → [`/jnj-bootcamp`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/jnj-bootcamp/)

---

### 🧠 Dual-Track: Designer vs. LXA
**Bloom's progression**
Switch between the execution track (Learning Designer) and the strategy track (Learning Experience Architect). Every module is tagged Remember through Create — two full HLD-from-scratch exercises walk all six Bloom's steps inside one brief.
`10 + 8 modules · ~4h` → [`/jnj-dual-track`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/jnj-dual-track/)

---

### 🗄️ LRS Architecture
**Architecture**
Hybrid B2C + B2B platform design — multi-tenancy, xAPI statement forwarding, permission scopes, cmi5 dynamic launch, and a full annotated code walkthrough of the two-scenario architecture.
`13 steps · ~45 min` → [`/lrs`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/lrs/)

---

### ⚙️ xAPI Scripting in Articulate 360
**Developer track**
Write JavaScript that connects Storyline 360 and Rise 360 courses to an LRS. Custom statements, Execute JavaScript triggers, cmi5 launch params, GetVar() patterns, and a full debugging workflow.
`13 steps · ~50 min` → [`/scripting`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/scripting/)

---

### 🤖 AI Literacy for IDs
**AI fluency**
How RLHF works, why models hallucinate, and how instruction following succeeds or breaks — then translating it into safer prompt patterns and smarter AI-assisted design in Articulate 360.
`12 steps · ~45 min · Curious → Strategist` → [`/ai-literacy`](https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/ai-literacy/)

---

## Design principles behind every track

- **Real artifacts over multiple choice.** Most modules produce something you could screen-share in an interview — a storyboard frame, a built Rise lesson, a drafted HDD section — not just a quiz score.
- **Honesty about gaps, built into the content.** Where a real qualification gap exists (years of experience, a specific tool, a specific sector), the practice includes a rehearsed, honest answer for it — not a script to paper over it.
- **Built from the actual posting.** Every module traces back to a specific line in a real job description. Nothing here is generic instructional-design trivia.
- **Same visual language, deliberately varied tone.** Each track has its own color palette matched to its subject (terminal/blueprint/clinical/amber/emerald/navy), but the underlying interaction patterns — checklists, scenario quizzes, storyboard builders, boss-level reveals — are consistent across all nine.
- **In-memory state.** All progress tracking is session-only by design; no personal data persists between visits.

---

## Tech stack

Single self-contained HTML files per track — no build step, no dependencies, no framework. Each is HTML + CSS + vanilla JS in one file, so it runs anywhere, including directly from disk.

---

## Repo structure

```
/
├── index.html               ← Landing page (nine tracks)
├── bootcamp/index.html      ← SaaS Training Bootcamp
├── handson/index.html       ← SaaS Hands-On Track
├── articulate360/index.html ← Articulate 360
├── frameworks/index.html    ← EU Frameworks
├── jnj-bootcamp/index.html  ← Learning Designer Practice Lab
├── jnj-dual-track/index.html← Dual-Track: Designer vs. LXA
├── lrs/index.html           ← LRS Architecture
├── scripting/index.html     ← xAPI Scripting
└── ai-literacy/index.html   ← AI Literacy for IDs
```

---

## About

Built by **Ana Eslava-Graterol** — eLearning Designer & Learning Architect, Valencia, Spain.

Built for learning. Use the artifacts for the next interview too.
