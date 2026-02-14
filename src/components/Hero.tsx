import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-amatic text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-tight mb-6">
            Abenteuer.
            <br />
            Freundschaft.
            <br />
            Lagerleben.
          </h1>
          <p className="font-inter font-light text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
            Erlebe unvergessliche Momente in der Natur mit der Jubla Triengen.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="group bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Mehr erfahren
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
