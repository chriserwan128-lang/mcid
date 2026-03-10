'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-between w-16 h-8 rounded-full border border-black/10 bg-white/80 px-1 text-slate-900 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/20 dark:bg-white/10 dark:text-white"
      aria-label="Basculer le thème"
    >
      <Sun className={`w-4 h-4 ${isDark ? 'opacity-30' : 'text-mcid-gold'}`} />
      <Moon className={`w-4 h-4 ${isDark ? 'text-mcid-gold' : 'opacity-30'}`} />
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 dark:bg-slate-900 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
