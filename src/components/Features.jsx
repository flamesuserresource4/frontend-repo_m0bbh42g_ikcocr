import { Shield, Zap, Layers } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices baked in to protect your data and users from day one.'
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Optimized assets and modern tooling keep your site snappy on any device.'
  },
  {
    icon: Layers,
    title: 'Scalable architecture',
    desc: 'A clean foundation that grows with your product and your team.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Built for modern SaaS</h2>
          <p className="mt-3 text-slate-600">Everything you need to make a strong first impression and convert visitors.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
