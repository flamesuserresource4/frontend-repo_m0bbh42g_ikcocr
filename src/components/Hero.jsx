import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700">
              <Star className="h-4 w-4" />
              Clean SaaS Template
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Nagari Digital
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Launch faster with a modern, elegant landing page. Built with React and Tailwind, designed for clarity and performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white shadow-sm hover:bg-slate-800">
                Get Started
              </a>
              <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
