<script setup lang="ts">
import type {BlogArticle} from "~/types/blog";


const {data: articles} = await useAsyncData<BlogArticle[]>('blog',
    () => queryCollection('blog')
        .order('date', 'DESC')
        .all())

</script>

<template class="">
  <div class="bg-white text-gray-800 py-10 rounded-3xl ">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold title-h1 mb-15">Blog</h1>
      <div class="flex flex-wrap justify-center gap-6">
        <ArticleBlog
            v-for="article in articles"
            :key="article.path"
            :title="article.title"
            :description="article.description"
            :date="article.date"
            :author="article.author"
            :path="article.path"
            :tags="article.tags"
            :image="article.image"
        />
      </div>
    </div>
  </div>
</template>