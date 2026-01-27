<template>
  <footer class="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
    <!-- Éléments décoratifs -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent"></div>
    
    <!-- Onde décorative -->
    <div class="absolute -top-20 inset-x-0 h-40 opacity-10">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="currentColor" class="text-[#3B82F6]"></path>
      </svg>
    </div>

    <!-- Contenu principal -->
    <div class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <!-- Grille principale -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        
        <!-- Colonne gauche - À propos et contact -->
        <div class="space-y-12">
          <!-- Bloc À propos -->
          <div class="group">
            <div class="flex items-center gap-3 mb-8">
              <div class="w-3 h-8 bg-gradient-to-b from-[#1E3A8A] to-[#3B82F6] rounded-full"></div>
              <h3 class="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]">
                  NOUS CONNAITRE
                </span>
              </h3>
            </div>
            
            <div class="space-y-6">
              <p class="text-[#555555] text-lg leading-relaxed">
                Nous sommes un Label Indépendant créé en 
                <span class="font-bold text-[#1E3A8A] relative">
                  <span class="relative z-10">1994</span>
                  <span class="absolute -inset-1 bg-[#3B82F6]/10 rounded-lg blur-sm -z-10"></span>
                </span> 
                par le promoteur culturel 
                <span class="font-bold text-[#1E3A8A]">Etienne N. PARISH</span>, 
                pour offrir une plateforme d'expression aux artistes émergents.
              </p>
              
              <!-- Badge d'années d'expérience -->
              <div class="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm">
                <div class="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg">
                  <span class="text-white font-bold text-2xl">30+</span>
                </div>
                <div>
                  <p class="font-bold text-[#1A1A1A]">Années d'innovation</p>
                  <p class="text-sm text-[#555555]">Leadership dans l'industrie musicale</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bloc Contact -->
          <div class="space-y-6">
            <h4 class="text-2xl font-bold text-[#1A1A1A] flex items-center gap-3">
              <div class="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              CONTACT
            </h4>
            
            <div class="space-y-4">
              <!-- Téléphone -->
              <a href="tel:+237699463098" class="group flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-gray-100 hover:border-[#3B82F6]/30 hover:shadow-md transition-all duration-300">
                <div class="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-[#555555]">Appelez-nous</p>
                  <p class="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#1E3A8A] transition-colors duration-300">
                    +237 699 463 098
                  </p>
                </div>
              </a>

              <!-- Adresse -->
              <div class="group flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-gray-100">
                <div class="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/10 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-[#555555]">Notre siège</p>
                  <p class="text-lg font-semibold text-[#1A1A1A]">Immeuble Bonadoumahome</p>
                  <p class="text-[#555555]">Rue Tokoto, Bonapriso Douala</p>
                </div>
              </div>

              <!-- Email -->
              <a href="mailto:new_age_musicen@yahoo.fr" class="group flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-gray-100 hover:border-[#3B82F6]/30 hover:shadow-md transition-all duration-300">
                <div class="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-[#555555]">Écrivez-nous</p>
                  <p class="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#1E3A8A] transition-colors duration-300">
                    new_age_musicen@yahoo.fr
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Colonne droite - Newsletter et musique -->
        <div class="space-y-12">
          <!-- Newsletter -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#1E3A8A]/5 via-[#3B82F6]/5 to-[#60A5FA]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div class="flex items-center gap-3 mb-8">
                <div class="w-3 h-8 bg-gradient-to-b from-[#3B82F6] to-[#60A5FA] rounded-full"></div>
                <h4 class="text-2xl font-bold text-[#1A1A1A]">
                  RESTEZ CONNECTÉ
                </h4>
              </div>
              
              <div class="space-y-6">
                <p class="text-[#555555] text-lg">
                  Abonnez-vous à notre newsletter pour recevoir les dernières actualités, sorties musicales et événements exclusifs.
                </p>
                
                <div class="space-y-4">
                  <div class="relative">
                    <input 
                      type="email" 
                      placeholder="Votre adresse email"
                      class="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-transparent transition-all duration-300"
                    />
                    <div class="absolute top-1/2 right-4 -translate-y-1/2">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                      </svg>
                    </div>
                  </div>
                  
                  <button class="group relative w-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white font-bold py-4 px-8 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                    <span class="relative z-10 flex items-center justify-center gap-2">
                      S'inscrire maintenant
                      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Lecteur audio -->
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-2xl">
            <div class="flex items-center justify-between mb-8">
              <div>
                <h4 class="text-2xl font-bold">ÉCOUTEZ</h4>
                <p class="text-gray-400">Notre dernière production</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                </svg>
              </div>
            </div>
            
            <div class="space-y-6">
              <!-- Info morceau -->
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-2xl flex items-center justify-center shadow-lg">
                  <span class="text-3xl font-bold">N</span>
                </div>
                <div class="flex-1">
                  <h5 class="text-xl font-bold">Ta parole</h5>
                  <p class="text-gray-400">lee one - Parish-Nova</p>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-xs px-2 py-1 bg-[#3B82F6]/20 rounded-full">Gospel</span>
                    <span class="text-xs px-2 py-1 bg-gray-700 rounded-full">03:59</span>
                  </div>
                </div>
              </div>
              
              <!-- Contrôles audio -->
              <div class="space-y-4">
                <!-- Barre de progression -->
                <div class="space-y-2">
                  <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full w-1/3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full"></div>
                  </div>
                  <div class="flex justify-between text-sm text-gray-400">
                    <span>00:00</span>
                    <span>03:59</span>
                  </div>
                </div>
                
                <!-- Boutons de contrôle -->
                <div class="flex items-center justify-center gap-6">
                  <button class="p-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button class="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                    </svg>
                  </button>
                  <button class="p-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <!-- Version avec couleurs uniformes bleues -->
<div class="space-y-6">
  <h4 class="text-2xl font-bold text-[#1A1A1A]">SUIVEZ-NOUS</h4>
  <div class="flex flex-wrap gap-3">
    
    <!-- Twitter -->
    <a href="#" class="group w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#3B82F6] hover:border-transparent hover:shadow-lg transition-all duration-300">
      <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    </a>
    
    <!-- Instagram -->
    <a href="#" class="group w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#3B82F6] hover:border-transparent hover:shadow-lg transition-all duration-300">
      <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>
    
    <!-- YouTube -->
    <a href="#" class="group w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#3B82F6] hover:border-transparent hover:shadow-lg transition-all duration-300">
      <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    </a>
    
    <!-- Facebook -->
    <a href="#" class="group w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#3B82F6] hover:border-transparent hover:shadow-lg transition-all duration-300">
      <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>
    
    <!-- Spotify -->
    <a href="#" class="group w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#3B82F6] hover:border-transparent hover:shadow-lg transition-all duration-300">
      <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.418.18-.779.54-.899 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    </a>

    <!-- TikTok -->
    <a href="#" class="group w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#3B82F6] hover:border-transparent hover:shadow-lg transition-all duration-300">
      <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-3.77-1.105zm0 0"/>
      </svg>
    </a>

  </div>
</div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-20 pt-8 border-t border-gray-200/50">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <!-- Logo et nom -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center">
              <span class="text-white font-bold">N</span>
            </div>
            <div>
              <p class="font-bold text-[#1A1A1A]">NEW AGE MUSIC ENTERTAINMENT</p>
              <p class="text-sm text-[#555555]">Label Indépendant depuis 1994</p>
            </div>
          </div>
          
          <!-- Liens légaux -->
          <div class="flex flex-wrap gap-6">
            <a v-for="link in legalLinks" :key="link.name"
               :href="link.url"
               class="text-[#555555] hover:text-[#1E3A8A] transition-colors duration-300 text-sm">
              {{ link.name }}
            </a>
          </div>
        </div>
        
        <!-- Copyright text -->
        <div class="mt-8 text-center">
          <p class="text-[#555555]">
            © 1994 - {{ currentYear }} NEW AGE MUSIC ENTERTAINMENT. Tous droits réservés.
          </p>
          <p class="text-sm text-[#555555] mt-2">
            Fait avec ❤️ pour la musique à Douala, Cameroun
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())

