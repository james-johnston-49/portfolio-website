<script setup>
defineProps({
  artwork: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="artwork-card">
    <!-- TODO: show the first image, the title, medium, year, description -->
    <img :src="artwork.images[0]" :alt="artwork.title" />

    <h3>{{ artwork.title }}</h3>
    <p>{{ artwork.medium }} - {{ artwork.year }}</p>
    <p>{{ artwork.description }}</p>
  </div>
</template>
