# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `pnpm dev` — Start development server
- `pnpm build` — Production build (includes Contentlayer content generation)
- `pnpm start` — Start production server
- `pnpm fmt` — Format and lint with Rome (`rome check --apply-unsafe` + `rome format --write`)

## Architecture

Next.js 13 App Router portfolio site using Contentlayer for MDX content, Tailwind CSS for styling, and MongoDB for pageview tracking.

**Key paths:**

- `app/` — App Router pages and components (server components by default)
- `app/components/` — Shared components (particles, nav, card, mdx renderer)
- `app/projects/[slug]/view.tsx` — Client component that reports page views to MongoDB API
- `content/projects/*.mdx` — Project content files with frontmatter (title, description, published, date, url, repository)
- `pages/api/pageviews/increment.ts` — API endpoint for incrementing pageview count (IP-based dedup with SHA-256)
- `pages/api/pageviews/get.ts` — API endpoint for fetching pageview counts for multiple projects
- `pages/api/incr.ts` — Legacy endpoint (now uses MongoDB, maintained for backward compatibility)
- `utils/db-connect.ts` — MongoDB connection manager with caching
- `utils/pageview-model.ts` — Mongoose schemas for `Pageview` and `VisitorDeduplicate` models
- `contentlayer.config.js` — Defines `Project` and `Page` document types, MDX plugins
- `util/mouse.ts` — `useMousePosition` hook for particle/card interactions

**Pageview tracking:** Client-side `view.tsx` component POSTs to `/api/pageviews/increment` on page mount. The API hashes visitor IP, deduplicates within 24 hours per project, and increments MongoDB counter. Server-side projects page fetches aggregated counts from `/api/pageviews/get`.

**Content pipeline:** Contentlayer processes `content/` MDX files at build time. Projects must have `published: true` in frontmatter to appear. Computed fields generate `path` and `slug` from file paths.

**Client vs Server:** Components using interactivity (particles, cards, nav) have `"use client"` directives. Project listing pages fetch MongoDB pageview counts server-side with `cache: no-store` for real-time updates.

## Environment Variables

- `MONGODB_URI` — MongoDB connection string (e.g., `mongodb://localhost:27017/neoportfolio`)

## Path Alias

`@/*` maps to project root (tsconfig paths).
