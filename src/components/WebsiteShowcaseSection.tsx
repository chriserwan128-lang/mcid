import { motion } from 'framer-motion';
import { Monitor, Layout, Clock, MapPin } from 'lucide-react';
import SecondaryCTA from './SecondaryCTA';

export default function WebsiteShowcaseSection() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-[#050913] to-[#0B132B] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.4em] text-mcid-gold-light">
            <Monitor className="w-4 h-4 text-mcid-gold" /> Studio Web MCID
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Site web <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold">professionnel</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
            Un site moderne pour présenter votre commerce, vos services, vos horaires, vos coordonnées et renforcer votre image en ligne.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Layout, title: "Pages vitrines", detail: "Héros immersif, services, témoignages." },
              { icon: MapPin, title: "Infos pratiques", detail: "Horaires, plan d'accès, contact." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur">
                <item.icon className="w-8 h-8 text-mcid-gold mb-4" />
                <p className="text-xl font-semibold text-white mb-2">{item.title}</p>
                <p className="text-white/60 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
          <SecondaryCTA label="Découvrir la solution" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ durée: 1 }}
          className="relative"
        >
          <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.25),transparent_70%)] blur-3xl opacity-70 pointer-events-none" />
          <div className="relative rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-[#10172d] to-[#050913] shadow-[0_40px_80px_rgba(0,0,0,0.65)] overflow-hidden">
            <div className="px-10 py-6 bg-black/40 border-b border-white/10 flex items-center gap-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <p className="text-white/50 text-sm tracking-widest uppercase">mcidcommerce.fr</p>
            </div>
            <div className="p-12 space-y-10">
              <div className="bg-gradient-to-r from-mcid-gold/40 via-mcid-gold-light/30 to-transparent rounded-[2rem] p-10 border border-mcid-gold/30">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60 mb-3">Héros principal</p>
                <h3 className="text-4xl font-black text-white leading-tight">
                  Atelier Prestige<br />Barbier & Spa
                </h3>
                <p className="text-white/70 mt-4 max-w-md">
                  Des rituels soignés, des formules sur mesure et une expérience client signature.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-black/70 rounded-full text-white/70 text-sm border border-white/10">
                  <Clock className="w-4 h-4 text-mcid-gold" />
                  Ouvert du mardi au samedi
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Services</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>Forfaits signature</li>
                    <li>Coloration</li>
                    <li>Soins barbiers</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Réservations</p>
                  <p className="text-white text-2xl font-bold">+38%/mois</p>
                  <p className="text-white/60 text-sm mt-2">Formulaire intégré & Calendly.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Contact</p>
                  <p className="text-white/70 text-sm">12 rue Lafayette<br />75009 Paris<br />01 84 90 11 22</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