// Icônes SVG pour les réseaux sociaux
const TwitterIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>`
}

const InstagramIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>`
}

const YoutubeIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>`
}

const SpotifyIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.418.18-.779.54-.899 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>`
}

const socialLinks = [
  { name: 'Twitter', url: '#', icon: TwitterIcon },
  { name: 'Instagram', url: '#', icon: InstagramIcon },
  { name: 'YouTube', url: '#', icon: YoutubeIcon },
  { name: 'Spotify', url: '#', icon: SpotifyIcon }
]

const legalLinks = [
  { name: 'Politique de confidentialité', url: '#' },
  { name: 'Mentions légales', url: '#' },
  { name: 'Conditions d\'utilisation', url: '#' },
  { name: 'Contact', url: '#' }
]

onMounted(() => {
  // Éventuellement initialiser le lecteur audio ici
})
</script>

<style scoped>
/* Animation pour le bouton newsletter */
button.bg-gradient-to-r {
  background-size: 200% auto;
  transition: all 0.3s ease-in-out;
}

button.bg-gradient-to-r:hover {
  background-position: right center;
}

/* Effet de transition douce pour les cartes */
.bg-white\/50 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animation subtile pour les icônes */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.group:hover .group-hover\\:scale-110 {
  animation: float 2s ease-in-out infinite;
}

/* Style pour l'input email */
input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Effet glassmorphism amélioré */
.bg-white\/80 {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-1 {
    gap: 3rem;
  }
  
  .text-3xl {
    font-size: 2rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
}
</style>