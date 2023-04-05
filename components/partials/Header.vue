<template>
  <header class="w-full bg-black text-gray-100 body-font mb-0 shadow-sm">
    <NavBar :links="links" />
  </header>
</template>

<script lang="ts" setup>
import NavLink from '~/types/NavLink'
import NavBar from '../commons/NavBar.vue';

const links: NavLink[] = []
links.push({ href: '/', title: 'Início' } as NavLink)
links.push({ href: '/abordagem', title: 'Abordagem' } as NavLink)
links.push({ href: '/about', title: 'Sobre' } as NavLink)
links.push({ href: '/blog', title: 'Blog' } as NavLink)
links.push({ href: '/contato', title: 'Contato' } as NavLink)
links.push({ href: '/test', title: 'Test' } as NavLink)
</script>

<style scoped></style>
