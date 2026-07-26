<script setup>
import ArtworkCard from "../components/ArtworkCard.vue";
import ArtworkModal from "../components/ArtworkModal.vue";
import { artworks } from "../data/artworks.js";
import { ref, computed, onMounted, onUnmounted } from "vue";

const windowWidth = ref(window.innerWidth);

function updateWidth() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

const maxColumns = computed(() => {
  if (windowWidth.value <= 480) return 1;
  if (windowWidth.value <= 768) return 2;
  if (windowWidth.value <= 1024) return 3;
  return 5;
});

const selectedArtwork = ref(null);

function handleOpenModal(artwork) {
  selectedArtwork.value = artwork;
}

function closeModal() {
  selectedArtwork.value = null;
}

// Which subject filters are currently toggled on (multi-select)
const selectedSubjects = ref([]);

// Single-value dropdown filters ('' means "no filter applied")
const selectedMedium = ref("");
const selectedGenre = ref("");
const selectedStyle = ref("");
const selectedYear = ref("");

const subjectOptions = [
  "Characters",
  "Creatures",
  "Environments",
  "Portraits",
  "Objects",
];

const mediumOptions = [
  "Digital",
  "Traditional",
  "Painting",
  "Drawing",
  "3D",
  "Photography",
  "Mixed Media",
];

const genreOptions = [
  "Fantasy",
  "Sci-Fi",
  "Horror",
  "Mythology",
  "Nature",
  "Historical",
  "Slice of Life",
  "Superhero",
  "General/Other",
];

const styleOptions = [
  "Realistic",
  "Stylized",
  "Painterly",
  "Comic",
  "Abstract",
  "Surreal",
  "Minimalist",
];

// Derived from the actual data, so new years show up automatically
const yearOptions = computed(() => {
  const years = artworks.map((artwork) => artwork.year);
  const uniqueYears = [...new Set(years)];
  return uniqueYears.sort((a, b) => b - a); // newest first
});

function toggleSubject(subject) {
  if (selectedSubjects.value.includes(subject)) {
    selectedSubjects.value = selectedSubjects.value.filter(
      (s) => s !== subject,
    );
  } else {
    selectedSubjects.value = [...selectedSubjects.value, subject];
  }
}

const filteredArtworks = computed(() => {
  return artworks.filter((artwork) => {
    // Nav filters (Subject): OR within the group
    const matchesSubject =
      selectedSubjects.value.length === 0 ||
      selectedSubjects.value.some((subject) =>
        artwork.subject.includes(subject),
      );

    // Dropdown filters: each one is its own AND condition
    const matchesMedium =
      selectedMedium.value === "" ||
      artwork.medium.includes(selectedMedium.value);
    const matchesGenre =
      selectedGenre.value === "" || artwork.genre.includes(selectedGenre.value);
    const matchesStyle =
      selectedStyle.value === "" || artwork.style.includes(selectedStyle.value);
    const matchesYear =
      selectedYear.value === "" || artwork.year === Number(selectedYear.value);

    return (
      matchesSubject &&
      matchesMedium &&
      matchesGenre &&
      matchesStyle &&
      matchesYear
    );
  });
});

const columnCount = computed(() => {
  return Math.min(maxColumns.value, filteredArtworks.value.length) || 1;
});

const columns = computed(() => {
  const cols = Array.from({ length: columnCount.value }, () => []);
  filteredArtworks.value.forEach((artwork, index) => {
    cols[index % columnCount.value].push(artwork);
  });
  return cols;
});
</script>

<template>
  <div class="filter-row">
    <div class="filter-bar">
      <button
        class="subject-filter"
        :class="{ active: selectedSubjects.length === 0 }"
        @click="selectedSubjects = []"
      >
        All
      </button>
      <button
        v-for="subject in subjectOptions"
        :key="subject"
        class="subject-filter"
        :class="{ active: selectedSubjects.includes(subject) }"
        @click="toggleSubject(subject)"
      >
        {{ subject }}
      </button>
    </div>

    <div class="dropdown-filters">
      <select v-model="selectedMedium">
        <option value="">All Mediums</option>
        <option v-for="option in mediumOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <select v-model="selectedGenre">
        <option value="">All Genres</option>
        <option v-for="option in genreOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <select v-model="selectedStyle">
        <option value="">All Styles</option>
        <option v-for="option in styleOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <select v-model="selectedYear">
        <option value="">All Years</option>
        <option v-for="year in yearOptions" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>
  </div>

  <main class="masonry-columns" :style="{ '--target-columns': maxColumns }">
    <div class="masonry-column" v-for="(column, index) in columns" :key="index">
      <ArtworkCard
        v-for="artwork in column"
        :artwork="artwork"
        :key="artwork.id"
        @open-modal="handleOpenModal"
      />
    </div>
  </main>

  <ArtworkModal
    v-if="selectedArtwork"
    :artwork="selectedArtwork"
    @close="closeModal"
  />
</template>

<style scoped>
.masonry-columns {
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: none;
  display: flex;
  gap: 24px;
  padding: 24px;
  align-items: flex-start;
}

.masonry-column {
  flex: 0 0 auto;
  width: calc(
    (100% - (var(--target-columns) - 1) * 24px) / var(--target-columns)
  );
}

.filter-row {
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px 24px 0;
  box-sizing: border-box;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.dropdown-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.subject-filter {
  padding: 8px 18px;
  border-radius: 999px;
  border: 2px solid #ccc;
  background-color: white;
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.subject-filter:hover {
  border-color: #999;
}

.subject-filter.active {
  background-color: #3a6ea5;
  border-color: #3a6ea5;
  color: white;
}

.dropdown-filters select {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
