<script setup>
// Studio (Artist home page).
import { ref } from "vue";
import { RouterLink } from "vue-router";
import FeaturedPinboard from "../../components/FeaturedPinboard.vue";
import ArtworkModal from "../../components/ArtworkModal.vue";

const selectedArtwork = ref(null);

function handleOpenArtwork(artwork) {
  selectedArtwork.value = artwork;
}

function closeModal() {
  selectedArtwork.value = null;
}
</script>

<template>
  <main id="home-main">
    <section class="hero">
      <p class="tagline">Creativity grows when curiosity leads the way.</p>
      <div class="hero-circle">
        <!-- placeholder: swap for the new beetle once it's drawn -->
        <img src="/assets/bugc.png" alt="illustration of a beetle" />
      </div>

      <div class="cards-row">
        <div class="intro-text">
          <h2>Studio</h2>
          <p>
            This studio is where ideas become tangible. Across a range of
            different creative mediums, I explore ways of thinking, solving
            problems, and telling stories. Every project is another opportunity
            to learn by making.
          </p>
        </div>

        <div class="intro-text-right">
          <h2>Why I Create</h2>
          <p>
            I create because making something is often the best way I know how
            to understand an idea. Whether I'm drawing, designing, programming,
            or writing, I'm drawn to the challenge of taking something abstract
            and giving it form.
          </p>
        </div>
      </div>
    </section>

    <div class="explore">
      <h2>Explore</h2>
      <p>
        Browse
        <RouterLink to="/artist/archive">the work</RouterLink>, follow the
        process through the
        <RouterLink to="/artist/chronicles">Chronicles</RouterLink>, or simply
        wander. Whether you're here for finished pieces or the thinking behind
        them, I hope you find something that resonates.
      </p>
    </div>

    <div class="featured">
      <h2>Featured work</h2>
      <FeaturedPinboard @open-artwork="handleOpenArtwork" />
    </div>
  </main>

  <ArtworkModal
    v-if="selectedArtwork"
    :artwork="selectedArtwork"
    @close="closeModal"
  />
</template>

<style scoped>
/* ---------- Hero ---------- */
.hero {
  background-color: #3a6ea5;
  border-radius: 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: -58px;
  padding: 96px 32px 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.hero .tagline {
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

.hero-circle {
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(15, 12, 17, 0.25);
  position: relative;
  top: 25px;
}
.hero-circle img {
  width: 240px;
  height: auto;
  animation: bugPulse 4s ease-in-out infinite;
}

@keyframes bugPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* ---------- Studio / Why I Create cards ---------- */
/* ---------- Studio / Why I Create cards ---------- */
.cards-row {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 1300px;
  margin-top: 70px;
}
.intro-text,
.intro-text-right {
  flex: 1;
  max-width: 520px;
  padding: 20px;
  background: transparent;
  position: static;
  top: auto;
  left: auto;
  right: auto;
  transform: none;
  border: none;
  border-radius: 0;
}

.intro-text h2,
.intro-text-right h2 {
  color: #ffffff;
  margin: 0 0 10px;
}

.intro-text p,
.intro-text-right p {
  color: #ffffff;
  text-align: left;
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}

/* ---------- Explore ---------- */
.explore {
  max-width: 600px;
  margin: 30px auto 10px;
  text-align: center;
  padding: 0 20px;
}

.explore h2 {
  color: #0f0c11;
  margin-bottom: 10px;
  font-family: "Outfit", sans-serif;
}

.explore p {
  font-size: 17px;
  line-height: 1.6;
  text-align: center;
}

/* ---------- Featured ---------- */
.featured {
  margin-top: 60px;
}

.featured h2 {
  text-align: center;
  color: #0f0c11;
  font-family: "Outfit", sans-serif;
}

/* ---------- Mobile ---------- */
@media (max-width: 900px) {
  .hero {
    padding: 48px 20px 56px;
    border-radius: 0;
    gap: 28px;
  }

  .hero-circle {
    width: 240px;
    height: 240px;
  }

  .hero-circle img {
    width: 170px;
  }

  .cards-row {
    flex-direction: column;
  }

  .intro-text,
  .intro-text-right {
    max-width: 100%;
  }
}
</style>
