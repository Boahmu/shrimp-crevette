<script setup lang="ts">

defineProps({
  title: String,
  description: String,
  image: String,
  date: String,
  author: String,
  tags: Array,
  path: String,

})
</script>

<template>
  <NuxtLink
      :to="path"
      class=" w-[95%] sm:w-[45%] md:w-[45%] lg:w-[31%] xl:w-[31%] 2xl:w-[31%] bg-white rounded-3xl shadow hover:shadow-lg transition overflow-hidden group">
    <img
        :src="image" alt="Crevettes Red Cherry"
        class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
    <div class="p-5 space-y-3">
      <h3 class="text-lg font-bold"> {{ title }} </h3>
      <div class="flex flex-wrap gap-2 text-xs font-medium">
        <span v-for="(tag, index) in tags" :key="index" class="px-2 py-0.5 rounded-full text-white bg-emerald-500/80">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-gray-600"> {{ description }} </p>
      <p class="text-xs text-gray-400">Publié le {{ date }} par {{ author }}</p>

    </div>
  </NuxtLink>
</template>

<style scoped>

</style>