import { motion, type Variants } from 'framer-motion'
import { timelineMilestones } from '../../data/experience'

export function ExperienceSection() {
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.97, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: easeOut },
    },
  }

  return (
    <motion.section
      id="exp"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="mt-8 sm:mt-10 w-full origin-bottom"
    >
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-5">
        Experience
      </h2>

      {/* Dots & Lines Vertical Timeline */}
      <div className="relative flex flex-col items-start select-none py-1">
        {/* Top dashed line segment leading into the timeline */}
        <div className="flex items-stretch h-6 sm:h-7">
          <div className="w-11 sm:w-13 shrink-0" />
          <div className="w-6 shrink-0 flex justify-center relative">
            <div className="w-px h-full border-l border-dashed border-neutral-400 dark:border-neutral-600" />
          </div>
          <div className="flex-1" />
        </div>

        {timelineMilestones.map((milestone, idx) => {
          const isFirst = idx === 0
          const isLast = idx === timelineMilestones.length - 1

          return (
            <div key={milestone.id} className="w-full flex flex-col items-start">
              {/* Milestone Row */}
              <div className="w-full flex items-center group">
                {/* Year Label - Rotated -90 degrees */}
                <div className="w-11 sm:w-13 shrink-0 flex items-center justify-end pr-2 sm:pr-2.5 h-7">
                  <span className="inline-block -rotate-90 origin-center font-mono text-[11px] sm:text-xs font-medium tracking-wider text-neutral-400 dark:text-neutral-500 transition-colors group-hover:text-neutral-700 dark:group-hover:text-neutral-300 whitespace-nowrap">
                    {milestone.year}
                  </span>
                </div>

                {/* Node Rail */}
                <div className="w-6 shrink-0 h-7 flex items-center justify-center relative">
                  {/* Vertical Line passing behind the node dot */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[1.5px] ${
                      isFirst
                        ? 'top-1/2 bottom-0 bg-neutral-300 dark:bg-neutral-700'
                        : isLast
                        ? 'top-0 h-full bg-neutral-300 dark:bg-neutral-700'
                        : 'top-0 bottom-0 bg-neutral-300 dark:bg-neutral-700'
                    }`}
                  />
                  {isFirst && (
                    <div className="absolute top-0 bottom-1/2 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-neutral-400 dark:border-neutral-600" />
                  )}

                  {/* Main Node Dot */}
                  <div className="relative flex items-center justify-center z-10">
                    <div
                      className={`rounded-full bg-neutral-900 dark:bg-neutral-100 ${
                        milestone.isCurrent
                          ? 'w-2.5 h-2.5 ring-2 ring-neutral-400/40 dark:ring-neutral-500/40'
                          : 'w-2.5 h-2.5'
                      }`}
                    />
                    {milestone.isCurrent && (
                      <span className="absolute w-4 h-4 rounded-full bg-neutral-900/15 dark:bg-neutral-100/20 animate-ping pointer-events-none" />
                    )}
                  </div>
                </div>

                {/* Milestone Label */}
                <div className="flex-1 pl-3 sm:pl-4 py-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
                      {milestone.title}
                    </span>
                    {milestone.subtitle && (
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                        {milestone.subtitle}
                      </span>
                    )}
                  </div>
                  {milestone.description && (
                    <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {milestone.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connecting Gap between milestones - Clean 1-node height spacing without intermediate dots */}
              {!isLast && (
                <div className="w-full flex items-stretch h-7 sm:h-8">
                  {/* Year column spacer */}
                  <div className="w-11 sm:w-13 shrink-0" />

                  {/* Continuous Solid Line */}
                  <div className="w-6 shrink-0 flex justify-center relative">
                    <div className="w-[1.5px] h-full bg-neutral-300 dark:bg-neutral-700" />
                  </div>

                  {/* Content column spacer */}
                  <div className="flex-1" />
                </div>
              )}
            </div>
          )
        })}

        {/* Bottom tail line smoothly fading out */}
        <div className="flex items-stretch h-6 sm:h-7">
          <div className="w-11 sm:w-13 shrink-0" />
          <div className="w-6 shrink-0 flex justify-center relative">
            <div className="w-[1.5px] h-full bg-gradient-to-b from-neutral-300 via-neutral-300 to-transparent dark:from-neutral-700 dark:via-neutral-700 dark:to-transparent" />
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </motion.section>
  )
}
