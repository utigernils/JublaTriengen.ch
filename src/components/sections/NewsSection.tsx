import SectionTitle from '../ui/SectionTitle';
import NewsCard from '../ui/NewsCard';
import FeaturedEventCard from '../ui/FeaturedEventCard';

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

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className='mb-6'>Neues aus der Jubla</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-full space-y-6">
            {newsItems.map((news, index) => (
              <NewsCard
                key={index}
                image={news.image}
                title={news.title}
                date={news.date}
                excerpt={news.excerpt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
