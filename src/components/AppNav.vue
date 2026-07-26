<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// This replaces the old checkbox-hack toggle with a real reactive value.
// When `isOpen` changes, Vue automatically updates the DOM for us.
const isOpen = ref(false);

function toggleNav() {
  isOpen.value = !isOpen.value;
}

function closeNav() {
  isOpen.value = false;
}

// Mode is derived from the current route rather than tracked as separate
// state - a URL under /developer means we're in developer mode, anything
// else (including shared pages) falls back to showing the artist set.
// NOTE: once the real Artist/Developer toggle is built (planned for the
// header), it should navigate between modes' home routes; this computed
// value will automatically follow along since it just reads the route.
const route = useRoute();
const isDeveloperMode = computed(() => route.path.startsWith("/developer"));
</script>

<template>
  <div class="nav-container">
    <button
      class="nav-toggle-label"
      aria-label="Open navigation menu"
      @click="toggleNav"
    >
      <span></span>
    </button>

    <nav class="site-nav" :class="{ 'is-open': isOpen }">
      <template v-if="!isDeveloperMode">
        <router-link to="/artist/studio" @click="closeNav">Studio</router-link>
        <router-link to="/artist/archive" @click="closeNav"
          >Archive</router-link
        >
        <router-link to="/artist/workshop" @click="closeNav"
          >Workshop</router-link
        >
        <router-link to="/artist/verses" @click="closeNav">Verses</router-link>
        <router-link to="/artist/chronicles" @click="closeNav"
          >Chronicles</router-link
        >
      </template>

      <template v-else>
        <router-link to="/developer" @click="closeNav">Index</router-link>
        <router-link to="/developer/projects" @click="closeNav"
          >Projects</router-link
        >
        <router-link to="/developer/toolkit" @click="closeNav"
          >Toolkit</router-link
        >
        <router-link to="/developer/experiments" @click="closeNav"
          >Experiments</router-link
        >
        <router-link to="/developer/logbook" @click="closeNav"
          >Logbook</router-link
        >
      </template>

      <router-link to="/ambitions" @click="closeNav">Ambitions</router-link>
      <router-link to="/the-creator" @click="closeNav">The Creator</router-link>
      <router-link to="/contact" @click="closeNav">Contact</router-link>
    </nav>
  </div>
</template>
