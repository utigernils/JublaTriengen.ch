import SectionTitle from '../ui/SectionTitle';
import EventCard from '../ui/EventCard';
import Button from '../ui/Button';

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

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Unsere nächsten Highlights</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <EventCard
              key={index}
              image={highlight.image}
              title={highlight.title}
              date={highlight.date}
              description={highlight.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary">Zum Programm</Button>
        </div>
      </div>
    </section>
  );
}
