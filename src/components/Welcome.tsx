import { ArrowRight } from 'lucide-react';

export default function Welcome() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-amatic text-6xl sm:text-7xl font-bold text-black mb-6">
              Willkommen bei der Jubla Triengen
            </h2>
            <p className="font-inter font-light text-lg text-gray-700 mb-6 leading-relaxed">
              Die Jubla Triengen ist mehr als nur eine Jugendorganisation. Wir sind eine
              Gemeinschaft von Abenteurern, die gemeinsam die Natur entdecken, Freundschaften
              fürs Leben schliessen und unvergessliche Erinnerungen schaffen.
            </p>
            <p className="font-inter font-light text-lg text-gray-700 mb-8 leading-relaxed">
              Bei uns stehen Spass, Kreativität und das gemeinsame Erleben im Mittelpunkt.
              Ob bei wöchentlichen Gruppenstunden, aufregenden Ferienlagern oder besonderen
              Events – bei der Jubla ist für jedes Kind etwas dabei.
            </p>
            <button
              onClick={() => scrollToSection('angebote')}
              className="group bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Unsere Angebote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Kinder beim Wandern"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-jubla-yellow rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
