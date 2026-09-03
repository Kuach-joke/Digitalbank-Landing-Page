# Digitalbank Landing Page

Marketing landing page for Digitalbank, implemented from the Figma frames (Desktop, Desktop Active, Tablet, Tablet Menu, Mobile, and Mobile Menu).

Built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**.

## Features

- Responsive layout: mobile (~375px), tablet (~768px), desktop (1280px+)
- Interactive hamburger menu on tablet and mobile (open/close, Escape, overlay click)
- Hover/active states matching the Desktop Active frame (nav underline, faded CTA)
- Semantic HTML and keyboard-accessible navigation

## Run locally

```bash
npm install
npm run dev
```

The app serves at [http://127.0.0.1:43125](http://127.0.0.1:43125).

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/LandingPage.tsx` — page assembly
- `src/components/Header.tsx` / `MobileMenu.tsx` — navigation
- `src/components/Hero.tsx`, `Features.tsx`, `Articles.tsx`, `Footer.tsx` — sections
- `src/data/content.ts` — typed feature, article, nav, and social data
- `src/assets/` — logos, icons, hero mockups, and article images exported from Figma
