import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full pointer-events-none" />

      <main className="relative z-10 max-w-xl w-full text-center flex flex-col items-center gap-8">
        {/* Badges */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md text-xs font-medium text-slate-300 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Vite + React + TypeScript + Tailwind CSS</span>
        </div>

        {/* Hero title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Ready to Build
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Your clean, high-performance base template is initialized and configured with Vite, React 19, TypeScript, and Tailwind CSS v4.
          </p>
        </div>

        {/* Interactive counter card */}
        <div className="w-full p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCount((c) => c + 1)}
              className="px-5 py-2.5 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 active:scale-95 transition-all duration-200 shadow-md shadow-cyan-500/10 cursor-pointer"
            >
              Count is {count}
            </button>
            {count > 0 && (
              <button
                type="button"
                onClick={() => setCount(0)}
                className="px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
          <p className="text-xs text-slate-500">
            Edit <code className="font-mono text-cyan-300 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700/50">src/App.tsx</code> to start customizing your app.
          </p>
        </div>

        {/* Tech stack pill indicators */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {['Vite', 'React 19', 'TypeScript', 'Tailwind CSS v4'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </main>
    </div>
  )
}
