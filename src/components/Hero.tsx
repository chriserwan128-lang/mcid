import { motion } from 'framer-motion';
import { ArrowRight, Star, Smartphone, ShieldCheck } from 'lucide-react';
import { useCalendly } from './CalendlyProvider';

export default function Hero() {
  const { openCalendly } = useCalendly();

  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mcid-dark text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] -z-10" />
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-mcid-gold/5 rounded-full blur-[200px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-black/70 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl relative z-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-mcid-gold/30 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <div className="flex gap-1">
               <Star className="w-3.5 h-3.5 fill-mcid-gold-light text-mcid-gold-light" />
               <Star className="w-3.5 h-3.5 fill-mcid-gold-light text-mcid-gold-light" />
               <Star className="w-3.5 h-3.5 fill-mcid-gold-light text-mcid-gold-light" />
            </div>
            <span className="font-bold tracking-widest uppercase text-[11px] text-mcid-gold-light">L'excellence digitale locale</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] lg:leading-[1.1] font-extrabold tracking-tighter mb-10 drop-shadow-2xl">
            Des systèmes digitaux pour faire grandir les <br/>
            <span className="relative inline-block mt-3">
              <span className="absolute -inset-4 bg-mcid-gold/15 blur-3xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                commerces locaux
              </span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 mb-14 leading-relaxed max-w-2xl font-light">
            Démarquez-vous avec des sites web professionnels, des cartes de fidélité digitales et l'automatisation de votre croissance client.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              type="button"
              onClick={openCalendly}
              className="px-10 py-5 text-center font-bold tracking-widest items-center justify-center flex gap-4 text-mcid-dark bg-gradient-to-r from-mcid-gold to-mcid-gold-light rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_50px_rgba(244,229,161,0.5)]"
            >
              RÉSERVER UNE DÉMO
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 text-center font-bold tracking-widest items-center justify-center flex gap-3 text-white bg-black/40 border border-white/10 backdrop-blur-xl rounded-full hover:bg-white/5 hover:border-mcid-gold/50 transition-all duration-300">
              DÉCOUVRIR NOS SOLUTIONS
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6 opacity-80 border-t border-white/5 pt-8 max-w-lg">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-mcid-gold/10 border border-mcid-gold/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-mcid-gold-light" />
              </div>
              <div>
                 <div className="text-sm font-bold text-white tracking-wider uppercase">Approuvé par des centaines</div>
                 <div className="text-sm font-medium text-white/50 tracking-wide mt-1">de commerces exigeants</div>
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
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-xl bg-[#030610] rounded-2xl border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <div className="h-12 bg-[#02040A] border-b border-white/5 flex items-center px-6 gap-3 relative z-10 w-full">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="text-white/30 text-sm tracking-widest uppercase ml-auto">
                dashboard.mcid.io
              </div>
            </div>

            <div className="p-10 grid grid-cols-1 gap-8 lg:grid-cols-2 relative z-10">
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 shadow-[0_30px_50px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-1">Chiffre d'affaires</p>
                      <p className="text-4xl text-white font-black">+183%</p>
                    </div>
                    <div className="text-xs bg-white/10 border border-white/10 text-white/80 px-3 py-1 rounded-full tracking-[0.3em] uppercase">30 jours</div>
                  </div>
                  <div className="h-36 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl" />
                    <div className="absolute inset-0 flex items-end gap-3">
                      {[20, 45, 30, 65, 50, 85, 60].map((height, idx) => (
                        <div key={idx} className="flex-1 bg-gradient-to-t from-mcid-gold via-mcid-gold-light to-white rounded-xl shadow-[0_10px_25px_rgba(212,175,55,0.4)]" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-3xl p-8 shadow-[0_30px_50px_rgba(0,0,0,0.45)] flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-1">Clients récurrents</p>
                    <p className="text-white text-3xl font-black">312</p>
                  </div>
                  <Smartphone className="w-10 h-10 text-mcid-gold" />
                </div>
                <div className="bg-black/50 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-xs tracking-[0.4em] uppercase">Wallet MCID</p>
                    <p className="text-white text-lg font-semibold">Carte VIP active</p>
                  </div>
                  <div className="text-mcid-gold text-2xl font-black tracking-[0.4em]">89%</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-gradient-to-br from-mcid-gold/10 to-transparent border border-mcid-gold/30 rounded-2xl p-4 text-white/70 text-sm">
                    <p className="uppercase tracking-[0.4em] text-xs text-mcid-gold-light mb-2">Avis Google</p>
                    <p className="text-2xl text-white font-black">4.9/5</p>
                    <p className="text-white/40 text-xs mt-1">+26 avis ce mois-ci</p>
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white/70 text-sm">
                    <p className="uppercase tracking-[0.4em] text-xs text-white/50 mb-2">Automatisations</p>
                    <p className="text-2xl text-white font-black">48 scénarios</p>
                    <p className="text-white/40 text-xs mt-1">SMS + Email</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-16 top-1/4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hidden lg:flex items-center gap-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-30 min-w-[300px]"
          >
            <div className="p-4 bg-black/80 rounded-xl border border-white/5 shadow-inner">
              <Star className="w-7 h-7 text-mcid-gold-light fill-mcid-gold-light drop-shadow-lg" />
            </div>
            <div>
              <p className="text-xl font-black text-white tracking-tight">4.9/5 Avis Google</p>
              <p className="text-sm text-mcid-gold font-medium mt-1">+24 avis ce mois-ci</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
