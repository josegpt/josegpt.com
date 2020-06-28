import React from "react"

function Footer({ children }): JSX.Element {
  return (
    <footer className="flex flex-col items-center justify-center p-4">
      {children}
    </footer>
  )
}

export default Footer
