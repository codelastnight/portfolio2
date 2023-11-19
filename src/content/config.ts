import { defineCollection, z } from "astro:content";

const work = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImages: z
        .array(
          image().refine((img) => img.width >= 200, {
            message: "Cover image must be at least 1080 pixels wide!",
          })
        )
        .optional(),
      heroImagesAlt: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      archive: z.boolean().optional(),
      colors: z
        .object({
          bg: z.string().default("#fff"),
          fg: z.string().default("#000"),
        })
        .default({
          bg: "#fff",
          fg: "#000",
        }),
    }),
});

export const collections = { work };
