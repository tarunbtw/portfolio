import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-4 max-w-md">
        <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
          404 ERROR
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100">
          Page not found
        </h1>
        <p className="text-sm text-slate-400">
          The requested page does not exist or has been relocated.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
