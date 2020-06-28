import React from "react"

function Main({ children }): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      {children}
    </main>
  )
}

export default Main
