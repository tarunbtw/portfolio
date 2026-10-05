import { ArrowUpRight } from 'lucide-react'
import { AuroraBars } from '../ui/aurora-bars'

const AURORA_COLORS = [
  '#ff2d78',
  '#c04aff',
  '#4a6fff',
  '#0a1aff',
  '#00000000',
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full relative overflow-hidden mt-4 sm:mt-12 pt-6 sm:pt-14 pb-26 sm:pb-16 flex flex-col items-center justify-end min-h-[220px] sm:min-h-[260px]">
      {/* Aurora Bars Background Component */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AuroraBars
          barCount={60}
          colors={AURORA_COLORS}
          maxHeightRatio={0.95}
          minHeightRatio={0.45}
          speed={3}
          gap={3}
          blur={26}
          background="transparent"
        />
      </div>

      {/* Top gradient mask to blend footer seamlessly into preceding section */}
      <div className="absolute top-0 inset-x-0 h-10 sm:h-14 bg-gradient-to-b from-white dark:from-[#0a0a0c] to-transparent pointer-events-none z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-2xl px-5 flex flex-row items-center justify-between gap-3 text-xs sm:text-sm font-medium font-mono text-neutral-800 dark:text-neutral-200">
        {/* Copyright notice */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span>© {currentYear} Tarun.</span>
          <span className="hidden sm:inline text-neutral-400 dark:text-neutral-600">/</span>
          <span className="hidden sm:inline">All rights reserved.</span>
        </div>

        {/* Source link */}
        <a
          href="https://github.com/tarunbtw/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 hover:text-neutral-950 dark:hover:text-white transition-colors py-1 shrink-0"
        >
          <span>Source</span>
          <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  )
}
