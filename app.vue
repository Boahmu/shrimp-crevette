<template>
  <main class="flex flex-col min-h-screen bg-zinc-200">
    <NuxtLoadingIndicator :height="2" :throttle="0" color="#00c951"/>
    <AppHeader/>
    <NuxtRouteAnnouncer/>
    <NuxtPage class="flex-grow"/>
    <button @click="console.log('test2')"> Switch Mode</button>

    <AppFooter/>
  </main>

</template>

<script setup lang="ts">

import AppHeader from "~/components/AppHeader.vue";
</script>

<style>
div {
  font-family: Public Sans, sans-serif;
}
</style>