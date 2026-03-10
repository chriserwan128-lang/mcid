'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { PopupButton } from 'react-calendly';

type CalendlyContextValue = {
  openCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextValue | undefined>(undefined);

export default function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const popupButtonRef = useRef<InstanceType<typeof PopupButton> | null>(null);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const fallbackRoot = document.getElementById('root') || document.body;
    setRootElement(fallbackRoot ?? null);
  }, []);

  const openCalendly = useCallback(() => {
    if (popupButtonRef.current) {
      popupButtonRef.current.setState({ isOpen: true });
    }
  }, []);

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
      {rootElement && (
        <PopupButton
          ref={popupButtonRef}
          url="https://calendly.com/chriserwan128/30min"
          rootElement={rootElement}
          text="Réserver une démonstration"
          className="hidden"
        />
      )}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendly must be used within CalendlyProvider');
  }
  return context;
}
