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
    // prerender: {
    //   crawlLinks: true, //nuxt爬蟲產生對應的頁面
    //   failOnError: false, //忽略沒有對應的page
    // },
    preset: "static", //gh-pages deploy用
  },
  // plugins: ["@/plugins/aos"],
  plugins: ["@/plugins/aos.client"],

  alias: {
    "@data": "/data",
    "@utility": "/utility",
  },

  app: {
    baseURL: "/IdeoLike/", //gh-pages deploy用
    // baseURL: "/",
  },
});
