import { useState } from 'react'
import { motion } from 'framer-motion'
import { Printer, Copy, Check } from 'lucide-react'
import { SmoothScroll } from '../components/layout/SmoothScroll'
import { Footer } from '../components/layout/Footer'

export function CVPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abhaynimbalkar03@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen w-full flex flex-col items-center justify-start print:bg-white print:text-black">
        <div className="w-full max-w-2xl px-5 pt-12 pb-24 flex flex-col items-start justify-start relative print:p-0 print:max-w-none">
          {/* Header Controls (Hidden during print) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mb-8 print:hidden"
          >
            <div className="flex items-center gap-2 mb-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span>Resume</span>
              <span>/</span>
              <span>CV</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                  Curriculum Vitae
                </h1>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  Updated September 2024 · Printable PDF version
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 text-xs hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Email'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Resume Document Sheet */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full p-6 sm:p-8 rounded-3xl bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 print:border-none print:p-0 print:bg-transparent"
          >
            {/* Personal Info Header */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100 print:text-black">
                Abhay Nimbalkar
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono mt-1">
                Fullstack & Web3 Engineer · Pune, India
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                <a href="mailto:abhaynimbalkar03@gmail.com" className="hover:underline">
                  abhaynimbalkar03@gmail.com
                </a>
                <span>•</span>
                <a href="https://github.com/abheeee03" target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/abheeee03
                </a>
                <span>•</span>
                <a href="https://x.com/_AbhayHere" target="_blank" rel="noreferrer" className="hover:underline">
                  x.com/_AbhayHere
                </a>
                <span>•</span>
                <a href="https://abhee.dev" target="_blank" rel="noreferrer" className="hover:underline">
                  abhee.dev
                </a>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Summary
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-mono">
                Product-minded software engineer with expertise in high-performance web applications, distributed systems, and Solana blockchain architecture. Passionate about building fast, intuitive interfaces using modern React, TypeScript, Rust, and event-driven backends.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                <div>
                  <span className="text-neutral-500">Languages:</span> TypeScript, JavaScript, Rust, Python, SQL
                </div>
                <div>
                  <span className="text-neutral-500">Frontend:</span> React, Next.js, Vite, TailwindCSS, Framer Motion
                </div>
                <div>
                  <span className="text-neutral-500">Backend & DB:</span> Node.js, Express, Redis Streams, PostgreSQL, Docker
                </div>
                <div>
                  <span className="text-neutral-500">Web3:</span> Solana Web3.js, Anchor Framework, Ethereum, Wallets
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-3">
                Experience
              </h3>
              <div className="flex flex-col gap-4">
                {/* Role 1 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 print:text-black">
                      NextCampus — Frontend & Web3 Developer
                    </h4>
                    <span className="text-xs text-neutral-500 font-mono">2024 – Present</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-400 font-mono space-y-1 mt-1">
                    <li>Engineered responsive client dashboards with Vite, React, and TailwindCSS, reducing initial load latency by 35%.</li>
                    <li>Integrated non-custodial wallet authentication and automated on-chain transaction confirmation pipelines.</li>
                    <li>Collaborated across engineering and product to ship modular UI component libraries with strict accessibility standards.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 print:text-black">
                      Independent Software Engineer — Fullstack & AI
                    </h4>
                    <span className="text-xs text-neutral-500 font-mono">2023 – 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-400 font-mono space-y-1 mt-1">
                    <li>Designed and released <span className="font-semibold text-neutral-800 dark:text-neutral-200">Snipr</span>, an automated video highlight & transcript analyzer (Ranked 20th Best Product on PeerList).</li>
                    <li>Architected <span className="font-semibold text-neutral-800 dark:text-neutral-200">Zync</span>, a no-code visual workflow automation tool connecting Notion, GitHub, and AI APIs without glue code.</li>
                    <li>Built <span className="font-semibold text-neutral-800 dark:text-neutral-200">RupiX</span>, a client-side blockchain wallet supporting Solana and Ethereum key derivation via BIP-39.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Selected Projects */}
            <section className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-3">
                Selected Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-800 print:border print:bg-transparent">
                  <div className="font-medium text-neutral-900 dark:text-neutral-100 print:text-black">Zync Automation</div>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                    Visual DAG automation engine with Redis Stream workers and webhook triggers.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-800 print:border print:bg-transparent">
                  <div className="font-medium text-neutral-900 dark:text-neutral-100 print:text-black">Snipr AI</div>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                    Automated YouTube video processing with transcripts, reels, and chatbot.
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Education
              </h3>
              <div className="flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-100 print:text-black">
                    Bachelor of Engineering — Computer Engineering
                  </div>
                  <div className="text-neutral-500">Savitribai Phule Pune University</div>
                </div>
                <span className="text-neutral-500">2020 – 2024</span>
              </div>
            </section>
          </motion.article>
        </div>

        {/* Aurora Bars Footer at bottom (Hidden during print) */}
        <div className="w-full print:hidden">
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  )
}
