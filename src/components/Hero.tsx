import { motion } from 'framer-motion';
import { ArrowRight, Star, Smartphone, ShieldCheck } from 'lucide-react';
import { useCalendly } from './CalendlyProvider';

export default function Hero() {
  const { openCalendly } = useCalendly();

  return (
    <section className="relative overflow-hidden bg-mcid-dark pt-24 pb-14 text-white sm:pt-28 md:pt-32 md:pb-20 lg:min-h-screen lg:flex lg:items-center">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-15 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="pointer-events-none absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-mcid-gold/5 blur-[140px] sm:h-[650px] sm:w-[650px] lg:h-[800px] lg:w-[800px] lg:blur-[200px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 -z-10 h-[380px] w-[380px] rounded-full bg-black/70 blur-[110px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] lg:blur-[150px]" />

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-mcid-gold/30 bg-white/5 px-4 py-2.5 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)] sm:mb-10 sm:px-5">
            <div className="flex gap-1">
              <Star className="h-3.5 w-3.5 fill-mcid-gold-light text-mcid-gold-light" />
              <Star className="h-3.5 w-3.5 fill-mcid-gold-light text-mcid-gold-light" />
              <Star className="h-3.5 w-3.5 fill-mcid-gold-light text-mcid-gold-light" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-mcid-gold-light sm:text-[11px]">
              L&apos;excellence digitale locale
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tighter leading-[1.05] sm:text-5xl md:text-6xl lg:mb-8 lg:text-[5rem] lg:leading-[1.05] xl:text-[5.5rem]">
            Des systèmes digitaux pour faire grandir les{' '}
            <span className="relative mt-2 inline-block sm:mt-3">
              <span className="absolute -inset-3 rounded-full bg-mcid-gold/15 blur-3xl" />
              <span className="relative bg-gradient-to-r from-mcid-gold via-mcid-gold-light to-mcid-gold bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                commerces locaux
              </span>
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg md:text-xl lg:mb-12 lg:text-2xl">
            Démarquez-vous avec des sites web professionnels, des cartes de fidélité digitales et l&apos;automatisation de votre croissance client.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <button
              type="button"
              onClick={openCalendly}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-mcid-gold to-mcid-gold-light px-6 py-4 text-center text-sm font-bold tracking-[0.18em] text-mcid-dark shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(244,229,161,0.5)] active:scale-95 sm:w-auto sm:px-8 sm:text-base"
            >
              RÉSERVER UNE DÉMO
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-center text-sm font-bold tracking-[0.18em] text-white backdrop-blur-xl transition-all duration-300 hover:border-mcid-gold/50 hover:bg-white/5 sm:w-auto sm:px-8 sm:text-base">
              DÉCOUVRIR NOS SOLUTIONS
            </button>
          </div>

          <div className="mt-10 max-w-lg border-t border-white/5 pt-6 opacity-80 sm:mt-14 sm:pt-8">
            <div className="flex items-start gap-4 sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mcid-gold/20 bg-mcid-gold/10">
                <ShieldCheck className="h-6 w-6 text-mcid-gold-light" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                  Approuvé par des centaines
                </div>
                <div className="mt-1 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                  de commerces exigeants
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="relative mt-4 flex items-center justify-center lg:mt-0"
        >
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/5 bg-[#030610] shadow-[0_40px_100px_rgba(0,0,0,0.8)] sm:max-w-md lg:max-w-xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

            <div className="relative z-10 flex h-12 w-full items-center gap-3 border-b border-white/5 bg-[#02040A] px-4 sm:px-6">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="ml-auto text-[10px] uppercase tracking-[0.22em] text-white/30 sm:text-xs sm:tracking-[0.3em]">
                dashboard.mcid.io
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-6 p-5 sm:p-6 lg:p-8 xl:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 shadow-[0_30px_50px_rgba(0,0,0,0.45)] sm:p-8">
                <div className="mb-5 flex items-center justify-between sm:mb-6">
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.4em]">
                      Chiffre d&apos;affaires
                    </p>
                    <p className="text-3xl font-black text-white sm:text-4xl">+183%</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-xs sm:tracking-[0.3em]">
                    30 jours
                  </div>
                </div>

                <div className="relative h-28 sm:h-32 md:h-36">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="absolute inset-0 flex items-end gap-2 sm:gap-3">
                    {[20, 45, 30, 65, 50, 85, 60].map((height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-xl bg-gradient-to-t from-mcid-gold via-mcid-gold-light to-white shadow-[0_10px_25px_rgba(212,175,55,0.4)]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-black/30 p-6 shadow-[0_30px_50px_rgba(0,0,0,0.45)] sm:gap-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.28em] text-white/50 sm:text-xs sm:tracking-[0.4em]">
                      Clients récurrents
                    </p>
                    <p className="text-3xl font-black text-white">312</p>
                  </div>
                  <Smartphone className="h-8 w-8 shrink-0 text-mcid-gold sm:h-10 sm:w-10" />
                </div>

                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 sm:text-xs sm:tracking-[0.4em]">
                      Wallet MCID
                    </p>
                    <p className="text-base font-semibold text-white sm:text-lg">
                      Carte VIP active
                    </p>
                  </div>
                  <div className="text-xl font-black tracking-[0.25em] text-mcid-gold sm:text-2xl sm:tracking-[0.4em]">
                    89%
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-mcid-gold/30 bg-gradient-to-br from-mcid-gold/10 to-transparent p-4 text-sm text-white/70">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-mcid-gold-light sm:text-xs sm:tracking-[0.4em]">
                      Avis Google
                    </p>
                    <p className="text-2xl font-black text-white">4.9/5</p>
                    <p className="mt-1 text-xs text-white/40">+26 avis ce mois-ci</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/50 sm:text-xs sm:tracking-[0.4em]">
                      Automatisations
                    </p>
                    <p className="text-2xl font-black text-white">48 scénarios</p>
                    <p className="mt-1 text-xs text-white/40">SMS + Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-10 top-1/4 z-30 hidden min-w-[280px] items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl xl:flex"
          >
            <div className="rounded-xl border border-white/5 bg-black/80 p-3 shadow-inner">
              <Star className="h-6 w-6 fill-mcid-gold-light text-mcid-gold-light drop-shadow-lg" />
            </div>
            <div>
              <p className="text-lg font-black text-white">4.9/5 Avis Google</p>
              <p className="mt-1 text-sm font-medium text-mcid-gold">+24 avis ce mois-ci</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
