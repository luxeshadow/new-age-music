<template>
  <section class="relative w-full py-14 md:py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-30 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-30 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16 md:mb-20">
        <!-- Animated badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 mb-6">
          <span class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></span>
          <span class="text-sm font-medium text-blue-700" :style="{ fontFamily: Fonts.heading }">Notre Équipe</span>
        </div>

        <!-- Animated Title -->
        <SplitText 
          text="Les Artisans de Votre Succès"
          class-name="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          :style="{ fontFamily: Fonts.heading, color: Colors.primary }"
          :delay="50"
          :duration="0.8"
          ease="power4.out"
          split-type="words"
          stagger="0.1"
          :from="{ opacity: 0, y: 60, rotateX: -45 }"
          :to="{ opacity: 1, y: 0, rotateX: 0 }"
          text-align="center"
        />

        <!-- Subtitle with gradient -->
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            Découvrez les talents passionnés
          </span>
          qui donnent vie à chaque projet chez NEW AGE MUSIC ENTERTAINMENT
        </p>

        <!-- Decorative line -->
        <div class="relative inline-block">
          <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          <div class="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-1 opacity-70"></div>
        </div>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <TeamCard 
          v-for="(member, index) in teamMembers"
          :key="member.name"
          :member="member"
          :index="index"
          @mouseenter="activeMember = index"
          @mouseleave="activeMember = null"
        />
      </div>

      <!-- Stats Section -->
      <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <StatCard 
          v-for="stat in stats"
          :key="stat.label"
          :stat="stat"
        />
      </div>

      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SplitText from '../../../bits_components/SplitText/SplitText.vue'
import TeamCard from './TeamCard.vue'
import StatCard from './StatCard.vue'
import { Fonts } from '@/assets/fonts/app_fonts'
import { Colors } from '@/assets/colors/app_colors'

interface TeamMember {
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

const activeMember = ref<number | null>(null)

const teamMembers: TeamMember[] = [
  {
    photo: "https://i.postimg.cc/Dz45ndWq/ABACA-810874-017-768x512.jpg",
    name: "Etienne N. PARISH",
    role: "Fondateur et PDG",
    description: "Expert en ingénierie sonore avec 15+ ans d'expérience dans l'industrie musicale",
    skills: ["Production", "Management", "Stratégie"],
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    photo: "https://i.postimg.cc/wB9TdFbz/video-img.jpg",
    name: "Alain FABIEN",
    role: "Conseiller en Stratégies",
    description: "Spécialiste en développement commercial et stratégies de marché",
    skills: ["Stratégie", "Business Dev", "Marketing"],
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    photo: "https://i.postimg.cc/xjX03rSV/photo-acceuil-Etienne-N-Parish.avif",
    name: "Lee One T",
    role: "Directeur Artistique",
    description: "Créateur visionnaire avec un œil pour les tendances émergentes",
    skills: ["Direction Artistique", "Design", "Innovation"],
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
]

const stats = [
  { value: "15+", label: "Années d'expérience", suffix: "", icon: "https://i.postimg.cc/0yMMvBDm/award.png" },
  { value: "200+", label: "Projets réalisés", suffix: "", icon: "https://i.postimg.cc/0yMMvBDm/award.png" },
  { value: "50+", label: "Artistes accompagnés", suffix: "", icon: "https://i.postimg.cc/0yMMvBDm/award.png" },
  { value: "100%", label: "Satisfaction client", suffix: "", icon: "https://i.postimg.cc/0yMMvBDm/award.png" },
]
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

.shimmer-text {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  background-size: 200% 100%;
  animation: shimmer 3s infinite;
}

/* Glass effect */
.glass-effect {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Gradient border animation */
.gradient-border {
  position: relative;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(45deg, #3b82f6, #8b5cf6) border-box;
  border: 2px solid transparent;
}
</style>