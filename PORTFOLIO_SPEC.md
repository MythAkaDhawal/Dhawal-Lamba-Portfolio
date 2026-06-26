# PORTFOLIO_SPEC.md
**Single Source of Truth — Dhawal Lamba Portfolio**
Version: 1.0 | Status: Ready for Implementation

---

## TABLE OF CONTENTS

1. [Owner Profile & Communication Goals](#1-owner-profile--communication-goals)
2. [Design Philosophy & Aesthetic Direction](#2-design-philosophy--aesthetic-direction)
3. [Typography System](#3-typography-system)
4. [Color System](#4-color-system)
5. [Spacing System](#5-spacing-system)
6. [Theme System](#6-theme-system)
7. [Motion System](#7-motion-system)
8. [Technology Stack](#8-technology-stack)
9. [Sitemap & Information Architecture](#9-sitemap--information-architecture)
10. [Component Hierarchy](#10-component-hierarchy)
11. [Section-by-Section Specifications](#11-section-by-section-specifications)
    - 11.1 Hero
    - 11.2 About
    - 11.3 Projects
    - 11.4 Skills
    - 11.5 Timeline
    - 11.6 GitHub Activity
    - 11.7 Contact
12. [Project Details (Source of Truth)](#12-project-details-source-of-truth)
13. [Skills Database](#13-skills-database)
14. [Responsive Behavior](#14-responsive-behavior)
15. [Accessibility Requirements](#15-accessibility-requirements)
16. [SEO Requirements](#16-seo-requirements)
17. [Performance Requirements](#17-performance-requirements)
18. [Folder Architecture](#18-folder-architecture)
19. [Development Roadmap](#19-development-roadmap)

---

## 1. OWNER PROFILE & COMMUNICATION GOALS

### Identity
- **Name:** Dhawal Lamba
- **Current Status:** B.Tech Computer Science Engineering student, specializing in AI and Machine Learning
- **Positioning:** AI Engineer + Full Stack Builder + Product Thinker

### What the Portfolio Must Communicate (In Order of Priority)
1. This person builds real, deployable systems — not toy projects
2. Deep AI/ML integration experience, not superficial wrapper apps
3. Full-stack capability across multiple paradigms (web, mobile, security)
4. Product thinking — awareness of problems being solved, not just technologies used
5. Readiness for collaboration, internship, or full-time engagement

### Visitor Decision Tree
The ideal visitor is a **hiring manager, technical recruiter, or potential collaborator** who should, within 10 seconds:
- Understand who Dhawal is
- Understand what he builds
- Feel compelled to explore projects

Within 60 seconds they should:
- Have identified at least one project relevant to their domain
- Have a clear path to contact

### Non-Negotiable Tone
Confident. Not cocky. Minimal. Not sparse. Technical. Not jargon-heavy.

---

## 2. DESIGN PHILOSOPHY & AESTHETIC DIRECTION

### Signature Element
The portfolio's memorable visual identity: **a single continuous stroke motif** — an SVG path that draws itself on scroll through the hero-to-about transition. This stroke is thin, monochromatic, and traces a shape that suggests connection and flow (think circuit trace meets handwriting). It is the only "decorative" element on the page. Everything else is pure typographic architecture.

This is the one aesthetic risk taken. It references both the engineering domain (circuit trace) and the human dimension (handwriting) — appropriate for an AI/product builder who is still a student with a personal story to tell.

### What This Portfolio Does NOT Look Like
- No particle backgrounds, floating blobs, or gradient orbs
- No neon/dark Web3 aesthetics
- No CSS animation libraries applied indiscriminately
- No card-heavy Tailwind Bootstrap clone layouts
- No testimonials section, star ratings, or fake social proof
- No progress bars showing "Python: 85%"

### Reference Points (Aesthetic Inspiration, Not Copying)
- **Spacing philosophy:** Apple product pages (extreme generosity, content breathing room)
- **Polish level:** Linear.app marketing site (every pixel deliberate)
- **Simplicity:** Vercel.com (confidence in whitespace)
- **Type hierarchy:** Stripe.com (information density without clutter)

### Layout DNA
- Full-width sections with constrained content column (max ~1100px)
- Sections feel like distinct rooms, not a scrolling wall
- No boxes, cards, or borders on everything — containment is spatial, not bordered
- Subtle section dividers using 1px rules or generous spacing, not colored background blocks

---

## 3. TYPOGRAPHY SYSTEM

### Typeface Selection

| Role | Family | Source | Rationale |
|------|--------|---------|-----------|
| **Display** | `Instrument Serif` | Google Fonts | Editorial, elegant, technically precise; avoids the overused Playfair/DM Serif defaults |
| **Body / UI** | `Inter` | Google Fonts | Industry standard for technical readability; intentional pairing with the serif display |
| **Monospace** | `JetBrains Mono` | Google Fonts | For code snippets, tech tags, and terminal-style labels; signals engineering credibility |

> **Design note:** Using a serif display face is the specific risk taken here. It separates this portfolio from the near-universal sans-serif-only developer portfolios. The serif is used *sparingly* — headings only — never body text.

### Type Scale (rem-based, 1rem = 16px)

```
--type-xs:     0.75rem   (12px)   Captions, labels
--type-sm:     0.875rem  (14px)   Secondary body, metadata
--type-base:   1rem      (16px)   Primary body
--type-md:     1.125rem  (18px)   Lead paragraphs
--type-lg:     1.25rem   (20px)   Section subheadings
--type-xl:     1.5rem    (24px)   Minor headings
--type-2xl:    1.875rem  (30px)   Section headings
--type-3xl:    2.25rem   (36px)   Large headings
--type-4xl:    3rem      (48px)   Hero sub-headline
--type-5xl:    3.75rem   (60px)   Hero name — desktop
--type-6xl:    4.5rem    (72px)   Hero name — large screens
```

### Type Treatments

```css
/* Display — Instrument Serif */
.text-display {
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Body — Inter */
.text-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
}

/* UI Labels — Inter */
.text-label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: var(--type-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Code/Tags — JetBrains Mono */
.text-mono {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: var(--type-sm);
  letter-spacing: -0.01em;
}
```

### Hierarchy Rules
- Section labels use `.text-label` — small, uppercase, tracked, muted color
- Section titles use `Instrument Serif` display at `--type-3xl` to `--type-4xl`
- Body paragraphs: `Inter` at `--type-base` or `--type-md` with `line-height: 1.65`
- Tech stack tags: `JetBrains Mono` at `--type-xs`
- Never bold body text except for inline emphasis (max 2 instances per section)

---

## 4. COLOR SYSTEM

### Design Principle
Monochromatic base with a **single strategic accent**. The accent is used exactly once per visible viewport as a focal point — never decoratively repeated.

### Light Theme Palette

```css
/* Light Theme */
--bg-primary:      #FAFAF9;   /* Warm off-white — avoids clinical pure white */
--bg-secondary:    #F4F3F0;   /* Subtle section differentiation */
--bg-tertiary:     #EEEDE9;   /* Hover states, inset areas */

--text-primary:    #111110;   /* Near-black — warm undertone, not #000 */
--text-secondary:  #6B6A66;   /* Secondary information, metadata */
--text-tertiary:   #9C9B97;   /* Captions, placeholders, disabled states */

--border-subtle:   #E5E4E0;   /* 1px dividers */
--border-default:  #D1D0CB;   /* Input borders, visible rules */

--accent:          #1A1A1A;   /* Primary CTA — uses depth via bg, not color */
--accent-text:     #FAFAF9;   /* Text on accent bg */

--highlight:       #3D5AFE;   /* The ONE blue — used for links only */
--highlight-dim:   rgba(61, 90, 254, 0.08); /* Hover bg on link elements */

--stroke-color:    #D1D0CB;   /* The SVG path stroke */
```

### Dark Theme Palette

```css
/* Dark Theme */
--bg-primary:      #0E0E0D;   /* Deep warm near-black */
--bg-secondary:    #161615;   /* Section differentiation */
--bg-tertiary:     #1E1E1C;   /* Hover states, inset areas */

--text-primary:    #F0EFE9;   /* Warm off-white text */
--text-secondary:  #8A8980;   /* Secondary information */
--text-tertiary:   #57564F;   /* Captions, tertiary */

--border-subtle:   #252523;   /* Dividers */
--border-default:  #302F2C;   /* Visible rules */

--accent:          #F0EFE9;   /* Inverted — light button on dark */
--accent-text:     #0E0E0D;

--highlight:       #6B7FFF;   /* Blue shifts warmer/lighter in dark */
--highlight-dim:   rgba(107, 127, 255, 0.10);

--stroke-color:    #302F2C;   /* SVG path stroke */
```

### Usage Rules
- `--highlight` (blue) **only** for interactive links and the active state of the theme toggle
- Never use color for decoration — color must signal meaning (interactive, active, warning)
- All section backgrounds alternate between `--bg-primary` and `--bg-secondary` only — no colored section backgrounds
- No gradients except: a very subtle `radial-gradient` from `--highlight-dim` centered behind the hero name (optional — implement only if it adds depth without distraction)

---

## 5. SPACING SYSTEM

Base unit: `8px`

```css
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
--space-40:  160px
--space-48:  192px
```

### Section Spacing
- **Vertical padding per section:** `--space-32` (128px) desktop, `--space-20` (80px) mobile
- **Content column max-width:** `1100px`, centered, horizontal padding `--space-6` (24px)
- **Grid gutter:** `--space-8` (32px) desktop, `--space-6` (24px) tablet, `--space-4` (16px) mobile

### Component Spacing
- **Heading → body gap:** `--space-6` (24px)
- **Section label → heading gap:** `--space-4` (16px)
- **Body → CTA gap:** `--space-8` (32px)
- **Card inner padding:** `--space-8` (32px)
- **Inline tag padding:** `4px 10px`

---

## 6. THEME SYSTEM

### Implementation Strategy

Use the `next-themes` library with `attribute="class"` strategy.

```tsx
// _app.tsx or layout.tsx
import { ThemeProvider } from 'next-themes'

export default function Layout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  )
}
```

Apply CSS variables on `:root` and `.dark` selectors in `globals.css`.

### Anti-Flash Strategy
Add a blocking script in `<head>` before any stylesheets:

```html
<script>
  (function () {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  })();
</script>
```

### Theme Toggle Component

```
ThemeToggle
├── Framer Motion animated SVG (sun ↔ moon morphing)
├── aria-label dynamically set ("Switch to dark mode" / "Switch to light mode")
├── Keyboard accessible (Enter/Space triggers toggle)
├── Position: fixed top-right in navbar
└── Transition: 300ms ease, icon morphs via path interpolation
```

**Animation detail:** The sun icon has rays that collapse inward while a crescent moon shape draws itself. This uses Framer Motion's `AnimatePresence` with staggered children for the rays.

---

## 7. MOTION SYSTEM

### Philosophy
Motion is a narrative device. Every animation answers: *what does this tell the visitor about how the site thinks?* The answer: deliberate, confident, precise — things that connect.

### Global Defaults

```ts
// motion.config.ts
export const easings = {
  smooth:     [0.25, 0.46, 0.45, 0.94],  // Custom cubic-bezier for hero reveals
  spring:     { type: 'spring', stiffness: 280, damping: 28 },
  gentle:     { type: 'spring', stiffness: 180, damping: 30 },
  snappy:     { type: 'spring', stiffness: 400, damping: 32 },
}

export const durations = {
  fast:     0.15,
  normal:   0.25,
  slow:     0.45,
  verySlow: 0.8,
}
```

### Reduced Motion
All animations must respect `prefers-reduced-motion`. Use a custom hook:

```ts
// hooks/useReducedMotion.ts
import { useReducedMotion } from 'framer-motion'
// Returns boolean — when true, replace animations with opacity-only fades or instant renders
```

---

### Animation 1: Hero Reveal Sequence

**Trigger:** Page load  
**Style:** Staggered upward fade-in (not slide — subtle Y offset of 24px → 0)

```
Sequence:
  t=0.00s  → Section label ("Building at the intersection of AI + software")
  t=0.15s  → Name line 1 ("Dhawal")
  t=0.25s  → Name line 2 ("Lamba")
  t=0.40s  → Role + value prop
  t=0.55s  → CTA buttons
  t=0.70s  → Social links
```

Each element uses:
```ts
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
```

---

### Animation 2: SVG Path Drawing (Signature Element)

**Trigger:** Scroll — activates when the path element enters the viewport. Progress is tied to scroll position within the hero→about transition zone.

**Implementation:**
```tsx
// Uses useScroll + useTransform from Framer Motion
// SVG path has a known total length (calculated via pathElement.getTotalLength())
// strokeDasharray = totalLength
// strokeDashoffset = useTransform(scrollYProgress, [0, 1], [totalLength, 0])
```

**Path design:** A single continuous line that originates near the hero name, arcs through the whitespace between sections, and terminates at the first word of the About section. The path should feel like a thread being pulled taut.

**Visual properties:**
- `stroke: var(--stroke-color)` — always monochrome, never accent color
- `strokeWidth: 1.5`
- `fill: none`
- `strokeLinecap: round`
- SVG is `position: absolute`, `pointer-events: none`, `z-index: 0`

---

### Animation 3: Scroll-Driven Text Convergence (Skills Section)

**Trigger:** Skills section enters viewport  
**Effect:** Each skill category label starts at slight horizontal offset (alternating left/right by ±20px, opacity 0) and converges to its resting position as the section scrolls into view. Uses staggered delay per category row.

**Reference:** Inspired by character convergence effects where elements gather toward a center — adapted here as category labels that pull together.

```ts
initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
whileInView: { opacity: 1, x: 0 }
transition: { delay: index * 0.08, duration: 0.5, ease: 'easeOut' }
viewport: { once: true, margin: '-80px' }
```

---

### Animation 4: Project Card Reveal

**Trigger:** Each project card enters viewport  
**Effect:** The card's left border accent line draws downward (scaleY: 0 → 1) simultaneously with the card content fading up.

```ts
// Border line
initial: { scaleY: 0, originY: 0 }
whileInView: { scaleY: 1 }
transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
```

---

### Animation 5: Timeline Connector Animation

**Trigger:** Timeline section scroll  
**Effect:** The vertical connector line between timeline events draws downward as the user scrolls through the section. Events to the left/right fade in when the connector reaches them.

Implemented with `useScroll` scoped to the timeline container via `ref`.

---

### Animation 6: Contact Section Magnetic CTA

**Trigger:** Cursor hover on the primary contact button  
**Effect:** Subtle magnetic pull — the button follows the cursor with a slight lag (Framer Motion `x`/`y` motion values tied to cursor position within the button's bounding box, scaled to ±8px max).

```ts
const handleMouseMove = (e) => {
  const { left, top, width, height } = ref.current.getBoundingClientRect()
  const x = (e.clientX - left - width / 2) * 0.15
  const y = (e.clientY - top - height / 2) * 0.15
  setPosition({ x, y })
}
```

---

### Animation 7: Hover States

**Links and buttons:**
- Background: `--highlight-dim` fade in, 150ms
- Text color shift, 150ms  
- No scale transforms on text elements (preserves readability)

**Project cards:**
- Subtle lift: `y: -4px`, `boxShadow` increase, 200ms spring

**Social icons:**
- Scale: 1 → 1.1, spring animation

---

## 8. TECHNOLOGY STACK

### Core Framework
```
Next.js 14+          App Router, Server Components where applicable
TypeScript 5+        Strict mode enabled
```

### Styling
```
Tailwind CSS 3.4+    Utility-first, configured with custom tokens
CSS Variables        For theme values (not Tailwind's opacity trick)
```

### Components
```
shadcn/ui            Accessible primitives (Button, Dialog, Tooltip)
Lucide Icons         Consistent icon set
Radix UI             Underlying primitives via shadcn
```

### Animation
```
Framer Motion 11+    All animations — no other animation libraries
```

### Data / Content
```
No CMS              All content in TypeScript data files
GitHub REST API     For GitHub Activity section (public endpoints, no auth)
```

### Deployment
```
Vercel              Zero-config Next.js deployment
Vercel Analytics    Performance monitoring (free tier)
Vercel OG           Dynamic Open Graph image generation
```

### Developer Experience
```
ESLint + Prettier   Code quality
Husky               Pre-commit hooks
lint-staged         Run linters only on changed files
```

---

## 9. SITEMAP & INFORMATION ARCHITECTURE

```
/ (root)
├── Hero                    — Immediate identity + CTA
├── About                   — Background, philosophy
├── Projects                — 6 featured projects (flagship visual treatment)
├── Skills                  — Categorized capability grid
├── Timeline                — Narrative journey
├── GitHub Activity         — Live contribution data
└── Contact                 — Reach out

/resume                     → Redirect or PDF download (no separate page needed)
```

**Single-page architecture** with smooth scroll and URL hash updates per section (`/#about`, `/#projects`, etc.) for shareability and direct linking.

**Navigation behavior:**
- Navbar is fixed, minimal — only logo/name + section links + theme toggle
- On mobile: hamburger → full-screen overlay menu with animated entry
- Active section highlighted in nav via Intersection Observer

---

## 10. COMPONENT HIERARCHY

```
src/
├── app/
│   ├── layout.tsx                  Root layout, ThemeProvider, fonts
│   ├── page.tsx                    Composition root — assembles all sections
│   └── api/
│       └── github/route.ts         Server-side GitHub data fetching
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── NavLinks.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroText.tsx
│   │   │   ├── HeroCTAs.tsx
│   │   │   └── HeroSocialLinks.tsx
│   │   │
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── AboutContent.tsx
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectMeta.tsx
│   │   │   ├── ProjectLinks.tsx
│   │   │   └── TechTag.tsx
│   │   │
│   │   ├── Skills/
│   │   │   ├── Skills.tsx
│   │   │   ├── SkillCategory.tsx
│   │   │   └── SkillChip.tsx
│   │   │
│   │   ├── Timeline/
│   │   │   ├── Timeline.tsx
│   │   │   ├── TimelineEntry.tsx
│   │   │   └── TimelineConnector.tsx
│   │   │
│   │   ├── GitHub/
│   │   │   ├── GitHub.tsx
│   │   │   ├── ContributionGraph.tsx
│   │   │   └── RepoCard.tsx
│   │   │
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       ├── ContactLinks.tsx
│   │       └── MagneticButton.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx              (extends shadcn)
│   │   ├── SectionLabel.tsx        Reusable uppercase label
│   │   ├── SectionHeading.tsx      Reusable serif heading
│   │   ├── StrokePath.tsx          The SVG signature element
│   │   └── ScrollProgress.tsx      Page scroll progress indicator
│   │
│   └── motion/
│       ├── FadeUp.tsx              Reusable scroll-triggered fade-up wrapper
│       ├── StaggerChildren.tsx     Stagger container
│       └── MagneticWrapper.tsx     Magnetic hover HOC
│
├── data/
│   ├── projects.ts                 All project data
│   ├── skills.ts                   All skills data
│   ├── timeline.ts                 Timeline events
│   └── social.ts                   Social links
│
├── hooks/
│   ├── useReducedMotion.ts
│   ├── useScrollProgress.ts
│   ├── useGitHubData.ts
│   └── useActiveSection.ts
│
├── lib/
│   ├── utils.ts                    cn() utility, helpers
│   └── github.ts                   GitHub API client
│
└── styles/
    └── globals.css                 CSS variables, resets, base styles
```

---

## 11. SECTION-BY-SECTION SPECIFICATIONS

---

### 11.1 HERO SECTION

**File:** `components/sections/Hero/Hero.tsx`

#### Layout (Desktop)
```
┌──────────────────────────────────────────────────┐
│                                                  │
│  [label: Building at the intersection of AI      │
│           and modern software]                   │
│                                                  │
│  DHAWAL                                          │
│  LAMBA                           [social links]  │
│                                                  │
│  AI Engineer. Full Stack Builder.                │
│  Product Thinker. Building systems that          │
│  think, scale, and ship.                         │
│                                                  │
│  [View Projects ↓]   [Resume ↗]                 │
│                                                  │
│  ──────────────────────────────── (stroke path)  │
└──────────────────────────────────────────────────┘
```

#### Layout (Mobile)
```
┌────────────────────────┐
│  [label]               │
│                        │
│  DHAWAL                │
│  LAMBA                 │
│                        │
│  [tagline]             │
│                        │
│  [View Projects ↓]     │
│  [Resume ↗]            │
│                        │
│  [social links — row]  │
└────────────────────────┘
```

#### Content Specification

**Section Label:**
```
Building at the intersection of AI and modern software
```
Style: `.text-label`, `--text-tertiary`

**Name:**
```
DHAWAL LAMBA
```
Font: `Instrument Serif`, `--type-5xl` to `--type-6xl`, weight 400, letter-spacing `-0.03em`
Color: `--text-primary`
Layout: Two lines (DHAWAL / LAMBA) stacked, each on its own `<span>`

> **Design note:** The name is set in all-caps on the serif face. This is intentional and distinctive — the combination of serif + all-caps is visually strong without being loud. Most developer portfolios use mixed-case sans-serif names. This is the second place the aesthetic risk manifests.

**Role Line:**
```
AI Engineer. Full Stack Builder. Product Thinker.
```
Font: `Inter`, `--type-lg`, weight 400, color `--text-secondary`

**Value Proposition:**
```
Building systems that think, scale, and ship.
```
Font: `Inter`, `--type-base`, weight 400, color `--text-secondary`

**CTA Buttons:**

| Button | Label | Style | Action |
|--------|-------|-------|--------|
| Primary | View Projects | Filled: `--accent` bg, `--accent-text` text | Smooth scroll to `#projects` |
| Secondary | Resume ↗ | Ghost: border `--border-default`, `--text-primary` | Open resume PDF in new tab |

Button sizing: `height: 44px`, `padding: 0 24px`, `border-radius: 8px`, `font-size: --type-sm`, `font-weight: 500`

**Social Links (desktop: right-aligned vertical stack; mobile: horizontal row):**

| Platform | Icon | Link |
|----------|------|------|
| GitHub | Lucide `Github` | [Information not provided — placeholder: `https://github.com/dhawallamba`] |
| LinkedIn | Lucide `Linkedin` | [Information not provided — placeholder] |
| Email | Lucide `Mail` | [Information not provided — placeholder] |

Icon size: `20px`, color `--text-tertiary` → hover `--text-primary`, 150ms transition

**SVG Stroke Path:**
- Begins in lower-right area of hero
- Curves organically toward the About section
- `pointer-events: none`, `overflow: visible`, `position: absolute`
- Animated via `strokeDashoffset` on scroll (see Motion System — Animation 2)

#### Behavior Notes
- Hero section height: `min-height: 100svh` (small viewport height unit for mobile browser chrome)
- Vertical centering via flexbox, slight upward bias (content at ~45% from top, not 50%)
- No background imagery, no hero image of the person (—this is intentional — the text *is* the hero)
- Mouse parallax: optional subtle `x/y` movement of the name text by ±6px on cursor move. Implement only if it feels natural in testing.

---

### 11.2 ABOUT SECTION

**File:** `components/sections/About/About.tsx`

#### Layout
```
┌──────────────────────────────────────────────────┐
│  [label: About]                                  │
│                                                  │
│  ┌─────────────────────────────────────────┐     │
│  │ I'm a Computer Science student          │     │
│  │ specializing in AI and ML, building     │     │
│  │ software that actually ships.           │     │
│  └─────────────────────────────────────────┘     │
│                                                  │
│  [Background col]     [Philosophy col]           │
│                                                  │
│  Two-column at desktop, stacked on mobile        │
└──────────────────────────────────────────────────┘
```

#### Content Specification

**Opening Statement (displayed large, `--type-2xl`, `Instrument Serif`):**
```
I'm a CS student specializing in AI and ML — building systems
that work in the real world, not just in notebooks.
```

**Left Column — Background:**
```
Heading: Background
Body: B.Tech Computer Science Engineering with a specialization in 
Artificial Intelligence and Machine Learning. My work spans the full 
stack — from training models and building APIs to shipping mobile apps 
and web platforms that people actually use.

I've worked on systems that touch security, education, e-commerce, 
and research — each one a different problem set, the same underlying 
discipline: understand the problem deeply, then build the simplest 
thing that solves it well.
```

**Right Column — Engineering Philosophy:**
```
Heading: How I Think
Body: I approach every build as a product problem first and an 
engineering problem second. The best software isn't the most 
architecturally sophisticated — it's the one that does what the 
user needs without requiring them to think about how.

Curiosity is the constant. Whether I'm integrating a RAG pipeline, 
building a recommendation system, or designing a registration flow, 
the question is always the same: what actually needs to be here?
```

**Interests (tag-style list, not a paragraph):**
```
AI Systems Design  ·  Developer Tooling  ·  Security Engineering  ·  Product Strategy  ·  Open Source
```
Style: `JetBrains Mono`, `--type-xs`, `--text-secondary`

#### Notes
- No photo of Dhawal (information not provided; do not use placeholder)
- If a professional photo is later provided, add a round-cornered image in the left column and reflow text to the right
- No "Download Resume" CTA here — it lives in the Hero and Contact sections only

---

### 11.3 PROJECTS SECTION

**File:** `components/sections/Projects/Projects.tsx`

#### Strategic Project Order
1. **CiteRAG** — AI/ML flagship (most technically sophisticated)
2. **Scamnet-ai** — Security + AI (high societal relevance)
3. **Lectra.ai** — EdTech + AI (broad appeal)
4. **Student-OS** — Productivity platform (demonstrates product thinking)
5. **AlumniConnect** — Full-stack social platform
6. **Clothing E-Commerce** — Receives premium visual treatment as latest build

#### Layout Philosophy
Projects are NOT a grid of equal cards. They are a curated list where each item feels considered. Use a **vertical list layout** at desktop with alternating visual weight, not a 2-col or 3-col grid.

**Desktop layout per project:**
```
┌──────────────────────────────────────────────────────────┐
│  01                                                      │
│  ┌──────────────────────────────────────────────────┐    │
│  │ CiteRAG                              [GitHub ↗]  │    │
│  │ ─────────────────────────────────────────────    │    │
│  │ [Problem] [Architecture] [Stack]                 │    │
│  │                                                  │    │
│  │ Description paragraph                            │    │
│  │                                                  │    │
│  │ [python] [langchain] [fastapi] [rag]             │    │
│  └──────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

The left `01` counter is in `JetBrains Mono`, `--type-xs`, `--text-tertiary`. It is decorative but adds structure — here this is appropriate because the projects *are* a ranked sequence.

**The left border accent line** on each card is a `2px` vertical line in `--highlight` that **draws itself** on scroll entry (scaleY animation). This is the only place the accent color appears in the projects section.

#### Project Card Component Specification

```tsx
interface ProjectCardProps {
  index: number           // 01, 02, etc.
  title: string
  purpose: string         // One-line: what it is
  problem: string         // What problem it solves
  description: string     // 2-3 sentences
  architecture: string    // Brief architecture overview
  stack: string[]         // Tech tags
  highlights: string[]    // 2-3 bullet points (no metrics unless real)
  repoUrl?: string
  liveUrl?: string
  isFlagship?: boolean    // Triggers premium visual treatment
}
```

**Tech tag style:**
```css
.tech-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
}
```

#### Flagship Project Treatment (Clothing E-Commerce)

As the most recent build, this project receives differentiated visual treatment:

- Full-width card (not inset within a narrower content column)
- Subtle `--bg-secondary` background fill
- Project number in larger display size
- **[ASSUMPTION]:** If a screenshot or visual is available, display it at the right side of the card (desktop only) with `object-fit: cover`, rounded corners. Information not currently provided — implement slot, leave blank until asset is supplied.

---

### 11.4 SKILLS SECTION

**File:** `components/sections/Skills/Skills.tsx`

#### Design Approach
Skills are presented as **capability clusters**, not a list of technologies with percentages. The organizational metaphor is a workshop: different areas of the craft, each with its tools.

#### Layout
```
┌──────────────────────────────────────────┐
│  [label: Skills & Tools]                 │
│                                          │
│  Things I build with — and build on.     │
│                                          │
│  AI & Machine Learning                   │
│  [chip] [chip] [chip] [chip] [chip]      │
│                                          │
│  Frontend Engineering                    │
│  [chip] [chip] [chip] [chip]             │
│                                          │
│  Backend Development                     │
│  [chip] [chip] [chip]                    │
│  ...                                     │
└──────────────────────────────────────────┘
```

Category labels: `Inter`, `--type-base`, weight 600, `--text-primary`
Skill chips: see `TechTag` component — `JetBrains Mono`, `--type-xs`

#### Skill Categories
(Populated from Skills Database — Section 13)

1. AI & Machine Learning
2. Frontend Engineering
3. Backend Development
4. Mobile Development
5. Databases & Storage
6. Developer Tools
7. Architecture & Patterns
8. Deployment & Infrastructure
9. Security
10. Computer Vision

#### Animation
Scroll-driven convergence (Animation 3 from Motion System).
Each category row staggered by `index * 0.08s`.

#### Non-Goals
- No radar charts
- No progress bars
- No percentage labels
- No star ratings
- No "Expert / Intermediate / Beginner" categorization (—this invites disputes; capabilities speak through projects)

---

### 11.5 TIMELINE SECTION

**File:** `components/sections/Timeline/Timeline.tsx`

#### Purpose
Show the *trajectory*, not just the facts. The visitor should feel the arc of growth.

#### Layout
```
┌──────────────────────────────────────────────────┐
│  [label: Journey]                                │
│                                                  │
│  A story told in milestones.                     │
│                                                  │
│  [Year]  ●──────── Event title                   │
│               Event description (1-2 lines)      │
│                     │                            │
│  [Year]  ●──────── Event title                   │
│               Event description                  │
│                     │                            │
│  [Year]  ●──────── Event title (CURRENT)         │
│               Event description                  │
└──────────────────────────────────────────────────┘
```

The vertical connector line draws downward via scroll (Animation 5 from Motion System).

#### Timeline Event Data Structure
```ts
interface TimelineEvent {
  year: string               // e.g. "2022"
  month?: string             // Optional: "Aug"
  title: string
  description: string
  type: 'education' | 'project' | 'hackathon' | 'milestone'
  isCurrent?: boolean
}
```

#### Content (Factual — Based on Provided Information)

```ts
const timeline: TimelineEvent[] = [
  {
    year: 'Present',
    title: 'B.Tech CSE — AI/ML Specialization',
    description: 'Pursuing Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning.',
    type: 'education',
    isCurrent: true,
  },
  // Additional entries to be populated by Dhawal with accurate dates.
  // PLACEHOLDER ENTRIES BELOW — must be verified before shipping:
  {
    year: '[Year]',
    title: 'Clothing E-Commerce — Latest Build',
    description: 'Built and shipped a full-featured e-commerce platform as the most recent project.',
    type: 'project',
  },
  {
    year: '[Year]',
    title: 'CiteRAG — AI Research Tool',
    description: 'Developed a retrieval-augmented generation system for academic citation.',
    type: 'project',
  },
  {
    year: '[Year]',
    title: 'Scamnet-AI — Security Platform',
    description: 'Built an AI-powered scam detection and prevention system.',
    type: 'project',
  },
  {
    year: '[Year]',
    title: 'Hackathon Participation',
    description: '[Information not provided — populate with accurate hackathon name, placement, and date]',
    type: 'hackathon',
  },
]
```

> **IMPLEMENTATION NOTE:** Years, months, hackathon details, and chronological order for all timeline events other than education status must be provided by Dhawal. Do not invent dates. Ship with placeholder `[Year]` tokens until verified data is supplied.

---

### 11.6 GITHUB ACTIVITY SECTION

**File:** `components/sections/GitHub/GitHub.tsx`

#### Data Source
GitHub REST API v3 (public endpoints, no authentication required for public repositories)

```ts
// Endpoints used:
GET https://api.github.com/users/{username}/repos?sort=updated&per_page=6
GET https://api.github.com/users/{username}/events?per_page=100
```

> **NOTE:** GitHub username not provided. Replace `{username}` with Dhawal's actual GitHub handle.

#### Components

**1. Repository Cards (top 6 by recently updated)**
```
┌─────────────────────────────┐
│  repo-name                  │
│  Description (if any)       │
│  ★ Stars   🍴 Forks         │
│  [language chip]            │
└─────────────────────────────┘
```
Grid: 3-col desktop, 2-col tablet, 1-col mobile

**2. Contribution Activity**
A simplified, custom-rendered contribution graph using the events API.
Do NOT use `github-calendar` npm package (—it pulls in external styles, conflicts with theming).
Build a custom `ContributionGraph.tsx` that renders a weekly grid of squares, color-coded by activity level using CSS variables.

```
Activity levels → background colors:
  Level 0 (none):   --bg-tertiary
  Level 1 (1-2):    rgba(61, 90, 254, 0.15)
  Level 2 (3-5):    rgba(61, 90, 254, 0.35)
  Level 3 (6-9):    rgba(61, 90, 254, 0.60)
  Level 4 (10+):    rgba(61, 90, 254, 0.85)
```

**3. Language Stats**
Derived from repo data. Display as a horizontal bar showing language distribution.
Not a donut chart — a simple proportional strip with labels.

#### Error Handling
- API rate limiting: implement 1-hour client-side cache via `sessionStorage`
- Network failure: show a graceful fallback message, not a broken layout
- All API calls happen server-side in `app/api/github/route.ts` to avoid CORS issues and client-side rate limit concerns

---

### 11.7 CONTACT SECTION

**File:** `components/sections/Contact/Contact.tsx`

#### Philosophy
This section is not a form. It is an invitation. The visitor has already decided they want to reach out. Remove every possible friction.

#### Layout
```
┌──────────────────────────────────────────┐
│  [label: Contact]                        │
│                                          │
│  Let's build something.                  │
│                                          │
│  Whether it's a role, a collaboration,   │
│  or just a conversation — reach out.     │
│                                          │
│  [✉ Say hello →]   ← Magnetic button    │
│                                          │
│  ─────────────────────────────────       │
│  GitHub · LinkedIn · Email               │
└──────────────────────────────────────────┘
```

**Primary CTA:** `MagneticButton` component — see Motion System Animation 6
- Label: "Say hello →"
- Action: `mailto:[email address — information not provided]`
- Style: Large, filled, `--accent` background

**Contact Links:**

| Platform | Display | URL |
|----------|---------|-----|
| Email | [email — information not provided] | `mailto:` |
| GitHub | github.com/[username] | external link |
| LinkedIn | linkedin.com/in/[handle] | external link |

All links open in new tab with `rel="noopener noreferrer"`.

**NO contact form.** Rationale: a form adds friction and requires backend infrastructure. A direct email link is more honest and more likely to produce real outreach.

#### Footer (within Contact section or directly below)
```
Designed and built by Dhawal Lamba · [Year]
Built with Next.js, TypeScript, Framer Motion
```
Font: `Inter`, `--type-xs`, `--text-tertiary`
No social icons repeated here — they're already in the section above.

---

## 12. PROJECT DETAILS (SOURCE OF TRUTH)

> **CRITICAL:** The following descriptions are based on provided project names only. Detailed descriptions, architectures, tech stacks, and highlights **must be provided by Dhawal** for each project. The structure below is the implementation scaffold. Content marked `[REQUIRED]` must be filled before launch.

---

### Project 1: CiteRAG
```ts
{
  title: 'CiteRAG',
  purpose: '[REQUIRED: One-line description of what CiteRAG does]',
  problem: '[REQUIRED: What problem does it solve? For whom?]',
  description: '[REQUIRED: 2-3 sentence description]',
  architecture: '[REQUIRED: Brief architecture overview — e.g. RAG pipeline, embedding model used, retrieval strategy]',
  stack: ['[REQUIRED: List all technologies used]'],
  highlights: [
    '[REQUIRED: Key highlight 1 — no invented metrics]',
    '[REQUIRED: Key highlight 2]',
    '[REQUIRED: Key highlight 3 — optional]',
  ],
  repoUrl: '[REQUIRED: GitHub repository URL]',
  liveUrl: '[REQUIRED or null if no live demo]',
}
```

---

### Project 2: Student-OS
```ts
{
  title: 'Student-OS',
  purpose: '[REQUIRED]',
  problem: '[REQUIRED]',
  description: '[REQUIRED]',
  architecture: '[REQUIRED]',
  stack: ['[REQUIRED]'],
  highlights: ['[REQUIRED]', '[REQUIRED]'],
  repoUrl: '[REQUIRED]',
  liveUrl: null,   // [REQUIRED: Update if live demo exists]
}
```

---

### Project 3: Lectra.ai
```ts
{
  title: 'Lectra.ai',
  purpose: '[REQUIRED]',
  problem: '[REQUIRED]',
  description: '[REQUIRED]',
  architecture: '[REQUIRED]',
  stack: ['[REQUIRED]'],
  highlights: ['[REQUIRED]', '[REQUIRED]'],
  repoUrl: '[REQUIRED]',
  liveUrl: '[REQUIRED or null]',
}
```

---

### Project 4: AlumniConnect
```ts
{
  title: 'AlumniConnect',
  purpose: '[REQUIRED]',
  problem: '[REQUIRED]',
  description: '[REQUIRED]',
  architecture: '[REQUIRED]',
  stack: ['[REQUIRED]'],
  highlights: ['[REQUIRED]', '[REQUIRED]'],
  repoUrl: '[REQUIRED]',
  liveUrl: '[REQUIRED or null]',
}
```

---

### Project 5: Scamnet-AI
```ts
{
  title: 'Scamnet-AI',
  purpose: '[REQUIRED]',
  problem: '[REQUIRED]',
  description: '[REQUIRED]',
  architecture: '[REQUIRED]',
  stack: ['[REQUIRED]'],
  highlights: ['[REQUIRED]', '[REQUIRED]'],
  repoUrl: '[REQUIRED]',
  liveUrl: '[REQUIRED or null]',
}
```

---

### Project 6: Clothing E-Commerce (Flagship)
```ts
{
  title: '[REQUIRED: Actual project name if different from "Clothing E-Commerce"]',
  purpose: '[REQUIRED]',
  problem: '[REQUIRED]',
  description: '[REQUIRED]',
  architecture: '[REQUIRED]',
  stack: ['[REQUIRED]'],
  highlights: ['[REQUIRED]', '[REQUIRED]'],
  repoUrl: '[REQUIRED]',
  liveUrl: '[REQUIRED or null]',
  isFlagship: true,
  screenshotUrl: '[REQUIRED: Asset URL or path if screenshot available, else null]',
}
```

---

## 13. SKILLS DATABASE

> **CRITICAL:** Only the skills explicitly provided in this document should be displayed. Do not infer additional skills from project descriptions or general CS knowledge.

> **STATUS:** The skills list below is a **structural scaffold** awaiting Dhawal's actual skills input. Replace all `[REQUIRED]` items with verified skills only.

```ts
export const skills = {
  'AI & Machine Learning': [
    '[REQUIRED]', // e.g. PyTorch, TensorFlow, LangChain, RAG, etc.
  ],
  'Frontend Engineering': [
    '[REQUIRED]', // e.g. React, Next.js, TypeScript, Tailwind CSS
  ],
  'Backend Development': [
    '[REQUIRED]', // e.g. FastAPI, Node.js, Express
  ],
  'Mobile Development': [
    '[REQUIRED]', // e.g. React Native, Flutter — only if confirmed
  ],
  'Databases & Storage': [
    '[REQUIRED]', // e.g. PostgreSQL, MongoDB, Redis, Pinecone
  ],
  'Developer Tools': [
    '[REQUIRED]', // e.g. Git, Docker, Postman, VS Code
  ],
  'Architecture & Patterns': [
    '[REQUIRED]', // e.g. REST APIs, RAG pipelines, MVC — only confirmed patterns
  ],
  'Deployment & Infrastructure': [
    '[REQUIRED]', // e.g. Vercel, AWS, Railway, Render
  ],
  'Security': [
    '[REQUIRED]', // Only if explicitly part of Dhawal's skillset
  ],
  'Computer Vision': [
    '[REQUIRED]', // Only if explicitly part of Dhawal's skillset
  ],
}
```

> Any skill category with zero items after Dhawal fills in the database should be **removed** from the display rather than shown empty.

---

## 14. RESPONSIVE BEHAVIOR

### Breakpoints (aligned with Tailwind defaults)

| Name | Min-width | Typical target |
|------|-----------|----------------|
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Standard desktop |
| `2xl`| 1536px | Large displays |

### Section-Specific Responsive Rules

**Hero:**
- `< md`: Name at `--type-4xl`, stacked CTAs, social links become a horizontal row at bottom
- `>= lg`: Name at `--type-5xl` to `--type-6xl`, social links as vertical stack on right

**Projects:**
- All breakpoints: vertical list layout (never grid)
- `< md`: Card internal layout stacks vertically

**Skills:**
- `>= lg`: Category label + chips on same row (label ~200px wide, chips fill remaining)
- `< lg`: Label above chips, chips wrap

**Timeline:**
- `>= md`: Year label on left, connector in center, content on right
- `< md`: All content left-aligned, connector is a left-border strip

**GitHub:**
- `>= lg`: 3-col repo grid + side-by-side graph and language stats
- `< lg`: 2-col repo grid, stacked
- `< sm`: 1-col

**Contact:**
- All: centered, generous whitespace

### Typography Responsive Scaling

Hero name:
```css
font-size: clamp(2.5rem, 8vw, 4.5rem);
```

Section headings:
```css
font-size: clamp(1.875rem, 4vw, 2.25rem);
```

---

## 15. ACCESSIBILITY REQUIREMENTS

### Mandatory

- **Keyboard navigation:** All interactive elements (links, buttons, toggles, cards with links) are focusable in logical order. Custom focus ring: `2px solid var(--highlight)`, `outline-offset: 3px`.
- **Color contrast:** All text meets WCAG AA (4.5:1 for body, 3:1 for large text) in both themes. Verify with automated tooling.
- **Screen readers:** `aria-label` on icon-only buttons. Section landmarks (`<nav>`, `<main>`, `<section>` with `aria-labelledby`, `<footer>`).
- **Reduced motion:** All Framer Motion animations degrade to instant opacity fades when `prefers-reduced-motion: reduce` is active.
- **Semantic HTML:** `<h1>` for name in hero, `<h2>` for section titles, `<h3>` for project titles. No skipping heading levels.
- **Alt text:** All images have descriptive `alt` attributes. Decorative elements (SVG stroke) have `aria-hidden="true"`.
- **Theme toggle:** Must be keyboard operable, have visible focus state, and announce its action via `aria-label`.
- **External links:** Include `(opens in new tab)` in `aria-label` for external links that open in new tab.
- **Language attribute:** `<html lang="en">` in root layout.

### Testing Targets
- [x] axe-core (automated) — zero critical violations
- [x] VoiceOver (macOS) — full keyboard navigation test
- [x] Lighthouse Accessibility — score ≥ 95

---

## 16. SEO REQUIREMENTS

### Metadata (in `app/layout.tsx`)

```ts
export const metadata: Metadata = {
  title: 'Dhawal Lamba — AI Engineer & Full Stack Developer',
  description: 'B.Tech CS student specializing in AI/ML. Building systems that think, scale, and ship. Explore projects in AI, security, edtech, and full-stack development.',
  keywords: ['AI engineer', 'full stack developer', 'machine learning', 'portfolio', 'Dhawal Lamba'],
  authors: [{ name: 'Dhawal Lamba' }],
  openGraph: {
    type: 'website',
    url: '[REQUIRED: Deployed domain]',
    title: 'Dhawal Lamba — AI Engineer & Full Stack Developer',
    description: '[Same as description above]',
    images: [{
      url: '/og-image.png',  // 1200×630, generated via Vercel OG
      width: 1200,
      height: 630,
      alt: 'Dhawal Lamba — AI Engineer & Full Stack Developer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhawal Lamba — AI Engineer & Full Stack Developer',
    description: '[Same as description above]',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  canonical: '[REQUIRED: Deployed domain]',
}
```

### OG Image
Generate dynamically via `app/og/route.tsx` using Vercel's `@vercel/og` library.
Design: Dark background, large name in Instrument Serif, role subtitle in Inter, subtle stroke motif in corner.

### Structured Data
Add `JSON-LD` in the page `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dhawal Lamba",
  "url": "[deployed domain]",
  "sameAs": [
    "[GitHub URL]",
    "[LinkedIn URL]"
  ],
  "jobTitle": "AI Engineer & Full Stack Developer",
  "description": "B.Tech CS student specializing in AI and Machine Learning"
}
```

### Sitemap
`app/sitemap.ts` — single URL (single-page site), `changeFrequency: 'monthly'`, `priority: 1.0`

### Robots.txt
`app/robots.ts` — `Allow: /`, disallow nothing.

---

## 17. PERFORMANCE REQUIREMENTS

### Targets (Measured via Lighthouse, Chrome DevTools)

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FCP (First Contentful Paint) | < 1.5s |
| Lighthouse Performance Score | ≥ 90 |

### Implementation Requirements

**Fonts:**
```html
<!-- In <head>, before any stylesheets -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
Use `next/font/google` to self-host fonts at build time — eliminates font flash and third-party requests.

**Images:**
- All images use `next/image` component
- WebP format with AVIF fallback
- `priority` prop on any above-fold image
- Explicit `width` and `height` on all images to prevent CLS

**JavaScript:**
- Framer Motion imported with tree-shaking: `import { motion } from 'framer-motion'` only — not `import * from 'framer-motion'`
- GitHub Activity section: lazy-loaded with `React.lazy` + `Suspense` (it's below the fold and has API calls)
- No third-party analytics scripts except Vercel Analytics (async, no render-blocking)

**CSS:**
- Tailwind CSS purged in production — only used classes bundled
- No unused CSS from shadcn imports — import components individually
- `globals.css` contains only CSS variables, resets, and base typography — no utility classes

**Caching:**
- GitHub API responses: `Cache-Control: s-maxage=3600` on the server route
- Static assets: Vercel handles CDN caching automatically

---

## 18. FOLDER ARCHITECTURE

```
dhawal-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                  ESLint + TypeScript check on PR
│
├── public/
│   ├── resume.pdf                  [REQUIRED: Add Dhawal's resume]
│   ├── og-image.png                [Generated or manually designed]
│   ├── favicon.ico
│   ├── icon.svg
│   └── apple-touch-icon.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── og/
│   │   │   └── route.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── api/
│   │       └── github/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavLinks.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── HeroText.tsx
│   │   │   │   ├── HeroCTAs.tsx
│   │   │   │   └── HeroSocialLinks.tsx
│   │   │   ├── About/
│   │   │   │   └── index.tsx
│   │   │   ├── Projects/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectMeta.tsx
│   │   │   │   └── TechTag.tsx
│   │   │   ├── Skills/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── SkillCategory.tsx
│   │   │   │   └── SkillChip.tsx
│   │   │   ├── Timeline/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── TimelineEntry.tsx
│   │   │   │   └── TimelineConnector.tsx
│   │   │   ├── GitHub/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── ContributionGraph.tsx
│   │   │   │   └── RepoCard.tsx
│   │   │   └── Contact/
│   │   │       ├── index.tsx
│   │   │       └── MagneticButton.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── StrokePath.tsx
│   │   │   └── ScrollProgress.tsx
│   │   │
│   │   └── motion/
│   │       ├── FadeUp.tsx
│   │       ├── StaggerChildren.tsx
│   │       └── MagneticWrapper.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── timeline.ts
│   │   └── social.ts
│   │
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   ├── useScrollProgress.ts
│   │   ├── useGitHubData.ts
│   │   └── useActiveSection.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   └── github.ts
│   │
│   └── types/
│       ├── project.ts
│       ├── skill.ts
│       └── github.ts
│
├── .env.local                       [GITHUB_USERNAME, if needed server-side]
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 19. DEVELOPMENT ROADMAP

### Phase 0 — Setup (Day 1)
- [ ] `npx create-next-app@latest --typescript --tailwind --app --src-dir`
- [ ] Install: `framer-motion`, `next-themes`, `lucide-react`, `@radix-ui/react-*` (via shadcn CLI)
- [ ] Configure `tailwind.config.ts` with custom tokens
- [ ] Set up `globals.css` with full CSS variable system (light + dark)
- [ ] Implement anti-flash theme script in `layout.tsx`
- [ ] Configure `next/font/google` for all three typefaces
- [ ] Set up `ThemeProvider` and `ThemeToggle`
- [ ] Set up ESLint + Prettier + Husky

### Phase 1 — Data Layer (Day 1-2)
- [ ] Populate `data/projects.ts` — **BLOCKED on Dhawal providing project details**
- [ ] Populate `data/skills.ts` — **BLOCKED on Dhawal providing skills list**
- [ ] Populate `data/timeline.ts` — **BLOCKED on Dhawal providing dates and events**
- [ ] Populate `data/social.ts` with confirmed links
- [ ] Add `public/resume.pdf`

### Phase 2 — Core Motion Infrastructure (Day 2)
- [ ] Build `motion/FadeUp.tsx` reusable wrapper
- [ ] Build `motion/StaggerChildren.tsx`
- [ ] Build `ui/StrokePath.tsx` with `useScroll` + `useTransform` integration
- [ ] Implement `hooks/useReducedMotion.ts`
- [ ] Implement `hooks/useScrollProgress.ts`

### Phase 3 — Hero + Navbar (Day 2-3)
- [ ] Build `Navbar.tsx` (fixed, active section highlighting via IntersectionObserver)
- [ ] Build `MobileMenu.tsx` (full-screen overlay, animated)
- [ ] Build `Hero` section with full animation sequence
- [ ] Integrate `StrokePath.tsx` in Hero-to-About transition
- [ ] Test on mobile devices

### Phase 4 — About + Skills (Day 3)
- [ ] Build `About` section
- [ ] Build `Skills` section with convergence animation
- [ ] Verify responsive behavior at all breakpoints

### Phase 5 — Projects (Day 4-5)
- [ ] Build `ProjectCard.tsx` with scroll-triggered border animation
- [ ] Build `Projects` section with strategic ordering
- [ ] Implement flagship treatment for Clothing E-Commerce
- [ ] Add tech tags, links, highlights

### Phase 6 — Timeline + GitHub (Day 5-6)
- [ ] Build `Timeline` section with scroll-driven connector
- [ ] Build `app/api/github/route.ts`
- [ ] Build `ContributionGraph.tsx` (custom, no third-party)
- [ ] Build `RepoCard.tsx` grid
- [ ] Implement 1-hour cache for GitHub data

### Phase 7 — Contact + Footer (Day 6)
- [ ] Build `MagneticButton.tsx`
- [ ] Build `Contact` section
- [ ] Build `Footer`
- [ ] Add all contact links (email, GitHub, LinkedIn)

### Phase 8 — SEO, OG, Performance (Day 7)
- [ ] Implement full `metadata` object in `layout.tsx`
- [ ] Build OG image route
- [ ] Add JSON-LD structured data
- [ ] Generate `sitemap.ts` and `robots.ts`
- [ ] Run Lighthouse — target all green scores
- [ ] Run axe-core accessibility audit

### Phase 9 — Polish + QA (Day 7-8)
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
- [ ] Device test (iPhone 14, Pixel 7, iPad, 13" MacBook, 27" monitor)
- [ ] VoiceOver keyboard navigation test
- [ ] Check all external links open correctly
- [ ] Verify theme persistence on page refresh
- [ ] Performance budget check: JS bundle < 200KB gzipped

### Phase 10 — Launch (Day 8)
- [ ] Deploy to Vercel
- [ ] Set custom domain (if available)
- [ ] Verify OG image renders correctly (use opengraph.xyz to test)
- [ ] Submit to Google Search Console
- [ ] Final Lighthouse run on deployed URL

---

## APPENDIX A — KNOWN INFORMATION GAPS

The following items are **required before the site can be considered complete**. Marked as `[REQUIRED]` throughout the document.

| Item | Section | Priority |
|------|---------|----------|
| GitHub username | GitHub Activity, Contact, Social | Critical |
| LinkedIn URL | Hero, Contact, Social | Critical |
| Email address | Hero, Contact, Social | Critical |
| Project descriptions (all 6) | Projects | Critical |
| Project tech stacks (all 6) | Projects, Skills | Critical |
| Project repo URLs (all 6) | Projects | Critical |
| Live demo URLs (where applicable) | Projects | High |
| Skills list (verified) | Skills | Critical |
| Timeline dates and events | Timeline | High |
| Resume PDF | Hero CTA | High |
| Deployed domain | SEO metadata | High |
| Project screenshots | Projects (flagship) | Medium |

---

## APPENDIX B — DECISIONS LOG

| Decision | Rationale |
|----------|-----------|
| Instrument Serif for display | Differentiates from 95% of developer portfolios; signals confidence |
| All-caps name in serif | Strong visual identity without requiring color or illustration |
| No hero photo | Name and work speak first; reduces bias; aligns with minimalism |
| No contact form | Reduces friction; no backend required; direct email is more human |
| No progress bars in skills | They invite disputes and convey false precision |
| Vertical project list (not grid) | Allows progressive disclosure; projects feel curated not catalogued |
| Single accent color (blue) | One focal point; everything else is structural |
| Custom contribution graph | Avoids external dependency that conflicts with theming |
| Server-side GitHub fetch | Avoids CORS, rate-limiting exposed to client, auth leakage |
| `next-themes` with class strategy | Most reliable for SSR anti-flash behavior in Next.js App Router |

---

*End of PORTFOLIO_SPEC.md*
*Version 1.0 — Ready for implementation pending data population in Appendix A.*
