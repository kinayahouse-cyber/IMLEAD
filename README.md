# IMLEAD

Single-page static React site for **IMLEAD** — AMO, gouvernance de projet & hospitality.

Reconstructed from the live reference (`im-lead-steel.vercel.app`) and adapted from
desktop to mobile.

## Stack

- **Vite** + **React 18** + **React Router** (SPA)
- **Tailwind CSS** for the responsive / mobile layer (the way forward)
- Legacy plain CSS kept **unchanged** in `src/styles/` and still drives the
  desktop look

## Styling model

The display is handled by two layers, loaded in this order (`src/main.jsx`):

1. `src/styles/fonts.css` — `@font-face` (NeueMachina, Satoshi, base64-embedded)
2. `src/styles/index.css` — legacy desktop / base rules
3. `src/styles/mobile.css` — legacy media-query rules
4. `src/styles/tailwind.css` — Tailwind last, so utilities can layer on top

**New mobile work is done in Tailwind**, mostly via `max-md:` / `sm:` / `lg:`
responsive utilities applied to the existing markup, without touching the legacy
CSS files. Design tokens (colors, fonts) are mirrored in `tailwind.config.js`.

Each page uses a **single, responsive markup** that adapts from desktop to mobile
with Tailwind breakpoints — no separate mobile DOM.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/   Nav (+ mobile drawer), Footer, Cursor, PageDots
  pages/        Home, Approche, Expertise, Realisations, Insights, Pourquoi
  data/         page content (e.g. insights articles)
  styles/       fonts.css, index.css, mobile.css (legacy) + tailwind.css
public/assets/  images, logo, fonts referenced by the legacy CSS
```
