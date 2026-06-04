# Project context for Claude Code

> This file is read automatically at the start of every Claude Code session.
> Keep it up to date. Every decision, rule, and status lives here.

---

## File tree

Keep this folder at the root of your project:

```
project/
  CLAUDE.md          ← this file (must-have)
  PRODUCT.md         ← what you're building (must-have)
  RULES.md           ← coding standards & AI guardrails (must-have)
  DESIGN.md          ← visual language & component rules (must-have)
  ARCHITECTURE.md    ← system map & data flow (must-have)
  TASKS.md           ← live task board: todo / in progress / done (must-have)
  USER_FLOW.md       ← path from landing to value (recommended)
  DECISIONS.md       ← decision log — what was chosen & why (recommended)
  KNOWN_ISSUES.md    ← bugs & quirks so nobody hunts them twice (nice-to-have)
  DEPLOYMENT.md      ← hosting, DB, env vars (nice-to-have)
```

---

## Quick reference (Claude reads this every session)

**Product:** Modern portfolio website for a UI/UX designer to showcase work, attract opportunities, and capture client inquiries
**Stack:** Next.js · TypeScript · Tailwind CSS · Vercel
**Current focus:** Migrate from static HTML to Next.js, improve design/polish, add contact form, expand portfolio projects

For full context, read the files above in this order:
PRODUCT → RULES → DESIGN → ARCHITECTURE → TASKS

---

## Session protocol

At the start of every session:
1. Read TASKS.md — understand what is done, in progress, and next
2. Read ARCHITECTURE.md — understand the system before touching any layer of it
3. Ask if anything is unclear before writing code

**During development:**
- Always verify `npm run dev` is running on localhost (check port 3000 or 3001 if 3000 is in use)
- After completing code changes, start dev server before committing (enables real-time verification of new changes)
- Test all UI changes visually in the browser before deployment

At the end of every session:
1. Start the dev server (`npm run dev`) so changes are live for review
2. Update TASKS.md — move completed items, add anything new
3. Add any architectural decisions to DECISIONS.md
4. Log any new bugs in KNOWN_ISSUES.md
5. Deploy to production via `vercel --prod` if changes are ready

---

## Global AI restrictions

These apply in every session, no exceptions:

- No new frameworks or libraries without explicit approval
- No architecture rewrites — change structure only when asked
- No new features outside the current scope in TASKS.md
- No inline styles — use the design system in DESIGN.md
- No `any` types in TypeScript
- Reuse existing components before creating new ones
- If uncertain about scope or approach, ask before building
