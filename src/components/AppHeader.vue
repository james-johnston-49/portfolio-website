<script setup>
defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header>
    <div class="title-row">
      <div class="branding">
        <img src="/assets/logo.png" class="logo" alt="James Johnston logo" />

        <div class="name">
          <h2>James</h2>
          <h2>Johnston</h2>
        </div>
      </div>

      <h1>{{ pageTitle }}</h1>

      <div></div>
      <!-- empty right side -->
    </div>
  </header>
</template>
