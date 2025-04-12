<template>
  <section class="bg-white py-12 rounded-3xl">
    <div class="container mx-auto max-w-5xl px-4 space-y-8">
      <h2 class="text-2xl font-semibold title-h2 text-center">Derniers articles de blog</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
          <h3 class="text-xl font-bold title-h3 mb-2">Bien démarrer avec les crevettes Red Cherry</h3>
          <p class="text-sm mb-4">Créer un environnement stable pour les Neocaridinas, parfait pour débuter.</p>
          <NuxtLink to="/blog/red-cherry" class="link hover:underline">Lire l'article →</NuxtLink>
        </div>
        <div class="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
          <h3 class="text-xl font-bold title-h3 mb-2">Les bases d’un bac low-tech pour crevettes</h3>
          <p class="text-sm mb-4">Un aquarium sans filtre ? Oui, avec les bonnes plantes et un bon équilibre !</p>
          <NuxtLink to="/blog/bac-low-tech" class="link hover:underline">Lire l'article →</NuxtLink>
        </div>
      </div>

      <div class="text-center pt-6">
        <NuxtLink to="/blog" class="btn btn-outline">Tous les articles</NuxtLink>
      </div>
    </div>
  </section>
</template>