<template>
  <div class="bg-neutral-400 dark:bg-gray-800 transition-colors duration-500">
    <NuxtRouteAnnouncer />
    <NuxtPage class="text-cyan-950 dark:text-white" />
    <button @click="isDark = !isDark"> ICI</button>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style>
div {
  font-family: Roboto Slab, sans-serif;
}
</style>