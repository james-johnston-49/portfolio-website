<script setup>
import { tagColor } from '../utils/tagColors.js'

defineProps({
  artwork: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}
</script>

<template>
  <div class="modal-backdrop" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">×</button>

      <div class="modal-body">
        <div class="modal-left">
          <div class="modal-image">
            <img :src="artwork.images[0]" :alt="artwork.title" />
          </div>
          <h2>{{ artwork.title }}</h2>
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

        <div class="modal-right">
          <section v-if="artwork.description">
            <h3>Description</h3>
            <p>{{ artwork.description }}</p>
          </section>

          <section v-if="artwork.inspiration">
            <h3>Inspiration</h3>
            <p>{{ artwork.inspiration }}</p>
          </section>

          <section v-if="artwork.designNotes">
            <h3>Design Notes</h3>
            <p>{{ artwork.designNotes }}</p>
          </section>

          <section v-if="artwork.goals">
            <h3>Design Goals</h3>
            <p>{{ artwork.goals }}</p>
          </section>

          <section v-if="artwork.lessons">
            <h3>Lessons</h3>
            <p>{{ artwork.lessons }}</p>
          </section>

          <section v-if="artwork.challenges">
            <h3>Challenges</h3>
            <p>{{ artwork.challenges }}</p>
          </section>

          <section v-if="artwork.influences">
            <h3>Influences</h3>
            <p>{{ artwork.influences }}</p>
          </section>

          <section v-if="artwork.reflection">
            <h3>Reflection</h3>
            <p>{{ artwork.reflection }}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 900px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;
}

.modal-body {
  display: flex;
  gap: 32px;
}

.modal-left {
  flex: 1;
  min-width: 240px;
  border-right: 2px dotted #ccc;
  padding-right: 32px;
}

.modal-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.modal-left h2 {
  margin: 16px 0 8px;
}

.modal-right {
  flex: 1.4;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-right h3 {
  margin: 0 0 6px;
  font-size: 1rem;
  color: #333;
}

.modal-right p {
  margin: 0;
  text-align: left;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .modal-body {
    flex-direction: column;
  }

  .modal-left {
    border-right: none;
    border-bottom: 2px dotted #ccc;
    padding-right: 0;
    padding-bottom: 24px;
  }
}

.tag-pill {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>