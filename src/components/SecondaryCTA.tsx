'use client';

import { ArrowUpRight } from 'lucide-react';
import { useCalendly } from './CalendlyProvider';

type SecondaryCTAProps = {
  label: string;
};

export default function SecondaryCTA({ label }: SecondaryCTAProps) {
  const { openCalendly } = useCalendly();

  return (
    <button
      type="button"
      onClick={openCalendly}
      className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-mcid-gold/30 bg-gradient-to-r from-white/5 to-transparent text-white/80 font-semibold tracking-[0.2em] uppercase text-xs hover:text-white hover:border-mcid-gold/60 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)] transition-all duration-300 group"
    >
      <span>{label}</span>
      <ArrowUpRight className="w-5 h-5 text-mcid-gold-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
