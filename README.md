# chronark.com

My personal site and blog. Fully static, a tiny script for the theme toggle and hover-prefetching, nothing else running in the browser.

Built with [Astro](https://astro.build) and MDX.

## Features

- **Markdown mirrors.** Append `.md` to any page URL and you get the raw markdown instead of HTML. Works for the homepage and every post, useful for LLMs and curl enjoyers.
- **Dark first.** The design leads with a near-black theme and ships a matching light mode. The toggle persists your choice, otherwise the OS preference wins.
- **RSS** at [/rss.xml](https://chronark.com/rss.xml).
- **No client-side framework.** Astro renders everything to plain HTML and CSS at build time.

## Development

```bash
pnpm install
pnpm dev
```

## Writing

Posts are MDX files in `src/content/blog/`:

```yaml
---
title: Post title
description: Optional, used for meta tags and RSS.
date: 2026-07-15
draft: false
---
```

Drafts (`draft: true`) are excluded from the build entirely: no page, no RSS entry, no markdown mirror.

## Deploy

```bash
pnpm build
```

Everything is pregenerated into `dist/`. The `Dockerfile` builds the site and wraps the output in a small [Caddy](https://caddyserver.com) image that listens on `$PORT`.

The container runs anywhere, but the best place for it is [unkey.com](https://unkey.com): global routing and usage insights included. This site runs there too.

```bash
docker build -t chronark.com .
docker run -e PORT=8080 -p 8080:8080 chronark.com
```
