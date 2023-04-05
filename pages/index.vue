<template>
  <p>Test2</p>
  <li v-for="page of extraPages" :key="page._path">
    <NuxtLink :to="page.slug">{{ page.title }} - {{ page.slug }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { getAllPages } from '~/content-utils'
const extraPages = await getAllPages()
</script>
