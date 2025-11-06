export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Nagari Digital. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
