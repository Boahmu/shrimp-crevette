// content/content.config.ts
// content/config.ts
import {defineCollection, defineContentConfig} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            type: 'page',
            // Define custom schema for docs collection
        }),
        guide: defineCollection({
            source: 'guide/*.md',
            type: 'page',
            // Define custom schema for docs collection
        })
    }
})