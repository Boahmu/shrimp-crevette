<script setup lang="ts">

import {ref} from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>


<template>
  <header class="bg-zinc-900/90 sticky top-0 backdrop-blur-xs">
    <div>
      <div class="flex justify-between items-center p-4 border-b-1 border-b-green-500">
        <div class="flex items-center justify-between">
          <span>
            <NuxtLink to="/" class="flex items-center space-x-2 text-green-500" @click="closeMenu">
              <Icon name="ph:shrimp-fill" size="36" class="active:text-green-700"/>
              <h1 class="text-2xl text-zinc-100 tracking-tighter active:text-green-500">Shrimp Crevette</h1>
            </NuxtLink>
          </span>
        </div>
        <div class="flex items-center justify-center space-x-2 text-green-500">
          <button
              class="flex items-center justify-center md:hidden text-zinc-100 hover:text-green-500"
              @click="toggleMenu">
            <Icon v-if="!isMenuOpen" name="ph:list" size="30" class="active:text-green-700"/>
            <Icon v-else name="gridicons:cross" size="30" class="active:text-green-700"/>
          </button>
        </div>
        <nav class="hidden md:flex md:space-x-4 text-zinc-100">
          <ul class="flex flex-col md:flex-row space-y-2 space-x-4 md:space-y-0 md:items-center">
            <li class="active:text-green-500 hover:text-zinc-400">
              <NuxtLink to="/">Accueil</NuxtLink>
            </li>
            <li class="active:text-green-500 hover:text-zinc-400">
              <NuxtLink to="/guide">Guide</NuxtLink>
            </li>
            <li class="active:text-green-500 hover:text-zinc-400">
              <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
            <li class="active:text-green-500 hover:text-zinc-400">
              <NuxtLink to="/about">A propos</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <nav
          :class="[
        {'hidden': !isMenuOpen, 'block': isMenuOpen},
        'md:hidden text-zinc-100']">
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform -translate-y-4 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-4 opacity-0"
        >
          <ul v-show="isMenuOpen" class="flex flex-col space-y-2 text-md text-center p-2 gap-1">
            <li class="p-1.5">
              <NuxtLink class="hover:text-zinc-400 active:text-green-500" to="/" @click="closeMenu">Accueil</NuxtLink>
            </li>
            <li class="p-1.5">
              <NuxtLink class="hover:text-zinc-400 active:text-green-500" to="/guide" @click="closeMenu">Guide
              </NuxtLink>
            </li>
            <li class="p-1.5">
              <NuxtLink class="hover:text-zinc-400 active:text-green-500" to="/blog" @click="closeMenu">Blog</NuxtLink>
            </li>
            <li class="p-1.5">
              <NuxtLink class="hover:text-zinc-400 active:text-green-500" to="/about" @click="closeMenu">A propos
              </NuxtLink>
            </li>
          </ul>
        </Transition>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>