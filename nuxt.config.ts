// https://nuxt.com/docs/api/configuration/nuxt-config

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
        {
          name: 'description',
          content:
            'Encontre acolhimento e qualidade ética na psicoterapia clínica presencial ou online com a psicóloga Thainara Rocha em Leme-SP',
        },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:description',
          content:
            'Encontre acolhimento e qualidade ética na psicoterapia clínica presencial ou online com a psicóloga Thainara Rocha em Leme-SP',
        },
        {
          name: 'og:title',
          content:
            'Thainara Rocha em Leme-SP | Presencial e Online | Ivana Tomaz Psicóloga | Em Leme-SP e Online',
        },
        {
          name: 'og:site_name',
          content: 'Thainara Rocha Psicóloga | Em Leme-SP e Online',
        },
        {
          name: 'twitter:title',
          content:
            'Thainara Rocha em Leme-SP | Presencial e Online | Ivana Tomaz Psicóloga | Em Leme-SP e Online',
        },
        {
          name: 'twitter:description',
          content:
            'Encontre acolhimento e qualidade ética na psicoterapia clínica presencial ou online com a psicóloga Thainara Rocha em Leme-SP',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { name: 'keywords', content: 'Psicóloga, Leme, Atendimento' },
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

  // generate: {
  //   routes: [
  //     '/blog/:pageSlug',
  //     // add additional dynamic routes here as needed
  //   ],
  // },
})
