import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect, type ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

/**
 * SmoothScroll
 * Framer Motion physics-based smooth scroll provider.
 * Wraps page content in a GPU-accelerated motion container with spring-damped inertial scrolling.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)
  const [isTouchDevice] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    )
  })

  // Sync spacer height with content scrollHeight
  useEffect(() => {
    if (isTouchDevice) return

    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }

    updateHeight()

    // Observe dynamic size changes (image loading, tab switching, resizing)
    const resizeObserver = new ResizeObserver(() => {
      updateHeight()
    })

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    window.addEventListener('resize', updateHeight)
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [isTouchDevice])

  // Track window scroll progress with Framer Motion
  const { scrollY } = useScroll()

  // Physics-based spring interpolation tuned for light, responsive, non-viscous glide
  const smoothY = useSpring(scrollY, {
    damping: 15,
    stiffness: 160,
    mass: 0.08,
    restDelta: 0.001,
  })

  // Invert spring value to translate content container
  const y = useTransform(smoothY, (val) => -val)

  // On touch devices, native momentum scroll is optimal
  if (isTouchDevice) {
    return <div className="w-full">{children}</div>
  }

  return (
    <>
      {/* Scroll track spacer providing authentic scrollbar height */}
      <div
        style={{ height: contentHeight }}
        className="w-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Hardware-accelerated Framer Motion container */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 right-0 w-full will-change-transform z-0"
      >
        {children}
      </motion.div>
    </>
  )
}
