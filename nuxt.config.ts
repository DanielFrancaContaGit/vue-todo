// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    '@': resolve(__dirname, "/"),
  },
  css: [
    "~/assets/main.scss"
  ],
  modules:[
    '@nuxt/ui',
    'vue3-carousel-nuxt',
  ],
  carousel: {
    prefix: 'Carrousel'
  }
})
