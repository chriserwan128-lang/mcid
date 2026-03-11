import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="py-32 lg:py-48 bg-[#02040A] relative border-b border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-mcid-gold/5 blur-[250px] pointer-events-none" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-xs font-bold tracking-[0.25em] text-mcid-gold-light uppercase mb-6 drop-shadow-lg">Ingénierie Technologique</h2>
          <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold mb-8 tracking-tighter text-white leading-[1.1]">Une présence plus <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold">puissante</span> pour votre commerce</h3>
          <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Des interfaces premium de niveau entreprise qui subliment votre marque et transforment l'expérience de vos clients au quotidien.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="col-span-1 lg:col-span-2 bg-gradient-to-br from-[#0B132B] to-[#030610] rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative group"
          >
            <div className="absolute inset-0 bg-white/[0.01]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mcid-gold/10 blur-[150px] pointer-events-none" />

            <div className="h-full flex flex-col pt-16">
              <div className="px-12 lg:px-16 pb-0 relative z-10 max-w-xl">
                <h4 className="text-4xl font-black text-white mb-4 tracking-tight">Site web institutionnel</h4>
                <p className="text-gray-400 text-lg font-light leading-relaxed">Une architecture web sur-mesure, des performances extrêmes et un SEO local agressif pour dominer votre marché.</p>
              </div>
              <div className="flex-grow mt-16 px-12 lg:px-16 pt-0 relative flex items-end justify-center perspective-1000">
                <div className="w-full h-[400px] bg-[#02040A]/90 backdrop-blur-2xl rounded-t-3xl border-x border-t border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,0.8)] p-8 overflow-hidden group-hover:translate-y-6 transition-transform duration-1000 ease-out flex flex-col relative z-10 origin-bottom transform group-hover:rotate-x-2">
                  <div className="w-full h-12 bg-[#0B132B]/60 rounded-xl mb-8 flex items-center px-6 gap-4 border border-white/5 shadow-inner">
                    <div className="w-32 h-2.5 bg-white/20 rounded-full" />
                    <div className="w-20 h-2.5 bg-white/20 rounded-full" />
                  </div>
                  <div className="flex gap-10 h-full">
                     <div className="w-2/3 flex flex-col gap-6">
                        <div className="w-3/4 h-8 bg-white/10 rounded-lg mb-2" />
                        <div className="w-1/2 h-5 bg-white/5 rounded-md mb-8" />
                        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-mcid-gold/10 to-transparent" />
                        </div>
                     </div>
                     <div className="w-1/3 flex flex-col gap-6">
                        <div className="w-full h-32 bg-white/[0.03] border border-white/5 rounded-2xl" />
                        <div className="w-full h-full bg-mcid-gold/5 border border-mcid-gold/20 rounded-2xl relative overflow-hidden">
                           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-rows-2 gap-10 lg:col-span-1 h-[800px] lg:h-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, durée: 0.9, ease: "easeOut" }}
              className="bg-gradient-to-br from-mcid-gold/10 via-[#0B132B] to-[#02040A] rounded-[3rem] border border-mcid-gold/30 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-12 flex flex-col justify-between group relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-mcid-gold/20 blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-3xl font-black text-white mb-3 tracking-tight">Fidélité digitale</h4>
                <p className="text-mcid-gold-light text-sm font-bold tracking-widest uppercase mb-1">Pass Apple & Google</p>
              </div>
              <div className="w-full bg-[#02040A] border-[1px] border-mcid-gold/20 h-48 rounded-[2rem] mt-10 p-6 shadow-[inset_0_5px_30px_rgba(0,0,0,1)] relative overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-out z-10 flex cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-[#111] via-black to-[#222] border-[1px] border-mcid-gold/30 rounded-2xl shadow-[0_15px_30px_rgba(212,175,55,0.2)] relative flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                   <div className="text-mcid-gold-light font-black text-xl tracking-[0.3em] z-10 uppercase">VIP Pass</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, durée: 0.9, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#0B132B] to-[#02040A] rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-12 flex flex-col justify-between group relative"
            >
              <div className="relative z-10">
                <h4 className="text-3xl font-black text-white mb-3 tracking-tight">Automatisation</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">Marketing SMS ciblé et réputation automatique.</p>
              </div>
              <div className="w-full bg-[#030610] border border-white/5 h-48 rounded-[2rem] mt-10 p-6 shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-out z-10 flex flex-col justify-end gap-5">
                  <div className="w-5/6 h-10 bg-gradient-to-r from-blue-600/20 to-blue-400/10 backdrop-blur-xl border border-blue-500/30 rounded-t-2xl rounded-bl-2xl ml-auto relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent w-1/2 translate-x-[200%] group-hover:translate-x-0 transition-transform duration-1000 delay-300 pointer-events-none" />
                  </div>
                  <div className="w-3/4 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-t-2xl rounded-br-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-mcid-gold/10 to-transparent w-1/2 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
