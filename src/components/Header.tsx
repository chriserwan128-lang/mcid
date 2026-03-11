import { Menu } from 'lucide-react';
import { useCalendly } from './CalendlyProvider';

export default function Header() {
  const { openCalendly } = useCalendly();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-mcid-dark/90 text-white backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex h-16 sm:h-18 md:h-24 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-mcid-gold to-yellow-500 text-xl font-black text-mcid-dark shadow-lg">
            MC
          </div>
          <div className="text-2xl font-extrabold tracking-tight md:text-3xl">
            <span className="text-white">MC</span>
            <span className="text-mcid-gold">ID</span>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-semibold tracking-[0.3em] text-white/70 md:flex">
          <a href="#services" className="hover:text-mcid-gold-light">SOLUTIONS</a>
          <a href="#types" className="hover:text-mcid-gold-light">COMMERCES</a>
          <a href="#how-it-works" className="hover:text-mcid-gold-light">FONCTIONNEMENT</a>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <button
            type="button"
            onClick={openCalendly}
            className="rounded-full bg-gradient-to-r from-mcid-gold to-mcid-gold-light px-8 py-3 text-sm font-black uppercase tracking-[0.3em] text-mcid-dark shadow-[0_10px_25px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            RÉSERVER UNE DÉMO
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button className="text-white" aria-label="Menu">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
