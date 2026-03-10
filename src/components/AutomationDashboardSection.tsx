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
    <section className="py-32 lg:py-44 bg-white dark:bg-[#050913] relative overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-[0.4em] text-mcid-gold shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-mcid-gold-light dark:shadow-none">
            <BellRing className="w-4 h-4 text-mcid-gold" /> Pilotage MCID
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
            Automatisation et <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-yellow-600 to-mcid-gold dark:via-mcid-gold-light">avis Google</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-white/70 leading-relaxed max-w-xl">
            MCID aide les commerces à automatiser une partie de leur croissance grâce aux messages clients, aux rappels et à une meilleure gestion des avis Google.
          </p>
          <SecondaryCTA label="Réserver un appel" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-20 bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_70%)] blur-3xl opacity-70 pointer-events-none" />
          <div className="relative rounded-[2.5rem] border border-gray-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-10 dark:border-white/5 dark:bg-gradient-to-b dark:from-[#0B1228] dark:to-[#04070f] dark:shadow-[0_40px_80px_rgba(0,0,0,0.65)]">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-400 dark:text-white/40 font-bold">Tableau de pilotage</p>
                <p className="text-3xl text-gray-900 dark:text-white font-black">MCID Command Center</p>
              </div>
              <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 text-gray-500 dark:text-white/60 text-xs tracking-[0.3em] uppercase font-bold shadow-sm dark:shadow-none">
                Temps réel
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {metrics.map((metric) => {
                const isAvis = metric.label === "Avis Google";
                return (
                <div key={metric.label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1a33] dark:shadow-none">
                  <div className="flex items-center gap-3 text-gray-900 dark:text-white mb-4">
                    <metric.icon className="w-5 h-5 text-mcid-gold" />
                    <span className="text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-white/50 font-bold">{metric.label}</span>
                  </div>
                  <p className={`text-3xl font-black ${isAvis ? 'text-gray-900 dark:text-mcid-gold-light' : 'text-gray-900 dark:text-white'}`}>{metric.value}</p>
                  <p className="text-gray-500 dark:text-white/60 text-sm mt-2 font-medium">{metric.detail}</p>
                </div>
              )})}
            </div>

            <div className="rounded-[2rem] border border-mcid-gold/20 bg-gradient-to-br from-white to-mcid-gold/5 p-8 shadow-sm dark:border-mcid-gold/30 dark:bg-gradient-to-r dark:from-mcid-gold/20 dark:via-mcid-gold-light/10 dark:to-transparent dark:shadow-none">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-white/60 font-bold mb-1">Courbe d'impact</p>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">+182 prospects actifs</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-white/60 font-bold mb-1">Conversion</p>
                  <p className="text-2xl text-mcid-gold dark:text-mcid-gold-light font-bold">38%</p>
                </div>
              </div>
              <div className="relative h-32">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_23px,rgba(0,0,0,0.03)_24px)] dark:bg-[repeating-linear-gradient(transparent,transparent_23px,rgba(255,255,255,0.08)_24px)] rounded-2xl border border-gray-200 dark:border-white/10" />
                <svg viewBox="0 0 400 140" className="w-full h-full text-mcid-gold">
                  <path
                    d="M0 120 C40 80 80 50 120 70 C160 90 200 20 240 50 C280 80 320 40 360 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle cx="360" cy="70" r="6" fill="currentcolor" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
