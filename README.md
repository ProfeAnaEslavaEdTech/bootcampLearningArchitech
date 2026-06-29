Profe Ana Eslava EdTech · Learning Architect

Five tracks. One portfolio. (More coming soon.)

🔗 Live site: https://profeanaeslavaedtech.github.io/bootcampLearningArchitech/


What this is

Knowledge without practice doesn't survive an interview, and practice without grounding doesn't either. This repo is a living collection of self-built, gamified practice labs — one per job posting I'm preparing for, plus general-purpose tool mastery tracks.

The rule I'm following: every time I see a job position post that's a genuine target, I build a lesson unit specifically to get ready for it — real cases drawn from the actual posting, not generic theory. Pick the track you need, or run all five.


The five tracks

🧭 Nexthink Bootcamp

Knowledge & rehearsal
Ten gamified levels covering SCORM vs. xAPI, Rise vs. Storyline, LMS telemetry thinking, adult-learner gamification, and a full mock-panel rehearsal — timed, structured, no second takes.
10 levels · ~3h

🛠️ Nexthink Hands-On

Real artifacts
Fourteen scoped mini-projects, one for nearly every responsibility line in the job description. Each one produces something real you can open and show: a storyboard, a published Rise lesson, a certification blueprint.
14 projects · 20–60 min each

🎨 Articulate 360

Tool mastery
Fourteen projects across Rise 360 and Storyline 360 — from building your first block-based course to publishing SCORM packages, adding branching logic, and designing interactive assessments.
14 projects · Rise + Storyline

🏥 J&J Learning Designer Practice Lab

Duty-by-duty drill
Ten real cases mapped one-to-one to the actual J&J qualifications list — storyboard a decision-point frame, audit an accessibility slide, diagnose a misleading performance-data pattern, and end by actually building in Articulate Rise.
10 modules · ~3h

🧠 Dual-Track: Learning Designer vs. LXA

Bloom's progression
Switch between the execution track (Learning Designer) and the strategy track (Learning Experience Architect). Every module is tagged Remember through Create per Bloom's Taxonomy — including two full High-Level-Design-from-scratch exercises that walk all six Bloom's steps inside one brief.
10 + 8 modules · ~4h


Design principles behind every track


Real artifacts over multiple choice. Most modules produce something you could screen-share in an interview — a storyboard frame, a built Rise lesson, a drafted HDD section — not just a quiz score.
Honesty about gaps, built into the content. Where a real qualification gap exists (years of experience, a specific tool, a specific sector), the practice includes a rehearsed, honest answer for it — not a script to paper over it.
Built from the actual posting. Every module traces back to a specific line in a real job description. Nothing here is generic instructional-design trivia.
Same visual language, deliberately varied tone. Each track has its own color palette and aesthetic (terminal/blueprint/clinical/etc.) matched to its subject, but the underlying interaction patterns — checklists, scenario quizzes, drag-match, builders, boss-level reveals — are consistent across all five.
In-memory state. All progress tracking is session-only by design in this environment; no personal data persists between visits. (See Known gaps below for the localStorage upgrade path.)



Tech stack

Single self-contained HTML files per track — no build step, no dependencies. Each is HTML + CSS + vanilla JS combined into one file so it runs anywhere, including directly from disk.


Known gaps / next steps


 Replace in-memory progress tracking with localStorage across all five tracks so progress persists between sessions
 Add a "bring to interview" export — let the user flag 3-4 completed modules per track and generate one printable summary page
 Cross-link related modules across tracks (e.g. the AWJ HDD referenced in both jnj-bootcamp and jnj-dual-track)
 Mobile QA pass on the newer tracks' accordion/builder interactions



About

Built by Ana Eslava-Graterol — eLearning Designer & Learning Architect, Valencia, Spain.

🌐 Portfolio · 💼 LinkedIn


Built for learning. Use the artifacts for the next interview too.
