//  !!! THIS IS NOT MY CODE 


import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};