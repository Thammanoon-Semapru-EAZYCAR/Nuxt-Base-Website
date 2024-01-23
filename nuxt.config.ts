// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },

  $development: {
    devtools: { enabled: true },
    app: {
      head: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
      },
      pageTransition: { name: "page", mode: "out-in" },
      layoutTransition: { name: "layout", mode: "out-in" },
    },
    runtimeConfig: {
      // The private keys which are only available server-side
      apiSecret: "123",
      // Keys within public are also exposed client-side
      public: {
        apiBase: "/api",
      },
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/content"],
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ["/sitemap.xml", "/robots.txt"],
  //   },
  // },
  typescript: {
    typeCheck: true,
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
});