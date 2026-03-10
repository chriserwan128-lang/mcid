import { motion } from 'framer-motion';
import { Monitor, Layout, Clock, MapPin } from 'lucide-react';
import SecondaryCTA from './SecondaryCTA';

export default function WebsiteShowcaseSection() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#050913] dark:to-[#0B132B] relative overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-bold uppercase tracking-[0.4em] text-mcid-gold dark:text-mcid-gold-light shadow-sm dark:shadow-none">
            <Monitor className="w-4 h-4 text-mcid-gold" /> Studio Web MCID
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
            Site web <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-yellow-600 to-mcid-gold dark:via-mcid-gold-light">professionnel</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-white/70 leading-relaxed">
            Un site moderne pour présenter votre commerce, vos services, vos horaires, vos coordonnées et renforcer votre image en ligne.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Layout, title: "Pages vitrines", detail: "Héros immersif, services, témoignages." },
              { icon: MapPin, title: "Infos pratiques", detail: "Horaires, plan d'accès, contact." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur shadow-sm dark:shadow-none">
                <item.icon className="w-8 h-8 text-mcid-gold mb-4" />
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</p>
                <p className="text-gray-500 dark:text-white/60 text-sm font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
          <SecondaryCTA label="Découvrir la solution" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_70%)] blur-3xl opacity-70 pointer-events-none" />
          <div className="relative rounded-[2.5rem] border border-gray-200 dark:border-white/5 bg-white dark:bg-gradient-to-b dark:from-[#10172d] dark:to-[#050913] shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.65)] overflow-hidden">
            <div className="px-10 py-6 bg-gray-50 dark:bg-black/40 border-b border-gray-200 dark:border-white/10 flex items-center gap-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <p className="text-gray-500 dark:text-white/50 text-sm tracking-widest uppercase font-bold">mcidcommerce.fr</p>
            </div>
            <div className="p-12 space-y-10">
              <div className="bg-gradient-to-br from-mcid-gold/10 via-white to-gray-50 dark:from-mcid-gold/40 dark:via-mcid-gold-light/30 dark:to-transparent rounded-[2rem] p-10 border border-mcid-gold/20 dark:border-mcid-gold/30 shadow-sm dark:shadow-none">
                <p className="text-sm uppercase tracking-[0.4em] text-mcid-gold dark:text-white/60 mb-3 font-bold">Héros principal</p>
                <h3 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
                  Atelier Prestige<br />Barbier & Spa
                </h3>
                <p className="text-gray-600 dark:text-white/70 mt-4 max-w-md font-medium">
                  Des rituels soignés, des formules sur mesure et une expérience client signature.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-gray-900 dark:bg-black/70 rounded-full text-white dark:text-white/70 text-sm font-bold border border-gray-800 dark:border-white/10 shadow-md dark:shadow-none">
                  <Clock className="w-4 h-4 text-mcid-gold" />
                  Ouvert du mardi au samedi
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-6 shadow-sm dark:shadow-none">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-white/50 mb-3 font-bold">Services</p>
                  <ul className="space-y-2 text-gray-700 dark:text-white/70 text-sm font-medium">
                    <li>Forfaits signature</li>
                    <li>Coloration</li>
                    <li>Soins barbiers</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-6 shadow-sm dark:shadow-none">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-white/50 mb-3 font-bold">Réservations</p>
                  <p className="text-gray-900 dark:text-white text-2xl font-black">+38%/mois</p>
                  <p className="text-gray-500 dark:text-white/60 text-sm mt-2 font-medium">Formulaire intégré & Calendly.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-6 shadow-sm dark:shadow-none">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-white/50 mb-3 font-bold">Contact</p>
                  <p className="text-gray-700 dark:text-white/70 text-sm font-medium leading-relaxed">12 rue Lafayette<br />75009 Paris<br />01 84 90 11 22</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
