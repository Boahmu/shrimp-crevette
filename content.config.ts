// content/content.config.ts
// content/config.ts
import {defineCollection, defineContentConfig, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            type: 'page',
            schema: z.object({
                image: z.string().editor({input: 'media'}),
                author: z.string(),
                date: z.string().date(),
                tags: z.array(z.string())
            })
        }),
        guide: defineCollection({
            source: 'guide/*.md',
            type: 'page',
            // Define custom schema for docs collection

        })
    }
})