# Missio — One-Pager

*AI.WOMEN Hackathon 2026*

## What it is

Missio turns real city events and everyday errands into structured **language missions** — prep before, practice during (in real life), reflect after. Built for newcomers learning a new language through actual participation in city life, not just app drills. This MVP: English speakers learning German in Hamburg.

## The problem

Language apps teach vocabulary in a vacuum — they don't prepare learners for the actual moments they need the language: a doctor's appointment, a running club, the Ausländerbehörde. Learners pass app lessons but still freeze in real situations, and stay disconnected from the community around them.

## The loop

**Interview → Explore missions → Prep (AI conversation sim + vocab + practice) → Do the mission (in real life) → Journal (AI reflection + recall quiz) → Streaks & achievements.**

## Where AI does real work

- Estimates the learner's level from a short conversation.
- Generates the level-appropriate prep conversation simulation and vocab per mission.
- Writes personalized post-mission reflection prompts.
- Generates/grades the recall quiz from the vocab the learner just studied.

The 3 missions (doctor visit, Ausländerbehörde appointment, running club) and the streak logic are hardcoded for this MVP — one vertical slice, done end-to-end, rather than six half-built features.

## Tools used

| Tool | Used for |
|---|---|
| **bilt.me** | Building and hosting the app itself |
| **Claude Code (Claude)** | Product spec, data model, mission content authoring, project docs |
| *(add: design tool for logo/slides, e.g. Canva/Figma)* | Logo, slide deck, one-pager formatting |
| *(add: screen recording tool)* | Demo video |

## Team & roles

*AI/prompt work — [name] · Frontend/app (bilt.me) — [name] · Content (mission scenarios) — [name] · Pitch & storytelling — [name]*

## What we cut, and why

Voice assistant, live event sourcing, multi-language support, and social features were all part of the original brain-dump. In 14 build hours, we cut to one vertical slice — one language pair, 3 hardcoded missions, no live scraping — so the core loop (prep → do → reflect) actually works end-to-end, rather than six features that half-work.
