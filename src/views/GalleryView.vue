<script setup>
import ArtworkCard from "../components/ArtworkCard.vue";
import ArtworkModal from "../components/ArtworkModal.vue";
import { artworks } from "../data/artworks.js";
import { ref, computed } from "vue";

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

    // Dropdown filters: OR within the group
    // Only check dropdowns that actually have a value selected
    const activeDropdownChecks = [];

    if (selectedMedium.value !== "") {
      activeDropdownChecks.push(artwork.medium.includes(selectedMedium.value));
    }
    if (selectedGenre.value !== "") {
      activeDropdownChecks.push(artwork.genre.includes(selectedGenre.value));
    }
    if (selectedStyle.value !== "") {
      activeDropdownChecks.push(artwork.style.includes(selectedStyle.value));
    }
    if (selectedYear.value !== "") {
      activeDropdownChecks.push(artwork.year === Number(selectedYear.value));
    }

    const matchesDropdowns =
      activeDropdownChecks.length === 0 ||
      activeDropdownChecks.some((result) => result);

    // Between the two groups: AND
    return matchesSubject && matchesDropdowns;
  });
});
</script>

<template>
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

  <main>
    <ArtworkCard
      v-for="artwork in filteredArtworks"
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

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 24px 24px 0;
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

.dropdown-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px 24px 0;
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
