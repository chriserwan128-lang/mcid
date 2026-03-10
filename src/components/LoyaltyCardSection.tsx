import { motion } from 'framer-motion';
import { Smartphone, QrCode, Gift, Star, Shield } from 'lucide-react';
import SecondaryCTA from './SecondaryCTA';

const floatingBadges = [
  { icon: Star, label: "Fidélité" },
  { icon: QrCode, label: "QR code" },
  { icon: Gift, label: "Récompense" },
];

const loyaltyHighlights = [
  { icon: Smartphone, title: "Wallet instantané", detail: "Apple & Google Pay prêts à l’emploi." },
  { icon: Shield, title: "Données sécurisées", detail: "Conformes RGPD et synchronisées CRM." },
];

export default function LoyaltyCardSection() {
  return (
    <section className="py-32 lg:py-40 bg-white dark:bg-[#050913] relative overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute -top-32 right-0 w-[780px] h-[780px] bg-mcid-gold/10 dark:bg-mcid-gold/5 blur-[230px]" />
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/10 text-xs font-semibold uppercase tracking-[0.4em] text-mcid-gold dark:text-mcid-gold-light">
            <Smartphone className="w-4 h-4 text-mcid-gold" /> MCID Wallet
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
            Carte de fidélité <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-yellow-600 to-mcid-gold dark:via-mcid-gold-light">digitale</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-white/70 leading-relaxed">
            Vos clients conservent leur carte directement dans leur téléphone et accumulent leurs points facilement.
            Une solution plus moderne, plus simple et plus efficace que les cartes papier.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {loyaltyHighlights.map((highlight) => (
              <div key={highlight.title} className="p-6 rounded-3xl border border-gray-200 bg-gray-50 shadow-sm dark:border-white/10 dark:bg-[#0b1428] dark:shadow-none">
                <highlight.icon className="w-8 h-8 text-mcid-gold mb-4" />
                <p className="text-xl font-semibold text-gray-900 dark:text-white">{highlight.title}</p>
                <p className="text-sm text-gray-500 dark:text-white/60 mt-2">{highlight.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#0a1224] dark:shadow-none">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-white/60 mb-2 font-bold">Statut Client</p>
              <p className="text-2xl text-gray-900 dark:text-white font-bold">Ambassadeur</p>
              <div className="mt-4 h-1.5 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                <div className="h-full w-3/5 bg-gradient-to-r from-mcid-gold via-yellow-500 dark:via-mcid-gold-light to-mcid-gold" />
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-white/60 font-medium">3/5 visites validées</p>
            </div>
            <div className="p-6 rounded-3xl border border-mcid-gold/20 bg-gradient-to-br from-mcid-gold/10 via-transparent to-transparent backdrop-blur shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-mcid-gold/10 dark:via-transparent dark:to-transparent dark:shadow-none">
              <p className="text-sm uppercase tracking-[0.3em] text-mcid-gold dark:text-white/60 mb-2 font-bold">Récompense</p>
              <p className="text-2xl text-gray-900 dark:text-white font-bold">Une prestation offerte</p>
              <p className="mt-3 text-sm text-gray-500 dark:text-white/60 font-medium">Notification automatique envoyée</p>
            </div>
          </div>
          <SecondaryCTA label="Voir une démonstration" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_70%)] blur-3xl opacity-60 pointer-events-none" />
          <div className="relative w-[320px] sm:w-[360px] h-[640px] rounded-[2.5rem] border border-gray-300 bg-white p-3 shadow-[0_20px_45px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#050b16] dark:via-[#03060d] dark:to-black dark:shadow-[0_40px_80px_rgba(0,0,0,0.65)]">
            <div className="h-full rounded-[2rem] bg-white border border-gray-200 p-8 flex flex-col justify-between dark:bg-[#050911] dark:border-white/5">
              <div>
                <p className="text-gray-500 dark:text-white/50 text-sm uppercase tracking-[0.3em] mb-3 font-semibold">MCID Wallet</p>
                <p className="text-3xl text-gray-900 dark:text-white font-black">Loyalty Elite</p>
              </div>
              <div className="bg-white dark:bg-gradient-to-br dark:from-mcid-gold/40 dark:via-black/40 dark:to-black rounded-[1.8rem] border border-gray-200 dark:border-mcid-gold/30 p-6 text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-6 text-gray-900 dark:text-white">
                  <span className="text-lg font-bold">Client: Clara</span>
                  <span className="text-xl font-black tracking-[0.2em] text-mcid-gold dark:text-mcid-gold-light">3/5</span>
                </div>
                <div className="flex flex-col gap-4 text-gray-600 dark:text-white/70 text-sm font-medium">
                  <div className="flex items-center justify-between">
                    <span>Dernière visite</span>
                    <span className="text-gray-900 dark:text-white font-bold">15 février</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Récompense à débloquer</span>
                    <span className="text-mcid-gold dark:text-mcid-gold-light font-bold">Coffret Élégance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Prochaine relance</span>
                    <span className="text-gray-900 dark:text-white font-bold">Planifiée</span>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/60 py-4 px-5 flex items-center justify-between">
                  <span className="text-gray-500 dark:text-white/70 text-sm font-bold">Code membre</span>
                  <span className="text-gray-900 dark:text-white font-mono tracking-[0.5em] font-bold">MCID-567</span>
                </div>
              </div>
            </div>
          </div>
        {floatingBadges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            className={`absolute hidden sm:inline-flex ${index === 0 ? "-top-6 left-4" : index === 1 ? "top-16 -right-6" : "bottom-6 -left-4"} items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-2 text-xs font-bold tracking-[0.3em] text-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-black/70 dark:text-white/70 dark:shadow-[0_10px_25px_rgba(0,0,0,0.5)]`}
          >
            <badge.icon className="w-4 h-4 text-mcid-gold dark:text-mcid-gold-light" />
            <span>{badge.label}</span>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </section>
  );
}
