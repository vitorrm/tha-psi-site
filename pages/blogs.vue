<template>
  <div>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('first-article', () =>
  queryContent<Post>('blog').find()
)
const posts = data
</script>
