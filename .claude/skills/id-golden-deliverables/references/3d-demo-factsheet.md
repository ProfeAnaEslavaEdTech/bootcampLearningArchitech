# 3D Demo / Simulator Fact Sheet — MANDATORY for any project with a 3D demo

Whenever a project includes a 3D demo/simulator, append this fact sheet to the design folder.
Two-column table (navy labels), plus a production-hours table. Bilingual on request.

## 1 · Identification
Unit/object · type (real-time 3D WebGL simulator) · author · date · version/commit · repo path · languages.

## 2 · Summary + honest framing
What it is and what it measures. **Honest framing (always include):** a browser 3D simulator
does NOT measure real fine motor skill; it measures the DECISION (critical choice) and the
SEQUENCE — the predictor of the error — at Kirkpatrick Level 2. Motor execution is verified
at Level 3 (supervised practice).

## 3 · Technical spec (table)
Engine (e.g., Three.js r0.128.0: WebGLRenderer, OrbitControls, DragControls) · architecture
(single self-contained HTML; assets inline/base64) · scene objects · render verification
(headless Chromium/Playwright; `node --check`) · hosting/integration (GitHub + raw.githack;
Rise iframe) · performance · date/time stamp.
Interaction & controls: step flow; depth/decision control (slider + wheel/pinch); needle/tool
manipulation; alerts; help/onboarding card.
Accessibility (WCAG 2.2 AA): non-drag alternative (2.5.7); damping; focus-visible; aria-live;
bilingual; alt text; responsive (desktop + mobile).

## 4 · Pedagogical spec (table)
Objective · audience · instructional model (TWI/ADDIE/SAM) · what it measures / what it does
NOT measure · Zero-Gate rule · Kirkpatrick chain L2→L3→L4 · scope (what is out, e.g., a later
phase).

## 5 · Telemetry
Per-event schema: `{ seq, ts, ms, verb, object, pointerType, result }`; actor = LMS
student_name or anonymous.
**xAPI statements table** (verb → object → result/extension → what it measures) for the
project's events.
**Result metrics:** score rule, passed (Zero-Gate), attempt, error counts, correct,
recovered, duration.
**SCORM 1.2 mirror:** cmi.core.score.raw/min/max, lesson_status, cmi.interactions.
**Exports:** conformant xAPI JSON (ingestible by an LRS such as Veracity and by an LMS such
as Cornerstone), CSV, a portable HTML "proof for the trainer", and an .md report.
Note: the guided DEMO must not emit telemetry or count attempts (keep learner data clean).

## 6 · KPI mapping (table)
KPI · source (which statement/metric) · criterion (e.g., critical item 100% Zero-Gate;
0 layer-2 errors in the passing attempt; recovery; attempts-to-mastery; time on task).

## 7 · Production detail — hours
Table by phase with Hours and running total, then a bold Total. Phases typically:
analysis & pedagogical framing · interaction design · 3D development · exercise logic &
Zero-Gate · telemetry (xAPI/SCORM + exports) · UX/UI & iterations · accessibility · testing
& validation · documentation. Label the total as an estimate, adjustable to the real log.

## 8 · Integration & limitations + Art. 50 footer.
