<script setup>
// Studio (Artist home page).
// Layout classes (.tagline, .intro-text, .container, .center-circle,
// .center-bug, .intro-text-right) already live in src/styles/main.css —
// this view just supplies structure + copy.
import { RouterLink } from "vue-router";
</script>

<template>
  <main id="home-main">
    <p class="tagline">Creativity grows when curiosity leads the way.</p>

    <div class="intro-text">
      <h2>Studio</h2>
      <p>
        This studio is where ideas become tangible. Across a range of different
        creative mediums, I explore ways of thinking, solving problems, and
        telling stories. Every project is another opportunity to learn by
        making.
      </p>
    </div>

    <div class="container">
      <div class="center-circle">
        <img src="/assets/spiral.png" alt="ripple circle" />
      </div>
      <div class="center-bug">
        <img src="/assets/bugc.png" alt="illustration of a beetle" />
      </div>
    </div>

    <div class="intro-text-right">
      <h2>Why I Create</h2>
      <p>
        I create because making something is often the best way I know how to
        understand an idea. Whether I'm drawing, designing, programming, or
        writing, I'm drawn to the challenge of taking something abstract and
        giving it form.
      </p>
    </div>

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
  </main>
</template>

<style scoped>
.explore {
  max-width: 600px;
  margin: 60px auto 40px;
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

@media (max-width: 900px) {
  .explore {
    margin-top: 20px;
  }
}
</style>
