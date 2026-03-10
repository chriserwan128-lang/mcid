import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-mcid-dark/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-extrabold tracking-tighter text-white">
            MC<span className="text-mcid-gold">ID</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          <a href="#services" className="text-sm font-semibold tracking-widest text-white/70 hover:text-mcid-gold-light transition-colors">SOLUTIONS</a>
          <a href="#types" className="text-sm font-semibold tracking-widest text-white/70 hover:text-mcid-gold-light transition-colors">COMMERCES</a>
          <a href="#how-it-works" className="text-sm font-semibold tracking-widest text-white/70 hover:text-mcid-gold-light transition-colors">FONCTIONNEMENT</a>
        </nav>

        <div className="hidden md:flex items-center">
          <button className="px-8 py-3.5 text-sm font-extrabold tracking-widest text-mcid-dark bg-gradient-to-r from-mcid-gold to-mcid-gold-light rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(244,229,161,0.4)] uppercase">
            RÉSERVER UNE DÉMO
          </button>
        </div>

        <button className="md:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
