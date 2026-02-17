import { ArrowRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Sommerlager 2024',
    date: '15. März 2024',
    excerpt: 'Die Anmeldung für unser Sommerlager ist jetzt offen! Sichert euch schnell einen Platz.',
  },
  {
    image: 'https://images.pexels.com/photos/1319572/pexels-photo-1319572.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Neuer Vorstand gewählt',
    date: '8. März 2024',
    excerpt: 'An unserer Generalversammlung wurde ein neues Leitungsteam gewählt.',
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-amatic text-6xl sm:text-7xl font-bold text-center text-black mb-16">
          Neues aus der Jubla
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mundial font-light text-sm">{news.date}</span>
                  </div>
                  <h3 className="font-mundial font-semibold text-2xl text-black mb-3">
                    {news.title}
                  </h3>
                  <p className="font-mundial font-light text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <button className="text-jubla-yellow hover:text-jubla-yellow-dark font-mundial font-medium flex items-center gap-2 group">
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-jubla-green rounded-2xl p-8 text-white shadow-xl sticky top-24">
              <h3 className="font-amatic text-5xl font-bold mb-4">
                Bastelnachmittag
              </h3>
              <p className="font-mundial font-light mb-6 leading-relaxed">
                Komm vorbei und gestalte deine eigenen Kunstwerke! Für Kinder von 6-12 Jahren.
              </p>
              <div className="flex items-center gap-2 text-jubla-yellow mb-6">
                <Calendar className="w-5 h-5" />
                <span className="font-mundial font-light">22. April 2024, 14:00 Uhr</span>
              </div>
              <button className="w-full bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-mundial font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Jetzt Mitmachen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
