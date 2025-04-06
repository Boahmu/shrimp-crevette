<script lang="ts" setup>
const route = useRoute()
const {data: page} = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

console.log(page)
</script>

<template>
  <ContentRenderer :value="page"/>
</template>