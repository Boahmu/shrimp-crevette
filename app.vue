<template>
  <NuxtLoadingIndicator :height="2" :throttle="0" color="#00c951"/>

  <AppHeader/>

  <div class="flex flex-col min-h-screen bg-green-100">
    <!-- Contenu principal qui pousse le footer -->
    <div class="flex-grow container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <NuxtRouteAnnouncer/>
      <NuxtPage/>
    </div>

    <!-- Footer collé en bas s’il y a peu de contenu -->
    <AppFooter/>

  </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
</script>

<style scoped>
div, header, main, footer {
  font-family: 'Public Sans', sans-serif;
}
</style>