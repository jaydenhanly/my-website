# Decision Log

## Architecture Decisions

### 1. Migrate to Next.js (vs. staying with static HTML)
**Date:** 2026-06-04
**Decision:** Migrate from static HTML/CSS to Next.js with TypeScript
**Rationale:**
- Enables scalability for future features (blog, case studies, dynamic content)
- Better developer experience with component model
- Easier form handling and server-side processing
- Superior performance optimization (Image component, code splitting)
- Simpler deployment and maintenance via Vercel integration
**Status:** Pending implementation
**Trade-offs:** 
- Slightly more setup complexity vs. plain HTML
- Build step required (mitigated by Vercel's one-click deploys)

### 2. Use Tailwind CSS (vs. styled-components, CSS modules, plain CSS)
**Date:** 2026-06-04
**Decision:** Utility-first CSS framework (Tailwind)
**Rationale:**
- Faster styling without leaving component code
- Consistent design system enforcement
- Smaller production bundle
- Better mobile-first responsiveness support
- Industry standard for React projects
**Status:** Active
**Trade-offs:**
- Learning curve for Tailwind utilities
- Longer className strings in markup (mitigated by editor support)

### 3. TypeScript Strict Mode
**Date:** 2026-06-04
**Decision:** Enable strict TypeScript checking
**Rationale:**
- Catches bugs at compile time
- Better IDE support and autocomplete
- Clearer code documentation via types
- Industry best practice
**Status:** Active
**Trade-offs:**
- More verbose type annotations
- Slightly slower development initially (balanced by fewer runtime bugs)

### 4. Form Submission Handling (TBD)
**Date:** 2026-06-04
**Decision:** TBD — pending form requirements
**Options being considered:**
- A) Server Actions (Next.js built-in)
- B) API routes + external email service (SendGrid, Resend)
- C) Third-party form service (Formspree, Basin)
**Status:** Pending
**Next step:** Implement when building contact form

### 5. No External State Management
**Date:** 2026-06-04
**Decision:** Use React hooks (useState, useContext) only
**Rationale:**
- Project is simple enough to not require Redux/Zustand
- Reduces bundle size and dependencies
- Context API sufficient for future global state (if needed)
- Easier onboarding
**Status:** Active
**Trade-offs:**
- May need refactoring if adding complex global state later

### 6. Static Site Generation for Homepage
**Date:** 2026-06-04
**Decision:** Homepage is fully static (generated at build time)
**Rationale:**
- No server-side computation needed
- Fast CDN distribution via Vercel
- No database queries
- Minimal operational overhead
**Status:** Active
**Trade-offs:**
- If adding dynamic content, may need ISR (Incremental Static Regeneration)

---

## Design Decisions

### 1. Orange as Primary Brand Color
**Date:** 2026-06-04 (from existing design)
**Decision:** Use `#fd6f00` orange for CTAs and primary interactions
**Rationale:**
- Stands out against neutral backgrounds
- Professional yet friendly
- High contrast for accessibility
- Consistent with current design
**Status:** Active

### 2. Poppins Font
**Date:** 2026-06-04 (from existing design)
**Decision:** Use Poppins (Google Fonts) as primary typeface
**Rationale:**
- Geometric sans-serif reads well on screens
- Google Fonts = no hosting overhead
- Free and widely available
**Status:** Active

---

## Product Decisions

### 1. Focus on Portfolio Showcase First
**Date:** 2026-06-04
**Decision:** Phase 1 = showcase portfolio; Phase 2 = expand features
**Rationale:**
- Core value is demonstrating design work
- Contact form enables lead capture
- Secondary features (blog, testimonials) can follow
**Status:** Active

### 2. Out of Scope: CMS, Multi-user Admin
**Date:** 2026-06-04
**Decision:** No CMS or user admin system for Phase 1
**Rationale:**
- One-person portfolio doesn't need complex admin
- Can add CMS later if needed
- Simpler deployment and maintenance
**Status:** Active

---

## Future Decisions Needed

- [ ] Form submission backend (Server Actions vs. external service)
- [ ] Analytics provider (Vercel Analytics vs. Plausible vs. none)
- [ ] CMS for projects (if Phase 2 includes dynamic content)
- [ ] Blog platform (if adding blog section)
- [ ] Email service for contact notifications
