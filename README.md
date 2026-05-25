# Srushti Portfolio

An editorial Next.js portfolio focused on premium web presentation, motion-led storytelling, and technically grounded business positioning.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npx tsc --noEmit
```

## Structure

```text
src/
  app/                Routes, layout, metadata, route handlers
  components/
    effects/          Global visual effects
    layout/           Navigation, footer, smooth scroll shell
    motion/           Reusable reveal wrappers
    sections/         Main page and route section components
    typography/       Text animation helpers
  data/               Shared content and project data
```

## Notes

- Fonts are loaded with `next/font` and referenced via CSS variables in `src/app/globals.css`.
- The contact form posts to `src/app/api/contact/route.ts`.
- Project detail pages are statically generated from `src/data/projects.ts`.
