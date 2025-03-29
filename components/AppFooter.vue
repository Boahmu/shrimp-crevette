<script setup lang="ts">
</script>

<template>
  <footer class="bg-zinc-900/90 bottom-0 backdrop-blur-xs">
    <div class="flex justify-between items-center p-4 text-zinc-100">
      <nav class="flex space-x-4">
        <NuxtLink class="hover:text-green-500" to="/">Accueil</NuxtLink>
        <NuxtLink class="hover:text-green-500" to="/guide">Guide</NuxtLink>
        <NuxtLink class="hover:text-green-500" to="/blog">Blog</NuxtLink>
        <NuxtLink class="hover:text-green-500" to="/about">A propos</NuxtLink>
      </nav>
      <div>
        <h2 class="text-lg font-bold">Contact Me</h2>
        <form class="flex space-x-2">
          <input type="text" placeholder="Your Name" class="p-2 rounded bg-zinc-800 text-zinc-100">
          <input type="email" placeholder="Your Email" class="p-2 rounded bg-zinc-800 text-zinc-100">
          <textarea placeholder="Your Message" class="p-2 rounded bg-zinc-800 text-zinc-100"/>
          <button type="submit" class="p-2 rounded bg-green-500 text-zinc-100 hover:bg-green-600">Send</button>
        </form>
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