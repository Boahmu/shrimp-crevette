<template>
  <section class="bg-white py-12 rounded-3xl">
    <div class="container mx-auto max-w-6xl px-4 space-y-10">
      <h2 class="text-2xl font-semibold title-h2 text-center">Derniers articles de blog</h2>
      <p class="text-center text-base text-gray-600 max-w-2xl mx-auto">
        Retrouvez ici nos derniers articles publiés autour de l’aquariophilie, des crevettes ornementales et des bonnes
        pratiques pour leur entretien.
      </p>

      <div class="flex flex-wrap justify-center gap-6">
        <!-- Article 1 -->
        <NuxtLink
            to="/blog/red-cherry"
            class="w-full md:w-[48%] lg:w-[30%] bg-white rounded-3xl shadow hover:shadow-lg transition overflow-hidden group">
          <img
              src="/img/placeholder.jpg" alt="Crevettes Red Cherry"
              class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
          <div class="p-5 space-y-3">
            <h3 class="text-lg font-bold">Bien démarrer avec les crevettes Red Cherry</h3>
            <div class="flex flex-wrap gap-2 text-xs font-medium">
              <span class="px-2 py-0.5 rounded-full text-white bg-emerald-500/80">Neocaridina</span>
              <span class="px-2 py-0.5 rounded-full text-white bg-indigo-500/80">Débutant</span>
            </div>
            <p class="text-sm text-gray-600">Un guide pratique pour créer un environnement stable et adapté aux
              Neocaridinas.</p>
            <p class="text-xs text-gray-400">Publié le 25 mars 2025</p>
          </div>
        </NuxtLink>

        <!-- Article 2 -->
        <NuxtLink
            to="/blog/bac-low-tech"
            class="w-full md:w-[48%] lg:w-[30%] bg-white rounded-3xl shadow hover:shadow-lg transition overflow-hidden group">
          <img
              src="/img/placeholder.jpg" alt="Bac low-tech pour crevettes"
              class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
          <div class="p-5 space-y-3">
            <h3 class="text-lg font-bold">Les bases d’un bac low-tech pour crevettes</h3>
            <div class="flex flex-wrap gap-2 text-xs font-medium">
              <span class="px-2 py-0.5 rounded-full text-white bg-blue-500/80">Technique</span>
              <span class="px-2 py-0.5 rounded-full text-white bg-teal-500/80">Low-tech</span>
            </div>
            <p class="text-sm text-gray-600">Économique et naturel : un aquarium équilibré sans filtre mécanique.</p>
            <p class="text-xs text-gray-400">Publié le 18 mars 2025</p>
          </div>
        </NuxtLink>

        <!-- Article 3 -->
        <NuxtLink
            to="/blog/cohabitation"
            class="w-full md:w-[48%] lg:w-[30%] bg-white rounded-3xl shadow hover:shadow-lg transition overflow-hidden group">
          <img
              src="/img/placeholder.jpg" alt="Cohabitation crevettes"
              class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
          <div class="p-5 space-y-3">
            <h3 class="text-lg font-bold">Cohabitation : crevettes et autres espèces</h3>
            <div class="flex flex-wrap gap-2 text-xs font-medium">
              <span class="px-2 py-0.5 rounded-full text-white bg-rose-500/80">Conseils</span>
              <span class="px-2 py-0.5 rounded-full text-white bg-orange-500/80">Compatibilité</span>
            </div>
            <p class="text-sm text-gray-600">Quelles espèces peuvent vivre avec vos crevettes ? Les erreurs à éviter et
              les meilleures cohabitations.</p>
            <p class="text-xs text-gray-400">Publié le 10 mars 2025</p>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center pt-6">
        <NuxtLink to="/blog" class="btn btn-outline">Tous les articles</NuxtLink>
      </div>
    </div>
  </section>
</template>