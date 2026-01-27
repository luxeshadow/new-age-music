<template>
 <nav
  class="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 shadow-sm"
  :class="[
    scrolled ? 'py-3' : 'py-5',
    drawerOpen ? 'backdrop-blur-none' : 'backdrop-blur-xl'
  ]"
>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

      <!-- Logo Section -->
      <div class="flex items-center gap-3">
        <!-- Logo Container -->
        <div class="relative group">
          <div
            class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center border border-blue-100 shadow-md group-hover:shadow-lg transition-shadow duration-300">
            <img src="https://i.postimg.cc/P5BmRF2F/e88a1f50d050f65f2ef311d0d5ec1846-removebg-preview.png"
              alt="New Age Music Logo"
              class="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110" />

          </div>
          <!-- Hover ring effect -->
          <div
            class="absolute -inset-2 rounded-xl border border-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          </div>
        </div>

        <!-- Company Name -->
        <div class="hidden sm:block">
          <GradientText text="NEW AGE MUSIC" :colors="['#1E3A8A', '#3B82F6', '#1E40AF']" :animation-speed="7"
            :show-border="false" class-name="text-lg font-bold tracking-tight bg-clip-text text-transparent"
            :font-family="Fonts.heading" />

          <GradientText text="ENTERTAINMENT" :colors="['#3B82F6', '#1E40AF', '#1E3A8A']" :animation-speed="7"
            :show-border="false"
            class-name="text-xs font-semibold tracking-wider opacity-80 bg-clip-text text-transparent"
            :font-family="Fonts.heading" />

        </div>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <!-- Navigation Items -->
        <div v-for="item in navItems" :key="item.label" class="relative group">
          <button @click="item.subItems ? null : handleNavClick(item)"
            class="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            :style="{ fontFamily: Fonts.body }">
            <span>{{ item.label }}</span>
            <i v-if="item.subItems"
              class="fi fi-rr-angle-small-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
          </button>

          <!-- Active Indicator -->
          <div v-if="activeItem === item.label"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"></div>

          <!-- Dropdown Menu -->
          <div v-if="item.subItems"
            class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
            <div class="p-2">
              <div v-for="subItem in item.subItems" :key="subItem"
                class="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 cursor-pointer flex items-center gap-3 group/subitem"
                @click="handleNavClick(item)">
                <div
                  class="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/subitem:bg-blue-500 transition-colors duration-300">
                </div>
                <span class="flex-1">{{ subItem }}</span>
                <i
                  class="fi fi-rr-arrow-small-right text-xs opacity-0 group-hover/subitem:opacity-100 transition-opacity duration-300"></i>
              </div>
            </div>

            <!-- Dropdown Footer -->
            <div class="border-t border-gray-100 p-2">
              <button
                class="w-full px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                @click="handleNavClick(item)">
                Voir tous →
              </button>
            </div>
          </div>
        </div>

        <!-- Contact Button -->
        <button
          class="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          :style="{ fontFamily: Fonts.heading }" @click="scrollToContact">
          Contact
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="drawerOpen = true"
        class="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
        aria-label="Ouvrir le menu">
        <div class="relative w-6 h-6">
          <span class="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300"></span>
          <span
            class="absolute top-1/2 left-0 w-6 h-0.5 bg-current rounded-full -translate-y-1/2 transition-all duration-300"></span>
          <span class="absolute bottom-1 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300"></span>
        </div>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="drawerOpen" class="fixed inset-0 z-50 lg:hidden">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/30 backdrop-blur-sm" @click="drawerOpen = false"></div>

      <!-- Drawer Content -->
      <div class="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300">
        <!-- Drawer Header -->
        <div class="p-6 border-b border-gray-100">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <span
                  class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  N
                </span>
              </div>
              <div>
                <div class="font-bold text-gray-900" :style="{ fontFamily: Fonts.heading }">
                  NEW AGE MUSIC
                </div>
                <div class="text-xs text-gray-500 font-medium">
                  ENTERTAINMENT
                </div>
              </div>
            </div>
            <button @click="drawerOpen = false" class="p-2 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Fermer le menu">
              <i class="fi fi-rr-cross text-lg"></i>
            </button>
          </div>
        </div>

        <!-- Drawer Menu -->
        <div class="p-4">
          <div v-for="item in navItems" :key="item.label" class="mb-1">
            <button @click="toggleMobileItem(item.label)"
              class="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              :style="{ fontFamily: Fonts.body }">
              <span class="font-medium">{{ item.label }}</span>
              <i v-if="item.subItems" class="fi fi-rr-angle-small-down text-sm transition-transform duration-300"
                :class="{ 'rotate-180': openMobileItem === item.label }"></i>
            </button>

            <!-- Mobile Submenu -->
            <div v-if="item.subItems && openMobileItem === item.label" class="pl-8 mt-1 space-y-1">
              <div v-for="subItem in item.subItems" :key="subItem"
                class="px-4 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300 cursor-pointer"
                @click="handleMobileNavClick(item, subItem)">
                {{ subItem }}
              </div>
            </div>
          </div>

          <!-- Mobile Contact Button -->
          <div class="mt-6 p-4">
            <button
              class="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              :style="{ fontFamily: Fonts.heading }" @click="scrollToContact">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GradientText from '../../../bits_components/GradientText/GradientText.vue'
import { Fonts } from '@/assets/fonts/app_fonts'

const drawerOpen = ref(false)
const scrolled = ref(false)
const activeItem = ref('À PROPOS')
const openMobileItem = ref<string | null>(null)

const navItems = [
  {
    label: 'À PROPOS',
    action: () => scrollToSection('about')
  },
  {
    label: 'A LA UNE',
    subItems: ['Artistes', 'Gospel', 'Universels', 'Films et Séries', 'Folk et Spirituel']
  },
  {
    label: 'NOS PRESTATIONS',
    subItems: ['Musique', 'Vidéo', 'Événementiel', 'Facilitations Administratives', 'Voyages']
  }

]

const handleNavClick = (item: any) => {
  if (item.action) {
    item.action()
  }
  activeItem.value = item.label
}

const handleMobileNavClick = (item: any, subItem: string) => {
  activeItem.value = item.label
  drawerOpen.value = false
  console.log(`Naviguer vers: ${item.label} > ${subItem}`)
  // Ici vous pouvez ajouter votre logique de navigation
}

const toggleMobileItem = (label: string) => {
  const item = navItems.find(i => i.label === label)
  if (item?.subItems) {
    openMobileItem.value = openMobileItem.value === label ? null : label
  } else if (item?.action) {
    item.action()
    drawerOpen.value = false
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  scrollToSection('contact')
  drawerOpen.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Smooth transitions */
nav,
button,
div {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Hide scrollbar for mobile drawer */
::-webkit-scrollbar {
  display: none;
}

/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ensure dropdowns appear above other content */
:deep(.gradient-text) {
  background-size: 200% auto;
}

/* Hover effects for better UX */
button:hover {
  transform: translateY(-1px);
}

/* Active state styling */
.bg-blue-50 {
  background-color: rgba(59, 130, 246, 0.05);
}

/* Focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

/* Smooth backdrop blur */
.backdrop-blur-xl {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>