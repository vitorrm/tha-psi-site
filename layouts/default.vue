<template>
  <main class="main px-3 md:px-0">
    <Header />
    <slot />
    <!--<site-footer /> -->
  </main>
</template>

<script setup lang="ts">
import Header from '~/components/partials/Header.vue'
</script>

<style lang="scss">
@import '~/assets/css/main.scss';
</style>
