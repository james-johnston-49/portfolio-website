<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import PinboardCard from "./PinboardCard.vue";
import { featured } from "../data/featured.js";
import { artworks } from "../data/artworks.js";
import { poems } from "../data/poems.js";

const emit = defineEmits(["open-artwork"]);
const router = useRouter();

const pieces = computed(() => {
  return featured.map((entry) => {
    const source = entry.type === "artwork" ? artworks : poems;
    const piece = source.find((item) => item.id === entry.id);
    return { entry, piece };
  });
});

function handleOpen(entry, piece) {
  if (entry.type === "artwork") {
    emit("open-artwork", piece);
  } else {
    router.push({ path: "/artist/verses", query: { poem: piece.id } });
  }
}
</script>

<template>
  <div class="pinboard">
    <PinboardCard
      v-for="{ entry, piece } in pieces"
      :key="entry.id"
      :entry="entry"
      :piece="piece"
      @open="handleOpen"
    />
  </div>
</template>

<style scoped>
.pinboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  padding: 24px 20px 40px;
}
</style>
