// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@element-plus/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [ 'element-plus/dist/index.css',],
})
