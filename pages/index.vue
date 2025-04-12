<template>
  <section class="text-gray-800">
    <div class="container mx-auto max-w-7xl px-4 py-12 space-y-20">
      <HomeHero class="animate-fade-in"/>
      <HomeGuides/>
      <HomeArticles/>
      <HomeCommunityCTA/>
    </div>
  </section>
</template>

<script setup lang="ts">

useHead({
  title: "Shrimp Crevette - Guides & actu des crevettes d’aquarium",
  meta: [
    {
      name: "description",
      content: "Découvrez Shrimp Crevette, site francophone dédié aux crevettes d’eau douce. Guides, fiches, articles récents et retours d’expérience autour des Caridinas, Neocaridinas et plus.",
    },
  ],
})
</script>s

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}
</style>