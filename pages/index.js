import Head from "next/head"
import useDarkMode from "../hooks/useDarkMode"

import constants from "../constants"
import { Container } from "../components/Layout"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

export default () => {
  const [isDarkMode] = useDarkMode()

  return (
    <Container data-theme={ isDarkMode ? "dark" : "" }>
      <Head>
        <meta name="description" content="My name is Jose G Perez Taveras and I am a Software Engineer" />
        <meta name="author" content="Jose G Perez Taveras" />
        <meta name="keywords" content="HTML,CSS,XML,JavaScript,Node,Docker,C++,Java,Python,GoLang" />
        <meta name="theme-color" content="#D0021B" />
        <title>{ constants.name } &mdash; { constants.profession }</title>
      </Head>
  
      <Header
        isDarkMode={isDarkMode}
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
  )
}
