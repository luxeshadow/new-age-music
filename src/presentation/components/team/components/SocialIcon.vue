<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="w-10 h-10 rounded-full flex items-center justify-center
           bg-white/90 backdrop-blur-md shadow-md
           hover:scale-110 transition-all duration-300"
    :class="active ? 'ring-2 ring-blue-500' : ''"
  >
    <img
      :src="icon"
      :alt="platform"
      class="w-5 h-5 object-contain"
    />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
  url: string
  active?: boolean
}

const props = defineProps<Props>()

/**
 * 👉 CSV LOGIQUE DES ICÔNES
 * (tu peux changer les URLs sans toucher au composant)
 */
const ICONS: Record<Props['platform'], string> = {
  facebook: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg',
  twitter: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg',
  linkedin: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg',
  instagram: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg',
}

const icon = computed(() => ICONS[props.platform])
</script>
