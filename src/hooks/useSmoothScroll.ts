import { useEffect } from 'react'
import Lenis from 'lenis'

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    let frameId: number

    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const hash = anchor.getAttribute('href')!
        const targetEl = document.querySelector(hash)
        if (targetEl) {
          e.preventDefault()
          lenis.scrollTo(targetEl as HTMLElement, { offset: -80 })
          window.history.pushState(null, '', hash)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(frameId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])
}
