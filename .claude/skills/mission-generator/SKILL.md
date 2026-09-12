# Mission Generator Skill

Generate new language learning missions following the Missio pattern.

## What This Does

Generates a complete, ready-to-use mission file that teaches German through real-life scenarios. Each mission includes vocabulary, realistic conversation simulation, practice exercises, and guidance for higher levels.

## How to Use

Provide these details about your scenario:

1. **Scenario name** — What's the real-life situation? (e.g., "First job interview", "Apartment apartment viewing", "Public transport navigation")
2. **CEFR level** — Who is this for? (A1, A2, B1, or B2)
3. **Register type** — What's the tone? 
   - `practical` = transactional (doctor, bank, post office)
   - `friendly` = social (meetups, clubs, casual)
   - `formal` = official (university, legal, government)
4. **Any specifics?** — Grammar focus, tone, constraints? (e.g., "include subjunctive mood", "focus on past tense", "very formal tone")

## Constraints

- Always generate **exactly 8 vocabulary items** (mix of nouns, verbs, full phrases 2-3 phrases + 5-6 single words)
- All vocabulary **must be bolded in the conversation** when first used
- **Conversation must be realistic** — real words people actually use in Hamburg
- **5 practice exercises** — multiple choice, fill-in-blank, match, write sentence, vocab review (in that order)
- **Follow MISSION-SCHEMA.md** — structure, formatting, all sections required
- Filename format: `kb-[slug]-[level]` (lowercase, hyphens, no spaces)
- Keep conversations **8-12 exchanges** long
- Grammar complexity **must match CEFR level** — A1 mostly present tense, B2 includes subjunctive/conditional

## Output Format

Generate complete markdown content ready to save as:
```
kb-[scenario-slug]-[level]/kb-[scenario-slug]-[level].md
```

Follow this exact structure:
1. Title (H1)
2. Metadata header
3. Key vocabulary (table, 8 items)
4. Conversation simulation
5. Go deeper (resources)
6. Practice (5 exercises)
7. Level up (B1+ expansion)

## Quality Checklist

Before finalizing, verify:
- [ ] All 8 vocab items appear bolded in conversation
- [ ] No vocab item appears unbolded before being introduced
- [ ] Scenario is realistic and useful for Hamburg newcomers
- [ ] German grammar is accurate for stated CEFR level
- [ ] All practice exercises are contextual to the scenario
- [ ] Translations are idiomatic, not word-for-word
- [ ] File follows MISSION-SCHEMA exactly

## Example Interaction

> User: Generate a mission for "First job interview" at B1 level
>
> Assistant: [Asks clarifying questions if needed, then generates complete mission]

## Related Resources

- **MISSION-SCHEMA.md** — Detailed format specification and examples
- **scenarios/** — Existing missions to reference for tone/style
- **scripts/validate-missions.js** — Check generated missions for compliance
