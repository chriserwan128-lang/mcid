import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useCalendly } from './CalendlyProvider';

export default function Header() {
  const { openCalendly } = useCalendly();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-200 bg-white/80 text-slate-900 backdrop-blur-md shadow-sm transition-colors duration-300 dark:border-white/5 dark:bg-mcid-dark/80 dark:text-white">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6 md:h-24">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-mcid-dark to-slate-800 text-xl font-black text-white shadow-lg dark:from-mcid-gold dark:to-yellow-400 dark:text-black">
            MC
          </div>
          <div className="text-2xl font-extrabold tracking-tight md:text-3xl">
            <span className="text-slate-900 dark:text-white">MC</span>
            <span className="text-mcid-gold">ID</span>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-semibold tracking-[0.3em] text-slate-600 md:flex dark:text-white/70">
          <a href="#services" className="hover:text-mcid-gold dark:hover:text-mcid-gold-light">SOLUTIONS</a>
          <a href="#types" className="hover:text-mcid-gold dark:hover:text-mcid-gold-light">COMMERCES</a>
          <a href="#how-it-works" className="hover:text-mcid-gold dark:hover:text-mcid-gold-light">FONCTIONNEMENT</a>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={openCalendly}
            className="rounded-full bg-gradient-to-r from-mcid-gold to-mcid-gold-light px-8 py-3 text-sm font-black uppercase tracking-[0.3em] text-mcid-dark shadow-[0_10px_25px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            RÉSERVER UNE DÉMO
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button className="text-slate-800 dark:text-white" aria-label="Menu">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
