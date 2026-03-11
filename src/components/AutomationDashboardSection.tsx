import { motion } from 'framer-motion';
import { MessageSquare, BellRing, Users, Star } from 'lucide-react';
import SecondaryCTA from './SecondaryCTA';

const metrics = [
  { icon: Star, label: "Avis Google", value: "4.9/5", detail: "+126 avis publiés" },
  { icon: MessageSquare, label: "Messages envoyés", value: "2 480", detail: "campagnes sur 30 jours" },
  { icon: Users, label: "Clients fidèles", value: "312", detail: "carte digitale active" },
  { icon: BellRing, label: "Rappels automatiques", value: "642", detail: "SMS & emails personnalisés" },
];

export default function AutomationDashboardSection() {
  return (
    <section className="py-32 lg:py-44 bg-[#050913] relative overflow-hidden border-t border-white/5">
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
            <BellRing className="w-4 h-4 text-mcid-gold" /> Pilotage MCID
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Automatisation et <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold">avis Google</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl">
            MCID aide les commerces à automatiser une partie de leur croissance grâce aux messages clients, aux rappels et à une meilleure gestion des avis Google.
          </p>
          <SecondaryCTA label="Réserver un appel" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ durée: 1 }}
          className="relative"
        >
          <div className="absolute -inset-20 bg-[radial-gradient(circle,rgba(244,229,161,0.2),transparent_70%)] blur-3xl opacity-70 pointer-events-none" />
          <div className="relative rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-[#0B1228] to-[#04070f] shadow-[0_40px_80px_rgba(0,0,0,0.65)] p-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">Tableau de pilotage</p>
                <p className="text-3xl text-white font-black">MCID Command Center</p>
              </div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-white/60 text-xs tracking-[0.3em] uppercase">
                Temps réel
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {metrics.map((metric) => {
                const isAvis = metric.label === "Avis Google";
                return (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center gap-3 text-white mb-4">
                    <metric.icon className="w-5 h-5 text-mcid-gold" />
                    <span className="text-xs uppercase tracking-[0.4em] text-white/50">{metric.label}</span>
                  </div>
                  <p className={`text-3xl font-bold ${isAvis ? 'text-mcid-gold-light' : 'text-white'}`}>{metric.value}</p>
                  <p className="text-white/60 text-sm mt-2">{metric.detail}</p>
                </div>
              )})}
            </div>

            <div className="rounded-[2rem] border border-mcid-gold/30 bg-gradient-to-r from-mcid-gold/20 via-mcid-gold-light/10 to-transparent p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Courbe d'impact</p>
                  <p className="text-3xl font-black text-white">+182 prospects actifs</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Conversion</p>
                  <p className="text-2xl text-mcid-gold-light font-semibold">38%</p>
                </div>
              </div>
              <div className="relative h-32">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_23px,rgba(255,255,255,0.08)_24px)] rounded-2xl border border-white/10" />
                <svg viewBox="0 0 400 140" className="w-full h-full text-mcid-gold">
                  <path
                    d="M0 120 C40 80 80 50 120 70 C160 90 200 20 240 50 C280 80 320 40 360 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle cx="360" cy="70" r="6" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
