import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import BusinessTypes from './components/BusinessTypes';
import HowItWorks from './components/HowItWorks';
import Showcase from './components/Showcase';
import Benefits from './components/Benefits';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mcid-dark text-mcid-light font-sans selection:bg-mcid-gold selection:text-mcid-dark">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <BusinessTypes />
      <HowItWorks />
      <Showcase />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
