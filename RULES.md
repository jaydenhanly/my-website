# Coding Standards & AI Guardrails

## Technology Decisions

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS (no inline styles)
- **Package Manager:** npm
- **Node Version:** 18+
- **Deployment:** Vercel

## Code Quality Rules

### TypeScript
- Strict mode required (`strict: true` in tsconfig.json)
- No `any` types — use proper typing
- Export types and interfaces clearly
- Use discriminated unions for complex state

### Components
- Functional components only (no class components)
- One component per file (unless tightly coupled)
- Use React Server Components where possible
- Keep components under 300 lines
- Memoize expensive computations with `useMemo`

### File Structure
```
src/
  app/              # Next.js App Router pages
  components/       # Reusable UI components
    ui/            # Basic UI building blocks (Button, Card, etc)
    sections/      # Page sections (Hero, Projects, Contact)
  lib/             # Utilities, helpers, types
  styles/          # Global styles
  public/          # Static assets
```

### Styling Rules
- Use Tailwind CSS classes for all styling
- No inline `style=` props
- No CSS files except globals
- Respect the design system (see DESIGN.md)
- Mobile-first responsive approach

### Naming Conventions
- Components: PascalCase (`HeroSection.tsx`)
- Utilities/functions: camelCase (`formatDate.ts`)
- Constants: SCREAMING_SNAKE_CASE
- CSS classes: kebab-case (Tailwind default)

## Development Workflow

1. Create a task in TASKS.md
2. Implement with TypeScript and Tailwind
3. Test locally before committing
4. Update documentation in this session's end-of-session protocol
5. Keep commit messages clear and descriptive

## Global Restrictions

- ❌ No new frameworks without approval
- ❌ No architecture rewrites — only modify when asked
- ❌ No new features outside current TASKS.md
- ❌ No external CSS-in-JS libraries (Tailwind only)
- ❌ No untyped dependencies
- ✅ Reuse existing components before creating new ones
- ✅ Ask before building if approach is unclear

## Performance Targets

- Core Web Vitals: All green (Lighthouse 90+)
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

## Testing

- Manual testing required before PRs
- Browser testing: Chrome, Safari, Firefox
- Mobile testing: iOS Safari, Chrome Android
- Accessibility: WCAG 2.1 AA minimum
