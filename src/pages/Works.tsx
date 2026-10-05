import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Dithering } from '@paper-design/shaders-react'
import { useTheme } from '../hooks/useTheme'
import { SmoothScroll } from '../components/layout/SmoothScroll'
import { Footer } from '../components/layout/Footer'
import type { ProjectItem } from '../types/portfolio'

// Filter out placeholder link from full works view
const allWorks: (ProjectItem & { tag: string; tech: string[]; year: string })[] = [
  {
    name: 'Zync',
    desc: 'A Visual workflow automation platform that connects tools like GitHub, Notion and AI without writing a single line of glue code.',
    img: '/images/zync.png',
    link: 'https://zync.abhee.dev/',
    tag: 'Fullstack',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Redis', 'TailwindCSS'],
    year: '2024',
  },
  {
    name: 'Snipr',
    desc: 'Turn YouTube Videos into Highlighted Reels, Summaries, Transcripts and Chatbot. Ranked 20th best product on PeerList!',
    img: '/images/snipr.png',
    link: 'https://snipr.abhee.dev/',
    tag: 'AI',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI', 'FFmpeg'],
    year: '2024',
  },
  {
    name: 'Dope Link',
    desc: 'Link in Bio For Creators, Design Rich with customized themes and interactive analytics.',
    img: '/images/dopelink.png',
    link: 'https://dopelink.vercel.app/',
    tag: 'Fullstack',
    tech: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'Framer Motion'],
    year: '2024',
  },
  {
    name: 'Zap',
    desc: 'Lightning-fast link shortener with privacy-friendly click telemetry and geographic analytics.',
    img: '/images/zap.png',
    link: 'https://zap.abhee.dev',
    tag: 'Tools',
    tech: ['TypeScript', 'Cloudflare Workers', 'KV', 'TailwindCSS'],
    year: '2024',
  },
  {
    name: 'Soul Fabric',
    desc: 'Minimalist high-converting landing page and digital lookbook for Soul Fabric apparel.',
    img: '/images/soulfabric.png',
    link: 'https://soulfabric.vercel.app/',
    tag: 'Design',
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    year: '2024',
  },
  {
    name: 'Solana Airdropper',
    desc: 'A reliable Solana faucet interface where developers can request devnet SOL airdrops instantly.',
    img: '/images/Airdropper.png',
    link: 'https://solana-airdropper.vercel.app',
    tag: 'Web3',
    tech: ['Solana Web3.js', 'Anchor', 'React', 'TypeScript'],
    year: '2023',
  },
  {
    name: 'RupiX',
    desc: 'A non-custodial browser-based blockchain wallet with multi-network support for Ethereum and Solana.',
    img: '/images/rupix.png',
    link: 'https://rupix.vercel.app/',
    tag: 'Web3',
    tech: ['Solana', 'Ethers.js', 'BIP-39', 'Cryptography', 'React'],
    year: '2023',
  },
]

export function WorksPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const theme = useTheme()
  const isDark = theme === 'dark'

  const tags = ['All', 'Fullstack', 'Web3', 'AI', 'Tools']

  const filtered = selectedTag === 'All'
    ? allWorks
    : allWorks.filter((item) => item.tag === selectedTag)

  return (
    <SmoothScroll>
      <div className="min-h-screen w-full flex flex-col items-center justify-start">
        <div className="w-full max-w-2xl px-5 pt-12 pb-24 flex flex-col items-start justify-start relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mb-8"
          >
            {/* Shader Sphere - visually aligned with the starting text */}
            <div className="-ml-3 w-[100px] h-[100px] mb-4 shrink-0 overflow-hidden flex items-center justify-center">
              <Dithering
                width={100}
                height={100}
                colorBack="#00000000"
                colorFront={isDark ? '#00b2ff' : '#0066ff'}
                shape="sphere"
                type="4x4"
                size={2}
                speed={1}
                scale={0.75}
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Works
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono">
              A collection of web applications, blockchain tools, and digital products I've engineered and shipped.
            </p>

            {/* Tag Filter Chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer select-none ${
                    selectedTag === tag
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium'
                      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border border-neutral-200/80 dark:border-neutral-800'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Works Grid */}
          <div className="w-full flex flex-col gap-6">
            {filtered.map((project, idx) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col sm:flex-row items-start gap-4 p-3 sm:p-4 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
              >
                {/* Project Image */}
                <div className="w-full sm:w-48 aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 shrink-0 border border-neutral-200/60 dark:border-neutral-800/60">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between w-full h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                          {project.name}
                        </h2>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono">
                          {project.year}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-neutral-200/40 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Aurora Bars Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}
