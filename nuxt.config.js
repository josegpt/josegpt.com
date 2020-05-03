
export default {
  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    title: "Jose G — software engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description",  content: "My name is Jose G Perez Taveras and I am a Software Engineer" },
      { name: "author", content: "Jose G. Perez Taveras" },
      { name: "theme-color", content: "#D0021B" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/vueFeather"
  ]
}
