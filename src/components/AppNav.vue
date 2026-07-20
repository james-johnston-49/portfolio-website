<script setup>
import { ref } from 'vue'

// This replaces the old checkbox-hack toggle with a real reactive value.
// When `isOpen` changes, Vue automatically updates the DOM for us.
const isOpen = ref(false)

function toggleNav() {
  isOpen.value = !isOpen.value
}

function closeNav() {
  isOpen.value = false
}
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
      <router-link to="/" @click="closeNav">Home</router-link>
      <router-link to="/gallery" @click="closeNav">Gallery</router-link>
      <router-link to="/goals" @click="closeNav">Goals</router-link>
      <router-link to="/about" @click="closeNav">About</router-link>
      <router-link to="/contact" @click="closeNav">Contact</router-link>
    </nav>
  </div>
</template>
