# Known Issues & Quirks

## Current Issues

### 1. Static HTML → Next.js Migration Needed
**Severity:** High (blocking Phase 1)
**Description:** Project is currently a single `index.html` file. Needs full migration to Next.js structure.
**Status:** Not started
**Solution:** See TASKS.md Phase 1 migration items
**Workaround:** None (must complete before other features)

### 2. Confetti Animation Not Yet Migrated
**Severity:** Medium
**Description:** Confetti effect on "Hire Me" button works in current HTML but needs to be integrated into React component.
**Status:** Pending React integration
**Solution:** Extract animation logic to reusable React component
**Workaround:** Animation will be lost during migration; re-implement after Next.js setup

---

## Design/UX Issues

### None identified yet
- To be updated as issues are discovered during development

---

## Performance Issues

### None identified yet
- Will add if Lighthouse or Core Web Vitals fall below targets
- Monitor during Phase 1 migration

---

## Accessibility Issues

### None identified yet
- Complete accessibility audit planned in Phase 1 polish stage
- Current static HTML passes basic WCAG AA checks

---

## Browser Compatibility

### Tested
- ✅ Chrome (latest)
- ✅ Safari (latest)
- ? Firefox (untested)
- ? Mobile browsers (untested)

### Known Limitations
- None identified yet
- Full cross-browser testing planned in Phase 1

---

## Future Phase Issues (Not Critical Yet)

### Blog/Case Study Pages
- Performance optimization needed if adding dynamic pages
- Consider ISR (Incremental Static Regeneration) for project updates

### Form Submission
- Email service integration TBD
- May need rate limiting if form gets high traffic

---

## Issue Reporting Template

Use this format when adding issues:

```markdown
### [Issue Number]. [Short Title]
**Severity:** Low/Medium/High/Critical
**Description:** What is the problem?
**Steps to Reproduce:** How to trigger it?
**Expected Behavior:** What should happen?
**Actual Behavior:** What actually happens?
**Status:** Not started / In progress / Blocked / Fixed
**Solution:** How will we fix it?
**Workaround:** Is there a temporary fix?
**Notes:** Any additional context?
```
