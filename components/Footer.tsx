import React from "react"

type FooterProps = {
  children: JSX.Element[]
}

const Footer = ({ children }: FooterProps) => <footer>{children}</footer>

export default Footer
