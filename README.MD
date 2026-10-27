<div align="center">

# AH. ABID HABIB

**A open-source developer portfolio with a live coding terminal, tech marquee, and editorial design system.**

[![Live Site](https://img.shields.io/badge/live-abidhabib.pro-986D4E?style=flat-square&logo=vercel&logoColor=white)](https://abidhabib.pro)
[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-20232a?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-986D4E?style=flat-square)](./LICENSE)

*Warm paper neutrals · restrained copper accent · quiet motion — built to stand out without shouting.*

</div>

---

## ✨ Highlights

- **Live animated terminal** — a macOS-style console in the hero that types out a looping session (`whoami`, stack, status) with a blinking caret
- **Infinite tech marquee** — seamless scrolling ticker of core technologies with edge-fade and pause-on-hover
- **Scroll-spy navigation** — IntersectionObserver-powered active states with an animated underline and gradient scroll-progress bar
- **Case-study modals** — full project write-ups with focus-trapped, Escape-dismissible dialogs
- **Abstract CSS project mockups** — 10 hand-composed interface illustrations, zero image assets
- **Editorial design system** — token-driven palette (Tailwind 4 `@theme`), blueprint grids, aurora glows, code watermarks, grain texture
- **Accessible by default** — `prefers-reduced-motion` respected everywhere, keyboard-navigable menus and modals, visible focus rings, ARIA-labelled decorative elements
- **SEO-ready** — Open Graph, Twitter cards, canonical URL, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- **Fully data-driven** — every word of content lives in typed files under `src/data/`; no content is hardcoded in components

## 🧰 Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 with CSS custom-property design tokens |
| Motion | Framer Motion (scroll reveals, layout animations) |
| Icons | Lucide React + custom brand SVGs (WhatsApp, Fiverr) |
| Fonts | Manrope · Inter · IBM Plex Mono via `next/font` (self-hosted) |

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/abidhabib/portfolio.git
cd portfolio

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

**Recolor in one minute** — the entire site runs on six tokens:

```css
:root {
  --bg: #f7f7f5;        /* page background */
  --surface: #ffffff;   /* cards */
  --ink: #181818;       /* primary text */
  --accent: #986d4e;    /* copper accent */
  --deep: #202323;      /* dark bands */
  --line: #e6e6e2;      /* hairlines */
}
```

## 🗂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, JSON-LD Person schema
│   ├── page.tsx            # section assembly
│   └── globals.css         # design tokens + utilities + keyframes
├── components/
│   ├── navigation/         # scroll-spy navbar, mobile menu
│   ├── sections/           # Hero, About, Expertise, Projects,
│   │                       # Experience, Education, Approach, Contact, Footer
│   ├── projects/           # cards, case-study modal, CSS mockups
│   └── ui-custom/          # CodeTerminal, TechMarquee, Reveal, BrandIcons
└── data/                   # ← all portfolio content lives here
```

## ☁️ Deployment

**GitHub Pages** — pushes to `main` run `.github/workflows/deploy-pages.yml`, build a static export, and deploy it to [abidhabib.pro](https://abidhabib.pro). The repository's Pages source must be **GitHub Actions**. Run `bun run build:pages` locally to generate the static site in `out/`.

**Vercel (recommended)** — import the repo, framework auto-detected, zero config.

**Any Node host / VPS** —

```bash
npm run build && npm start   # serves on :3000
```

For Ubuntu + Nginx, reverse-proxy `:3000` behind your domain with Certbot TLS — the same setup this site runs on.

## 🤝 Contributing

Issues and pull requests are welcome. For significant changes, open an issue first to discuss what you'd like to improve — extra mockup variants, new sections, and a11y improvements are especially appreciated.

## 📄 License

Released under the [MIT License](./LICENSE) — free to use, fork, and make your own. A star ⭐ or a credit link is always appreciated.

---

<div align="center">

Built by **[Abid Habib](https://abidhabib.pro)** · Full-Stack Developer

[GitHub](https://github.com/abidhabib) · [LinkedIn](https://www.linkedin.com/in/abid-h-b8056a242) · [WhatsApp](https://wa.me/923444292065) · [Fiverr](https://www.fiverr.com/hammad43)

</div>
