// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   css: [
    // локальные файлы
    '~/assets/css/main.css'],
  modules: [
    '@unocss/nuxt',
  ],
})
