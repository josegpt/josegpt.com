import { useState } from "react"

export default () => {
  const initialValue = () => {
    const now = new Date()
    const hour = now.getHours()

    if (hour < 4 || hour >= 16) {
      return true
    }
    
    return false
  }

  const [isDarkMode, setDarkMode] = useState(initialValue)

  const toggleDarkMode = () => isDarkMode ? setDarkMode(false) : setDarkMode(true)

  return [isDarkMode, toggleDarkMode]
}
