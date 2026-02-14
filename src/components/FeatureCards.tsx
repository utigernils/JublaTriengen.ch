import { Tent, Mountain, TreePine } from 'lucide-react';

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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-jubla-yellow rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-inter font-semibold text-2xl text-black mb-2">
                  {feature.title}
                </h3>
                <p className="font-inter font-light text-jubla-yellow mb-3">
                  {feature.subtitle}
                </p>
                <p className="font-inter font-light text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
