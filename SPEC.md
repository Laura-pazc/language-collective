# Missio — Build Spec

*For feeding into bilt.me. Scope = the MVP cut already agreed in `PROJECT-BRIEF.md` — one vertical slice, English speakers learning German.*

## Key features (MVP)

1. **Onboarding level chat** — short AI (or scripted) chat that ends in a 3-tier level: beginner / intermediate / advanced. Not a real CEFR engine.
2. **Explore missions** — a list of the 3 hardcoded missions below, each tagged with a level and category.
3. **Mission prep** — for the selected mission: vocab list, a conversation simulation in German with English glosses, and 3 practice questions (multiple choice, fill-in-the-blank, write-a-sentence).
4. **Do the mission** — a single screen that just marks the mission "in progress" → "done" (the real action happens in real life; the app doesn't need to verify anything).
5. **Journal** — 2 reflection prompts (free text) + a 3-question recall quiz pulling from the vocab the learner just studied in that mission's prep.
6. **Gamification** — a streak counter (increments once per day the learner journals) + a badge per mission completed. Hardcoded logic is fine.

Say plainly in the pitch which of these is AI-generated per-user (the level estimate, the prep conversation/vocab, the reflection prompts, the recall quiz) vs. fixed content (the 3 missions themselves, the streak math).

## Screens

| # | Screen | Purpose | Key data shown |
|---|--------|---------|----------------|
| 1 | **Onboarding / Level Chat** | Estimate level via short AI chat | chat transcript |
| 2 | **Level Result** | Confirm assigned tier before moving on | `user.level` |
| 3 | **Explore Missions** | Browse the 3 missions as cards | mission title, category icon, level tag, short description |
| 4 | **Mission Prep** | Vocab + conversation sim + practice questions | `mission.vocab`, `mission.conversationSimulation`, `mission.practiceQuestions` |
| 5 | **Do the Mission** | Mark mission in-progress → done | mission status |
| 6 | **Journal** | Reflection prompts + recall quiz | `journalEntry.reflectionAnswers`, recall quiz score |
| 7 | **Profile / Progress** | Streaks, badges, completed missions | `user.streakCount`, `achievements[]` |

## Data model

```
users
  id
  name
  email
  level: "beginner" | "intermediate" | "advanced"
  streakCount: number
  lastJournalDate: date
  createdAt: date

missions      // "scenarios" in the brief
  id
  title
  category: "medical" | "bureaucracy" | "social" | "errand" | ...
  cefrLevel: "A1" | "A2" | "B1" | ...
  register: "networking" | "friendly" | "academic"
  description: string
  vocab: [ { term, translation } ]
  conversationSimulation: [ { speaker, line, translation } ]
  goDeeperLinks: [ { label, searchHint or url } ]

exercises     // the practice questions + recall quiz items, keyed to a mission
  id
  missionId
  type: "multipleChoice" | "fillInBlank" | "writeSentence" | "match"
  prompt: string
  options: [ string ]        // for multipleChoice / match
  answer: string

journalEntries
  id
  userId
  missionId
  reflectionAnswers: [ { prompt, answer } ]
  recallQuizScore: number
  completedAt: date

achievements
  id
  userId
  missionId
  earnedAt: date
```

Per the earlier decision: bilt.me handles the actual database/backend for this — the shapes above are the reference model to build the screens' data against, not a separate DB to stand up yourself.

## The 3 hardcoded missions

1. **First-time doctor's office visit** — A2, practical register. Content: `scenarios/kb-doctor-first-visit/kb-doctor-first-visit.md`
2. **Ausländerbehörde residence-permit appointment** — A2/B1, bureaucratic register. Content: `scenarios/kb-auslanderbehorde-appointment/kb-auslanderbehorde-appointment.md`
3. **Running club — first group run** — A1/A2, friendly/social register. Content: `scenarios/kb-running-club-first-run/kb-running-club-first-run.md`

Each file has: key vocab table, conversation simulation (German + English gloss), go-deeper resource pointers, 5 practice items, and a "level up" note for the next CEFR level. That maps directly to screens 4 and 6 above.
