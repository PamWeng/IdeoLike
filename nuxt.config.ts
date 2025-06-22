// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/scss/style.scss",
    "swiper/css",
    "swiper/css/effect-fade",
    "swiper/css/pagination",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/default/_variables.scss";',
        },
      },
    },
  },
  nitro: {
    devServer: {
      watch: ["./src"],
    },
    preset: "static",
  },
  plugins: ["@/plugins/aos"],
  // plugins: ["@/plugins/aos.client"],

  alias: {
    "@data": "/data",
  },

  app: {
    baseURL: "/IdeoLike/",
  },
});
