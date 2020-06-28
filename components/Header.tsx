import React from "react"

function Header({ children }): JSX.Element {
  return (
    <header className="flex items-center justify-around">{children}</header>
  )
}

export default Header
