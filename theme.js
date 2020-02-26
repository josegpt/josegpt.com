import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  
  @media only screen and (max-width: 25em) {
    font-size: 50%;
  }
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: .1rem;
  line-height: 1.6;
  transition: var(--animation);
}
`

export const lightTheme = {
  primary: {
    100: "#FAE6E8",
    200: "#F3C0C6",
    300: "#EC9AA4",
    400: "#DE4E5F",
    500: "#D0021B",
    600: "#BB0218",
    700: "#7D0110",
    800: "#5E010C",
    900: "#3E0108"
  },
  secondary: {
    100: "#FEFEFE",
    200: "#FDFDFD",
    300: "#FCFCFC",
    400: "#F9F9F9",
    500: "#F7F7F7",
    600: "#DEDEDE",
    700: "#949494",
    800: "#6F6F6F",
    900: "#4A4A4A"
  },
  tertiary: {
    100: "#E8E8E8",
    200: "#C7C6C6",
    300: "#A5A4A4",
    400: "#615F5F",
    500: "#1D1B1B",
    600: "#1A1818",
    700: "#111010",
    800: "#0D0C0C",
    900: "#090808"
  }
}

export const darkTheme = {
  primary: {
    100: "#3E0108",
    200: "#5E010C",
    300: "#7D0110",
    400: "#BB0218",
    500: "#D0021B",
    600: "#DE4E5F",
    700: "#EC9AA4",
    800: "#F3C0C6",
    900: "#FAE6E8"
  },
  secondary: {
    100: "#090808",
    200: "#0D0C0C",
    300: "#111010",
    400: "#1A1818",
    500: "#1D1B1B",
    600: "#615F5F",
    700: "#A5A4A4",
    800: "#C7C6C6",
    900: "#E8E8E8"
  },
  tertiary: {
    100: "#4A4A4A",
    200: "#6F6F6F",
    300: "#949494",
    400: "#DEDEDE",
    500: "#F7F7F7",
    600: "#F9F9F9",
    700: "#FCFCFC",
    800: "#FDFDFD",
    900: "#FEFEFE"
  }
}

export default {
  animations: {
    default: ".2s cubic-bezier(0.24, 0.62, .94, .51)"
  },
  layout: {
    header: "8rem",
    main: "100vh",
    footer: "18rem"
  },
  spaces: {
    sm: ".16rem",
    md: ".32rem",
    d: ".64rem",
    l: "1.28rem",
    xl: "2.56rem"
  }
}