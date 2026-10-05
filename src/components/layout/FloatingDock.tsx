import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { navigationItems } from '../../data/navigation'
import { playThockSound, preloadThockSound } from '../../utils/sound'

interface FloatingDockProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

/**
 * Authentic circular progressbar that fills clockwise with page scroll
 */
function CircularProgressBar() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 160,
    mass: 0.08,
    restDelta: 0.001,
  })

  const radius = 5.5
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = useTransform(
    smoothProgress,
    (val) => circumference * (1 - Math.min(1, Math.max(0, val)))
  )

  return (
    <div className="relative w-4.5 h-4.5 sm:w-4 sm:h-4 flex items-center justify-center shrink-0">
      <svg className="w-4.5 h-4.5 sm:w-4 sm:h-4 -rotate-90" viewBox="0 0 16 16">
        {/* Background Track */}
        <circle
          cx="8"
          cy="8"
          r={radius}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-neutral-200 dark:text-neutral-700/80"
        />
        {/* Active Progress Fill */}
        <motion.circle
          cx="8"
          cy="8"
          r={radius}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          className="text-neutral-900 dark:text-neutral-100"
        />
        {/* Starting dot at 12 o'clock */}
        <circle
          cx="13.5"
          cy="8"
          r="0.8"
          className="fill-neutral-900 dark:fill-neutral-100"
        />
      </svg>
    </div>
  )
}

export function FloatingDock({ theme, onToggleTheme }: FloatingDockProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Match active item based on current route
  const currentItem =
    navigationItems.find((item) => {
      if (item.path === '/') return location.pathname === '/'
      return location.pathname.startsWith(item.path)
    }) ?? navigationItems[0]

  // Preload authentic NovelKeys Cream thock sound on mount
  useEffect(() => {
    preloadThockSound()
  }, [])

  // Close on outside click or Escape
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleNavClick = (path: string) => {
    playThockSound()
    navigate(path)
    setIsOpen(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Floating Interactive Dock - Comfortable on mobile, sleek on desktop */}
      <div
        ref={containerRef}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2 sm:gap-1.5"
      >
        {/* Navigation Element (Pill when collapsed, List Card when expanded) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Collapsed Pill - Finger-friendly on mobile, compact on desktop */
              <motion.button
                key="pill"
                type="button"
                onClick={() => {
                  playThockSound()
                  setIsOpen(true)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-9 sm:h-8 px-3 sm:px-2.5 rounded-full bg-white/95 dark:bg-[#121214]/95 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md shadow-black/5 dark:shadow-black/20 backdrop-blur-xl flex items-center gap-2 sm:gap-1.5 cursor-pointer hover:shadow-lg transition-shadow select-none"
                aria-label="Navigation menu"
                aria-expanded={false}
              >
                <CircularProgressBar />

                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentItem.id}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.15 }}
                    className="font-medium text-xs sm:text-[11px] text-neutral-900 dark:text-neutral-100 whitespace-nowrap font-mono"
                  >
                    {currentItem.label}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            ) : (
              /* Expanded Menu Card - Comfortable on mobile, sleek on desktop */
              <motion.div
                key="card"
                initial={{ opacity: 0, scale: 0.94, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-38 sm:w-36 p-1.25 sm:p-1 rounded-2xl bg-white/95 dark:bg-[#121214]/95 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xl shadow-black/10 dark:shadow-black/30 backdrop-blur-xl flex flex-col gap-0.5 select-none"
                role="menu"
                aria-expanded={true}
              >
                {navigationItems.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path)

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.path)}
                      className={`flex items-center gap-2.5 sm:gap-2 px-2.5 sm:px-2 py-1.5 sm:py-1.25 rounded-full text-xs sm:text-[11px] transition-all text-left cursor-pointer w-full active:scale-[0.98] ${
                        isActive
                          ? 'bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-900 dark:text-white font-medium'
                          : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 font-normal'
                      }`}
                      role="menuitem"
                    >
                      <span
                        className={`rounded-full shrink-0 ${
                          isActive
                            ? 'w-1.5 h-1.5 bg-neutral-900 dark:bg-white'
                            : 'w-1 h-1 bg-neutral-400 dark:bg-neutral-500 ml-0.5'
                        }`}
                      />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Circular Theme Toggle Button - NovelKeys Cream Thock Sound on Click */}
        <motion.button
          type="button"
          onClick={() => {
            playThockSound()
            onToggleTheme()
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/95 dark:bg-[#121214]/95 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md shadow-black/5 dark:shadow-black/20 backdrop-blur-xl flex items-center justify-center text-neutral-900 dark:text-neutral-100 cursor-pointer select-none shrink-0"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <Moon className="w-3.5 h-3.5 text-white fill-current" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-black fill-current" />
          )}
        </motion.button>
      </div>
    </>
  )
}
