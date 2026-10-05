import { useState, useEffect } from 'react'
import { LayoutGroup, AnimatePresence, motion } from 'framer-motion'
import { SmoothScroll } from '../components/layout/SmoothScroll'
import { Hero } from '../components/sections/Hero'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { Footer } from '../components/layout/Footer'
import { IntroSplash } from '../components/layout/IntroSplash'

export function HomePage() {
  const [isIntro, setIsIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntro(false)
    }, 2300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LayoutGroup>
      {/* Intro Splash Background Screen */}
      <AnimatePresence>
        {isIntro && (
          <motion.div
            key="splash-bg"
            className="fixed inset-0 bg-white dark:bg-[#0a0a0c] z-40 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Centered Intro Splash (Spider-Man avatar + Rolling Text) */}
      <IntroSplash isIntro={isIntro} />

      {/* Framer Motion physics-based smooth scrolling for the whole page */}
      <SmoothScroll>
        <div className="min-h-screen w-full flex flex-col items-center justify-start bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100">
          {/* Central content container matching abhee.dev max-w-2xl */}
          <div className="w-full max-w-2xl px-5 pt-8 pb-6 sm:pb-12 flex flex-col items-start justify-start relative">
            <Hero isIntro={isIntro} />
            <ExperienceSection />
            <ProjectsSection />
          </div>

          {/* Aurora Bars Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </LayoutGroup>
  )
}
