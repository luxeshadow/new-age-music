<template>
  <button 
    @click="openWhatsApp"
    class="whatsapp-btn fixed bottom-6 right-6 z-50 group"
    aria-label="Contact WhatsApp"
  >
    <!-- Ondes améliorées -->
    <div class="waves">
      <div v-for="i in 3" :key="i" 
           class="wave"
           :style="{
             '--delay': `${(i-1)*0.7}s`,
             '--scale': 1 + i*0.4
           }">
      </div>
    </div>

    <!-- Bouton avec effet de profondeur -->
    <div class="btn-main">
      <div class="btn-shine"></div>
      <img 
        src="https://i.postimg.cc/pdQpB2rf/whatsapp-(1).png"
        alt="WhatsApp"
        class="btn-icon"
      />
      <div v-if="showNotification" class="btn-badge">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"/>
        </svg>
      </div>
    </div>

    <!-- Tooltip amélioré -->
    <div class="btn-tooltip">
      <span>Discutons sur WhatsApp</span>
      <div class="tooltip-arrow"></div>
    </div>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phoneNumber = '22891528376'
const message = 'Bonjour je suis intéressé par vos services'
const showNotification = ref(true)

const openWhatsApp = () => {
  showNotification.value = false
  const cleanedNumber = phoneNumber.replace(/\s+/g, '').replace(/^\+/, '')
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodedMessage}`
  
  // Essayer d'ouvrir dans la même fenêtre si possible
  window.location.href = whatsappUrl
}

// Cacher la notification après interaction
onMounted(() => {
  setTimeout(() => showNotification.value = false, 10000)
})
</script>

<style scoped>
.whatsapp-btn {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

/* Conteneur des ondes */
.waves {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* Ondes individuelles */
.wave {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(37, 211, 102, 0.3);
  border-radius: 50%;
  animation: waveExpand 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: var(--delay);
  transform-origin: center;
  opacity: 0;
}

@keyframes waveExpand {
  0% {
    transform: scale(0.8);
    opacity: 1;
    border-width: 1px;
  }
  70% {
    opacity: 0.5;
  }
  100% {
    transform: scale(var(--scale));
    opacity: 0;
    border-width: 3px;
  }
}

/* Bouton principal */
.btn-main {
  position: relative;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(145deg, #25d366, #128c7e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 10px 25px rgba(37, 211, 102, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.whatsapp-btn:hover .btn-main {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 
    0 15px 35px rgba(37, 211, 102, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.whatsapp-btn:active .btn-main {
  transform: scale(0.95);
}

/* Effet de brillance */
.btn-shine {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  pointer-events: none;
}

/* Icône - CORRECTION ICI */
.btn-icon {
  width: 2.2rem; /* Légèrement plus grand */
  height: 2.2rem;
  /* SUPPRIMER: filter: brightness(0) invert(1); */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* Assurer une bonne visibilité */
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
}

.whatsapp-btn:hover .btn-icon {
  transform: scale(1.15) rotate(5deg);
}

/* Badge */
.btn-badge {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(145deg, #ff4757, #ff3838);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 8px rgba(255, 71, 87, 0.4);
  animation: badgePulse 2s infinite;
}

.btn-badge svg {
  color: white;
  width: 0.75rem;
  height: 0.75rem;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Tooltip */
.btn-tooltip {
  position: absolute;
  right: calc(100% + 1rem);
  top: 50%;
  transform: translateY(-50%);
  background: #1a1a1a;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.whatsapp-btn:hover .btn-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(-0.5rem);
}

.tooltip-arrow {
  position: absolute;
  top: 50%;
  right: -0.375rem;
  transform: translateY(-50%) rotate(45deg);
  width: 0.75rem;
  height: 0.75rem;
  background: #1a1a1a;
}

/* Responsive */
@media (max-width: 768px) {
  .whatsapp-btn {
    bottom: 5.5rem;
    right: 1.5rem;
  }
  
  .btn-main {
    width: 3.5rem;
    height: 3.5rem;
  }
  
  .btn-icon {
    width: 1.9rem;
    height: 1.9rem;
  }
  
  .btn-tooltip {
    display: none;
  }
}

/* Réduction des animations si l'utilisateur les préfère réduites */
@media (prefers-reduced-motion: reduce) {
  .wave,
  .btn-badge,
  .btn-icon,
  .btn-main {
    animation: none;
    transition: none;
  }
}
</style>