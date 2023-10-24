import { defineCollection, z } from "astro:content";

const work = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work };
