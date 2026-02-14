import { Tent, Mountain, TreePine } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    icon: Tent,
    title: 'Gruppenstunden',
    subtitle: 'Spiel & Spass',
    description: 'Regelmässige Treffen voller Spiele, Kreativität und Gemeinschaft.',
  },
  {
    icon: Mountain,
    title: 'Ferienlager',
    subtitle: 'Lagerabenteuer',
    description: 'Unvergessliche Wochen in der Natur mit Lagerfeuer und Abenteuer.',
  },
  {
    icon: TreePine,
    title: 'Events & Anlässe',
    subtitle: 'Gemeinsam erleben',
    description: 'Besondere Aktivitäten und Feste durchs ganze Jahr.',
  },
];

export default function FeatureCards() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
