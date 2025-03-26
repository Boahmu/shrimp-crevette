<template>
  <div class="bg-neutral-400 dark:bg-old-neutral-950 relative transition-colors duration-200">
    test
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <button @click="here()"> ICI</button>
  </div>
</template>

<script setup>
function here() {
  console.log(darkMode.value)
  if(darkMode.value){
    document.documentElement.classList.add('dark');
    darkMode.value = false;
  } else {
    document.documentElement.classList.remove('dark');
    darkMode.value = true;
  }
  console.log('ICI')
}

const darkMode = ref(false);
</script>

<style>
div {
  font-family: Roboto Slab, sans-serif;
}
</style>