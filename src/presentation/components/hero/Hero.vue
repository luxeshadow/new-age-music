<template>
  <section class="relative w-full h-[90vh]">
    <!-- Image de fond -->
    <img src="https://i.postimg.cc/xjX03rSV/photo-acceuil-Etienne-N-Parish.avif" alt="Accueil"
      class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/10"></div>

    <div class="absolute inset-0 flex flex-col justify-center items-start max-w-4xl px-6 md:px-12 lg:px-24 text-white">
      <!-- Texte qui se tape dynamiquement -->
      <TextType :text="['Gospel Musique', 'Rap Musique', 'Folk Musique', 'Musique Urbaine']" :typingSpeed="100"
        :pauseDuration="1000" :showCursor="true" cursorCharacter="|" class="text-3xl md:text-5xl font-bold mb-6" />
      <!-- Texte d'accroche -->
      <p class="text-lg md:text-xl max-w-3xl" :style="{ fontFamily: Fonts.body }">
        Entrez dans un univers où la créativité n’a pas de limite, où la musique dépasse les frontières, et où chaque
        artiste porte une vision destinée à transformer le monde.
        <span class="block mt-3">
          Notre mission : élever la musique Gospel, Rap, Folk et Urbaine à une dimension nouvelle, plus audacieuse, plus
          innovante, plus connectée.
        </span>
      </p>

    </div>
  </section>
</template>

<script setup lang="ts">

import TextType from '../../bits_components/TextType/TextType.vue'
import { Fonts } from '@/assets/fonts/app_fonts'
</script>
