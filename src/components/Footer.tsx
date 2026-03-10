export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#02040A] pt-32 pb-16 border-t border-gray-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
       <div className="absolute inset-0 bg-grid-pattern opacity-5" />
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mcid-gold/10 dark:bg-mcid-gold/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-12">
           <div className="text-left w-full lg:w-1/3">
              <div className="text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6">
                MC<span className="text-mcid-gold">ID</span>
              </div>
              <p className="text-gray-500 dark:text-white/40 font-light text-lg leading-relaxed max-w-sm">
                L'infrastructure digitale premium exclusive pour le développement et l'automatisation des commerces locaux d'excellence.
              </p>
           </div>
           
           <div className="flex flex-wrap lg:justify-end gap-x-12 gap-y-6 text-sm font-bold tracking-[0.15em] text-gray-600 dark:text-gray-500 uppercase w-full lg:w-2/3">
              <a href="#" className="hover:text-mcid-gold dark:hover:text-mcid-gold-light transition-colors">Sites web Premium</a>
              <a href="#" className="hover:text-mcid-gold dark:hover:text-mcid-gold-light transition-colors">Wallet & Fidélité</a>
              <a href="#" className="hover:text-mcid-gold dark:hover:text-mcid-gold-light transition-colors">Automatisation CRM</a>
              <a href="#" className="hover:text-mcid-gold dark:hover:text-mcid-gold-light transition-colors">E-Réputation</a>
           </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-gray-200 via-gray-300 dark:from-mcid-gold/20 dark:via-white/5 to-transparent mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium dark:font-light text-gray-500 dark:text-white/30 tracking-wide">
           <p>
            © {new Date().getFullYear()} MCID International. Tous droits réservés.
           </p>
           <div className="flex gap-10 font-bold dark:font-medium">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Politique de confidentialité</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
