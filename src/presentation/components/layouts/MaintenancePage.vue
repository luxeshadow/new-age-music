<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
    <div class="max-w-md w-full text-center space-y-8">
      
      <!-- Titre -->
      <div>
        <h1 class="text-4xl font-bold text-blue-400 mb-2">NEW AGE MUSIC</h1>
        <p class="text-gray-400 uppercase tracking-wide">ENTERTAINMENT</p>
      </div>

      <!-- Message -->
      <div>
        <h2 class="text-2xl font-bold mb-3">Site en maintenance</h2>
        <p class="text-gray-300">
          Nous travaillons sur le site pour améliorer votre expérience.
        </p>
      </div>

      <!-- Animation -->
      <div class="my-8">
        <div class="border-4 border-blue-500/30 rounded-xl p-2 bg-gray-800/50">
          <img 
            src="https://i.postimg.cc/VkPRJYhw/Expert-Appliance-Repair-Services-Your-Company-Name.gif" 
            alt="Maintenance en cours"
            class="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- Progression -->
      <div class="space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-gray-400">Progression</span>
          <span class="font-medium text-blue-400">{{ progress }}%</span>
        </div>
        <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            :style="{ width: progress + '%' }" 
            class="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          ></div>
        </div>
      </div>

      <!-- Contact -->
      <div class="pt-6 border-t border-gray-800">
        <p class="text-gray-400 text-sm mb-1">Pour toute question :</p>
        <p class="text-blue-300 font-medium">new_age_musicen@yahoo.fr</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

// Animation simple de la barre de progression
let timer
onMounted(() => {
  timer = setInterval(() => {
    if (progress.value < 85) {
      progress.value += 1
    } else {
      clearInterval(timer)
    }
  }, 100)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>