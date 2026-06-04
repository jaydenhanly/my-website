# Design System & Visual Language

## Color Palette

### Primary Colors
- **Orange (Primary CTA):** `#fd6f00` — action buttons, highlights, focus states
- **Black (Text/Dark):** `#1a1a1a` — primary text, backgrounds
- **White:** `#ffffff` — backgrounds, card bases

### Neutral Colors
- **Light Gray (BG):** `#f8f8f8` — subtle backgrounds, hover states
- **Gray (Dividers):** `#edecec` — borders, dividers, subtle lines
- **Dark Gray (Text):** `#333333` — body text, secondary text

## Typography

### Font Family
- **Primary:** Poppins (Google Fonts)
- **Weights:** 400 (regular), 600 (semibold), 700 (bold)
- **Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Type Scale (Tailwind classes)
- **Display/Hero:** `text-5xl` (56px), bold, `tracking-tight`
- **H1:** `text-4xl` (48px), bold, `tracking-tight`
- **H2:** `text-3xl` (36px), bold, `tracking-normal`
- **H3:** `text-2xl` (28px), semibold, `tracking-normal`
- **Body Large:** `text-lg` (18px), regular, `tracking-wide`
- **Body Regular:** `text-base` (16px), regular, `tracking-normal`
- **Body Small:** `text-sm` (14px), regular, `tracking-normal`
- **Label:** `text-xs` (12px), semibold, `tracking-wide`

### Line Height
- **Headings:** 1.2
- **Body:** 1.6
- **Compact:** 1.4

## Spacing & Layout

### Spacing Scale (Tailwind)
Use standard Tailwind spacing: `gap-4`, `p-6`, `mb-8`, etc.

### Container Widths
- **Full width:** no container
- **Standard:** `max-w-7xl` (80rem) for content sections
- **Sidebar:** `max-w-md` (28rem)
- **Narrow:** `max-w-2xl` (42rem)

### Padding Standards
- **Page horizontal:** `px-6` (mobile), `px-12` (tablet), `px-16` (desktop)
- **Section vertical:** `py-16` (mobile), `py-24` (desktop)
- **Card padding:** `p-6`

## Components

### Button
- **Primary (CTA):** Orange background, white text, rounded `rounded-md`
- **Secondary:** White background, orange text, orange border
- **Hover:** Slight opacity change or darken orange
- **Padding:** `px-6 py-3`
- **Font weight:** 600

### Card
- **Background:** White or light gray
- **Padding:** `p-6`
- **Border:** Subtle border or shadow
- **Radius:** `rounded-lg`
- **Shadow:** `shadow-md` for elevation

### Navigation
- **Height:** 72px
- **Padding:** `px-12` (desktop), `px-6` (mobile)
- **Link styling:** No underline, smooth color transitions, orange hover
- **Sticky:** position fixed at top

### Hero Section
- **Min height:** `min-h-screen` (100vh)
- **Typography:** Display size heading, body text for description
- **CTA placement:** Prominent button below headline

### Section Headers
- **H2 size:** `text-3xl` or `text-4xl`
- **Margin below:** `mb-12`
- **Optional underline:** Thin orange line if needed for emphasis

## Animations & Interactions

### Transitions
- **Color transitions:** `transition-colors duration-200`
- **All transitions:** `transition-all duration-300`
- **Smooth scroll:** `scroll-behavior: smooth` in HTML

### Hover States
- **Links:** Color change to orange
- **Buttons:** Opacity or slight scale change
- **Cards:** Shadow elevation on hover

### Special Effects
- **Confetti:** Trigger on "Hire Me" button click (already implemented)
- **Smooth scroll:** Navigation links to sections
- **Fade-in:** Content reveals on scroll (if using Intersection Observer)

## Responsive Design

### Breakpoints (Tailwind defaults)
- **Mobile:** 0px (default)
- **Tablet:** `sm:` (640px)
- **Desktop:** `md:` (768px), `lg:` (1024px), `xl:` (1280px)

### Mobile-First Approach
- Start with mobile styles
- Use `md:` and `lg:` prefixes for larger screens
- Typical pattern: `text-base md:text-lg lg:text-xl`

### Touch Targets
- Minimum 44x44px for interactive elements
- Extra padding on mobile for easier taps

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

- Use SVG icons (inline or as components)
- No icon libraries yet — create custom SVGs as needed
- Sizes: 16px, 20px, 24px, 32px
- Color: Inherit from text color or use primary orange

## Dark Mode

Currently not planned. If added in future:
- Use CSS variables or Tailwind dark: mode
- Test contrast ratios in dark mode
- Preserve functionality and readability
