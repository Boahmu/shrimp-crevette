<script setup>
const {data: pages} = await useAsyncData(() =>
    queryCollection('*').select('path', 'title').all()
)
</script>

<template>
  <div class="p-8">
    <h1 class="text-xl font-bold mb-4">Guides trouvés :</h1>
    <ul>
      <li v-for="p in pages" :key="p.path">
        <NuxtLink :to="p.path">{{ p.title }} ({{ p.path }})</NuxtLink>
      </li>
    </ul>
  </div>
</template>