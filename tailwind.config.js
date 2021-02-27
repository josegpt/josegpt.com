const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.elm"],
  darkMode: "media",
  theme: {
    screens: {
      xxs: "340px",
      xs: "440px",
      ...screens,
    },
    extend: {
      colors: {
        red: {
          100: "#FAE6E8",
          200: "#F3C0C6",
          300: "#EC9AA4",
          400: "#DE4E5F",
          500: "#D0021B",
          600: "#BB0218",
          700: "#7D0110",
          800: "#5E010C",
          900: "#3E0108",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
};
