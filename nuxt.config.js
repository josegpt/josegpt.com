export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Jose G - software engineer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "author",
        name: "author",
        content: "Jose G Perez Taveras",
      },
      {
        hid: "description",
        name: "description",
        content: "My name is Jose G Perez Taveras and I am a Software Engineer",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "HTML,CSS,XML,JavaScript,Node,Docker,C++,Java,Python,GoLang,Haskell",
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#D0021B",
      },
      {
        hid: "og-title",
        property: "og:title",
        content: "Jose G &bullet; software engineer",
      },
      {
        hid: "og-description",
        property: "og:description",
        content: "My name is Jose G Perez Taveras and I am a Software Engineer",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "/img/execode-logo.svg",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {},

  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.ts",
      },
      {
        code: "es",
        file: "es-ES.ts",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
  },
}
