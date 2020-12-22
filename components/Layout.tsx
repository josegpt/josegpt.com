import React from "react"
import NextHead from "next/head"

import Logo from "./Logo"
import Footer from "./Footer"
import Projects from "./Projects"
import Copyright from "./Copyright"
import useMenu from "../hooks/useMenu"
import SocialMedia from "./SocialMedia"
import Navigation, { NavigationButton } from "./Navigation"

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  const { isMenuOpen, showMenu, hideMenu } = useMenu()

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800 bg-white dark:bg-black dark:text-white">
      <NextHead>
        <meta key="charset" charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta
          key="description"
          name="description"
          content="My name is Jose G Perez Taveras and I am a Software Engineer"
        />
        <meta key="author" name="author" content="Jose G Perez Taveras" />
        <meta
          key="keywords"
          name="keywords"
          content="HTML,CSS,XML,JavaScript,Node,Docker,C++,Java,Python,GoLang,Haskell"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="theme-color" name="theme-color" content="#D0021B" />
        <meta
          property="og:title"
          content="Jose G &mdash; software engineer"
          key="title"
        />
        <title>Jose G &mdash; software engineer</title>
      </NextHead>
      <Navigation>
        <Logo />
        <NavigationButton onClick={showMenu} text="projects" />
      </Navigation>
      <main className="flex items-center justify-center flex-grow">
        {children}
      </main>
      <Footer>
        <SocialMedia />
        <Copyright />
      </Footer>
      <Projects isOpen={isMenuOpen} hideMenu={hideMenu} />
    </div>
  )
}

export default Layout
