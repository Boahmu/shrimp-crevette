<template>
  <section class="text-zinc-900">
    <div class="container mx-auto max-w-7xl px-4 py-12 space-y-16">

      <!-- Hero section -->
      <div class="relative">
        <div class="container mx-auto max-w-4xl px-4 text-center space-y-8 animate-fade-in">
          <h1 class="text-5xl font-bold text-green-600 drop-shadow-sm">
            Shrimp Crevette
          </h1>
          <p class="text-lg text-gray-700 leading-relaxed">
            Shrimp Crevette, le site francophone des passionnés de crevettes. <br>
            Guides, conseils, retours d’expérience, actus : tout ce qu’il faut pour mieux comprendre et prendre soin de
            ces
            invertébrés fascinants. <br>
            Débutants curieux ou aquariophiles chevronnés, notre objectif est simple : rassembler, informer et faire
            vivre
            la passion.
          </p>
          <NuxtLink
              to="/blog"
              class="btn btn-hero"
          >
            Découvrir le blog
          </NuxtLink>
        </div>
      </div>

      <section class="bg-white py-12 rounded-3xl">
        <div class="container mx-auto max-w-3xl px-4 text-center space-y-6">
          <h2 class="text-2xl font-semibold text-green-700">Un site créé par passion</h2>
          <p class="text-gray-700 text-base leading-relaxed">
            Shrimp Crevette est une initiative francophone dédiée aux crevettes ornementales.
            Ce site regroupe conseils, guides et actualités pour tous les passionnés d’aquariophilie.
          </p>
          <NuxtLink
              to="/about"
              class="btn btn-outline"
          >
            En savoir plus
          </NuxtLink>
        </div>
      </section>


      <section class="bg-white py-10 rounded-3xl">
        <div class="container mx-auto max-w-5xl px-4 space-y-8">
          <h2 class="text-2xl font-semibold text-center text-green-700">Derniers articles</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
              <h3 class="text-xl font-bold text-green-600 mb-2">Bien démarrer avec les crevettes Red Cherry</h3>
              <p class="text-gray-600 text-sm mb-4">Un guide pratique pour constituer un environnement adapté et stable
                pour vos premières crevettes ornementales.</p>
              <NuxtLink to="/blog/red-cherry" class="text-green-500 hover:underline">Lire l'article →</NuxtLink>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
              <h3 class="text-xl font-bold text-green-600 mb-2">Les bases d’un bac low-tech pour crevettes</h3>
              <p class="text-gray-600 text-sm mb-4">Économique, simple et efficace : découvrez les principes d’un
                aquarium naturel sans filtration électrique.</p>
              <NuxtLink to="/blog/bac-low-tech" class="text-green-500 hover:underline">Lire l'article →</NuxtLink>
            </div>
          </div>
        </div>
      </section>


      <section class="bg-white py-10 rounded-3xl">
        <div class="container mx-auto max-w-3xl px-4 text-center">
          <NuxtLink
              to="/guides"
              class="btn btn-outline"
          >
            Voir les guides d’entretien
          </NuxtLink>
        </div>
      </section>

    </div>
  </section>
</template>

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