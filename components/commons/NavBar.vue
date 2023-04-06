<template>
  <div class="container mx-auto flex justify-between items-center py-5 px-5">
    <a
      href="/"
      class="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0 -mt-5"
    >
      <div class=" container flex bg-white rounded-b-2xl h-16 w-44 overflow-hidden">
        <nuxt-img
          src="images/logos/businessCard3.png"
          alt=""
          class="m-auto h-16 object-top"
        />
      </div>
    </a>
    <h2 class="sr-only" id="block-mainnavigation-4-menu">Main navigation</h2>
    <nav
      class="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide"
    >
      <ul
        class="md:flex flex-wrap items-center justify-center text-base tracking-wide"
      >
        <li v-for="link of links" :key="link.href">
          <NuxtLink :to="link.href" class="mr-8 hover:text-blue-gray">{{
            link.title
          }}</NuxtLink>
        </li>
        <li>
          <WhatsappLink
            class="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0"
          />
        </li>
      </ul>
    </nav>

    <button
      class="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
      @click="swapMobileNav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-200 hover:to-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  <div
    v-if="menu.isOpen"
    class="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold"
  >
    <ul class="block">
      <li v-for="link of links" :key="link.href" class="px-3 py-2">
        <NuxtLink
          :to="link.href"
          class="rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >{{ link.title }}</NuxtLink
        >
      </li>
      <li class="mt-5 px-3 py-2 shadow shadow-black">
        <WhatsappLink class="rounded-md" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import WhatsappLink from '~/components/commons/WhatsappLink.vue'
import NavLink from '~/types/NavLink'
defineProps({
  links: {
    type: Array as PropType<NavLink[]>,
    required: true,
  },
})
const menu = reactive({
  isOpen: false,
})

const route = useRoute()
watch(
  route,
  (value) => {
    menu.isOpen = false
  },
  { deep: true, immediate: true }
)

const swapMobileNav = () => {
  menu.isOpen = !menu.isOpen
}
</script>

<style scoped></style>
