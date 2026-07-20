<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

// Maps each route name to the <h1> text the old pages hardcoded.
// This replaces having a separate <header> block copy-pasted per page.
const pageTitles = {
  home: 'My Portfolio',
  gallery: 'Art Gallery',
  goals: 'My Goals',
  about: 'More About Me',
  contact: 'Get In Touch!',
}

const route = useRoute()
const pageTitle = computed(() => pageTitles[route.name] ?? '')
</script>

<template>
  <AppHeader :page-title="pageTitle" />
  <AppNav />

  <div class="desktop-container">
    <!-- router-view renders whichever view component matches the current route -->
    <router-view />
  </div>

  <AppFooter />
</template>
