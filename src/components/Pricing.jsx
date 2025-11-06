export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free and scale when you’re ready.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-2 text-sm text-slate-600">For personal projects</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-900">$0</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>All core features</li>
              <li>Community support</li>
              <li>Up to 1 project</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Start free</a>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-lg relative">
            <span className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">Popular</span>
            <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
            <p className="mt-2 text-sm text-slate-600">For growing teams</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-900">$19</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Unlimited projects</li>
              <li>Email support</li>
              <li>Advanced analytics</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Upgrade</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Business</h3>
            <p className="mt-2 text-sm text-slate-600">For large orgs</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-900">$49</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>SSO & advanced security</li>
              <li>Priority support</li>
              <li>Custom SLAs</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
