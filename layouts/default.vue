<template>
  <a href="#main-content" class="sr-only focus:not-sr-only">Skip to content </a>
  <Header />
  <main id="main-content" class="main px-3 md:px-0">
    <slot />
    <!--<site-footer /> -->
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/partials/Header.vue'
import Footer from '~/components/partials/Footer.vue'
</script>

<style lang="scss">
@import '~/assets/css/main.scss';
</style>
