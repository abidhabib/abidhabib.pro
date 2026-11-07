<div align="center">

# INK GRID — Developer Portfolio

**A two-ink, risograph-style developer portfolio: black ink printed on warm newsprint, graph paper behind every frame.**

[![Live Site](https://img.shields.io/badge/live-abidhabib.pro-171512?style=flat-square&logo=vercel&logoColor=white)](https://abidhabib.pro)
[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-20232a?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-171512?style=flat-square)](./LICENSE)

*Strictly two inks — black `#171512` on paper `#F0EBDE`. Flat print rules: no rounded corners, no soft shadows, no bold serif. Hierarchy through size.*

</div>

---

## ✨ Highlights

- **Cover-frame hero** — catalogue metadata header, giant Newsreader serif name with a periodic misregistration **glitch pass**, live `X:·Y:` coordinate readout that tracks the cursor, registration crosses and a vertical spine label
- **Live ink-block terminal** — a solid-ink console that types a looping session (`whoami`, stack, status) with a blinking paper caret
- **Permanent graph-paper canvas** — drafting-tone grid fixed behind the whole site, the way the reference system intends it
- **Pixel-stack data viz** — a "signal strength" chart in Expertise built from real data (tools indexed per discipline), drawn with honest on/off cells
- **Index ledger everything** — experience and education print as catalogue records (`REC—001 · ↑ CURRENT`); the project archive expands into a numbered ledger with row-level interactions
- **Case-file modals** — full project write-ups in focus-trapped, Escape-dismissible dialogs
- **QR-style mosaic patches** — deterministic 8×8 print marks (seeded, stable between renders — and honestly captioned as decoration, not scannable codes)
- **Abstract CSS project mockups** — 10 hand-composed flat interface illustrations, zero image assets
- **Flat print interactions** — hard offset "second pass of ink" shadows on hover, square traffic-light dots, a solid-ink reading-ruler scroll progress
- **Accessible by default** — `prefers-reduced-motion` respected everywhere, keyboard-navigable menus and modals, visible focus rings, ARIA-labelled decorative elements
- **SEO-ready** — Open Graph, Twitter cards, canonical URL, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- **Fully data-driven** — every word of content lives in typed files under `src/data/`; nothing is hardcoded in components

## 🖌 The System (in one minute)

1. **Two inks only.** Every color derives from the ink at varying intensities on cream paper.
2. **The grid is the canvas.** A permanent graph-paper tone sits behind every section.
3. **Hairline frames.** Sections and plates are bordered with 1.5px ink rules, top and bottom.
4. **Size, never weight.** Headlines are serif at 400 — hierarchy comes from scale.
5. **Flat ink.** Shadows are hard offsets (misregistered print), never blurs; corners are always square.
6. **Mono for metadata.** Indices, captions and tags are DM Mono — `FIG. 02 — N=100`, `PRJ—01 · 2024`.

## 🧰 Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 with CSS custom-property design tokens |
| Motion | Framer Motion (scroll reveals, progress ruler, reduced-motion fallbacks) |
| Icons | Lucide React + custom brand SVGs (WhatsApp, Fiverr) |
| Fonts | Newsreader · Hanken Grotesk · DM Mono via `next/font` (self-hosted) |

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/abidhabib/abidhabib.pro.git
cd abidhabib.pro

# 2. Install
npm install        # or: bun install

# 3. Develop
npm run dev        # or: bun run dev

# 4. Production
npm run build && npm start
```

Open **http://localhost:3000** — done.

## ✏️ Make It Yours

All content is centralized — fork the repo, edit the data files, and ship:

| What | Where |
|---|---|
| Name, title, email, socials, hero copy | `src/data/personal.ts` |
| Skills & expertise categories | `src/data/skills.ts` |
| Projects & case studies | `src/data/projects.ts` |
| Experience timeline | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| About & section copy | `src/data/philosophy.ts` |
| Portrait | replace `public/dp.webp` (square, ≥ 640px) |
| Palette & typography | `src/app/globals.css` (`:root` tokens) |
| Terminal session lines | `src/components/ui-custom/CodeTerminal.tsx` |
| Marquee technologies | `src/components/ui-custom/TechMarquee.tsx` |
| Mosaic seeds & pixel charts | `src/components/ui-custom/riso.tsx` |

**Reprint in a different ink** — the whole system runs on one ink + one paper. Swap the black for your own and every hairline, chip, chart and ink block follows:

```css
:root {
  --bg: #f0ebde;        /* paper — warm newsprint cream */
  --surface-2: #e6e0ce; /* deeper paper for subtle region shifts */
  --ink: #171512;       /* the single ink — print black */
  --ink-2: #3d3a34;     /* soft black (secondary text) */
  --ink-3: #8b8478;     /* faint ink (metadata) */
  --deep: #171512;      /* solid ink blocks (Approach band, footer, terminal) */
  --line: rgb(23 21 18 / 0.18); /* drafting hairlines */
}
```

> Also update the graph-paper tone in `body::before` and the paper literals used inside ink blocks (`#f0ebde`) — they are kept explicit on purpose so ink blocks stay truly two-color.

## 🗂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, JSON-LD Person schema
│   ├── page.tsx            # section assembly
│   └── globals.css         # design tokens + utilities + keyframes
├── components/
│   ├── navigation/         # scroll-spy navbar, mobile ledger menu
│   ├── sections/           # Hero, About, Expertise, Projects,
│   │                       # Experience, Education, Approach, Contact, Footer
│   ├── projects/           # cards, case-study modal, CSS mockups
│   └── ui-custom/          # riso primitives (QRBlock, PixelBars, PixelColumn,
│   │                       # SpineLabel, Cross), CodeTerminal, TechMarquee,
│   │                       # Reveal, SectionHeading, BrandIcons
└── data/                   # ← all portfolio content lives here
```

## ☁️ Deployment

**Vercel (recommended)** — import the repo, framework auto-detected, zero config.

**GitHub Pages** — already wired up: `.github/workflows/deploy-pages.yml` builds the static export (`npm run build:pages`) and deploys on every push to `main`. Enable **Settings → Pages → Source: GitHub Actions** and the site goes live at `https://<user>.github.io/<repo>/` (or your custom domain).

**Any Node host / VPS** —

```bash
npm run build && npm start   # serves on :3000
```

For Ubuntu + Nginx, reverse-proxy `:3000` behind your domain with Certbot TLS — the same setup this site runs on.

## 🤝 Contributing

Issues and pull requests are welcome. For significant changes, open an issue first to discuss what you'd like to improve — extra mockup variants, new riso primitives, and a11y improvements are especially appreciated. Please respect the two-ink rule and the flat-print rules when proposing visual changes.

## 📄 License

Released under the [MIT License](./LICENSE) — free to use, fork, and make your own. A star ⭐ or a credit link is always appreciated.

---

<div align="center">

Built by **[Abid Habib](https://abidhabib.pro)** · Full-Stack Software Engineer

[GitHub](https://github.com/abidhabib) · [LinkedIn](https://www.linkedin.com/in/abid-h-b8056a242) · [WhatsApp](https://wa.me/923444292065) · [Fiverr](https://www.fiverr.com/hammad43)

</div>
