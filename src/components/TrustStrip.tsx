import { ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';

export default function TrustStrip() {
  const values = [
    { icon: Users, text: "Fidélité maximale" },
    { icon: Zap, text: "Attraction automatisée" },
    { icon: TrendingUp, text: "Croissance exponentielle" },
    { icon: ShieldCheck, text: "Prestige de marque" },
  ];

  return (
    <div className="relative z-20 border-y border-white/[0.03] bg-[#030610]/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8 md:divide-x md:divide-white/[0.08]">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center gap-6 group md:px-8">
              <div className="relative overflow-hidden rounded-2xl border border-mcid-gold/25 bg-gradient-to-br from-[#12172b] to-[#050810] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)]">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.07)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                <item.icon className="relative z-10 h-8 w-8 text-mcid-gold-light" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-mcid-gold-light">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
