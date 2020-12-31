import React from "react"

import Logo from "./Logo"
import Head from "./Head"
import Footer from "./Footer"
import Copyright from "./Copyright"
import SocialMedia from "./SocialMedia"
import Navigation, { NavigationButton } from "./Navigation"

type LayoutProps = {
  isMenuOpen: boolean
  showMenu: () => void
  hideMenu: () => void
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ showMenu, children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800 bg-white dark:bg-black dark:text-white">
    <Head />
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
  </div>
)

export default Layout
