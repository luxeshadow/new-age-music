<template>
  <section class="relative min-h-screen py-10 bg-gray-50 overflow-hidden">

    <!-- SplashCursor en fond -->
    <SplashCursor
  class="fixed inset-0 z-0 pointer-events-none"
  :SIM_RESOLUTION="128"
  :DYE_RESOLUTION="1440"
  :CAPTURE_RESOLUTION="512"
  :DENSITY_DISSIPATION="3.5"
  :VELOCITY_DISSIPATION="2"
  :PRESSURE="0.1"
  :PRESSURE_ITERATIONS="20"
  :CURL="3"
  :SPLAT_RADIUS="0.2"
  :SPLAT_FORCE="6000"
  :SHADING="true"
  :COLOR_UPDATE_SPEED="10"
  :BACK_COLOR="{ r: 30/255, g: 58/255, b: 138/255 }"
  :TRANSPARENT="true"
/>


    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
      <!-- En-tête avec animation -->
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <div class="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <h2 class="text-6xl md:text-5xl font-bold mb-3 tracking-tight"
          :style="{ fontFamily: Fonts.heading, color: Colors.primary }">
          <SplitText :text="'Nos Prestations'" :delay="100" />
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mb-3 mx-auto" :style="{ fontFamily: Fonts.body }">
          Des solutions complètes pour vos projets créatifs et administratifs
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <PrestationCard title="MUSIQUE" image="https://i.postimg.cc/pTMtGRNX/6363baf3bf870a217c7597e97916a62f.jpg" :items="musicPrestations"
          color="from-blue-500 to-indigo-600" icon="fi fi-rr-music-alt" />

        <!-- Carte PHOTO, VIDEO ET CINEMA -->
        <PrestationCard title="PHOTO, VIDEO ET CINEMA" image="https://i.postimg.cc/Y9PCqTZX/686b09da4134960e97299627b6841cf6.jpg"
          :items="mediaPrestations" color="from-purple-500 to-pink-600" icon="fi fi-rr-clapperboard-play" />

        <!-- Carte TRANSACTIONS -->
        <PrestationCard title="TRANSACTIONS" image="https://i.postimg.cc/9MHj8C3f/9f59c71fc721daefe112db1a74557854.jpg"
          :items="transactionPrestations" color="from-green-500 to-teal-600" icon="fi fi-rr-time-twenty-four" />


      </div>


    </div>
  </section>
</template>

<script setup lang="ts">
import SplashCursor from "../../../bits_components/SplashCursor/SplashCursor.vue";
import SplitText from '../../../bits_components/SplitText/SplitText.vue';
import PrestationCard from './PrestationCard.vue';
import { ref } from 'vue';
import { Fonts } from '@/assets/fonts/app_fonts'
import { Colors } from '@/assets/colors/app_colors'

const musicPrestations = ref([
  "Label et Management",
  "Production MAO et Studio Son Multipistes",
  "Edition et Distribution",
  "Adhésion aux Droits d'Auteurs",
  "Plates-formes de Streaming",
  "Duplic CD, DVD, Clefs USB, Cartes Mémoires",
  "Démarches auprès des Médias",
  "Conseils et Formations"
]);

const mediaPrestations = ref([
  "Shooting Photo et Agrandissements",
  "Mariages, Anniversaires, Céminaires, etc",
  "Clips, Films, Pubs",
  "Montages vidéo, SFX, Etalonnage",
  "Assistance en Post-Production",
  "Duplic DVD, Clefs USB, Cartes Mémoires",
  "Illustration de différents contrats",
  "Prospection et Repérages",
  "Conseils et Formations"
]);

const transactionPrestations = ref([
  "Facilitations pour Démarches Administratives",
  "Passport Camerounais",
  "CNI Camerounaise",
  "Opérations fiscales NIU, ACF, Etc...",
  "Montage des dossiers de voyage",
  "Création et mise à jour des sites internet",
  "Création des portails Digitaux",
  "Conseils et Formations"
]);
</script>

<style scoped>
/* Animations d'entrée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  animation: fadeInUp 0.8s ease-out;
}

/* Effet de flottement subtil */
.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>