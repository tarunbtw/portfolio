import * as React from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

export interface AuroraBarsProps {
  /** @default 24 */
  barCount?: number
  /** gradient color stops, bottom to top — @default ["#ffd6eb", "#ff9acb", "#ff5aa6", "#ff2d78", "#00000000"] */
  colors?: string[]
  /** max bar height as fraction of container height — @default 0.92 */
  maxHeightRatio?: number
  /** min bar height as fraction of container height — @default 0.18 */
  minHeightRatio?: number
  /** undulation speed — @default 0.5 */
  speed?: number
  /** @default 3 */
  gap?: number
  /** px blur per bar, creates soft glow — @default 0 */
  blur?: number
  /** @default "transparent" */
  background?: string
  className?: string
}

/** two sine waves per bar for organic undulating movement across the entire width */
function barHeight(
  index: number,
  total: number,
  time: number,
  minH: number,
  maxH: number,
): number {
  const phase1 = (index / total) * Math.PI * 2
  const phase2 = (index / total) * Math.PI * 4.6

  const wave =
    0.5 +
    0.28 * Math.sin(time * 1.15 + phase1) +
    0.22 * Math.sin(time * 0.75 + phase2)

  return minH + wave * (maxH - minH)
}

export function AuroraBars({
  barCount = 24,
  colors = ['#ffd6eb', '#ff9acb', '#ff5aa6', '#ff2d78', '#00000000'],
  maxHeightRatio = 0.92,
  minHeightRatio = 0.18,
  speed = 0.5,
  gap = 3,
  blur = 0,
  background = 'transparent',
  className = '',
}: AuroraBarsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [heights, setHeights] = React.useState<number[]>(() =>
    Array.from({ length: barCount }, (_, i) =>
      barHeight(i, barCount, 0, minHeightRatio, maxHeightRatio),
    ),
  )

  const timeRef = React.useRef(0)

  useAnimationFrame((_, delta) => {
    timeRef.current += (delta / 1000) * speed
    const t = timeRef.current
    setHeights(
      Array.from({ length: barCount }, (_, i) =>
        barHeight(i, barCount, t, minHeightRatio, maxHeightRatio),
      ),
    )
  })

  const gradientStop = colors
    .map((c, i) => `${c} ${Math.round((i / (colors.length - 1)) * 100)}%`)
    .join(', ')
  const gradient = `linear-gradient(to top, ${gradientStop})`

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ background }}
    >
      <div className="absolute -inset-x-12 sm:-inset-x-8 inset-y-0 flex items-end">
        {Array.from({ length: barCount }).map((_, i) => {
          const heightFraction = heights[i] ?? maxHeightRatio
          return (
            <div
              key={i}
              className="flex-1"
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                padding: `0 ${gap / 2}px`,
              }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: `${heightFraction * 100}%`,
                  background: gradient,
                  borderRadius: '9999px 9999px 0 0',
                  filter: blur > 0 ? `blur(${blur}px)` : undefined,
                  opacity: 0.95,
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
