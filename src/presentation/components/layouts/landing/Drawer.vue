<template>
  <transition name="slide">
    <div v-if="isOpen" class="fixed inset-0 z-50 bg-black/50">
      <div class="absolute top-0 right-0 w-64 h-full bg-background shadow-lg p-6 flex flex-col">
        <button @click="close" class="self-end mb-4 text-2xl font-bold">&times;</button>
        <ul class="flex flex-col gap-6 mt-4">
          <li
            v-for="item in menuItems"
            :key="item"
            class="cursor-pointer text-lg font-semibold text-textPrimary hover:text-primary"
            @click="close"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const menuItems = ['À propos', 'Nos prestations', 'Contact']

function close() {
  emit('close')
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
