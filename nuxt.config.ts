import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
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
});
