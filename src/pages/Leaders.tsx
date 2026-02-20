
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import SectionText from '../components/ui/SectionText';
import PageHero from '../components/ui/PageHero';

const leaders = [
  {
    name: 'Sarah Müller',
    role: 'Scharleiterin',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Seit 5 Jahren in der Jubla und liebt es, Lagerfeuer zu machen.'
  },
  {
    name: 'Jan Schmid',
    role: 'Scharleiter',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Organisationstalent und zuständig für die besten Geländespiele.'
  },
  {
    name: 'Lena Weber',
    role: 'Gruppenleiterin',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Leitet die jüngste Gruppe mit viel Geduld und Kreativität.'
  },
  {
    name: 'Nico Keller',
    role: 'Gruppenleiter',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Der Materialwart, der immer den Überblick behält.'
  },
  {
    name: 'Anna Meier',
    role: 'Gruppenleiterin',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Kocht gerne im Lager und sorgt für gute Stimmung.'
  },
  {
    name: 'David Huber',
    role: 'Gruppenleiter',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Sportbegeistert und immer für ein Spiel zu haben.'
  }
];

export default function Leaders() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        title="Unser Leitungsteam"
        subtitle="Gemeinsam für unvergessliche Erlebnisse"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <SectionTitle>Wer wir sind</SectionTitle>
          <SectionText className="mt-4">
            Das Herzstück der Jubla Triengen sind unsere freiwilligen Leiterinnen und Leiter. 
            Sie planen und führen Gruppenstunden, Scharanlässe und Lager durch – mit viel Herzblut 
            und ehrenamtlichem Engagement.
          </SectionText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              image={leader.image}
              title={leader.name}
              subtitle={
                <span className="text-jubla-blue font-medium uppercase tracking-wider text-sm">
                  {leader.role}
                </span>
              }
            >
              {leader.description}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
