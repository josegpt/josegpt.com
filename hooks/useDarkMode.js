import { useState, useEffect } from "react"

export default () => {
  const [isDarkMode, setDarkMode] = useState(window.localStorage.getItem("isDarkMode") || false)

  const toggleDarkMode = () => {
    if (isDarkMode) {
      window.localStorage.setItem("isDarkMode", false)
      setDarkMode(false)
    } else {
      window.localStorage.setItem("isDarkMode", true)
      setDarkMode(true)
    }
  }

  const setTheme = () => setDarkMode(!isDarkMode)

  useEffect(() => {
    const localTheme = window.localStorage.getItem("isDarkMode")
    localTheme && setDarkMode(localTheme)
  }, [isDarkMode])
 
  return [isDarkMode, toggleDarkMode]
}
