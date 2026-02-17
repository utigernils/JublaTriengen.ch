import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import HeroSection from './components/sections/HeroSection';
import FeatureCards from './components/sections/FeatureCards';
import WelcomeSection from './components/sections/WelcomeSection';
import AngeboteSection from './components/sections/AngeboteSection';
import HighlightsSection from './components/sections/HighlightsSection';
import NewsSection from './components/sections/NewsSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureCards />
      <WelcomeSection />
      <AngeboteSection />
      <HighlightsSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
