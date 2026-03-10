import { motion } from 'framer-motion';
import { ArrowRight, Star, Smartphone, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mcid-dark">
      {/* Refined clean dark background with very subtle mesh & gold glow */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-20 -z-10" />
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-mcid-gold/5 rounded-full blur-[200px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#000000]/80 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl relative z-10"
        >
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.02] border border-mcid-gold/30 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <div className="flex gap-1">
               <Star className="w-3.5 h-3.5 fill-mcid-gold-light text-mcid-gold-light" />
               <Star className="w-3.5 h-3.5 fill-mcid-gold-light text-mcid-gold-light" />
               <Star className="w-3.5 h-3.5 fill-mcid-gold-light text-mcid-gold-light" />
            </div>
            <span className="font-bold tracking-widest uppercase text-[11px] text-mcid-gold-light">L'excellence digitale locale</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] lg:leading-[1.1] font-extrabold tracking-tighter text-white mb-10 drop-shadow-2xl">
            Des systèmes digitaux pour faire grandir les <br/>
            <span className="relative inline-block mt-3">
              <span className="absolute -inset-4 bg-mcid-gold/10 blur-3xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                commerces locaux
              </span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 mb-14 leading-relaxed max-w-2xl font-light">
            Démarquez-vous avec des sites web professionnels, des cartes de fidélité digitales et l'automatisation de votre croissance client.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 text-center font-bold tracking-widest items-center justify-center flex gap-4 text-mcid-dark bg-gradient-to-r from-mcid-gold to-mcid-gold-light rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_50px_rgba(244,229,161,0.5)]">
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
          {/* Main Workspace Mockup - Ultra Premium */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-xl bg-[#030610] rounded-2xl border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <div className="h-12 bg-[#02040A] border-b border-white/5 flex items-center px-6 gap-3 relative z-10 w-full">
              <div className="flex gap-2 w-1/3">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="w-1/3 h-6 bg-white/5 rounded-md flex items-center justify-center">
                 <div className="w-1/2 h-2 bg-white/10 rounded-full" />
              </div>
            </div>
            <div className="p-10 relative z-10">
              <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
                <div className="space-y-3 w-1/2">
                   <div className="text-xs font-bold text-mcid-gold tracking-widest uppercase">Tableau de bord</div>
                   <div className="w-full h-8 bg-white/10 rounded-lg" />
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-mcid-gold to-yellow-600 border border-mcid-gold-light/50 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                   <span className="text-black font-black text-xl">MC</span>
                </div>
              </div>
              
              <div className="w-full h-32 bg-black/60 border border-white/10 rounded-2xl mb-8 p-6 flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-mcid-gold/5 to-transparent pointer-events-none" />
                 <div className="w-1/4 h-3 bg-white/20 rounded-full mb-4"/>
                 <div className="w-2/3 h-10 bg-gradient-to-r from-mcid-gold/40 to-white/10 rounded-lg"/>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-40 bg-black/60 rounded-2xl border border-white/5 p-5 flex flex-col justify-end relative overflow-hidden">
                   <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                     <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
                   </div>
                   <div className="w-full h-1/2 bg-gradient-to-t from-blue-500/30 to-transparent rounded-lg"/>
                </div>
                <div className="h-40 bg-black/60 rounded-2xl border border-white/5 p-5 flex flex-col justify-end relative overflow-hidden">
                   <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                     <div className="w-4 h-4 rounded-full bg-green-400" />
                   </div>
                   <div className="w-full h-2/3 bg-gradient-to-t from-green-500/30 to-transparent rounded-lg"/>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Phone - Loyalty Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 bottom-0 w-[260px] h-[520px] bg-black rounded-[3rem] border-[8px] border-[#1A1A1A] shadow-[0_40px_80px_rgba(0,0,0,0.8)] p-2 z-20"
          >
            <div className="w-full h-full bg-[#050814] rounded-[2.2rem] overflow-hidden border border-white/10 relative">
              <div className="absolute top-0 inset-x-0 h-8 bg-black flex justify-center rounded-t-3xl z-10">
                <div className="w-24 h-6 bg-black rounded-b-2xl" />
              </div>
              
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="relative p-6 pt-16 h-full flex flex-col">
                <h3 className="text-white text-2xl font-black mb-6 tracking-tight">Fidélité</h3>
                
                {/* Premium Card Graphic */}
                <div className="aspect-[1.58] rounded-2xl bg-gradient-to-br from-[#111] via-black to-[#222] border-[1px] border-mcid-gold/30 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.8)] mb-8 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-mcid-gold/10 blur-[40px]" />
                  
                  <span className="text-mcid-gold-light font-black text-sm uppercase tracking-[0.3em] relative z-10">VIP Pass</span>
                  
                  <div className="flex justify-between items-end relative z-10">
                    <div className="space-y-1">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block">Points</span>
                      <span className="text-white text-3xl font-black block leading-none">1,450</span>
                    </div>
                    <Smartphone className="w-8 h-8 text-mcid-gold/80" />
                  </div>
                </div>
                
                <div className="space-y-5 flex-grow">
                  <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5 flex items-center justify-between shadow-inner">
                     <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Prochain palier</span>
                     <span className="text-sm text-mcid-gold-light font-black">150 pts</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                     <div className="w-3/4 h-full bg-gradient-to-r from-mcid-gold to-mcid-gold-light" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Luxury Badges */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-16 top-1/4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-30 min-w-[300px]"
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
