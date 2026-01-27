<script setup lang="ts">
import Navbar from '../../components/layouts/landing/NavBar.vue'
import Footer from '../../components/layouts/landing/Footer.vue'
import whatsapp from '../../components/layouts/landing/whatsapp.vue'
import Hero from '../../components/hero/Hero.vue'
import CeoMessage from '../../components/ceo_message/CeoMessage.vue'
import Team from '../../components/team/components/Team.vue'
import Artiste from "../../components/artiste/components/ListArtiste.vue"
import Prestation from "../../components/prestation/components/ListPrestation.vue"
</script>

<template>
    <Navbar/>
    <Hero/>
    <CeoMessage/>
    <Team/>
    <Prestation/>
   <Artiste/>
   <Footer/>
   <whatsapp/>
</template>

