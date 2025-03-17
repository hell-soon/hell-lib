export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/scripts',
  ],

  components: [
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  build: {
    transpile: ['hell-lib-ui'],
  },
})
