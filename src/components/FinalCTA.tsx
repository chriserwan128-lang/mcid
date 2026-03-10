import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#030610] border-y border-white/[0.05]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,rgba(0,0,0,0)_70%)] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block mb-10 px-5 py-2.5 rounded-full border border-mcid-gold/30 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)]">
             <span className="text-mcid-gold-light text-xs font-black tracking-[0.2em] uppercase">L'Étape Décisive</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] lg:leading-[1.1] font-extrabold mb-10 text-white tracking-tighter drop-shadow-2xl">
            Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold focus:outline-none">dominer</span><br/> votre marché ?
          </h2>
          <p className="text-xl md:text-3xl text-white/50 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Rejoignez l'élite des entreprises locales qui utilisent MCID pour structurer, automatiser et démultiplier leur croissance.
          </p>
          
          <button className="px-14 py-6 text-lg font-black items-center justify-center inline-flex gap-5 text-mcid-dark bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold rounded-full hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_30px_60px_rgba(244,229,161,0.5)] group relative overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] absolute group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 uppercase tracking-[0.2em]">Réserver une démonstration privée</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform relative z-10" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
