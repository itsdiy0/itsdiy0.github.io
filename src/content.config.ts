import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is a Markdown file in src/content/projects/.
// The frontmatter below is type-checked at build time.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Sort key — newest first. Format: YYYY-MM-DD.
    date: z.coerce.date(),
    // Tech stack tags, shown as mono pills on the card.
    stack: z.array(z.string()).default([]),
    // Optional cover image path in /public (e.g. /projects/foo.png).
    cover: z.string().optional(),
    // Optional links.
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    // Hide from the list without deleting the file.
    draft: z.boolean().default(false),
    // Pin to the top of the projects page.
    featured: z.boolean().default(false),
  }),
});

// Each blog post is a Markdown file in src/content/blog/.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
