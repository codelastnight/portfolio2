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
      credits: z.record(z.string(), z.string()).optional(),
      // lol this is a rly funny way to do things
      heroImages: z
        .record(
          z.string(),
          image().refine((img) => img.width >= 200, {
            message: "Cover image gotta be 300 pixels wide you goober",
          })
        )
        .optional(),
      tags: z.array(z.string()).optional(),
      archive: z.boolean().default(false),
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

const play = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      publishDate: z.coerce.date(),
      credits: z.record(z.string(), z.string()).optional(),
      // lol this is a rly funny way to do things
      heroImages: z
        .record(
          z.string(),
          image().refine((img) => img.width >= 200, {
            message: "Cover image gotta be 300 pixels wide you goober",
          })
        )
        .optional(),
      tags: z.array(z.string()).optional(),
      archive: z.boolean().default(false),
      colors: z
        .object({
          bg: z.string().default("#FFF0F8"),
          fg: z.string().default("#DE1120"),
        })
        .default({
          bg: "#FFF0F8",
          fg: "#DE1120",
        }),
    }),
});

export const collections = { work, play };
