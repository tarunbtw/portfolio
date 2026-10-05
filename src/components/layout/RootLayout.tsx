import { useState, useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { flushSync } from 'react-dom'
import { FloatingDock } from './FloatingDock'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark') return stored
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
      root.style.colorScheme = 'dark'
      root.style.setProperty('--vignette-bg', '#0a0a0c')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      root.style.colorScheme = 'light'
      root.style.setProperty('--vignette-bg', '#ffffff')
    }
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement

    const updateDomAndState = () => {
      if (nextTheme === 'dark') {
        root.classList.add('dark')
        root.classList.remove('light')
        root.style.colorScheme = 'dark'
        root.style.setProperty('--vignette-bg', '#0a0a0c')
      } else {
        root.classList.remove('dark')
        root.classList.add('light')
        root.style.colorScheme = 'light'
        root.style.setProperty('--vignette-bg', '#ffffff')
      }
      setTheme(nextTheme)
      localStorage.setItem('theme', nextTheme)
    }

    if (!document.startViewTransition) {
      updateDomAndState()
      return
    }

    document.startViewTransition(() => {
      flushSync(() => {
        updateDomAndState()
      })
    })
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <ScrollToTop />
      {children}
      <FloatingDock theme={theme} onToggleTheme={toggleTheme} />
    </div>
  )
}
