export default defineNuxtConfig({
  devtools: { enabled: true },

  // パスエイリアスの定義
  alias: {
    '@components': './components',
  },

  // 使用するモジュールの定義
  modules: [
    '@pinia/nuxt',          // Pinia の Nuxt 統合
    '@nuxtjs/tailwindcss'   // TailwindCSS の Nuxt モジュール
  ],

  // アプリケーションの設定
  app: {
    head: {
      // CSS ファイルの読み込み
      link: [
        {
          rel: 'stylesheet', // ✅ 修正: `StyleSheet` を小文字の `stylesheet` に
          href: 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css'
        }
      ],
      // JavaScript ファイルの読み込み
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js'
        }
      ]
    }
  },

  // ランタイムコンフィグの設定
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'https://api.themoviedb.org/3', // ✅ 修正: 二重 `runtimeConfig` を削除
    },
    TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN // ✅ 変数名を統一
  },

  // TailwindCSS 設定オプション
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  // TypeScript の設定
  typescript: {
    strict: true, // 厳格な型チェックを有効化
  },

  // 互換性のある日付
  compatibilityDate: '2025-02-08',
})
