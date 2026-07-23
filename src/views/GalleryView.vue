<script setup>
import ArtworkCard from "../components/ArtworkCard.vue";
import ArtworkModal from "../components/ArtworkModal.vue";
import { artworks } from "../data/artworks.js";
import { ref } from 'vue'

const selectedArtwork = ref(null)

function handleOpenModal(artwork) {
  selectedArtwork.value = artwork
}

function closeModal() {
  selectedArtwork.value = null
}
</script>

<template>
  <main>
    <ArtworkCard
      v-for="artwork in artworks"
      :artwork="artwork"
      :key="artwork.id"
      @open-modal="handleOpenModal"
    />
  </main>

  <ArtworkModal
    v-if="selectedArtwork"
    :artwork="selectedArtwork"
    @close="closeModal"
  />
</template>

<style scoped>
main {
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: none;

  column-count: 5;
  column-gap: 24px;
  padding: 24px;
}

@media (max-width: 1024px) {
  main {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  main {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  main {
    column-count: 2;
  }
}
</style>
