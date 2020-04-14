import { useState } from "react"

export const isNight = () => {
  const now = new Date()
  const hour = now.getHours()

  if (hour < 4 || hour >= 16) {
    return true
  }

  return false
}

export const useDarkMode = (value) => {
  const [isDarkMode, setDarkMode] = useState(value || isNight)

  return [isDarkMode, setDarkMode]
}
