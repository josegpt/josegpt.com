import React from "react"

interface iNavigationItem {
  text: string
  link: string
}

function NavigationItem({ text, link }: iNavigationItem): JSX.Element {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block text-sm font-semibold tracking-wide lowercase hover:text-red-500 sm:text-lg"
    >
      {text}
    </a>
  )
}

interface iNavigation {
  navigation: iNavigationItem[]
}

function Navigation({ navigation }: iNavigation): JSX.Element {
  return (
    <nav className="flex py-4">
      {navigation.map((element) => (
        <NavigationItem
          key={element.text}
          text={element.text}
          link={element.link}
        />
      ))}
    </nav>
  )
}

export default Navigation
