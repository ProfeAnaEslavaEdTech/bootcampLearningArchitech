<!-- © 2026 Ana Eslava-Graterol. All Rights Reserved. profeanaeslava · profeanaeslavaedtech.
     xAPI © ADL/IEEE (IEEE 9274.1.1); SCORM & cmi5 © ADL. Standards cited, not redistributed.
     IRI sources: ADL Verb Registry http://adlnet.gov/expapi/verbs/ (canonical);
     TinCan Community Registry https://registry.tincanapi.com (community-maintained).
     MLLDE extends this universal layer with CEFR-specific extensions — see references/xapi-scorm-spec.md. -->

# xAPI Learning Data — Universal Reference

This file covers the **generic xAPI layer** that is the foundation for ALL
e-learning measurement, including MLLDE. The MLLDE Measurement Module builds
**on top of** this layer by adding CEFR-specific context extensions
(`ext/cefr-level`, `ext/cefr-skill`, `ext/cefr-scale`, `ext/evidence-tier`,
`ext/persona-pack`) and the MLLDE IRI registry.

For the full MLLDE statement patterns and IRI registry, see
`references/xapi-scorm-spec.md` and `assets/mllde-xapi-iri-registry.json`.
For non-language courses using the universal layer only, see the
`compliance-training-architect` skill.

---

## 1. Statement anatomy

Every xAPI statement: **actor · verb · object · result · context**.

```json
{
  "actor":   { "account": { "homePage": "https://your-lms.example", "name": "user-id-9981" } },
  "verb":    { "id": "http://adlnet.gov/expapi/verbs/completed",
               "display": { "en-US": "completed" } },
  "object":  { "id": "https://your-lms.example/courses/spill-response/v2",
               "definition": { "type": "http://adlnet.gov/expapi/activities/course",
                               "name": { "en-US": "Spill Response — Chemical Safety" } } },
  "result":  { "success": true, "completion": true, "score": { "scaled": 1.0, "raw": 100, "min": 0, "max": 100 },
               "extensions": {
                 "https://your-lms.example/ext/first-attempt-score": 85,
                 "https://your-lms.example/ext/error-count": 0 } },
  "context": { "registration": "uuid-session-here",
               "extensions": {
                 "https://your-lms.example/ext/sop-version": "SOP-EHS-012-v3",
                 "https://your-lms.example/ext/site": "Barcelona-Plant-01" } }
}
```

**IRI discipline (must follow):**
- Reuse canonical ADL verbs (Section 2 below) → use `http://adlnet.gov/expapi/verbs/*` (**http**, not https — mixing schemes duplicates the verb in aggregation).
- MLLDE-minted terms use `https://w3id.org/mllde/*` (w3id is an https service) — see the IRI registry.
- Use learner `account` (LMS user ID), never personal email → GDPR minimisation.
- Statements are **immutable**. Corrections use the xAPI voiding verb.

---

## 2. Canonical ADL verbs (use these; do NOT mint equivalents)

Source: **http://adlnet.gov/expapi/verbs/** — the authoritative ADL verb registry.

| Verb (display) | IRI | When to use in a course |
|---|---|---|
| initialized | `http://adlnet.gov/expapi/verbs/initialized` | Course/AU launches for this learner |
| launched | `http://adlnet.gov/expapi/verbs/launched` | LMS launches the SCO/AU |
| experienced | `http://adlnet.gov/expapi/verbs/experienced` | Learner viewed a non-assessed page/media |
| interacted | `http://adlnet.gov/expapi/verbs/interacted` | Learner interacted with a non-scored element |
| attempted | `http://adlnet.gov/expapi/verbs/attempted` | Learner began a knowledge check / assessment attempt |
| answered | `http://adlnet.gov/expapi/verbs/answered` | Learner answered one question item (reuse ADL — do not mint MLLDE `answered`) |
| scored | `http://adlnet.gov/expapi/verbs/scored` | Intermediate score emitted (not final) |
| passed | `http://adlnet.gov/expapi/verbs/passed` | Passed the assessment |
| failed | `http://adlnet.gov/expapi/verbs/failed` | Failed the assessment |
| completed | `http://adlnet.gov/expapi/verbs/completed` | **Evaluated spoken session** — the ONLY statement that emits a competence band in MLLDE (scoring firewall) |
| mastered | `http://adlnet.gov/expapi/verbs/mastered` | Zero-error mastery gate confirmed |
| progressed | `http://adlnet.gov/expapi/verbs/progressed` | % completion milestone emitted |
| suspended | `http://adlnet.gov/expapi/verbs/suspended` | Learner exited without completing (bookmark) |
| resumed | `http://adlnet.gov/expapi/verbs/resumed` | Learner returned to a bookmarked session |
| terminated | `http://adlnet.gov/expapi/verbs/terminated` | Session ended (normal or abnormal exit) |
| commented | `http://adlnet.gov/expapi/verbs/commented` | Learner left a free-text reflection/note |

