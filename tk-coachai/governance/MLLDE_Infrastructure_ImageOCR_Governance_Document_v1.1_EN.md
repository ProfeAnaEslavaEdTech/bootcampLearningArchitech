# MLLDE · Infrastructure — IMAGE READER (OCR)
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 15 · **Phase:** Input
**Canonical map:** **NOT an agent → infrastructure** (same as ASR) · **Type:** Deterministic / trust gate
**Does it measure?** NO · **Does it decide?** NO · **Is it generative AI?** PARTIAL (deterministic transcription + initial interpretation)
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This component is NOT an AI agent in the MLLDE sense: its primary function is deterministic (exact transcription of image text).
> No canonical piece is assigned to it. It is classified as **input infrastructure**, the same as automatic speech recognition (ASR).
> This document records its governance card to complete the inventory of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `lector-ocr`. Component no. 15 of the real inventory (Alex, 1 Sep 2026). Added 15 September 2026.
- **Function:** transcribe the exact text of an image sent by the student and present it as text input for the session flow. Primary function: deterministic (OCR). Secondary function: initial interpretation of the visual ("Present your visual", 15 Sep).
- **What it is NOT:** does not choose descriptors, does not generate pedagogical content, does not emit measurement evidence.
- **Current LRS trace:** none of its own. Its 16 extracted terms appear with origin «undefined» in the vocabulary pool.

## A.2 Model / technology
- OCR: deterministic (non-generative) service with verified NO-TRAIN contract.
- The interpretation layer ("Present your visual") may be an LLM: **verify NO-TRAIN contract if a generative model is used**.
- **INFRASTRUCTURE RULE:** the image is discarded after transcription. It is not stored or used for training.

## A.3 Function as a trust gate
- Input: image sent by the student.
- Output: transcribed text → delivered to the flow as text input.
- The image NEVER enters the pedagogical loop directly; the transcribed text does.
- The transcribed text goes through the same injection safeguards as any student input.

## A.4 Inputs and outputs
| INPUT | OUTPUT |
|---|---|
| Student image (JPG/PNG) | Transcribed text |
| — | Initial visual interpretation (if the LLM layer is activated) |

## A.5 xAPI trace
- None of its own. If vocabulary extracted from the image is used in a session, the corresponding statements are emitted by the Redactor or Card Generator, with `origin=image-ocr` as a context attribute.

## A.6 Governance guardrails
- **Image discarded after reading** — never stored or sent to third parties outside the OCR service.
- **Transcribed text = student input** → identical sanitisation to free-text input.
- **16 terms with origin «undefined»** → require re-attribution to `origin=image-ocr` in the LRS.

## A.7 Explicit prohibitions
✗ Storing the original image · ✗ Using the image to train models · ✗ Sending the image to services outside the NO-TRAIN contract · ✗ Generating pedagogical content directly.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| Deterministic OCR operational | 🟢 |
| Image discarded after reading | 🟡 — assumed by design; verification pending |
| NO-TRAIN contract (LLM layer if present) | 🟡 — verify if "Present your visual" uses an LLM |
| 16 terms with origin «undefined» | 🔴 — re-attribution to `origin=image-ocr` pending |
| Transcribed text sanitisation | 🟡 — assumed; explicit documentation pending |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C15.1 | 16 terms with origin «undefined» | Re-attribute to `origin=image-ocr` in the LRS | 0 terms with undefined origin | **P0** |
| C15.2 | NO-TRAIN contract for LLM layer | Verify if "Present your visual" uses an LLM; confirm NO-TRAIN | Contract verified and documented | **P0** |
| C15.3 | Image discard unverified | Audit that the image is not stored or sent outside the OCR service | Technical verification documented | **P0** |
| C15.4 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| Deterministic, non-generative (primary function) | OCR = exact transcription; no pedagogical decision | §A.1 |
| No automated decision (GDPR art. 22) | Does not generate pedagogical content; does not feed the band | §A.5 |
| Data protection (GDPR art. 5) | Image discarded after reading; no storage | §A.2 |
| Human oversight | Transcribed text = input processed by the normal flow | §A.3 |

**Conformity status:** 🟡 — operational; C15.1–C15.3 (P0) pending to verify image privacy guarantees and clear the «undefined» origin.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
