<script setup>
import { poems } from "../../data/poems";
import { ref, computed, watch } from "vue";

// '' means "no filter applied" - same convention as ArchiveView's dropdowns
const selectedTheme = ref("");

// Unique themes across all poems, flattened since theme is an array per poem
const themeOptions = computed(() => {
  const themes = poems.flatMap((poem) => poem.theme);
  return [...new Set(themes)].sort();
});

const filteredPoems = computed(() => {
  return poems.filter((poem) => {
    return (
      selectedTheme.value === "" || poem.theme.includes(selectedTheme.value)
    );
  });
});

// Tracks which poem in the FILTERED list is currently showing
const currentIndex = ref(0);

// Jump directly to a poem via the Select Poem dropdown
function selectPoem(id) {
  const index = filteredPoems.value.findIndex((poem) => poem.id === id);
  if (index !== -1) currentIndex.value = index;
}

// Reset to the start whenever the theme filter changes, so currentIndex
// never points past the end of a newly-shrunk filteredPoems list
watch(selectedTheme, () => {
  currentIndex.value = 0;
});

const currentPoem = computed(() => filteredPoems.value[currentIndex.value]);

const transitionName = ref("slide-left");

function nextPoem() {
  transitionName.value = "slide-left";
  const total = filteredPoems.value.length;
  currentIndex.value = (currentIndex.value + 1) % total;
}

function prevPoem() {
  transitionName.value = "slide-right";
  const total = filteredPoems.value.length;
  currentIndex.value = (currentIndex.value - 1 + total) % total;
}
</script>

<template>
  <main class="verses-page">
    <p class="eyebrow">Poem Collection</p>

    <div class="controls">
      <label>
        <span>Theme</span>
        <select v-model="selectedTheme">
          <option value="">All</option>
          <option v-for="theme in themeOptions" :key="theme" :value="theme">
            {{ theme }}
          </option>
        </select>
      </label>

      <label>
        <span>Poem</span>
        <select
          :value="currentPoem?.id"
          @change="selectPoem($event.target.value)"
        >
          <option v-for="poem in filteredPoems" :key="poem.id" :value="poem.id">
            {{ poem.title }}
          </option>
        </select>
      </label>
    </div>

    <Transition :name="transitionName" mode="out-in">
      <div class="poem-card" :key="currentPoem.id" v-if="currentPoem">
        <div class="spine"></div>
        <span class="year">{{ currentPoem.year }}</span>
        <h2>{{ currentPoem.title }}</h2>
        <p class="poem-body">{{ currentPoem.body }}</p>
        <div class="page-tab">
          {{ currentIndex + 1 }} / {{ filteredPoems.length }}
        </div>
      </div>
    </Transition>

    <div class="nav">
      <button @click="prevPoem">&larr; Previous</button>
      <button @click="nextPoem">Next &rarr;</button>
    </div>
  </main>
</template>

<style scoped>
.verses-page {
  max-width: 680px;
  margin: 0 auto;
  padding: 16px 24px 60px; /* was 40px 24px 60px */
  text-align: center;
}

.eyebrow {
  font-family: "Poppins", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #8a8378;
  margin-top: -10px;
  margin-bottom: 20px; /* was 24px */
}

.controls {
  display: flex;
  justify-content: flex-start; /* was center — see #2 below */
  gap: 20px;
  margin-bottom: 16px; /* was 32px */
  flex-wrap: wrap;
}

.controls label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #777;
  gap: 4px;
}

.controls select {
  font-family: "Poppins", sans-serif;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(43, 38, 32, 0.2);
  border-radius: 0;
  padding: 4px 2px;
  font-size: 0.9rem;
  color: #6b6459;
  min-width: 160px;
}

.controls select:focus {
  outline: none;
  border-bottom-color: #8b5e44;
}

.controls label span {
  color: #a39a89; /* softer than the current #777 */
}

.poem-card {
  position: relative;
  background-color: #fbf6ec;
  padding: 40px 40px 52px;
  border-radius: 2px;
  box-shadow:
    0 1px 2px rgba(43, 38, 32, 0.08),
    0 12px 32px rgba(43, 38, 32, 0.16);
  margin-bottom: 32px;
}

/* --- The book page itself --- */
.poem-card h2 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
  font-size: 2.1rem;
  color: #2b2620;
  margin: 0 0 28px;
  text-align: center;
}

.poem-body {
  font-family: "EB Garamond", serif;
  font-size: 1.2rem;
  line-height: 1.65;
  color: #2b2620;
  white-space: pre-line;
  margin: 0;
  text-align: center;
}

/* Stitched spine along the left edge, like a bound signature */
.spine {
  position: absolute;
  top: 24px;
  bottom: 24px;
  left: 20px;
  width: 2px;
  background-image: repeating-linear-gradient(
    to bottom,
    #8b5e44 0,
    #8b5e44 6px,
    transparent 6px,
    transparent 12px
  );
  opacity: 0.6;
}

.year {
  position: absolute;
  top: 20px;
  right: 24px;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: #a39a89;
}

/* Page-number tab, tucked in the corner like a ribbon */
.page-tab {
  position: absolute;
  bottom: 0;
  right: 24px;
  background-color: #8b5e44;
  color: #fbf6ec;
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 4px 14px;
  border-radius: 4px 4px 0 0;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.nav button {
  background: none;
  border: none;
  color: #3a6ea5;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

@media (max-width: 480px) {
  .poem-card {
    padding: 40px 24px 56px;
  }
  .spine {
    left: 12px;
  }
}
</style>
