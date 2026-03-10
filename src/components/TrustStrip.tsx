import { ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';

export default function TrustStrip() {
  const values = [
    { icon: Users, text: "Fidélité maximale" },
    { icon: Zap, text: "Attraction automatisée" },
    { icon: TrendingUp, text: "Croissance exponentielle" },
    { icon: ShieldCheck, text: "Prestige de marque" },
  ];

  return (
    <div className="border-y border-white/[0.03] bg-[#030610]/50 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 md:divide-x divide-white/[0.05]">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center gap-6 group md:px-8">
              <div className="p-4 bg-gradient-to-br from-[#111] to-[#222] border-[1px] border-mcid-gold/20 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                <item.icon className="w-8 h-8 text-mcid-gold relative z-10" />
              </div>
              <span className="font-bold text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase group-hover:text-mcid-gold-light transition-colors duration-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
