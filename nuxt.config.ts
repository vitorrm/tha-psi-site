// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs'
import path from 'path'

// const generateContentRoutes = function () {
//   const routes = fs.readdirSync('./content/pages').map((file) => {
//     return {
//       route: `/blog/${path.parse(file).name}`, // Return the slug
//       payload: require(`./content/pages/${file}`),
//     }
//   })
//   return routes
// }

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxt/image-edge',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      title: 'Nuxt Dojo',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          defer: true,
        },
      ],
    },
  },

  content: {},

  image: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    routes: [
      '/blog/:pageSlug',
      // add additional dynamic routes here as needed
    ]
  }
})
