import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RollingText } from '../ui/RollingText'
import { profileData } from '../../data/profile'

interface IntroSplashProps {
  isIntro: boolean
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function IntroSplash({ isIntro }: IntroSplashProps) {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true)
    }, 850)
    return () => clearTimeout(timer)
  }, [])

  if (!isIntro) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none select-none">
      <div className="flex flex-col items-center justify-center gap-5">
        {/* Centered Avatar dropping from top */}
        <motion.div
          layout
          layoutId="pfp-image"
          className="relative z-50"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{
            type: 'tween',
            duration: 0.85,
            ease: easeOut,
          }}
        >
          <img
            src={profileData.pfp}
            alt={profileData.name}
            width={120}
            height={120}
            className="rounded-2xl w-[120px] h-[120px] object-cover shadow-2xl"
          />
        </motion.div>

        {/* Centered Rolling Greeting Text */}
        {showText && (
          <motion.div
            layout
            layoutId="main-text"
            className="relative z-50 text-center"
            transition={{
              type: 'tween',
              duration: 0.85,
              ease: easeOut,
            }}
          >
            <RollingText
              text={profileData.greeting}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
