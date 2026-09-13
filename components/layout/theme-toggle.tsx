'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const shouldUseDark = savedTheme !== 'light'

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
    document.documentElement.classList.toggle('light', !shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark

    setIsDark(nextIsDark)
    document.documentElement.classList.toggle('dark', nextIsDark)
    document.documentElement.classList.toggle('light', !nextIsDark)
    window.localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  )
}
