<script setup>
import { computed } from "vue";
import { firstLine, firstStanza } from "../utils/poemExcerpt.js";

const props = defineProps({
  entry: { type: Object, required: true }, // one item from data/featured.js
  piece: { type: Object, required: true }, // the matching artwork or poem record
});

const emit = defineEmits(["open"]);

const poemExcerpt = computed(() => {
  if (props.entry.type !== "poem") return "";
  return props.entry.excerpt === "stanza"
    ? firstStanza(props.piece)
    : firstLine(props.piece);
});

function handleClick() {
  emit("open", props.entry, props.piece);
}
</script>

<template>
  <div
    class="pin-wrapper"
    :class="entry.size"
    :style="{ transform: `rotate(${entry.rotation}deg)` }"
  >
    <div class="pin-card" @click="handleClick">
      <div class="tape"></div>

      <template v-if="entry.type === 'artwork'">
        <div class="thumb">
          <img :src="piece.images[0]" :alt="piece.title" />
        </div>
        <p class="caption">{{ piece.title }}</p>
      </template>

      <template v-else>
        <p class="poem-title">{{ piece.title }}</p>
        <p class="poem-excerpt">{{ poemExcerpt }}</p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.pin-wrapper {
  display: inline-block;
}

.pin-card {
  position: relative;
  background-color: #fffdf8;
  border: 1px solid rgba(15, 12, 17, 0.08);
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 6px rgba(15, 12, 17, 0.18);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.pin-card:hover {
  transform: scale(1.05);
}

.tape {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(-3deg);
  width: 40px;
  height: 16px;
  background-color: rgba(255, 244, 214, 0.8);
}

.thumb {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 2px;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  font-family: "Caveat", cursive;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  color: #444;
  margin: 6px 0 0;
}

.poem-title {
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  color: #0f0c11;
  margin: 0 0 6px;
}

.poem-excerpt {
  font-family: "EB Garamond", serif;
  font-size: 0.8rem;
  line-height: 1.4;
  text-align: center;
  color: #555;
  white-space: pre-line;
  margin: 0;
}

.small {
  width: 120px;
}

.medium {
  width: 170px;
}

.large {
  width: 220px;
}
</style>
