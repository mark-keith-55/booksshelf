export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    '@components': './components',
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'StyleSheet',
          href: 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css'
        }
        
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      tailwindcss: {
        exposeConfig: true,
        viewer: true,
        // and more...
      }
    }
  },

  typescript: {
    strict: true, // 厳格な型チェックを有効化
  },

  compatibilityDate: '2025-02-08',
})