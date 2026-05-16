# Zhillan Azmi — Portfolio

Editorial-style portfolio website for Zhillan Azmi (fullstack developer, ITENAS Bandung).

**Live:** https://dist-iruukegu.devinapps.com

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** (custom paper / ink / lime palette)
- **Framer Motion** (rotating word, accordion, drawer, page transitions)
- **Lucide React** icons + custom brand SVGs

## Design

Modern editorial aesthetic — moved away from generic SaaS templates:

- Paper-cream background `#FBF9F4` (no gradients, no glass-morphism)
- Single neon-lime accent `#D4FA3B`
- Typography stack: **Bricolage Grotesque** (display) + **Instrument Serif** (italic accents) + **JetBrains Mono** (labels)
- Asymmetric bento layouts in About + Projects
- Oversized year numerals in Experience
- Live Bandung (WIB) clock in hero status bar

## Features

- Light / dark theme toggle (persisted)
- Rotating italic word in hero (`ships things` / `scales well` / `loves details` / `won't break`)
- Live ticking Bandung clock
- Expandable experience accordion (9 roles)
- Filterable project grid (`All` / `Production` / `Internship` / `Active`)
- Copy-email-to-clipboard with toast feedback
- Mobile hamburger drawer with body-scroll lock
- Scroll progress bar (top, lime, 2px)
- Active section indicator in nav (Framer `layoutId` underline)

## Local development

```bash
npm install
npm run dev
```

Then visit http://localhost:5173.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
├── components/
│   ├── About.tsx
│   ├── BrandIcons.tsx       # GitHub / LinkedIn SVGs
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LocalClock.tsx       # Bandung WIB ticking clock
│   ├── Marquee.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── ScrollProgress.tsx
│   ├── Section.tsx
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── cv.ts                # single source of truth for CV content
├── hooks/
│   ├── useActiveSection.ts
│   └── useTheme.ts
├── App.tsx
├── index.css
└── main.tsx
```

All CV-derived content (experiences, certifications, skills, education, contact) lives in `src/data/cv.ts` as the single source of truth.
