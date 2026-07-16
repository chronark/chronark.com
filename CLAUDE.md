# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `pnpm dev` — Start development server
- `pnpm build` — Static production build to `dist/`
- `pnpm preview` — Preview the production build

## Architecture

Minimal personal blog built with Astro 5 and MDX. Fully static; the only client-side JavaScript is the tiny inline theme toggle in `Base.astro`. Design is "midnight": near-black background with soft gray text (dark is the lead scheme, light is a same-voice counterpart), hairline borders, mono uppercase micro-labels for section headers and dates, dashed-leader post list, a faint violet radial glow at the top (dark mode only), and a desaturated violet-blue accent reserved for hover/selection. Single centered 620px column, 14px system sans, no nav bar.

**Theming:** all design tokens are CSS custom properties on `:root` in `src/styles/global.css`. Default follows `prefers-color-scheme`; the toggle sets `data-theme="light|dark"` on `<html>` (persisted in localStorage, applied pre-paint in `<head>`). The light token block exists twice (media query + `[data-theme="light"]`) — keep both in sync.

**Key paths:**
- `src/content/blog/*.mdx` — Blog posts. Frontmatter: `title` (required), `date` (required), `description`, `draft`
- `src/content.config.ts` — Content collection schema (Astro glob loader)
- `src/layouts/Base.astro` — HTML shell, meta tags, footer
- `src/pages/index.astro` — Homepage: short intro + chronological post list
- `src/pages/blog/[...id].astro` — Post pages, route is the file path under `src/content/blog/`
- `src/pages/rss.xml.ts` — RSS feed
- `src/pages/index.md.ts`, `src/pages/blog/[...id].md.ts` — markdown mirrors: every page is also available as raw markdown by appending `.md` to its URL (the homepage intro is duplicated in `index.md.ts`, keep in sync)
- `src/lib/og.ts`, `src/pages/og/*.png.ts` — OpenGraph images, pregenerated at build time via satori + resvg (midnight-styled card, Inter from @fontsource); `Base.astro` takes an `ogImage` prop, defaulting to `/og/home.png`
- `src/styles/global.css` — All shared styling; theming via CSS custom properties on `:root`

**Conventions:**
- Code highlighting uses Shiki dual themes (github-light/github-dark) configured in `astro.config.mjs`; the dark-mode override lives in `global.css`
- Drafts (`draft: true`) are excluded everywhere (homepage, post routes, RSS)
- Keep the design minimal: prefer editing CSS custom properties over adding new styles, and avoid adding client-side JS
