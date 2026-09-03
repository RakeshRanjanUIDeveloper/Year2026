import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.style.setProperty('--blob-1', 'rgba(109,40,217,0.3)')
      root.style.setProperty('--blob-2', 'rgba(67,56,202,0.3)')
      root.style.setProperty('--blob-3', 'rgba(22,78,99,0.2)')
      root.style.setProperty('--scroll-bar', 'linear-gradient(to right, #a855f7, #ec4899, #06b6d4)')
    } else {
      root.style.setProperty('--blob-1', 'rgba(6,182,212,0.3)')
      root.style.setProperty('--blob-2', 'rgba(16,185,129,0.3)')
      root.style.setProperty('--blob-3', 'rgba(99,102,241,0.2)')
      root.style.setProperty('--scroll-bar', 'linear-gradient(to right, #06b6d4, #10b981, #6366f1)')
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)