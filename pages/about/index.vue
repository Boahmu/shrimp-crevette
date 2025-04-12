<script setup lang="ts">
useHead({
  title: "À propos de Shrimp Crevette - Crevettes d’aquarium & aquariophilie",
  meta: [
    {
      name: "description",
      content:
          "Découvrez l’histoire et la mission derrière Shrimp Crevette, une plateforme francophone dédiée à l’aquariophilie et aux crevettes d’eau douce, notamment les Caridinas.",
    },
  ],
})
</script>

<template>
  <section class="bg-white text-gray-800 py-20 rounded-3xl">
    <div class="container mx-auto max-w-6xl px-4 space-y-16">

      <!-- Header -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold title-h1">À propos de Shrimp Crevette</h1>
        <p class="text-lg leading-relaxed max-w-2xl mx-auto">
          Shrimp Crevette est un site francophone dédié aux passionnés de crevettes d’aquarium d’eau douce.
          Son objectif : partager des ressources fiables, accessibles et communautaires autour des
          <strong>Caridinas</strong> et de l’aquariophilie en général.
        </p>
      </div>

      <!-- Origine personnelle -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold title-h2">Une passion née d’une histoire personnelle</h2>
        <p class="leading-relaxed">
          À l’origine de ce projet, un passionné d’aquariophilie originaire d’Alsace, bercé depuis l’enfance par l’amour
          des aquariums.
          D’un côté, un grand-père créatif, amoureux de beaux bacs plantés ; de l’autre, un oncle rigoureux, spécialisé
          dans l’élevage de poissons.
        </p>
        <p class="leading-relaxed">
          Cette double influence — esthétique et technique — a nourri une passion durable, qui s’est orientée
          progressivement vers l’univers fascinant des <strong>crevettes Caridina</strong>.
        </p>
      </div>

      <!-- Vision du projet -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold title-h2">Pourquoi un site dédié aux crevettes ?</h2>
        <p class="leading-relaxed">
          En explorant ce domaine, un constat s’est vite imposé : le manque de contenu francophone fiable et détaillé.
          Contrairement aux communautés anglophones ou germanophones, très actives, les ressources en français restent
          limitées.
        </p>
        <p class="leading-relaxed">
          C’est pour combler ce vide qu’est né Shrimp Crevette : un site pensé comme un <strong>point de repère pour
          tous les passionnés francophones</strong> d’élevage de crevettes en aquarium.
        </p>
      </div>

      <!-- Mission & valeurs -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold title-h2">Une mission : partager, transmettre et rassembler</h2>
        <p class="leading-relaxed">
          Le site a pour vocation de :
        </p>
        <ul class="list-disc list-inside leading-relaxed">
          <li>Diffuser des <strong>guides pratiques</strong> et pédagogiques sur l’élevage de crevettes d’eau douce</li>
          <li>Présenter des <strong>fiches espèces</strong> claires et actualisées</li>
          <li>Encourager le <strong>partage d’expériences</strong> entre passionnés</li>
          <li>Fédérer une <strong>communauté francophone</strong> active et bienveillante</li>
        </ul>
        <p class="leading-relaxed">
          Que vous soyez débutant curieux ou éleveur chevronné, vous êtes ici chez vous.
        </p>
      </div>

      <!-- Contribution communautaire -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold title-h2">Une plateforme collaborative</h2>
        <p class="leading-relaxed">
          Shrimp Crevette est ouvert à la contribution : articles, retours d’expérience, tutoriels ou observations
          originales…
          Toute personne désireuse de transmettre ses connaissances peut participer.
        </p>
        <a href="mailto:toto@toto.fr" class="btn btn-primary">Proposer un article</a>
        <p class="text-sm text-gray-500 pt-4">
          Vous pouvez aussi suivre les actualités du site sur Facebook :
          <a href="https://facebook.com/ADShrimp" target="_blank" class="link hover:underline">AD Shrimp</a>
        </p>
      </div>

      <!-- (optionnel) FAQ -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold title-h2">Questions fréquentes</h2>

        <details>
          <summary class="font-semibold cursor-pointer">À qui s’adresse Shrimp Crevette ?</summary>
          <p class="mt-2 leading-relaxed">
            À tous les passionnés d’aquariophilie, qu’ils soient débutants ou expérimentés, avec un intérêt particulier
            pour les crevettes d’eau douce, notamment les Caridinas.
          </p>
        </details>

        <details>
          <summary class="font-semibold cursor-pointer">Le contenu est-il gratuit ?</summary>
          <p class="mt-2 leading-relaxed">
            Oui, tous les articles, fiches et guides sont accessibles librement. Le but est de rendre l’information
            disponible au plus grand nombre.
          </p>
        </details>

        <details>
          <summary class="font-semibold cursor-pointer">Puis-je contribuer au site ?</summary>
          <p class="mt-2 leading-relaxed">
            Absolument ! Vous pouvez proposer des articles, guides ou retours d’expérience. Une section dédiée à la
            contribution communautaire est prévue.
          </p>
        </details>

        <details>
          <summary class="font-semibold cursor-pointer">Quelles espèces de crevettes sont couvertes ?</summary>
          <p class="mt-2 leading-relaxed">
            Principalement les crevettes d’eau douce comme les Caridinas, Neocaridinas, ainsi que d'autres invertébrés
            compatibles (escargots, etc.). Les fiches seront régulièrement enrichies.
          </p>
        </details>

        <details>
          <summary class="font-semibold cursor-pointer">Comment débuter avec les crevettes d’aquarium ?</summary>
          <p class="mt-2 leading-relaxed">
            Une section “Guide” est en cours de création, avec des guides pratiques sur le choix du bac, les
            paramètres de l’eau, l’acclimatation, la cohabitation, etc.
          </p>
        </details>

        <details>
          <summary class="font-semibold cursor-pointer">Puis-je poser des questions ou demander de l’aide ?</summary>
          <p class="mt-2 leading-relaxed">
            Bien sûr. Vous pouvez nous écrire ou rejoindre les discussions via les réseaux sociaux. Une section
            commentaires ou un Discord est également envisagé.
          </p>
        </details>
      </div>

    </div>
  </section>
</template>