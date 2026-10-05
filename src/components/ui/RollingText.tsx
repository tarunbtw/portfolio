import { motion, type Variants } from 'framer-motion'

interface RollingTextProps {
  text: string
  className?: string
}

const calmInUpVariants: { container: Variants; child: Variants } = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  },
  child: {
    hidden: {
      y: '200%',
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
      },
    },
    visible: {
      y: '0%',
      transition: {
        ease: [0.125, 0.92, 0.69, 0.975],
        duration: 0.75,
      },
    },
  },
}

export function RollingText({ text, className = '' }: RollingTextProps) {
  const characters = Array.from(text)

  return (
    <motion.div
      variants={calmInUpVariants.container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap items-center justify-center ${className}`}
    >
      {characters.map((char, index) => (
        <span key={index} className="inline-block overflow-hidden py-1">
          <motion.span
            variants={calmInUpVariants.child}
            className="inline-block select-none"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
