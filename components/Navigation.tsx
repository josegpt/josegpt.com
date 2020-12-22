import React from "react"

type NavigationButtonProps = {
  text: string
  onClick: () => void
}

export const NavigationButton = ({ text, onClick }: NavigationButtonProps) => (
  <button
    onClick={onClick}
    className="font-semibold tracking-wider lowercase transition duration-300 ease-in-out hover:text-red-500 "
  >
    {text}
  </button>
)

type NavigationProps = {
  children: JSX.Element[]
}

const Navigation = ({ children }: NavigationProps) => (
  <nav className="flex items-center justify-between px-6 h-28 sm:justify-around">
    {children}
  </nav>
)

export default Navigation
