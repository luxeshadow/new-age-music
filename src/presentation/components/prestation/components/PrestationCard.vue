<template>
  <div
    class="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <!-- Image de fond avec effet parallax -->
    <div class="absolute inset-0 transition-transform duration-700 group-hover:scale-110" :style="{
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"></div>

    <!-- Overlay gradient -->
    <div class="absolute inset-0 transition-all duration-500" :class="[
      isHovered ? 'bg-gradient-to-t from-black via-black/80 to-transparent' : 'bg-gradient-to-t from-black/90 via-black/70 to-black/40'
    ]"></div>

    <!-- Icone -->
    <!-- Icône -->
    <div class="absolute top-6 right-6 w-14 h-14 rounded-full backdrop-blur-sm bg-white/20
         flex items-center justify-center text-2xl text-white
         transform transition-all duration-500
         group-hover:scale-110 group-hover:rotate-12">
      <i :class="props.icon"></i>
    </div>


    <!-- Contenu -->
    <div class="relative h-full flex flex-col justify-end p-8">
      <!-- Titre -->
      <h3 class="text-3xl font-bold mb-4 text-white relative" :style="{ fontFamily: Fonts.heading }">
        <span class="relative inline-block">
          {{ props.title }}
          <span
            class="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"
            :class="`bg-gradient-to-r ${props.color}`"></span>
        </span>
      </h3>

      <!-- Liste des services -->
      <ul class="space-y-2 mb-6 max-h-0 group-hover:max-h-64 overflow-hidden transition-all duration-700 ease-in-out">
        <li v-for="(item, index) in props.items" :key="index"
          class="text-white/90 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
          :style="{
            transitionDelay: `${index * 50 + 300}ms`,
            fontFamily: Fonts.body
          }">
          <svg class="w-4 h-4 flex-shrink-0" :class="`text-${props.color.split('-')[1]}-400`" fill="currentColor"
            viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
          <span>{{ item }}</span>
        </li>
      </ul>

      <!-- Bouton d'action -->
      <div
        class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-500">
        <button class="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
          :class="`bg-gradient-to-r ${props.color} hover:opacity-90`" :style="{ fontFamily: Fonts.heading }">
          En savoir plus
        </button>
      </div>
    </div>

    <!-- Effet de bordure gradient -->
    <div
      class="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-white/20 transition-all duration-500">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Fonts } from '@/assets/fonts/app_fonts'

const props = defineProps<{
  title: string;
  image: string;
  items: string[];
  color: string;
  icon: string;
}>();

const isHovered = ref(false);
</script>