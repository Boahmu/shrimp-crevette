<script setup lang="ts">
</script>

<template>
  <footer class="bg-zinc-900/90 bottom-0 backdrop-blur-xs border border-t-green-500">
    <div
        class="flex flex-col  gap-6 p-4 text-zinc-100 md:flex-row md:flex-wrap justify-center">

      <div class="mt-4 text-center min-w-90">
        <h2 class="text-lg font-bold">Retrouve-nous sur les réseaux sociaux !</h2>
        <div class="flex justify-center gap-6 mt-3">
          <Icon name="logos:facebook" size="36"/>
          <Icon name="skill-icons:instagram" size="36"/>
          <Icon name="skill-icons:discord" size="36"/>
        </div>

      </div>


      <div class="mt-4 text-center min-w-90">
        <h2 class="text-lg font-bold">Navigation rapide</h2>
        <nav class="flex justify-center gap-6">
          <NuxtLink class="hover:text-green-500" to="/">Accueil</NuxtLink>
          <NuxtLink class="hover:text-green-500" to="/guide">Guide</NuxtLink>
          <NuxtLink class="hover:text-green-500" to="/blog">Blog</NuxtLink>
          <NuxtLink class="hover:text-green-500" to="/about">A propos</NuxtLink>
        </nav>
      </div>

      <div class="mt-4 text-center min-w-90">
        <h2 class="text-lg font-bold">Inscris-toi à notre newsletter !</h2>
        <form class="flex justify-center mt-3">
          <input type="text" placeholder="Email" class="p-2 rounded bg-zinc-800 text-zinc-100 min-w-60">
          <button type="submit" class="p-2 rounded bg-green-500 text-zinc-100 hover:bg-green-600">Ok</button>
        </form>
      </div>

      <div class="mt-4 text-center md:w-full">
        <h2 class="text-lg font-bold">Contact nous !</h2>
        <a href="mailto:contact@shrimp-crevette.com" class="text-green-500 hover:text-green-600">contact@shrimp-crevette.com</a>
      </div>
    </div>


    <div class="text-center p-4 text-zinc-100">
      &copy; Shrimp Crevette - Made with
      <Icon name="mdi:heart" class="text-green-500"/>
    </div>
  </footer>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>