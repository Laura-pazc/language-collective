# Missio — Language Missions for Real Life

*AI.WOMEN Hackathon 2026 · Project Brief · 14 effective build hours over 2 days*

## Problem

Language apps teach vocabulary in a vacuum. They don't prepare you for the actual moments where you need the language: booking a doctor's appointment, joining a running club, making small talk at a book club, dealing with the Ausländerbehörde. As a result, learners can pass app lessons but still freeze in real situations — and they stay disconnected from the community around them.

**Who it's for:** foreigners living in a new city (e.g. Hamburg) who want to learn the local language through actual participation in city life, not just drills. For this MVP: English speakers learning German.

**The gap:** no existing app bridges "I want to go to this real event" with "here is the language and confidence to actually do it."

## Purpose

Turn real city events and everyday errands into structured **language missions**: prep before (so you're not walking in blind), practice during (in real life, with real people), and reflect after (so it sticks and you stay motivated to do the next one).

## How it works — the loop

1. **Interview** — short AI chat estimates the learner's level (CEFR-style).
2. **Explore missions** — curated real scenarios (city events, doctor visits, bank errands, yoga class, book club, Auslanderbehörde) sourced from things that already exist (city event listings, real articles/videos) rather than generated from nothing.
3. **Prep** — a short simulated conversation in German (the learner's target language) with key vocabulary for that scenario, plus quick practice (multiple choice, fill-in-the-blank, sentence writing). Rehearsing the actual exchange beats reading about it. Generated with the project's `/kb` skill (`.claude/skills/kb/SKILL.md`) — see `scenarios/kb-doctor-first-visit/` for a worked example.
4. **Do the mission** — in real life.
5. **Journal** — AI-prompted reflection ("what was the funniest moment?") plus a short recall quiz on the vocab just used.
6. **Gamification** — streaks for journaling, achievements for missions completed.

## Where AI does real work

This is the highest-weighted judging criterion (25%), so it's the thing to get right, not the thing to bolt on:

- Estimates learner level from a short conversation.
- Generates the level-appropriate prep conversation simulation and vocab for a given scenario.
- Writes the personalized post-mission reflection prompts.
- Grades/generates the recall quiz from the specific vocab the learner just studied.

Be ready to say plainly in the pitch which parts are AI and which are hardcoded — the guidelines reward that honesty explicitly.

## MVP scope for 14 hours

The brain-dump has six feature areas (missions, readings, voice assistant, journaling, social, gamification). Building all of them means nothing works well. Cut to **one vertical slice**, done end-to-end:

**Build:**
- 1 onboarding chat → simple 3-tier level (beginner/intermediate/advanced), not a full CEFR engine.
- 2–3 hardcoded sample missions (skip live scraping of city event sites).
- AI-generated prep conversation simulation (German) + 5 vocab words + 3 practice questions for the chosen mission.
- Post-mission journal screen: 2 AI reflection prompts + 3-question vocab recall.
- A basic streak counter (hardcoded logic is fine).

**Cut (say so honestly in the pitch — "we tackled one piece of a bigger idea"):**
- Voice assistant.
- Full mission marketplace / live event sourcing.
- Multi-language support — ship one language pair only (English → German).
- Social/community features.

## The original twist

Not "another Duolingo" — this is language learning where the homework is going outside and talking to a stranger. The app's job is to make sure you're not underprepared when you do.

## Team & pitch

Rubric rewards a visibly shared effort, not one person carrying it. Before building, split: AI/prompt work, frontend/demo, content (mission scenarios + readings), pitch & storytelling — and say out loud in the pitch who did what.

---

## Name suggestions

| Name            | Angle                     | Why it works                                                                                                                                                             |
| --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ankommen** ⭐  | German, double meaning    | Means both "to arrive" and, idiomatically, "to land / be understood" — exactly the newcomer experience, and it's a real word judges in Hamburg will recognize instantly. |
| **Kontext** ⭐   | Names the gap directly    | Pitch line writes itself: "Kontext gives you the words *before* you need them." Simple, ownable, on-brand.                                                               |
| **IRL Lingo** ⭐ | Playful, English-friendly | Says the whole idea in three syllables — good for a 3-minute pitch to a mixed-language jury.                                                                             |
| Missio          | Mission + app-name shape  | Short, gamified feel, easy to say and remember.                                                                                                                          |


**Top picks:** *Ankommen* if you want a name that's emotionally resonant and Hamburg-local; *Kontext* if you want the name to double as the pitch's thesis statement; *IRL Lingo* if you want something instantly legible to an international jury in three minutes.

## Admin — submission requirements

We need to submit:
- Public GitHub repo with README and event commit history
- Demo recording of the project in action
- Short slide deck
- One slide with a screenshot of what you built, a logo, and a claim (for future social use)
- A one-pager describing the project and which tools you used
- Optional: a hosted preview URL

Build spec (key features, screens, data model) is in **`SPEC.md`**. Task breakdown is in **`TODO.md`**. Deliverable drafts: **`README.md`**, **`one-pager.md`**, **`pitch-deck.md`**.
 