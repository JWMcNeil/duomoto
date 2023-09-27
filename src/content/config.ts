import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    author: z.string(),
    image: image().optional().or(z.literal('')),
    imageAlt: z.string(),
    share: z.object({
      title: z.string(),
      description: z.string(),
      authorImage: image().optional().or(z.literal('')),
      socialLink: z.string().optional(),
    }),
    }),
  })


export const collections = {
  posts: postsCollection,
};

// check author image, as it shoudl be optional yet it deosnt seam to be!