import { useState, useEffect } from "react"

export default () => {
  const now = new Date()
  const hour = now.getHours()

  const initialValue = () => {
    if (hour > 4 || hour >= 16) {
      return true
    }

    return false
  }

  const [isDarkMode, setDarkMode] = useState(initialValue)

  useEffect(() => {
    const interval = setInterval(() => {
      if (hour < 4 || hour >= 16) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  return [isDarkMode, setDarkMode]
}
