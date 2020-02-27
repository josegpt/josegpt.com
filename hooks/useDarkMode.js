import { useState } from "react"

export default (value) => {
  const now = new Date()
  const hour = now.getHours()

  const initialValue = () => {
    if (hour < 4 || hour >= 16) {
      return true
    }

    return false
  }

  const [isDarkMode, setDarkMode] = useState(value || initialValue)

  return [isDarkMode, setDarkMode]
}
