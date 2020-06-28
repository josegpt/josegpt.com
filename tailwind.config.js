module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      letterSpacing: {
        wide: ".05rem",
        wider: ".25rem",
        widest: ".5rem",
      },
      colors: {
        red: {
          "100": "#FAE6E8",
          "200": "#F3C0C6",
          "300": "#EC9AA4",
          "400": "#DE4E5F",
          "500": "#D0021B",
          "600": "#BB0218",
          "700": "#7D0110",
          "800": "#5E010C",
          "900": "#3E0108",
        },
      },
    },
  },
  plugins: [],
}
