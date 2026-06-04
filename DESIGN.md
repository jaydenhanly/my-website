# Design System & Visual Language

**Approach:** Minimalist, clean, and sophisticated. Emphasis on whitespace, typography, and subtle interactions. No decorative elements.

## Color Palette

### Primary Colors
- **Black:** `#000000` or `#1a1a1a` — text, primary elements
- **White:** `#ffffff` — backgrounds, breathing room
- **Accent:** `#000000` — used sparingly for emphasis (can add a secondary color for CTAs)

### Neutral Colors
- **Light Gray (BG):** `#f5f5f5` — subtle backgrounds
- **Medium Gray:** `#9a9a9a` — secondary text, disabled states
- **Dark Gray:** `#333333` — body text
- **Border Gray:** `#e0e0e0` — subtle dividers

## Typography

### Font Family
- **Primary:** System fonts for performance: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Alternative:** Inter (Google Fonts) for a modern, clean aesthetic
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Approach:** Minimal font weights, rely on size differentiation

### Type Scale (Tailwind classes)
- **Display/Hero:** `text-6xl` (72px) or `text-5xl` (60px), bold, minimal tracking
- **H1:** `text-4xl` (48px), bold
- **H2:** `text-3xl` (36px), semibold
- **H3:** `text-2xl` (28px), semibold
- **H4:** `text-xl` (20px), medium
- **Body Large:** `text-lg` (18px), regular
- **Body Regular:** `text-base` (16px), regular
- **Body Small:** `text-sm` (14px), regular
- **Caption:** `text-xs` (12px), regular

### Line Height
- **Headings:** 1.1 (tight, confident)
- **Body:** 1.6 (readable, breathing room)
- **Large text:** 1.4

## Spacing & Layout

**Philosophy:** Generous whitespace creates breathing room and hierarchy. Let empty space work for you.

### Spacing Scale (Tailwind)
- **Micro:** `gap-2`, `gap-3` — between inline elements
- **Small:** `gap-4` — between elements in a group
- **Medium:** `gap-6`, `gap-8` — between sections
- **Large:** `gap-12`, `gap-16` — between major sections
- **Extra Large:** `gap-20`, `gap-24` — hero to next section

### Container Widths
- **Max content width:** `max-w-4xl` (56rem) for text-heavy sections
- **Project grid:** `max-w-6xl` (72rem) for portfolio projects
- **Full bleed:** no container for background sections

### Padding Standards
- **Page horizontal:** `px-6` (mobile), `px-8` (tablet), `px-12` (desktop)
- **Section vertical:** `py-12` (mobile), `py-20` (desktop) — increase spacing for minimalist feel
- **No card padding** — let elements breathe; use margins instead
- **Section padding:** `py-24` minimum between major sections

## Components

### Button
- **Primary (CTA):** Black background, white text, `rounded-none` (no border radius) or minimal `rounded-sm`
- **Secondary:** White/transparent background, black text, black border (1px)
- **Hover:** Slight opacity decrease or invert colors
- **Padding:** `px-6 py-3` (generous, but minimal styling)
- **Font weight:** 500 or 600 (no extra bold)
- **No shadows — lettering only**

### Card / Project Item
- **No card styling** — projects should be simple image + text
- **No padding or border** — use white space and layout for separation
- **Image:** Full width, no radius, clean edge
- **Text below:** Simple typography hierarchy

### Navigation
- **Height:** 60px (slim)
- **Padding:** `px-8` (desktop), `px-6` (mobile)
- **Link styling:** No underline, black text, hover = slightly gray
- **Sticky:** position fixed at top with white background
- **Logo:** Name only, no icon decorations

### Hero Section
- **Min height:** `min-h-[90vh]` to `min-h-screen`
- **Typography:** Large headline (72px+), minimal tagline below
- **CTA placement:** Single, prominent button or link
- **Background:** White or very light gray (no gradients)
- **Image:** Full width, bottom half or right side

### Project/Work Grid
- **Layout:** 2-column on desktop, 1-column on mobile
- **Gap:** `gap-12` or `gap-16` between items
- **Image ratio:** 4:3 or 16:10 (consistent)
- **Text:** Minimal — just project title and optional one-liner
- **No hover effects** — or very subtle (opacity only)

### Section Headers
- **H2 size:** `text-3xl` (36px) or `text-4xl` (48px)
- **Margin below:** `mb-12`
- **No underlines** — rely on whitespace for separation

### Forms
- **Input styling:** Black border (1px), no background color, `py-2`
- **Focus:** Remove outline, use bottom border accent
- **Label:** Black text, `text-sm`, positioned above input
- **Submit button:** Black button, minimal padding

## Animations & Interactions

**Philosophy:** Minimal animation. Avoid distraction. Let content speak for itself.

### Transitions
- **Color transitions:** `transition-colors duration-200`
- **Opacity:** `transition-opacity duration-300`
- **Smooth scroll:** `scroll-behavior: smooth` in HTML
- **No scale or transform animations** unless necessary

### Hover States
- **Links:** Color change (e.g., black → medium gray)
- **Buttons:** Opacity decrease (e.g., `opacity-75` on hover)
- **Cards/Projects:** Subtle opacity change (no shadow elevation)
- **No cursor changes** except on links/buttons

### Special Effects
- **Smooth scroll:** Navigation links to sections (minimal, no parallax)
- **Optional:** Fade-in on scroll (very subtle, using Intersection Observer)
- **No confetti, bounces, or distracting animations** — keep it professional

## Responsive Design

### Breakpoints (Tailwind defaults)
- **Mobile:** 0px (default)
- **Tablet:** `md:` (768px)
- **Desktop:** `lg:` (1024px), `xl:` (1280px)

### Mobile-First Approach
- Start with mobile styles (single column, generous margins)
- Use `md:` and `lg:` prefixes for larger screens
- Reduce horizontal padding and increase column count as screen grows
- Typical pattern: `text-4xl md:text-5xl lg:text-6xl`

### Mobile Optimization
- Full-width images with generous padding
- Single-column layout for all content
- Minimum touch target: 48x48px (button, link)
- Larger typography on mobile (readability matters)

## Accessibility

### Color Contrast
- Text on background: Minimum 4.5:1 for AA compliance
- Large text: Minimum 3:1 ratio

### Focus States
- Visible focus ring: `focus:outline-2 focus:outline-offset-2 focus:outline-orange-500`
- Never remove focus indicators

### Semantics
- Use semantic HTML: `<nav>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (h1 > h2 > h3)
- Form labels properly associated with inputs

## Icons

- Use minimal SVG icons (inline or as components)
- No icon libraries — only use when necessary
- Sizes: 16px, 20px, 24px (keep small)
- Color: Black or gray, no decorative colors
- **Approach:** Prefer text labels over icons; icons should clarify, not decorate

## Visual Examples

### Layout Pattern: Hero + Grid
```
[Large headline]
[Small subheading]

[Full-width image or blank space]

[CTA button]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Our Work]

[Project 1 image]         [Project 2 image]
Project title            Project title

[Project 3 image]         [Project 4 image]
Project title            Project title

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Contact us]

[Form fields]
[Submit button]
```

## Dark Mode

Not planned for Phase 1. If needed in future:
- Invert colors: White backgrounds → Black, Black text → White
- Maintain contrast ratios (4.5:1 minimum)
