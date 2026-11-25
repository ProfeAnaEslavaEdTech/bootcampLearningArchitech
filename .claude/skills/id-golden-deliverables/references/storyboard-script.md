# Storyboard / Design Script — golden format

A slide-by-slide (e-learning) or screen-by-screen (VILT) table. One row per slide/screen.
Header repeats the project title; footer "<Project> — Storyboard — Page X of Y".

## E-learning storyboard columns
| Column | Content |
|---|---|
| **Slide #** | Sequential (1.0, 1.1, …) and a short screen title. |
| **On-screen text / Visual** | What the learner sees: headings, body text, images, media. Keep B1 clear language. |
| **Voiceover / Narration** | Exact VO script for that slide (ready for ElevenLabs/Adobe Podcast). |
| **Developer notes** | Layout, animations, triggers/variables, media files, alt text (WCAG 1.1.1), navigation rules. |
| **Interactions / Assessment** | Knowledge checks, hotspots, drag-drop, simulator embed, gating (Zero-Gate 100%). |

Standard spine: Title → Welcome/Avatar (measurable objectives) → Navigation → Objectives →
Topic blocks (each ending in a Knowledge Check) → Simulator/practice → Assessment → Summary
→ Congratulations.

## VILT / video storyboard columns
| Column | Content |
|---|---|
| **# / Time** | Segment number and timecode (e.g., 0:00–0:10). |
| **On screen (no labels)** | What appears on the slide/video frame. |
| **Voice-over / Facilitator notes** | Narration or facilitator script; note polls, breakouts, Mentimeter. |

## Rules
- Every media asset gets alt text. Every critical item is marked "100% — Zero-Gate".
- Keep narration in the learner's language; produce EN and ES versions when asked.
- Mark where the 3D simulator is embedded (iframe) and where its Knowledge Check sits.
