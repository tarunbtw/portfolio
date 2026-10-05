import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { projectsData } from '../../data/projects'
import { GridViewIcon, ListViewIcon } from '../ui/Icons'

export function ProjectsSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
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

  const springTransition = {
    type: 'spring' as const,
    stiffness: 220,
    damping: 28,
    mass: 1,
  }

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="mt-12 w-full origin-bottom"
    >
      {/* Header and Grid/List toggle */}
      <div className="flex items-center justify-between w-full mb-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Work
        </h2>

        {/* View Switcher Tabs */}
        <div className="flex items-center p-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            aria-label="Grid view"
          >
            <GridViewIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
              viewMode === 'list'
                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            aria-label="List view"
          >
            <ListViewIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Projects Display */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 mt-4 w-full"
          >
            {projectsData.map((project) => {
              const isInternal = project.link.startsWith('/')
              const content = (
                <>
                  <div className="overflow-hidden rounded-lg border border-neutral-200/80 dark:border-neutral-800/80">
                    <motion.img
                      layoutId={`image-${project.name}`}
                      transition={springTransition}
                      src={project.img}
                      alt={project.name}
                      width={640}
                      height={384}
                      className="w-full h-auto aspect-[5/3] object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>

                  <motion.div
                    layoutId={`description-${project.name}`}
                    transition={springTransition}
                    className="w-full min-w-0 flex flex-col gap-1.5 sm:gap-2"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-medium leading-snug line-clamp-2 text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm line-clamp-3 text-neutral-600 dark:text-neutral-400 font-mono leading-relaxed">
                      {project.desc}
                    </p>
                  </motion.div>
                </>
              )

              return isInternal ? (
                <Link
                  key={project.name}
                  to={project.link}
                  className="group min-w-0 w-full flex flex-col gap-3 sm:gap-4 cursor-pointer"
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-w-0 w-full flex flex-col gap-3 sm:gap-4"
                >
                  {content}
                </a>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6 sm:gap-8 items-stretch mt-4 w-full"
          >
            {projectsData.map((project) => {
              const isInternal = project.link.startsWith('/')
              const content = (
                <>
                  <div className="overflow-hidden rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 shrink-0 w-[min(36%,17.5rem)] sm:w-40 md:w-56">
                    <motion.img
                      layoutId={`image-${project.name}`}
                      transition={springTransition}
                      src={project.img}
                      alt={project.name}
                      width={640}
                      height={384}
                      className="w-full h-auto aspect-[5/3] object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>

                  <motion.div
                    layoutId={`description-${project.name}`}
                    transition={springTransition}
                    className="min-w-0 flex-1 flex flex-col gap-1.5 sm:gap-2"
                  >
                    <h3 className="text-base sm:text-lg font-medium leading-snug line-clamp-2 text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed tracking-tight line-clamp-3 text-neutral-600 dark:text-neutral-400 font-mono">
                      {project.desc}
                    </p>
                  </motion.div>
                </>
              )

              return isInternal ? (
                <Link
                  key={project.name}
                  to={project.link}
                  className="group flex w-full items-start gap-3 sm:gap-4 md:gap-5 cursor-pointer"
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-start gap-3 sm:gap-4 md:gap-5"
                >
                  {content}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
