import HeroSection from '../components/sections/HeroSection';
import FeatureCards from '../components/sections/FeatureCards';
import WelcomeSection from '../components/sections/WelcomeSection';
import AngeboteSection from '../components/sections/AngeboteSection';
import HighlightsSection from '../components/sections/HighlightsSection';
import NewsSection from '../components/sections/NewsSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeatureCards />
      <WelcomeSection />
      <AngeboteSection />
      <HighlightsSection />
      <NewsSection />
    </main>
  );
};

export default Home;
