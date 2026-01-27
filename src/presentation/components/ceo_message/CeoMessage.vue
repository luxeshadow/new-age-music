<template>
  <section class="relative w-full py-16 md:py-20 overflow-hidden">
    <!-- Fond dynamique amélioré -->
    <div class="absolute inset-0 w-full h-full">
      <LightRays
        rays-origin="top-center"
        rays-color="#3B82F6"
        :rays-speed="1.2"
        :light-spread="0.9"
        :ray-length="1.5"
        :follow-mouse="true"
        :mouse-influence="0.12"
        :noise-amount="0.08"
        :distortion="0.06"
        class-name="custom-rays"
      />
      <!-- Dégradé plus subtil avec effet de fondu -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#F5F5F5]/30 via-transparent to-[#E0F2FE]/40"></div>
      <!-- Overlay texture subtile -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6 md:px-12 lg:px-20">
      
      <!-- Section texte avec effet de profondeur -->
      <div class="flex-1 relative">
        <!-- Effet d'ombre portée subtile -->
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl rounded-4xl opacity-50"></div>
        
        <!-- Carte de contenu -->
        <article
          class="relative bg-white/80 backdrop-blur-xl p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl border border-white/30 animate-card-enter"
        >
          <!-- En-tête avec décoration -->
          <header class="relative mb-8">
            <div class="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 blur-sm"></div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E40AF] bg-clip-text text-transparent relative z-10">
              Mot du PDG
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"></div>
          </header>

          <!-- Contenu texte -->
          <div class="space-y-6">
            <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
              Bienvenue chez <span class="font-bold text-[#1E40AF] relative inline-block">
                <span class="relative z-10">NEW AGE MUSIC ENTERTAINMENT</span>
                <span class="absolute bottom-0 left-0 w-full h-2 bg-blue-200/50 -rotate-1 -z-10"></span>
              </span>.
            </p>
            
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
              En tant que label visionnaire positionné au carrefour des musiques Gospel, Rap, Folk et urbaines, nous bâtissons une structure solide, moderne et tournée vers l'avenir.
            </p>
            
            <blockquote class="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-gradient-to-r from-blue-50/50 to-transparent">
              <p class="text-xl md:text-2xl font-semibold text-gray-900 italic">
                Notre ambition : devenir une plateforme panafricaine et internationale de production et distribution digitale.
              </p>
            </blockquote>
            
            <!-- Liste avec icônes -->
            <ul class="space-y-4 mt-8">
              <li 
                v-for="(item, index) in features"
                :key="index"
                class="flex items-start gap-3 group"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center border border-blue-200/50 group-hover:scale-110 transition-transform duration-300">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span class="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <!-- Section image avec effet parallaxe -->
      <div class="flex-1 relative">
        <!-- Cadre décoratif -->
        <div class="absolute -inset-4 bg-gradient-to-bl from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
        
        <!-- Conteneur image avec effet hover -->
        <div class="relative z-10 group perspective-1000">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl">
            <!-- Image avec effet de parallaxe au survol -->
            <div class="overflow-hidden rounded-3xl">
              <img
                src="https://i.postimg.cc/tTGHSp0j/276f273d11f8b9dbc0a9c55bb38ea8c6.gif"
                alt="Équipe musicale en création - NEW AGE MUSIC ENTERTAINMENT"
                class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            
            <!-- Overlay gradient avec animation -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
            
            <!-- Effet de brillance au survol -->
            <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <!-- Badge décoratif -->
            <div class="absolute top-6 right-6 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Innovation & Créativité
            </div>
          </div>
          
          <!-- Élément décoratif flottant -->
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LightRays from '../../bits_components/LightRays/LightRays.vue'

const features = [
  'Direction stratégique orientée innovation',
  'Catalogue d\'artistes en croissance',
  'Infrastructures aux standards internationaux',
  'Approche axée sur qualité et authenticité',
  'Intégration des nouvelles technologies'
]
</script>

<style scoped>
/* Animation d'entrée améliorée */
@keyframes cardEnter {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-card-enter {
  animation: cardEnter 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

.perspective-1000 {
  perspective: 1000px;
}

/* Effet de brillance sur les bordures */
.custom-rays {
  filter: brightness(1.1) contrast(1.1);
}

/* Amélioration du texte pour meilleure lisibilité */
.text-gray-800 {
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

/* Transition douce pour les éléments interactifs */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive design amélioré */
@media (max-width: 1024px) {
  .lg\:flex-row {
    flex-direction: column;
  }
  
  .lg\:gap-16 {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .md\:p-10 {
    padding: 2rem;
  }
  
  .text-4xl {
    font-size: 2.25rem;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
}
</style>