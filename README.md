# diy0.dev

Personal site, projects and blog. Built with [Astro](https://astro.build),
deployed as a static site to GitHub Pages at **diy0.dev**.

## Stack

- Astro 6 (static output, zero JS shipped by default)
- Content as Markdown in `src/content/` — typed via content collections
- Hanken Grotesk + JetBrains Mono (self-hosted via Fontsource)
- Tabler icons via `astro-icon`
- RSS feed at `/rss.xml`

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Make it yours

- **Personal info** — edit `src/consts.ts` (name, slogan, wordmark, socials, nav).
- **Avatar** — drop your photo in `public/` (e.g. `avatar.jpg`) and update
  `SITE.avatar` in `src/consts.ts`.

### Add a project

Create `src/content/projects/my-project.md`:

```md
---
title: My project
summary: One or two sentences shown on the card.
date: 2026-06-01
stack: [go, postgres]
cover: /projects/my-project.png   # optional, put image in public/projects/
repo: https://github.com/you/repo # optional
live: https://example.com         # optional
featured: false                   # pins to the top when true
draft: false                      # hides it when true
---
```

### Write a blog post

Create `src/content/blog/my-post.md`:

```md
---
title: My post
description: Shown in the list and as the meta description.
date: 2026-06-07
tags: [kubernetes, notes]
draft: false
---

Write in **Markdown** here.
```

The filename becomes the URL slug (`/blog/my-post`).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with the
official Astro action and publishes to GitHub Pages.

**One-time setup** in the repo on GitHub:

1. Settings → Pages → **Source: GitHub Actions**.
2. Make sure `public/CNAME` contains `diy0.dev` (it does) and your DNS points at
   GitHub Pages (apex `A`/`AAAA` records to GitHub's IPs, or a `CNAME` record for
   a subdomain).
3. Push to `main`. The Action builds and deploys automatically.

The custom-domain config lives in `astro.config.mjs`: `site` is set to
`https://diy0.dev` and `base` is intentionally left unset.