**MLLDE-specific verbs** (minted in the MLLDE registry, `https://w3id.org/mllde/verb/`):
`pronounced`, `adapted`, `mediated` — see `assets/mllde-xapi-iri-registry.json`.
Never mint new verbs without AE approval.

---

## 3. Activity types

### 3a. ADL registry — `http://adlnet.gov/expapi/activities/`

| Type | IRI suffix | Use for |
|---|---|---|
| course | `/course` | The whole course package |
| module | `/module` | A chapter/section of the course |
| lesson | `/lesson` | A single content page or lesson |
| assessment | `/assessment` | The scored knowledge check block |
| question | `/question` | One question item within an assessment |
| interaction | `/interaction` | A non-scored interactive element |
| simulation | `/simulation` | A branching scenario or software sim |
| media | `/media` | A video or audio component |
| performance | `/performance` | An on-the-job task (L3 — outside the LMS) |
| attempt | `/attempt` | One attempt on a scored activity |

**MLLDE activity types** (minted in the registry, `https://w3id.org/mllde/activity-type/`):
`mission`, `vocabulary-card`, `grammar-drill`, `pronunciation-task` — see the IRI registry.

### 3b. TinCan community registry — https://registry.tincanapi.com

Use the community registry to discover additional types. IRIs follow the
`http://id.tincanapi.com/activitytype/` namespace.

| Type | IRI |
|---|---|
| job aid | `http://id.tincanapi.com/activitytype/job-aid` |
| resource | `http://id.tincanapi.com/activitytype/resource` |
| survey | `http://id.tincanapi.com/activitytype/survey` |
| video | `http://id.tincanapi.com/activitytype/video` |
| webinar | `http://id.tincanapi.com/activitytype/webinar` |
| on-the-job task | `http://id.tincanapi.com/activitytype/work-performed` |

Always **verify the IRI resolves** before using a community entry in a production LRS.

---

## 4. In-course (L2) + on-the-job (L3)

### 4a. In-course statements (L2 Learning — the LMS records this)

Minimal set for any course with a mastery gate:

1. **`initialized`** → course starts.
2. **`experienced`** per module (progression evidence).
3. **`answered`** per question item → `result.success`, `result.response`.
4. **`passed`** or **`failed`** on the assessment.
5. **`completed`** → course finished; this is the **record** the LMS uses.

In MLLDE: `completed` on a **spoken session** (≥2 sessions aggregated) is also
the ONLY statement that may emit a competence band — see the scoring firewall in
`references/scoring-firewall-and-standards.md`.

### 4b. On-the-job statements (L3 Behaviour — the LRS records this)

Emitted by a manager observation app or device/sensor — same actor namespace as
the course so the LRS can join them.

---

## 5. Tools & validation

| Tool | URL | Use for |
|---|---|---|
| **ADL xAPI Lab** | https://adlnet.github.io/xapi-lab/ | Build, preview and validate xAPI statements interactively before coding them |
| **ADL Verb Registry** | http://adlnet.gov/expapi/verbs/ | Canonical source for all ADL verbs and their definitions |
| **TinCan Community Registry** | https://registry.tincanapi.com | Discover community activity types and verb extensions |
| **SCORM Cloud (Rustici)** | https://cloud.scorm.com | Test SCORM 1.2 / 2004 / cmi5 / xAPI packages before LMS deployment |
| **ADL xAPI Conformance Test Suite** | https://adlnet.gov/projects/xapi-conformance-testing/ | Verify LRS conformance before go-live |

**Always validate a statement in the xAPI Lab before writing it into production code.**

---

## 6. LRS practicalities

- **Immutability.** Statements cannot be edited — corrections use the xAPI voiding verb.
- **Learner identity.** Use LMS account ID, never personal email (GDPR minimisation).
- **`measure-model`** recorded per session in MLLDE (exact model id) → comparability across sessions; never mix models in aggregates.
- **Record retention.** Confirm the LRS retention period matches the project's requirements.
- **LRS conformance.** Verify via the ADL conformance test suite before go-live.

---

## 7. Scope boundary

This file covers the **universal xAPI foundation**. MLLDE builds on it by adding:

- CEFR-specific context extensions: `ext/cefr-level`, `ext/cefr-skill`, `ext/cefr-scale`
- MLLDE-specific extensions: `ext/evidence-tier`, `ext/persona-pack`, `ext/rubric-scores`, `ext/phoneme-scores`
- The scoring firewall (band from `completed` only; ASR gate 0.70)
- The dual performance + pedagogy stream
- The MLLDE IRI registry (`https://w3id.org/mllde/`)

For the full MLLDE layer, see `references/xapi-scorm-spec.md`,
`references/scoring-firewall-and-standards.md`, and
`assets/mllde-xapi-iri-registry.json`.
