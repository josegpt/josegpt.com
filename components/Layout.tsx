import React from "react"

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
