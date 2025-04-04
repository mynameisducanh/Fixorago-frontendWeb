// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'fixorago',
      htmlAttrs: {
        lang: 'vi',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,  initial-scale=1.0',
        },
        {
          charset: 'utf-8',
        },
        ...(process.env.APP_NODE_ENV === 'dev'
          ? [
              {
                hid: 'robots',
                name: 'robots',
                content: 'noindex',
              },
            ]
          : [{ name: 'description', content: 'This is the official website of VinaCad.' }]),
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],

  css: ['~/assets/scss/styles.scss', 'ant-design-vue/dist/reset.css'],

  plugins: ['~/plugins/ofetch', '~/plugins/antd'],

  ssr: false,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/abstracts/_variables.scss" as *;',
        },
      },
    },
  },

  i18n: {
    lazy: false,
    langDir: 'locales/',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'vi', name: 'Tiếng Việt', file: 'vi.json' },
      { code: 'ja', name: '日本語', file: 'ja.json' },
    ],
    defaultLocale: 'vi',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'vi',
    },
    strategy: 'no_prefix',
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.APP_API_BASE_URL || '',
    },
  },

  compatibilityDate: '2024-11-01',
});
