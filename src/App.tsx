import CalendlyProvider from './components/CalendlyProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import BusinessTypes from './components/BusinessTypes';
import HowItWorks from './components/HowItWorks';
import Showcase from './components/Showcase';
import LoyaltyCardSection from './components/LoyaltyCardSection';
import WebsiteShowcaseSection from './components/WebsiteShowcaseSection';
import AutomationDashboardSection from './components/AutomationDashboardSection';
import Benefits from './components/Benefits';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <CalendlyProvider>
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-mcid-gold selection:text-mcid-dark transition-colors duration-500 dark:bg-mcid-dark dark:text-mcid-light">
          <Header />
          <Hero />
          <TrustStrip />
          <Services />
          <BusinessTypes />
          <HowItWorks />
          <Showcase />
          <LoyaltyCardSection />
          <WebsiteShowcaseSection />
          <AutomationDashboardSection />
          <Benefits />
          <FinalCTA />
          <Footer />
        </div>
      </CalendlyProvider>
    </ThemeProvider>
  );
}

export default App;
