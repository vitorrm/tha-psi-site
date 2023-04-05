<template>
  <main class="main px-4 md:px-0">
    <Header />
    <slot />
    <!--<site-footer /> -->
  </main>
</template>

<script setup lang="ts">
import Header from '~/components/partials/Header.vue'
</script>

<style lang="scss">
@import '~/assets/css/main2.scss';
</style>
