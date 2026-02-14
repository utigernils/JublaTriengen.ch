import { Calendar } from 'lucide-react';

const highlights = [
  {
    image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Pfingstlager',
    date: '17. - 21. Mai 2024',
    description: 'Eine Woche voller Abenteuer im Wald.',
  },
  {
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Waldtag',
    date: '15. Juni 2024',
    description: 'Gemeinsam die Natur entdecken und erleben.',
  },
  {
    image: 'https://images.pexels.com/photos/2403251/pexels-photo-2403251.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Herbstfest',
    date: '28. September 2024',
    description: 'Feier mit der ganzen Jubla Triengen.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-amatic text-6xl sm:text-7xl font-bold text-center text-black mb-16">
          Unsere nächsten Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-inter font-semibold text-2xl text-black mb-2">
                  {highlight.title}
                </h3>
                <div className="flex items-center gap-2 text-jubla-yellow mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-inter font-light text-sm">{highlight.date}</span>
                </div>
                <p className="font-inter font-light text-gray-600">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black hover:bg-gray-800 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Zum Programm
          </button>
        </div>
      </div>
    </section>
  );
}
