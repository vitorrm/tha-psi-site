<template>
  <main class="main px-4 md:px-0">
    <!--<div class="container mx-auto">
      <site-header /> 
    </div>-->

    <slot />

    <!--<site-footer /> -->
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="css"></style>
