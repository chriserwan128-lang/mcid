import { Layout, CreditCard, MessageSquare, Star, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Layout,
    title: "Sites Web Prestigieux",
    description: "Des vitrines digitales haute couture, conçues sur-mesure pour captiver vos clients et dominer les résultats de recherche."
  },
  {
    icon: CreditCard,
    title: "Fidélité Wallet",
    description: "Dématérialisez votre programme de fidélité directement dans Apple Wallet & Google Pay. Élégant, instantané, sans friction."
  },
  {
    icon: MessageSquare,
    title: "Relations Automatisées",
    description: "Cultivez le lien avec votre clientèle via des scénarios SMS et Email intelligents, personnalisés et automatisés."
  },
  {
    icon: Star,
    title: "Réputation 5 Étoiles",
    description: "Système de captation d'avis Google automatisé. Filtrez les retours internes et magnifiez votre image de marque locale."
  },
  {
    icon: TrendingUp,
    title: "Croissance Prédictible",
    description: "La synergie parfaite de nos outils digitaux pour transformer votre commerce local en une institution incontournable."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 lg:py-48 bg-mcid-dark relative overflow-hidden text-center md:text-left">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mcid-gold/5 rounded-full blur-[200px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 " />

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 text-left">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold tracking-[0.25em] text-mcid-gold-light uppercase mb-6 drop-shadow-lg">Écosystème Digital Premium</h2>
            <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.1] tracking-tighter">Nos solutions pour les <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold relative">
               commerces locaux
               <span className="absolute -inset-2 bg-mcid-gold/10 blur-2xl rounded-full -z-10" />
            </span></h3>
          </div>
          <p className="text-white/50 text-xl max-w-lg font-light leading-relaxed">
            L'alliance parfaite entre design luxueux et ingénierie de croissance, concentrée dans une plateforme universelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl border border-white/5 p-12 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-mcid-gold/20 transition-all duration-500 group cursor-pointer relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${index === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mcid-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="w-20 h-20 bg-black/50 border border-white/10 shadow-inner rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-mcid-gold/30 transition-all duration-500 relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                <service.icon className="w-10 h-10 text-mcid-gold group-hover:text-mcid-gold-light transition-colors relative z-10" />
              </div>
              <h4 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">{service.title}</h4>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-10 relative z-10 text-left group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              <div className="flex items-center gap-3 text-mcid-gold-light font-bold text-sm tracking-widest uppercase group-hover:gap-6 transition-all duration-300 opacity-0 group-hover:opacity-100 absolute bottom-10 left-12 z-10">
                EN SAVOIR PLUS <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
