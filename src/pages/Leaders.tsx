
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import SectionText from '../components/ui/SectionText';
import PageHero from '../components/ui/PageHero';
import { leaders } from '../data/leaders';

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
          {leaders.map((leader) => (
            <Link 
              to={`/leaders/${leader.id}`} 
              key={leader.id} 
              className="block h-full group"
            >
              <div className="h-full transition-transform duration-300 group-hover:-translate-y-2">
                <Card
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
