<script setup lang="ts">

</script>

<template>
  <section class="bg-white py-12 rounded-3xl">
    <div class="max-w-6xl mx-auto px-4 space-y-10">
      <h2 class="text-2xl font-semibold title-h2 text-center">Guides par type de crevette</h2>
      <p class="text-center text-base text-gray-600 max-w-2xl mx-auto">
        Avant de choisir une espèce ou un bac spécifique, découvrez les grandes familles de crevettes d’eau douce :
        <strong>Caridina</strong>, <strong>Neocaridina</strong>, <strong>Japonica (Amano)</strong> et
        <strong>Sulawesi</strong>.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        <!-- Caridina -->
        <div
            class="relative block bg-white rounded-3xl shadow-xl transition overflow-hidden transform hover:-translate-y-1 duration-300 cursor-not-allowed opacity-60">
          <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            Bientôt
            disponible
          </div>
          <div class="group">
            <img
                src="/img/guides/caridina.jpg" alt="Caridina"
                class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-bold">Guide des Caridinas</h3>
              <p class="text-sm text-gray-600">Sensibles aux paramètres et souvent élevées sur sol technique, les
                Caridinas séduisent les passionnés à la recherche de défis et de sélections génétiques.</p>
            </div>
          </div>
        </div>

        <!-- Neocaridina -->
        <div
            class="relative block bg-white rounded-3xl shadow-xl transition overflow-hidden transform hover:-translate-y-1 duration-300 cursor-not-allowed opacity-60">
          <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            Bientôt
            disponible
          </div>
          <div class="group">
            <img
                src="/img/guides/neocaridina.jpg" alt="Neocaridina"
                class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-bold">Guide des Neocaridinas</h3>
              <p class="text-sm text-gray-600">Tolérantes et faciles à maintenir, les Neocaridinas offrent un large
                choix de couleurs, idéales pour les débutants comme pour les bacs communautaires.</p>
            </div>
          </div>
        </div>

        <!-- Japonica (Amano) -->
        <div
            class="relative block bg-white rounded-3xl shadow-xl transition overflow-hidden transform hover:-translate-y-1 duration-300 cursor-not-allowed opacity-60">
          <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            Bientôt
            disponible
          </div>
          <div class="group">
            <img
                src="/img/guides/amano.jpg" alt="Crevettes Japonica Amano"
                class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-bold">Guide des crevettes Japonica (Amano)</h3>
              <p class="text-sm text-gray-600">Très actives et résistantes, les crevettes Amano sont reconnues pour leur
                efficacité contre les algues et leur comportement pacifique.</p>
            </div>
          </div>
        </div>

        <!-- Sulawesi -->
        <div
            class="relative block bg-white rounded-3xl shadow-xl transition overflow-hidden transform hover:-translate-y-1 duration-300 cursor-not-allowed opacity-60">
          <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            Bientôt
            disponible
          </div>
          <div class="group">
            <img
                src="/img/guides/sulawesi.jpg" alt="Crevettes Sulawesi"
                class="w-full h-40 object-cover group-hover:brightness-90 transition duration-300">
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-bold">Guide des Sulawesi</h3>
              <p class="text-sm text-gray-600">Issues des lacs indonésiens, les crevettes Sulawesi exigent une eau très
                stable et une attention particulière, mais offrent des formes et couleurs uniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>