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
    <section className="py-32 lg:py-40 bg-[#050913] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute -top-32 right-0 w-[780px] h-[780px] bg-mcid-gold/5 blur-[230px]" />
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.4em] text-mcid-gold-light">
            <Smartphone className="w-4 h-4 text-mcid-gold" /> MCID Wallet
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Carte de fidélité <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold">digitale</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
            Vos clients conservent leur carte directement dans leur téléphone et accumulent leurs points facilement.
            Une solution plus moderne, plus simple et plus efficace que les cartes papier.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {loyaltyHighlights.map((highlight) => (
              <div key={highlight.title} className="p-6 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur">
                <highlight.icon className="w-8 h-8 text-mcid-gold mb-4" />
                <p className="text-xl font-semibold text-white">{highlight.title}</p>
                <p className="text-sm text-white/60 mt-2">{highlight.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] via-white/[0.03] to-transparent backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">Statut Client</p>
              <p className="text-2xl text-white font-bold">Ambassadeur</p>
              <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/5 bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold" />
              </div>
              <p className="mt-3 text-sm text-white/60">3/5 visites validées</p>
            </div>
            <div className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-mcid-gold/10 via-transparent to-transparent backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">Récompense</p>
              <p className="text-2xl text-white font-bold">Une prestation offerte</p>
              <p className="mt-3 text-sm text-white/60">Notification automatique envoyée</p>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.25),transparent_70%)] blur-3xl opacity-60 pointer-events-none" />
          <div className="relative w-[320px] sm:w-[360px] h-[640px] bg-gradient-to-b from-white/10 via-black/60 to-black border border-white/10 rounded-[2.5rem] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.65)]">
            <div className="h-full rounded-[2rem] bg-[#050911] border border-white/5 p-8 flex flex-col justify-between">
              <div>
                <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-3">MCID Wallet</p>
                <p className="text-3xl text-white font-black">Loyalty Elite</p>
              </div>
              <div className="bg-gradient-to-br from-mcid-gold/40 via-black/40 to-black rounded-[1.8rem] border border-mcid-gold/30 p-6 text-left shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-6 text-white">
                  <span className="text-lg font-semibold">Client: Clara</span>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full border border-white/20 ${index < 3 ? "bg-mcid-gold-light" : "bg-transparent"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-white/70 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Dernière visite</span>
                    <span className="text-white">15 février</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Récompense à débloquer</span>
                    <span className="text-mcid-gold-light font-semibold">Coffret Élégance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Prochaine relance</span>
                    <span className="text-white">Planifiée</span>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 py-4 px-5 flex items-center justify-between">
                  <span className="text-white/70 text-sm">Code membre</span>
                  <span className="text-white font-mono tracking-[0.5em]">MCID-567</span>
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
              className={`absolute hidden sm:inline-flex ${index === 0 ? "-top-6 left-4" : index === 1 ? "top-16 -right-6" : "bottom-6 -left-4"} items-center gap-3 rounded-2xl border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold tracking-[0.3em] text-white/70 shadow-[0_10px_25px_rgba(0,0,0,0.5)]`}
            >
              <badge.icon className="w-4 h-4 text-mcid-gold-light" />
              <span>{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
