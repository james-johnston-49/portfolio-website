<script setup>
import ArtworkCard from "../components/ArtworkCard.vue";
import { artworks } from "../data/artworks.js";
</script>

<template>
  <main>
    <ArtworkCard :artwork="artworks[0]" />
  </main>
</template>
