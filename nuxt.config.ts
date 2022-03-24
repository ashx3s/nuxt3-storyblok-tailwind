import { defineNuxtConfig } from "nuxt3";
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    "/@": "./",
  },
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
    apiToken: process.env.STORYBLOK_API_KEY,
  },
  privateRuntimeConfig: {},
  //
  css: ["~/assets/css/fonts.css"],
  //
  components: [],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_API_KEY,
        bridge: true,
        apiOptions: {}, // storyblok-js-client options
        useApiClient: true,
      },
    ],
  ],
  //
  plugins: [],
  //
  buildModules: ["@nuxtjs/tailwindcss"],
});
