<script setup>
import { ref } from "vue";

const props = defineProps({
  artwork: {
    type: Object,
    required: true,
  },
});

// Tracks which image is currently showing for THIS card.
// Every card that uses this component gets its own separate copy of this value.
const currentIndex = ref(0);

function nextImage() {
  const totalImages = props.artwork.images.length;
  currentIndex.value = (currentIndex.value + 1) % totalImages;
}

function prevImage() {
  const totalImages = props.artwork.images.length;
  currentIndex.value = (currentIndex.value - 1 + totalImages) % totalImages;
}

function openModal() {
  console.log("Open modal for:", props.artwork.title);
}

// A fixed set of pastel colors to pick from
const tagColors = [
  "#FFD6D6",
  "#FFE8B3",
  "#FFFAC2",
  "#D6F5D6",
  "#C2F0F0",
  "#C2D9FF",
  "#D9C2FF",
  "#F0C2E8",
  "#F0D9C2",
  "#D9D9D9",
];

// Converts any string into a number, always the same number for the same string
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Picks a color from the palette based on the tag's text
function tagColor(tag) {
  const index = hashString(tag) % tagColors.length;
  return tagColors[index];
}
</script>

<template>
  <div class="artwork-card" @click="openModal">
    <div class="artwork-image">
      <img :src="artwork.images[currentIndex]" :alt="artwork.title" />
      <button
        v-if="artwork.images.length > 1"
        class="arrow arrow-left"
        @click.stop="prevImage"
      >
        ‹
      </button>
      <button
        v-if="artwork.images.length > 1"
        class="arrow arrow-right"
        @click.stop="nextImage"
      >
        ›
      </button>
      <div class="dots" v-if="artwork.images.length > 1">
        <span
          v-for="(image, index) in artwork.images"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
        ></span>
      </div>
    </div>
    <div class="card-header">
      <h3>{{ artwork.title }}</h3>
      <div class="tags">
        <span
          v-for="tag in artwork.tags"
          :key="tag"
          class="tag-pill"
          :style="{ backgroundColor: tagColor(tag) }"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <p class="medium">{{ artwork.medium }}</p>
    <p class="year">{{ artwork.year }}</p>
    <p class="description">{{ artwork.description }}</p>
    <button class="view-more" @click.stop="openModal">View more</button>
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

  position: relative;
  overflow: hidden;

  cursor: pointer;
}

.artwork-image {
  position: relative;
}

.artwork-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s ease;
  pointer-events: none;
  z-index: 1;
}

.artwork-card:hover .artwork-image::after {
  background-color: rgba(0, 0, 0, 0.2);
}

.view-more {
  background: none;
  border: none;
  color: #3a6ea5;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  margin-top: 12px;
  align-self: flex-start;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.2s ease;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.artwork-card:hover .arrow {
  opacity: 1;
}

.arrow-left {
  left: 8px;
}

.arrow-right {
  right: 8px;
}

.dots {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.2s ease;
}

.dot.active {
  background-color: white;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
}

.card-header h3 {
  flex: 1;
  min-width: 120px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 160px;
  justify-content: flex-end;
  margin-left: auto;
}

.tag-pill {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
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

@media (max-width: 480px) {
  .card-header .tags,
  .medium,
  .year,
  .description,
  .view-more {
    display: none;
  }
}
</style>
