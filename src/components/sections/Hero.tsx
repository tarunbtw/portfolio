import { motion, type Variants } from 'framer-motion'
import { profileData } from '../../data/profile'
import { IonGithubIcon, IonXIcon, IonLinkedinIcon, IonMailIcon } from '../icons'

interface HeroProps {
  isIntro: boolean
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

const layoutTransition = {
  type: 'tween' as const,
  duration: 0.85,
  ease: easeOut,
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easeOut, delay: 0.2 },
  },
}

export function Hero({ isIntro }: HeroProps) {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <IonGithubIcon className="w-5 h-5" />
      case 'x':
        return <IonXIcon className="w-4.5 h-4.5" />
      case 'linkedin':
        return <IonLinkedinIcon className="w-5 h-5" />
      case 'mail':
        return <IonMailIcon className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <section id="home" className="w-full flex flex-col items-start justify-start pt-6">
      {/* PFP & Greeting */}
      <div className="flex flex-col items-start gap-4 w-full">
        {/* PFP Avatar */}
        <div className="w-full flex items-start justify-between min-h-[100px]">
          {isIntro ? (
            <div className="h-[100px] w-[100px]" aria-hidden="true" />
          ) : (
            <motion.div
              layout
              layoutId="pfp-image"
              className="relative z-20"
              transition={layoutTransition}
            >
              <img
                src={profileData.pfp}
                alt={profileData.name}
                width={100}
                height={100}
                className="rounded-xl w-[100px] h-[100px] object-cover shadow-md"
              />
            </motion.div>
          )}
        </div>

        {/* Title */}
        <div className="min-h-[36px]">
          {isIntro ? (
            <div className="h-9" aria-hidden="true" />
          ) : (
            <motion.div
              layout
              layoutId="main-text"
              className="relative z-20"
              transition={layoutTransition}
            >
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                {profileData.greeting}
              </h1>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bio text */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isIntro ? 'hidden' : 'visible'}
        className="mt-3 text-neutral-700 dark:text-neutral-300 font-mono text-sm leading-relaxed whitespace-pre-line"
      >
        {profileData.bio}
      </motion.div>

      {/* Social links row */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isIntro ? 'hidden' : 'visible'}
        className="w-full flex items-center justify-start gap-4 text-neutral-600 dark:text-neutral-400 mt-4 mb-2"
      >
        {profileData.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-md hover:text-neutral-950 dark:hover:text-white transition-colors"
            aria-label={social.name}
          >
            {getSocialIcon(social.icon)}
          </a>
        ))}
      </motion.div>
    </section>
  )
}
