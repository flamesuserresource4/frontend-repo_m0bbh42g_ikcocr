import { useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">Nagari Digital</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">Get Started</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3 text-slate-700">
              <a href="#features" className="px-2 py-2 rounded-lg hover:bg-slate-100">Features</a>
              <a href="#pricing" className="px-2 py-2 rounded-lg hover:bg-slate-100">Pricing</a>
              <a href="#contact" className="px-2 py-2 rounded-lg hover:bg-slate-100">Contact</a>
              <div className="h-px bg-slate-200 my-2" />
              <a href="#" className="px-2 py-2 rounded-lg hover:bg-slate-100">Sign in</a>
              <a href="#" className="px-2 py-2 rounded-lg bg-slate-900 text-white text-center">Get Started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
