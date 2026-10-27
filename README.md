# Abid Habib — Developer Portfolio

A premium, editorial portfolio for Abid Habib, Full-Stack Software Engineer.
Built with a quiet-confidence design system: warm paper neutrals, a restrained
copper accent, disciplined typography, and subtle motion.

## Tech Stack

- **React 19** (Next.js 16 App Router — single-route, static-deployable)
- **TypeScript**
- **Tailwind CSS 4** with CSS custom-property design tokens
- **Framer Motion** — fade/translate reveals, honors `prefers-reduced-motion`
- **Lucide React** icons + accurate brand SVGs (WhatsApp, Fiverr)
- Self-hosted fonts via `next/font`: Manrope (display), Inter (body), IBM Plex Mono (labels)

## Getting Started

```bash
# install dependencies
npm install        # or: bun install

# run the dev server
npm run dev        # or: bun run dev

# production build
npm run build
npm start
```

Open http://localhost:3000 to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, SEO metadata, JSON-LD (schema.org Person)
│   ├── page.tsx            # assembles all sections
│   ├── globals.css         # design tokens + editorial utilities
│   ├── icon.svg            # favicon
│   └── robots / sitemap    # public/robots.txt, public/sitemap.xml
├── components/
│   ├── navigation/         # sticky nav with scroll-spy + mobile menu
│   ├── sections/           # Hero, About, Expertise, Projects, Experience,
│   │                       # Education, Approach, Contact, Footer
│   ├── projects/           # project cards, case-study modal, CSS mockups
│   └── ui-custom/          # Reveal, SectionHeading, BrandIcons
└── data/                   # all portfolio content (personal, skills,
                            # projects, experience, education, philosophy)
```

All portfolio copy lives in `src/data/` — edit content there, not in components.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F7F7F5` | page background |
| `--surface` | `#FFFFFF` | cards |
| `--ink` | `#181818` | primary text |
| `--ink-2` | `#676767` | secondary text |
| `--accent` | `#986D4E` | copper accent (used sparingly) |
| `--deep` | `#202323` | dark bands (Approach, footer) |

Utilities: `container-editorial` (1320px max, fluid gutters), `section-pad`
(clamp 72–160px), `eyebrow`, `display-hero`, `display-section`, `bg-blueprint`.

## Deployment

The site is a static frontend and deploys cleanly to Vercel, Netlify, or an
Ubuntu VPS with Nginx:

```bash
npm run build   # outputs optimized production build
```

For Nginx hosting, serve the build output behind your reverse proxy with
certbot-managed TLS, as with any static site.

## SEO & Accessibility

- Metadata, Open Graph, Twitter card, canonical URL, JSON-LD `Person`
- Semantic HTML5, keyboard navigation, visible focus states, ARIA labels
- Skip-safe anchor navigation with real section IDs
- `prefers-reduced-motion` respected across all animations
- WCAG 2.2 AA-aligned color contrast and touch targets
