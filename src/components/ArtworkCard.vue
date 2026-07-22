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
    <div class="artwork-image">
      <img :src="artwork.images[0]" :alt="artwork.title" />
    </div>
    <h3>{{ artwork.title }}</h3>
    <p class="medium">{{ artwork.medium }}</p>
    <p class="year">{{ artwork.year }}</p>
    <p class="description">{{ artwork.description }}</p>
  </div>
</template>

<style scoped>
.artwork-card {
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  border-radius: 8px;
  padding: 16px;
  text-align: left;
  break-inside: avoid;
  margin-bottom: 24px;
  display: inline-block;
  width: 100%;
}

h3 {
  font-size: 1.1rem;
  margin: 12px 0 4px;
}

.medium,
.year {
  font-size: 0.85rem;
  margin: 2px 0;
  color: #555;
  text-align: left;
}

.description {
  font-size: 0.9rem;
  margin-top: 12px;
  line-height: 1.4;
  text-align: left;
}

</style>