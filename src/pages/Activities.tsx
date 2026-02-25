import { useNavigate } from 'react-router-dom';
import { activities } from '../data/activities';
import EventCard from '../components/ui/EventCard';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import SectionText from '../components/ui/SectionText';

export default function Activities() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        image="https://images.unsplash.com/photo-1502086223501-681a6a508d52?auto=format&fit=crop&q=80"
        title="Unsere Aktivitäten"
        subtitle="Erlebe Jubla"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            subtitle="Was wir tun" 
            title="Jahresprogramm & Events" 
            align="center"
          />
          <SectionText align="center" className="mb-16 max-w-2xl mx-auto">
            Hier findest du eine Übersicht über unsere kommenden und vergangenen Aktivitäten. Klicke auf eine Karte, um mehr zu erfahren.
          </SectionText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <EventCard
                key={activity.id}
                image={activity.image}
                title={activity.title}
                date={activity.date}
                description={activity.shortDescription}
                onClick={() => navigate(`/activities/${activity.id}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
