# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `pnpm dev` — Start development server
- `pnpm build` — Static production build to `dist/`
- `pnpm preview` — Preview the production build

## Architecture

Minimal personal blog built with Astro, MDX, and StyleX. Fully static; the only client-side JavaScript is the tiny inline theme toggle in `Base.astro` and Astro's hover-prefetch script (post links on the homepage carry `data-astro-prefetch`). Design is "midnight": near-black background with soft gray text (dark is the lead scheme, light is a same-voice counterpart), hairline borders, mono uppercase micro-labels for section headers and dates, dashed-leader post list, a faint violet radial glow at the top (dark mode only), and a desaturated violet-blue accent reserved for hover/selection. Single centered 620px column, 14px system sans, no nav bar.

**Styling (StyleX):** styles are authored with `stylex.create` in `src/styles/*.styles.ts` and applied in `.astro` templates via `stylex.attrs(...)`. Two build hooks make this work, and they must stay in sync through the shared options in `stylex.config.cjs`:

- `astro.config.mjs` has a small Vite plugin that runs `@stylexjs/babel-plugin` over `.ts` files importing `@stylexjs/stylex`, compiling style definitions to class-name maps.
- `postcss.config.cjs` runs `@stylexjs/postcss-plugin`, which scans `src/**/*.ts` and replaces the `@stylex` directive in `src/styles/global.css` with the generated CSS.

StyleX rules: define `stylex.create`/`defineVars`/`createTheme` only in `.ts` files (the Astro compiler is not Babel; `.astro` frontmatter can only call `stylex.attrs`). Inline `stylex.when.*` calls inside `stylex.create`; the compiler does not resolve them through local constants. Avoid multi-property shorthands (`background`, `margin: 0` overriding a longhand) — StyleX drops or under-prioritizes them; use longhands (`backgroundColor`, `marginBottom`).

**Theming:** design tokens live in `src/styles/tokens.stylex.ts` (`stylex.defineVars`); dark values are the defaults and a `prefers-color-scheme: light` condition supplies the light values. `src/styles/themes.ts` defines forced `lightTheme`/`darkTheme` via `stylex.createTheme`. The toggle sets both `data-theme="light|dark"` and the matching theme class on `<html>` (persisted in localStorage, applied pre-paint in `<head>`). `global.css` keeps only what StyleX cannot express: the box-sizing reset, `::selection`, `color-scheme`, and the Shiki overrides — these key off `data-theme` and duplicate a few token values; keep them in sync with `tokens.stylex.ts`.

**Markdown styling:** markdown output cannot carry StyleX classes, so `blog/[...id].astro` passes `<Content components={articleComponents} />` (`src/components/article/`), mapping each markdown element to a small Astro component that applies styles from `src/styles/article.styles.ts`. Old descendant selectors (`article pre code`, `article blockquote p`, `article ul li::before`) are `stylex.when.ancestor(...)` conditions observing `data-codeblock`/`data-blockquote`/`data-list="ul"` attributes on marker-carrying ancestors (Pre, Blockquote, Ul).

**Key paths:**
- `src/content/blog/*.mdx` — Blog posts. Frontmatter: `title` (required), `date` (required), `description`, `draft`
- `src/content.config.ts` — Content collection schema (Astro glob loader)
- `src/layouts/Base.astro` — HTML shell, meta tags, footer
- `src/pages/index.astro` — Homepage: short intro + chronological post list
- `src/pages/blog/[...id].astro` — Post pages, route is the file path under `src/content/blog/`
- `src/pages/rss.xml.ts` — RSS feed
- `src/pages/index.md.ts`, `src/pages/blog/[...id].md.ts` — markdown mirrors: every page is also available as raw markdown by appending `.md` to its URL (the homepage intro is duplicated in `index.md.ts`, keep in sync)
- `src/lib/og.ts`, `src/pages/og/*.png.ts` — OpenGraph images, pregenerated at build time via satori + resvg (midnight-styled card, Inter from @fontsource); `Base.astro` takes an `ogImage` prop, defaulting to `/og/home.png`
- `src/styles/tokens.stylex.ts` — Design tokens (`stylex.defineVars`) and constants (`stylex.defineConsts`: font stacks, mobile breakpoint)
- `src/styles/themes.ts` — Forced light/dark themes for the toggle
- `src/styles/base.styles.ts` — html/body, glow, footer, toggle, shared link + mono-label styles
- `src/styles/home.styles.ts`, `src/styles/post.styles.ts` — Homepage and post-page styles (style files live outside `src/pages/`, which only accepts routes)
- `src/styles/article.styles.ts`, `src/components/article/` — Markdown element styles and the components that apply them
- `src/styles/global.css` — The `@stylex` directive plus the few global rules StyleX cannot express

**Conventions:**
- Code highlighting uses Shiki dual themes (github-light/github-dark) configured in `astro.config.mjs`; the dark-mode override lives in `global.css`
- Drafts (`draft: true`) are excluded everywhere (homepage, post routes, RSS)
- Keep the design minimal: prefer editing the tokens in `tokens.stylex.ts` over adding new styles, and avoid adding client-side JS
- When you change a token, update it in three places: `tokens.stylex.ts`, both theme objects in `themes.ts`, and (for selection/Shiki values only) the duplicated blocks in `global.css`
