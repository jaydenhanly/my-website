# Architecture & System Design

## Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm
- **Hosting:** Vercel
- **Form Handling:** Server Actions or external service (TBD)

## System Overview

```
User Browser
    ↓
Next.js App Router (Static + Dynamic Routes)
    ├─ Pages/Routes
    ├─ Server Components
    └─ Client Components
    ↓
Components (React)
    ├─ UI Building Blocks
    ├─ Page Sections
    └─ Reusable Utilities
    ↓
Styling (Tailwind CSS)
    ↓
Static Assets (Images, Icons)
    ↓
Build Output → Vercel CDN
```

## File Structure

```
my-website/
├── CLAUDE.md                    # Project context
├── PRODUCT.md                   # Product spec
├── RULES.md                     # Coding standards
├── DESIGN.md                    # Design system
├── ARCHITECTURE.md              # This file
├── TASKS.md                     # Task board
├── USER_FLOW.md                 # User flows
├── DECISIONS.md                 # Decision log
├── KNOWN_ISSUES.md              # Bug tracker
├── DEPLOYMENT.md                # Deploy info
│
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── [...]
│   │   │
│   │   └── sections/
│   │       ├── Navigation.tsx
│   │       ├── HeroSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/
│   │   ├── types.ts             # Shared types
│   │   ├── utils.ts             # Helper functions
│   │   ├── constants.ts         # App constants
│   │   └── animations.ts        # Animation utilities
│   │
│   └── public/
│       ├── images/
│       ├── icons/
│       └── [static assets]
│
├── .github/
│   └── workflows/               # CI/CD (optional)
│
└── [config files]
```

## Data Flow

### Homepage Load

```
1. User visits mysite.com
   ↓
2. Next.js serves app/page.tsx (static)
   ↓
3. Layout applies globals (navigation, fonts)
   ↓
4. Sections render in order:
   - Navigation
   - Hero
   - Projects
   - Contact
   - Footer
   ↓
5. Tailwind CSS loads
   ↓
6. Client-side JS initializes:
   - Confetti on button hover
   - Smooth scroll links
   - Form validation
```

### Form Submission

```
User fills contact form
   ↓
Client validates input
   ↓
Submit via Server Action or fetch
   ↓
[TBD] Backend/Email Service handles submission
   ↓
Success/error feedback to user
```

## Key Components

### Page Components
- **app/page.tsx** — Homepage, renders all sections

### Section Components
- **Navigation.tsx** — Fixed nav bar with logo and links
- **HeroSection.tsx** — Landing area with headline, CTA
- **ProjectsSection.tsx** — Portfolio grid or carousel
- **ContactSection.tsx** — Contact form with validation
- **Footer.tsx** — Footer with links, copyright

### UI Components
- **Button.tsx** — Reusable button with variants (primary, secondary)
- **Card.tsx** — Container for projects, testimonials
- **Input.tsx** — Text input with validation states
- **Textarea.tsx** — For message/inquiry text
- **[Others]** — As needed

## State Management

### Client-Side
- React hooks (useState, useCallback, useEffect)
- URL search params for navigation state (if needed)
- No external state management (Redux, Zustand) planned

### Server-Side
- Next.js Server Actions for form handling
- Static generation for main content (ISR if needed)

## Performance Considerations

### Static Generation
- Homepage is mostly static → pre-built at deploy time
- Fast global CDN distribution via Vercel

### Image Optimization
- Use Next.js `<Image>` component
- Automatic optimization (WebP, responsive sizes)
- Lazy load below-the-fold content

### Code Splitting
- Next.js auto-splits pages
- Components lazy-loaded where beneficial

### Caching
- Static pages: cached indefinitely
- Incremental Static Regeneration (ISR): if needed for projects
- Browser cache headers set by Vercel

## Error Handling

### Form Errors
- Client-side validation before submit
- Server-side validation for safety
- User-friendly error messages
- Toast/alert notifications for feedback

### 404 / Not Found
- app/not-found.tsx (custom page)

### Global Errors
- app/error.tsx (error boundary)

## Security

### Form Security
- CSRF protection via Next.js built-in
- Server Actions validate inputs
- No sensitive data in client code

### Headers
- Vercel auto-applies secure headers
- Content Security Policy (CSP) if needed

## Future Extensibility

- Blog section: add `app/blog/[slug]` route
- Newsletter: add signup form component
- CMS integration: Supabase, Hygraph, or similar
- Analytics: Vercel Analytics or Plausible
- Comments/Reviews: if adding testimonials
