import React from "react"
import NextLink from "next/link"

const Logo = () => (
  <NextLink href="/">
    <a className="flex items-center">
      <img
        src="img/execode-logo.svg"
        alt="josegpt.com"
        className="w-24 h-24 sm:h-32 sm:w-32"
      />
    </a>
  </NextLink>
)

export default Logo
