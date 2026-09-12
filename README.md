# Missio

*Language Missions for Real Life — AI.WOMEN Hackathon 2026*

Missio turns real city events and everyday errands into structured **language missions**: prep before (so you're not walking in blind), practice during (in real life, with real people), and reflect after (so it sticks).

Built for English speakers learning German, living in a new city (e.g. Hamburg) who want to learn the language through actual participation in city life — not just drills.

## The problem

Language apps teach vocabulary in a vacuum. They don't prepare you for the actual moments where you need the language: booking a doctor's appointment, joining a running club, dealing with the Ausländerbehörde. Learners can pass app lessons but still freeze in real situations — and stay disconnected from the community around them.

## How it works

1. **Interview** — a short AI chat estimates the learner's level.
2. **Explore missions** — curated real scenarios (doctor visit, Ausländerbehörde appointment, running club).
3. **Prep** — an AI-generated conversation simulation in German + key vocab + practice questions for the chosen mission.
4. **Do the mission** — in real life.
5. **Journal** — AI-prompted reflection + a short recall quiz on the vocab just used.
6. **Gamification** — streaks and achievements to keep you coming back.

## Where AI does real work

- Estimates the learner's level from a short conversation.
- Generates the level-appropriate prep conversation simulation and vocab for a given mission.
- Writes the personalized post-mission reflection prompts.
- Generates/grades the recall quiz from the specific vocab the learner just studied.

The 3 missions themselves, and the streak/achievement logic, are hardcoded for this MVP — see `PROJECT-BRIEF.md` for the full honest breakdown of what's AI vs. fixed.

## What we cut (for this 14-hour MVP)

- Voice assistant
- Full mission marketplace / live event sourcing
- Multi-language support (English → German only, for now)
- Social/community features

## Built with

- **[bilt.me](https://app.bilt.me)** — app build/hosting
- **[Claude Code](https://claude.com/claude-code)** — mission content authoring, product spec, and project docs
- See `one-pager.md` for the full tool breakdown

## Repo structure

```
PROJECT-BRIEF.md   product brief, MVP scope, admin/submission checklist
SPEC.md             build spec: key features, screens, data model
TODO.md             build-day task list
scenarios/           mission content (vocab, conversation sim, practice questions)
one-pager.md         project one-pager (this hackathon's required deliverable)
pitch-deck.md         slide-by-slide pitch content
```

## Team

*AI/prompt work · frontend/app · content (missions) · pitch & storytelling — filled in by the team.*

## License

Hackathon project — no license specified.
