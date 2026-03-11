import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Analyse & Stratégie",
    description: "Un échange privé pour auditer les process de votre commerce et cartographier vos opportunités de croissance digitale."
  },
  {
    number: "02",
    title: "Ingénierie de l'Écosystème",
    description: "Nos experts configurent de A à Z votre site web, votre carte de fidélité et vos automatisations, sans effort de votre part."
  },
  {
    number: "03",
    title: "Déploiement Clientèle",
    description: "Lancement de votre écosystème. Vos clients expérimentent une transition vers un service premium et personnalisé."
  },
  {
    number: "04",
    title: "Expansion Automatisée",
    description: "Votre réputation Google s'envole, la rétention client explose, et votre chiffre d'affaires s'accélère mécaniquement."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 lg:py-48 bg-mcid-dark border-y border-white/[0.03] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-mcid-gold/5 rounded-full blur-[200px] -z-10" />

      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-xs font-bold tracking-[0.25em] text-mcid-gold-light uppercase mb-6 drop-shadow-lg">Processus Exclusif</h2>
          <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold mb-8 tracking-tighter text-white leading-[1.1]">Comment fonctionne <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold">MCID</span></h3>
          <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Une transition vers le digital haut de gamme totalement prise en charge, fluide et invisible pour vos opérations quotidiennes.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-mcid-gold/40 to-transparent" />
          
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 space-y-16 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="relative group lg:px-6"
              >
                <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-br from-[#0B132B] to-[#02040A] border-[1px] border-mcid-gold/20 rounded-[2rem] flex items-center justify-center text-[2.5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-mcid-gold via-mcid-gold-light to-mcid-gold shadow-[0_20px_40px_rgba(0,0,0,0.8)] mb-10 relative overflow-hidden group-hover:scale-110 group-hover:border-mcid-gold/40 transition-all duration-700 ease-out">
                  {step.number}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                </div>
                
                <h4 className="text-2xl lg:text-3xl font-black text-white mb-5 text-center lg:text-left tracking-tight drop-shadow-md">{step.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed text-center lg:text-left font-light group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
