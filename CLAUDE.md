# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SRV Detailing — a professional mobile car valeting and detailing business website for the Manchester/Stockport area. The live site is at `https://www.srvdetailing.co.uk/`.

The Next.js application lives in the `Detailing_nextjs/` subdirectory.

## Commands

All commands run from `Detailing_nextjs/`:

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build (requires increased memory, see below)
npm run start    # Start production server
npm run lint     # ESLint
```

**Build requires extra memory.** Default Node.js heap is too small for this project. Use:
```bash
set NODE_OPTIONS=--max-old-space-size=4096 && npm run build
```

There is no test suite configured.

## Architecture

- **Framework:** Next.js 16 with App Router (`src/app/`), React 18, TypeScript
- **Styling:** Tailwind CSS 3 with CSS variables for theming (defined in `src/app/globals.css`). Primary color is dark green (HSL 157 81% 24%).
- **UI Components:** shadcn/ui (Radix UI primitives) in `src/components/ui/`. Configured via `components.json` with `@/` path aliases (`@/` maps to `./src/*`).
- **Animations:** Framer Motion used extensively across page components
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Poppins (headings, `--font-poppins`) and Roboto (body, `--font-roboto`) loaded via `next/font/google`
- **Deployment:** Vercel (vercel.json with SPA rewrite rule)

### Dual Codebase: Legacy Pages Router + App Router

The project contains **two routing systems side by side**:

1. **App Router (active, `src/app/`)** — The live Next.js routes. This is what gets served.
2. **Legacy Pages Router (`src/pages/`)** — Contains `_app.tsx`, `_document.tsx`, and many standalone page components from a previous Vite/React Router setup. These files (e.g., `src/pages/services/CeramicCoating.tsx`, `src/pages/locations/Cheadle.tsx`, `src/pages/guides/`) are **not active routes** but serve as reference content that was migrated into the App Router dynamic pages.

Also present: `src/App.css`, `src/index.css`, `src/vite-env.d.ts` — remnants of the original Vite setup.

**When adding new pages, always work in `src/app/`.** The `src/pages/` files are reference only.

### Routing Structure

**Current routes (implemented in App Router):**
- `/` — Homepage (client component, ~1300 lines with all sections inline in `src/app/page.tsx`)
- `/services/[slug]` — Dynamic service pages with inline data map
- `/locations/[slug]` — Dynamic location pages with inline data map
- `/services` — Services listing
- `/manchester` — Manchester pillar page (has its own `layout.tsx` for metadata)
- `/about-us`, `/contact`, `/blog` — Static pages
- `/not-found.tsx` — Custom 404

**Planned expansion (see `TOPICAL-MAP-SEO-ARCHITECTURE.md`):**
The SEO architecture document maps 132+ pages across location-based pillars (`/manchester/`, `/stockport/`), guides, comparisons, FAQ, pricing, and blog content. The current implementation uses a flat `/services/[slug]` and `/locations/[slug]` pattern which differs from the planned nested URL taxonomy (`/manchester/car-detailing/ceramic-coating/`).

### Key Patterns

- **Service/location data is inline:** `src/app/services/[slug]/page.tsx` and `src/app/locations/[slug]/page.tsx` contain hardcoded data maps rather than external data files. New services/locations require editing these files directly.
- **SEO is central:** Every page includes Schema.org JSON-LD structured data, meta tags, and canonical URLs. The root layout (`src/app/layout.tsx`) has comprehensive LocalBusiness/AutoDetailing schema. The homepage has FAQ schema.
- **Shared layout components:** `Navbar` and `Footer` are imported into each page rather than using Next.js layout nesting for shared chrome.
- **Homepage is monolithic:** `src/app/page.tsx` is a large "use client" file with all section components defined inline.
- **Image imports:** Pages use static imports from `@/assets/` for local images, plus `next/image` remote patterns for `lovable.dev` and `upload.wikimedia.org` (configured in `next.config.js`).
- **ESLint:** `@typescript-eslint/no-unused-vars` is turned off. Uses flat config (`eslint.config.js`).

### SEO Architecture Reference

`TOPICAL-MAP-SEO-ARCHITECTURE.md` at the project root is the authoritative document for planned URL structure, content strategy, internal linking rules, and schema markup requirements. Consult it when building new pages.
