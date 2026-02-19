<template>
  <div class="app">
    <NavBar :isDark="isDark" @toggleTheme="toggleTheme" />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <StrengthsSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StrengthsSection from './components/StrengthsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useTheme } from './composables/useTheme'
import { useScrollAnimation } from './composables/useScrollAnimation'

const { isDark, toggleTheme } = useTheme()

// Must be called synchronously in setup so onMounted registers correctly
useScrollAnimation()
</script>

<style>
/* App-level overrides handled in main.css */
</style>
