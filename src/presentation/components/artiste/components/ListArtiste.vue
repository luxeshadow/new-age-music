<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Fonts } from '@/assets/fonts/app_fonts'
import { Colors } from '@/assets/colors/app_colors'
import SplitText from '../../../bits_components/SplitText/SplitText.vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

interface Artiste {
  name: string
  image: string
  description: string
  link: string
  icon: string
}

const artistes: Artiste[] = [
  {
    name: 'LE MARQUIS DE PETIT PAYS',
    image: 'https://i.postimg.cc/xjX03rSV/photo-acceuil-Etienne-N-Parish.avif',
    description:
      'Chanteur de charme aux sonorités envoûtantes mêlant Makossa, Merengue, Afro Zouk et Rumba congolaise.',
    link: 'https://bfan.link/orchidee-1',
    icon: 'fi-rr-music-alt',
  },
  {
    name: 'MERVEILLE N',
    image: 'https://i.postimg.cc/xjX03rSV/photo-acceuil-Etienne-N-Parish.avif',
    description:
      'À seulement 15 ans, elle s’impose comme une figure montante du gospel international.',
    link: 'https://bfan.link/wo-de-ling-hun-ke-wang',
    icon: 'fi-rr-music-alt',
  },
  {
    name: 'DUCHELLE',
    image: 'https://i.postimg.cc/xjX03rSV/photo-acceuil-Etienne-N-Parish.avif',
    description:
      'Une voix lumineuse mise aujourd’hui au service du Seigneur avec foi et excellence.',
    link: 'https://bfan.link/espoir-en-christ',
    icon: 'fi-rr-music-alt',
  },
]
</script>

<template>
  <section ref="sectionRef" class="bg-white transition-all duration-1000 px-4 sm:px-6 md:px-12 lg:px-24 py-14 sm:py-16 md:py-20 lg:py-10
    " :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
    <!-- TITRE -->
    <div class="flex justify-center">
      <SplitText text="Nos Artistes" class-name="text-6xl sm:text-5xl md:text-5xl font-bold mb-4"
        :style="{ fontFamily: Fonts.heading, color: Colors.primary }" :delay="100" :duration="0.6" ease="power3.out"
        split-type="chars" :from="{ opacity: 0, y: 40 }" :to="{ opacity: 1, y: 0 }" :threshold="0.1"
        root-margin="-100px" text-align="center" @animation-complete="handleAnimationComplete" />
    </div>



    <!-- PETIT TEXTE -->
    <p class="mt-4 mb-10 text-sm sm:text-base text-center max-w-2xl mx-auto"
      :style="{ fontFamily: Fonts.body, color: Colors.textSecondary }">
      Des voix inspirées, des talents authentiques et une vision musicale
      portée par la foi, l’excellence et l’émotion.
    </p>

    <!-- GRID -->
    <div class="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <div v-for="(artiste, index) in artistes" :key="index"
        class="bg-gray-50 rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-xl transition">
        <img :src="artiste.image" :alt="artiste.name"
          class="w-full h-56 sm:h-60 md:h-64 object-cover rounded-xl mb-5" />

        <h3 class="text-lg sm:text-xl font-bold mb-2" :style="{ fontFamily: Fonts.heading, color: Colors.textPrimary }">
          {{ artiste.name }}
        </h3>

        <p class="text-sm leading-relaxed mb-4" :style="{ fontFamily: Fonts.body, color: Colors.textSecondary }">
          {{ artiste.description }}
        </p>

        <a :href="artiste.link" target="_blank"
          class="flex items-center gap-2 text-sm font-semibold mb-4 hover:opacity-80 transition"
          :style="{ color: Colors.secondary }">
          <i :class="['fi', artiste.icon]"></i>
          <span>Écouter le projet</span>
        </a>

        <button class="px-5 py-2 rounded-full text-white text-sm font-medium transition hover:scale-105"
          :style="{ backgroundColor: Colors.primary }">
          Suivre l’artiste
        </button>
      </div>
    </div>
  </section>
</template>
