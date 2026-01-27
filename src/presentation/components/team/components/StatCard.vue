<template>
  <div class="relative group">
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
    <div class="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50">
      
      <!-- Valeur -->
      <div class="text-3xl md:text-4xl font-bold mb-2">
        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {{ stat.value }}
        </span>
        <span v-if="stat.suffix" class="text-xl">{{ stat.suffix }}</span>
      </div>
      
      <!-- Icone -->
      <div class="flex items-center justify-center gap-2 mb-3">
        <img v-if="stat.icon" :src="stat.icon" alt="" class="w-10 h-10 object-contain" />
      </div>
      
      <!-- Label -->
      <p class="text-gray-600 font-medium" :style="{ fontFamily: Fonts.body }">
        {{ stat.label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Fonts } from '@/assets/fonts/app_fonts'

interface Props {
  stat: {
    value: string
    label: string
    suffix?: string
    icon?: string
  }
}

defineProps<Props>()
</script>
