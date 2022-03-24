import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    title: "A Demo Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "This website uses default tailwind and storyblok configuration",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  //
  publicRuntimeConfig: {
    baseUrl: "https://storyblok.com",
  },
  privateRuntimeConfig: {
    apiSecret: process.env.STORYBLOK_API_KEY,
  },
  //
  css: ["~/assets/css/tailwind.css"],
  //
  components: [],
  modules: [],
  //
  plugins: [],
  //
  buildModules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "apiSecret",
        bridge: true,
        apiOptions: {}, // storyblok-js-client options
        useApiClient: true,
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
});
