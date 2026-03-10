import { motion } from 'framer-motion';
import { ArrowRight, Star, Smartphone, ShieldCheck } from 'lucide-react';
import { useCalendly } from './CalendlyProvider';

export default function Hero() {
  const { openCalendly } = useCalendly();

  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFC] transition-colors duration-300 dark:bg-mcid-dark">
      {/* Refined clean dark background with very subtle mesh & gold glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] dark:opacity-20 dark:[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] -z-10" />
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-mcid-gold/30 rounded-full blur-[220px] -z-10 pointer-events-none dark:bg-mcid-gold/5" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[160px] -z-10 pointer-events-none dark:bg-[#000000]/80" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl relative z-10"
        >
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 border border-gray-200 backdrop-blur-md mb-10 shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:bg-white/[0.02] dark:border-mcid-gold/30 dark:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <div className="flex gap-1">
               <Star className="w-3.5 h-3.5 fill-mcid-gold text-mcid-gold dark:fill-mcid-gold-light dark:text-mcid-gold-light" />
               <Star className="w-3.5 h-3.5 fill-mcid-gold text-mcid-gold dark:fill-mcid-gold-light dark:text-mcid-gold-light" />
               <Star className="w-3.5 h-3.5 fill-mcid-gold text-mcid-gold dark:fill-mcid-gold-light dark:text-mcid-gold-light" />
            </div>
            <span className="font-bold tracking-widest uppercase text-[11px] text-mcid-gold dark:text-mcid-gold-light">L'excellence digitale locale</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] lg:leading-[1.1] font-extrabold tracking-tighter text-gray-900 dark:text-white mb-10 drop-shadow-xl dark:drop-shadow-2xl">
            Des systèmes digitaux pour faire grandir les <br/>
            <span className="relative inline-block mt-3">
              <span className="absolute -inset-4 bg-mcid-gold/20 dark:bg-mcid-gold/10 blur-3xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-mcid-gold to-yellow-600 dark:from-mcid-gold dark:via-mcid-gold-light dark:to-mcid-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] dark:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                commerces locaux
              </span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-white/60 mb-14 leading-relaxed max-w-2xl font-light">
            Démarquez-vous avec des sites web professionnels, des cartes de fidélité digitales et l'automatisation de votre croissance client.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              type="button"
              onClick={openCalendly}
              className="px-10 py-5 text-center font-bold tracking-widest items-center justify-center flex gap-4 text-white dark:text-mcid-dark bg-mcid-dark dark:bg-gradient-to-r dark:from-mcid-gold dark:to-mcid-gold-light rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_50px_rgba(244,229,161,0.5)]"
            >
              RÉSERVER UNE DÉMO
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 text-center font-bold tracking-widest items-center justify-center flex gap-3 text-gray-900 border-gray-300 bg-white hover:bg-gray-50 hover:border-mcid-gold/50 dark:text-white dark:bg-black/40 border dark:border-white/10 backdrop-blur-xl rounded-full dark:hover:bg-white/5 dark:hover:border-mcid-gold/50 transition-all duration-300 shadow-sm dark:shadow-none">
              DÉCOUVRIR NOS SOLUTIONS
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6 opacity-80 border-t border-gray-200 dark:border-white/5 pt-8 max-w-lg">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-mcid-gold/10 border border-mcid-gold/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-mcid-gold dark:text-mcid-gold-light" />
              </div>
              <div>
                 <div className="text-sm font-bold text-gray-900 dark:text-white tracking-wider uppercase">Approuvé par des centaines</div>
                 <div className="text-sm font-medium text-gray-500 dark:text-white/50 tracking-wide mt-1">de commerces exigeants</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[800px] flex items-center justify-center mt-20 lg:mt-0"
        >
          {/* Main Workspace Mockup - Ultra Premium */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-2xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden dark:bg-[#030610] dark:border-white/5 dark:shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent pointer-events-none dark:bg-none" />
            <div className="h-12 bg-gray-50 dark:bg-[#02040A] border-b border-gray-200 dark:border-white/5 flex items-center px-6 gap-3 relative z-10 w-full">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="text-gray-400 dark:text-white/30 text-sm tracking-widest uppercase ml-auto font-medium">
                dashboard.mcid.io
              </div>
            </div>

            <div className="p-10 grid grid-cols-1 gap-8 lg:grid-cols-2 relative z-10">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:bg-gradient-to-br dark:from-[#0b1428] dark:to-[#040811] dark:border-white/10 dark:shadow-[0_30px_50px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-gray-500 dark:text-white/40 text-xs tracking-[0.4em] uppercase mb-1">Chiffre d'affaires</p>
                      <p className="text-4xl text-gray-900 dark:text-white font-black">+183%</p>
                    </div>
                    <div className="text-xs bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/80 px-3 py-1 rounded-full tracking-[0.3em] uppercase">30 jours</div>
                  </div>
                  <div className="h-36 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-white/10 to-transparent rounded-3xl" />
                    <div className="absolute inset-0 flex items-end gap-3">
                      {[20, 45, 30, 65, 50, 85, 60].map((height, idx) => (
                        <div key={idx} className="flex-1 bg-gradient-to-t from-mcid-gold to-mcid-gold-light dark:from-mcid-gold dark:via-mcid-gold-light dark:to-white rounded-xl shadow-[0_4px_10px_rgba(212,175,55,0.2)] dark:shadow-[0_10px_25px_rgba(212,175,55,0.4)]" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col gap-6 dark:bg-[#050b1c] dark:border-white/10 dark:shadow-[0_30px_50px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-white/50 text-xs tracking-[0.4em] uppercase mb-1">Clients récurrents</p>
                    <p className="text-gray-900 dark:text-white text-3xl font-black">312</p>
                  </div>
                  <Smartphone className="w-10 h-10 text-mcid-gold" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm dark:bg-black/60 dark:border-white/10 dark:shadow-none">
                  <div>
                    <p className="text-gray-500 dark:text-white/50 text-xs tracking-[0.4em] uppercase">Wallet MCID</p>
                    <p className="text-gray-900 dark:text-white text-lg font-semibold">Carte VIP active</p>
                  </div>
                  <div className="text-mcid-gold dark:text-mcid-gold-light text-2xl font-black tracking-[0.4em]">89%</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-gray-100 border border-gray-200 rounded-2xl p-4 text-gray-600 text-sm dark:bg-gradient-to-br dark:from-mcid-gold/15 dark:to-transparent dark:border-mcid-gold/30 dark:text-white/70">
                    <p className="uppercase tracking-[0.4em] text-xs text-mcid-gold dark:text-mcid-gold-light mb-2 font-bold">Avis Google</p>
                    <p className="text-2xl text-gray-900 dark:text-white font-black">4.9/5</p>
                    <p className="text-gray-500 dark:text-white/40 text-xs mt-1">+26 avis ce mois-ci</p>
                  </div>
                  <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 text-gray-600 text-sm shadow-sm dark:bg-[#071026] dark:border-white/10 dark:text-white/70 dark:shadow-none">
                    <p className="uppercase tracking-[0.4em] text-xs text-gray-500 dark:text-white/50 mb-2 font-bold">Automatisation</p>
                    <p className="text-2xl text-gray-900 dark:text-white font-black">48 scénarios</p>
                    <p className="text-gray-500 dark:text-white/40 text-xs mt-1">SMS + Email</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Luxury Badges */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-16 top-1/4 hidden min-w-[300px] items-center gap-5 rounded-2xl border border-gray-200 bg-white/90 p-6 text-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-2xl lg:flex dark:border-white/10 dark:bg-black/60 dark:text-white dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="p-4 bg-gray-50 dark:bg-black/80 rounded-xl border border-gray-100 dark:border-white/5 shadow-inner">
              <Star className="w-7 h-7 text-mcid-gold dark:text-mcid-gold-light fill-mcid-gold dark:fill-mcid-gold-light drop-shadow-lg" />
            </div>
            <div>
              <p className="text-xl font-black text-gray-900 tracking-tight dark:text-mcid-gold-light">4.9/5 Avis Google</p>
              <p className="text-sm text-mcid-gold font-bold mt-1 dark:text-mcid-gold-light/80">+24 avis ce mois-ci</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
