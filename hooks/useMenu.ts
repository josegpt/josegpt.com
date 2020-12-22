import { useState } from "react"

const useMenu = () => {
  const [isMenuOpen, setMenu] = useState(false)

  return {
    isMenuOpen,
    showMenu: () => setMenu(true),
    hideMenu: () => setMenu(false),
  }
}

export default useMenu
