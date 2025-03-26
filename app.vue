<template>
  <UApp class="bg-neutral-400 dark:bg-gray-800 transition-colors duration-500">
    <NuxtRouteAnnouncer />
    <NuxtPage class="text-cyan-950 dark:text-white" />
  <UButton @click="isDark = !isDark"> Switch Mode</UButton>
  </UApp>
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