export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
    '@nuxt/icon',
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-GB',
      },
      {
        code: 'de',
        name: 'Deutsch',
        language: 'de-DE',
      },
    ],
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL,
      API_URL_DE: process.env.NUXT_PUBLIC_API_URL_DE,
      IMAGE_BASE_URL: process.env.NUXT_PUBLIC_IMAGE_BASE_URL,
    },
  },
  fonts: {
    provider: 'google',
    defaults: {
      weights: [300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
  },
});