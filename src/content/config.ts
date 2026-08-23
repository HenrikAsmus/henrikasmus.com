import { defineCollection, z } from 'astro:content';

const kapitel = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    nummer: z.number(),
    befund: z.string(),
    sprache: z.enum(['de', 'en']),
  }),
});

export const collections = { kapitel };
