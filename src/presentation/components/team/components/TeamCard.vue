<template>
  <div
    class="group relative cursor-pointer"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  >
    <!-- Card Container -->
    <div
      class="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      :class="[
        active ? 'ring-4 ring-offset-2 ring-blue-500/30' : '',
        'hover:scale-[1.02]'
      ]"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      </div>

      <!-- Photo Container with Parallax Effect -->
      <div class="relative h-64 md:h-72 overflow-hidden">
        <img
          :src="member.photo"
          :alt="member.name"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        <!-- Social Media Icons -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          <SocialIcon
            v-for="social in socialLinks"
            :key="social.platform"
            :platform="social.platform"
            :url="social.url"
            :active="active"
          />
        </div>

        <!-- Skill Tags -->
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          <span
            v-for="(skill, idx) in member.skills || []"
            :key="idx"
            class="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-black/40 border border-white/20"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 md:p-8">
        <!-- Name with Underline Effect -->
        <div class="mb-3">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-1" :style="{ fontFamily: Fonts.heading }">
            {{ member.name }}
            <span class="block h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 mt-2"></span>
          </h3>
        </div>

        <!-- Role with Gradient -->
        <p class="text-sm md:text-base font-semibold mb-4">
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {{ member.role }}
          </span>
        </p>

        <!-- Description -->
        <p
          v-if="member.description"
          class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
        >
          {{ member.description }}
        </p>

        <!-- View Profile Button -->
        <div class="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            class="w-full py-3 px-4 text-sm font-semibold rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-700 border border-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Voir le profil complet</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500 to-purple-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SocialIcon from './SocialIcon.vue'
import { Fonts } from '@/assets/fonts/app_fonts'

interface Props {
  member: {
    photo: string;
    name: string;
    role: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    description?: string;
    skills?: string[];
  }
  index: number
  active?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['mouseenter', 'mouseleave'])

const socialLinks = computed(() => {
  const links = []
  if (props.member.facebook) links.push({ platform: 'facebook', url: props.member.facebook })
  if (props.member.twitter) links.push({ platform: 'twitter', url: props.member.twitter })
  if (props.member.linkedin) links.push({ platform: 'linkedin', url: props.member.linkedin })
  if (props.member.instagram) links.push({ platform: 'instagram', url: props.member.instagram })
  return links
})
</script>