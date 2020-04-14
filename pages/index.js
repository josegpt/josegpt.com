import Head from "next/head"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"

import constants from "../constants"
import Main from "../components/Main"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "../components/Layout"
import { useDarkMode, isNight } from "../hooks/useDarkMode"
import theme, { GlobalStyle, lightTheme, darkTheme } from "../theme"


export default () => {
  const [isDarkMode, setDarkMode] = useDarkMode()
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDarkMode(isNight())
    }, 1000)
    return () => clearInterval(interval)
  }, [isDarkMode])

  return (
    <ThemeProvider theme={{ ...theme, colors: isDarkMode ? darkTheme : lightTheme  }}>
      <>
        <GlobalStyle />
        <Container>
          <Head>
            <meta name="description" content="My name is Jose G Perez Taveras and I am a Software Engineer" />
            <meta name="author" content="Jose G Perez Taveras" />
            <meta name="keywords" content="HTML,CSS,XML,JavaScript,Node,Docker,C++,Java,Python,GoLang" />
            <meta name="theme-color" content="#D0021B" />
            <title>{ constants.name } &mdash; { constants.profession }</title>
          </Head>
      
          <Header
            navigation={constants.navigation}
          />
          <Main
            name={constants.name}
            profession={constants.profession}
          />
          <Footer
            socialNetworks={constants.socialNetworks}
            copyright={constants.copyright}
          />
        </Container>
      </>
    </ThemeProvider>
  )
}
