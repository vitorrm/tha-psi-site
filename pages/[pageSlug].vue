<template>
  <section class="page" :class="page.slug">
    <h1
      class="page__title text-lg md:text-xl lg:text-4xl xl:text-6xl text-center py-8 md:py-16"
    >
      {{ page.title }}
    </h1>

    <div
      v-html="page.content"
      class="page__content markdown pt-4 md:pt-6 md:pb-24"
    />
  </section>
</template>

<script lang="ts" setup>
import { Page } from '~/shims/contentTypes'
const { pageSlug } = useRoute().params
const result = await useAsyncData('page-detail', () =>
  queryContent<Page>(`pages/${pageSlug}`).findOne()
)
if (!result.data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
const page = result.data.value!
useHead({
  title: page.title,
})
useServerSeoMeta({
  title: page.title,
  description: page.seoDescription,
  ogImage: page.seoMetaImage,
})

// const contentStore = useContentStore()
// contentStore.increment()
// console.log('incrementCounter', contentStore.counter)
</script>
