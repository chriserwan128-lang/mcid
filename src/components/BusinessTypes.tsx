import { Utensils, Scissors, Car, Stethoscope, Store, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const types = [
  { icon: Utensils, name: "Gastronomie & Cafés", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" },
  { icon: Scissors, name: "Salons & Barbiers", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1200" },
  { icon: Car, name: "Automobile & Garages", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200" },
  { icon: Stethoscope, name: "Santé & Cliniques", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" },
  { icon: Store, name: "Boutiques Pro", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" },
  { icon: Building2, name: "Services Locaux", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" }
];

export default function BusinessTypes() {
  return (
    <section id="types" className="py-32 lg:py-48 bg-[#030610] border-y border-white/[0.03] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-mcid-gold/5 blur-[200px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-xs font-bold tracking-[0.25em] text-mcid-gold-light uppercase mb-6">Adaptabilité Totale</h2>
          <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold mb-8 text-white tracking-tighter leading-[1.1]">Un standard d'excellence <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold">pour chaque métier</span></h3>
          <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Notre technologie s'adapte à l'ADN de votre entreprise, offrant une expérience sur-mesure pour chaque secteur d'activité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/3] sm:aspect-auto sm:h-[400px] cursor-pointer border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110" style={{ backgroundImage: `url(${type.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-[#030610]/60 to-transparent opacity-95 group-hover:opacity-80 transition-opacity durée-500" />
              <div className="absolute inset-0 bg-mcid-gold/10 opacity-0 group-hover:opacity-100 transition-opacity durée-500 mix-blend-overlay" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full transform group-hover:-translate-y-4 transition-transform durée-700 ease-out text-left">
                <div className="p-5 bg-black/40 backdrop-blur-xl border border-white/10 shadow-inner rounded-2xl inline-block mb-6 group-hover:border-mcid-gold/30 group-hover:bg-black/60 transition-all durée-500">
                  <type.icon className="w-8 h-8 text-mcid-gold group-hover:text-mcid-gold-light transition-colors" />
                </div>
                <h4 className="text-3xl font-black text-white tracking-tight drop-shadow-lg">{type.name}</h4>
                <div className="h-[2px] w-0 bg-gradient-to-r from-mcid-gold to-mcid-gold-light mt-5 group-hover:w-24 transition-all durée-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
