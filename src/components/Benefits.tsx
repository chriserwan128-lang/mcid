import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Prestige de marque instantané",
  "Rétention client maximale sans effort",
  "Acquisition Google automatisée",
  "Technologie invisible & zéro friction",
  "Gain de temps massif pour vos équipes",
  "Expérience client de niveau entreprise"
];

export default function Benefits() {
  return (
    <section className="py-32 lg:py-48 bg-white dark:bg-mcid-dark relative overflow-hidden transition-colors duration-300">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[200px] -z-10 dark:bg-[#02040A]" />
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mcid-gold/10 dark:bg-mcid-gold/5 rounded-full blur-[200px] -z-10" />
       <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-xs font-bold tracking-[0.25em] text-mcid-gold dark:text-mcid-gold-light uppercase mb-6 drop-shadow-sm dark:drop-shadow-lg">Le Standard MCID</h2>
          <h3 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold mb-10 text-gray-900 dark:text-white tracking-tighter leading-[1.1]">Pourquoi choisir <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-yellow-600 to-mcid-gold dark:via-mcid-gold-light">MCID</span></h3>
          <p className="text-gray-500 dark:text-white/60 text-2xl mb-14 leading-relaxed font-light max-w-2xl">
            Nous sommes l'extension digitale de votre commerce. Tous les outils des multinationales, paramétrés spécifiquement pour propulser votre croissance locale.
          </p>
          
          <div className="grid sm:grid-cols-1 gap-6 max-w-xl">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-6 bg-gray-50 dark:bg-[#030610]/50 hover:bg-gray-100 dark:hover:bg-[#030610] transition-colors border border-gray-200 dark:border-white/5 p-6 rounded-2xl group shadow-[0_5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="p-1.5 bg-gradient-to-br from-mcid-gold/10 dark:from-mcid-gold/20 to-transparent rounded-full group-hover:scale-110 group-hover:bg-mcid-gold/20 dark:group-hover:bg-mcid-gold/30 transition-all duration-300 border border-mcid-gold/30 dark:border-mcid-gold/20">
                   <CheckCircle className="w-8 h-8 text-mcid-gold shrink-0 drop-shadow-sm dark:drop-shadow-lg transition-colors group-hover:text-yellow-600 dark:group-hover:text-mcid-gold-light" />
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-lg font-bold tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[800px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-[1px] border-gray-200 dark:border-white/10 order-1 lg:order-2 group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/40 to-white/20 dark:from-[#02040A] dark:via-[#0B132B]/90 dark:to-[#0B132B]/30" />
          
          <div className="absolute bottom-16 left-10 right-10 p-10 bg-white/90 dark:bg-black/60 backdrop-blur-2xl rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform translate-y-0 opacity-100 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
            <div className="absolute -top-10 left-10 w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-mcid-gold to-yellow-600 flex items-center justify-center font-black text-white dark:text-black text-4xl shadow-[0_10px_20px_rgba(212,175,55,0.3)] dark:shadow-[0_15px_30px_rgba(212,175,55,0.4)] border-2 border-white dark:border-[#0B132B]">
               4.9
            </div>
            
            <div className="mt-12 mb-6">
              <div className="text-gray-900 dark:text-white font-black text-3xl tracking-tight mb-2">Excellence prouvée</div>
              <div className="text-mcid-gold dark:text-mcid-gold-light text-sm font-bold tracking-widest uppercase">Note moyenne certifiée</div>
            </div>
            <p className="text-gray-600 dark:text-white/80 text-xl font-light leading-relaxed">"L'impact a été immédiat. Nos clients adorent la nouvelle carte VIP sur leur téléphone, et notre chiffre d'affaires a augmenté de 25% les deux premiers mois."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
