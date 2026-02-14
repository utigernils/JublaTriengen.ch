import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Welcome from './components/Welcome';
import Highlights from './components/Highlights';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeatureCards />
      <Welcome />
      <section id="angebote" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-amatic text-6xl sm:text-7xl font-bold text-center text-black mb-8">
            Unsere Angebote
          </h2>
          <p className="font-inter font-light text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Von wöchentlichen Gruppenstunden bis zu mehrtägigen Lagern - bei der Jubla Triengen
            findest du das perfekte Angebot für dein Abenteuer.
          </p>
        </div>
      </section>
      <Highlights />
      <News />
      <Footer />
    </div>
  );
}

export default App;
