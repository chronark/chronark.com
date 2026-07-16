# chronark.com

Personal site and blog. Built with [Astro](https://astro.build) and MDX. The only client-side JavaScript is the theme toggle.

## Development

```bash
pnpm install
pnpm dev
```

## Writing

Add MDX files to `src/content/blog/`:

```yaml
---
title: Post title
description: Optional description for meta tags and RSS.
date: 2026-07-15
draft: false
---
```

## Deploy

```bash
pnpm build
```

Static output in `dist/`.
