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
      className="group inline-flex items-center gap-4 rounded-full border border-gray-200 bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-sm transition-all duration-300 hover:border-mcid-gold hover:text-mcid-gold dark:border-mcid-gold/30 dark:bg-gradient-to-r dark:from-white/5 dark:to-transparent dark:text-white/80 dark:hover:text-white dark:hover:border-mcid-gold/60 dark:hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
    >
      <span>{label}</span>
      <ArrowUpRight className="h-5 w-5 text-mcid-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform dark:text-mcid-gold-light" />
    </button>
  );
}
