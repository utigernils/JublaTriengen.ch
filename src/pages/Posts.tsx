import { useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import EventCard from '../components/ui/EventCard';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import SectionText from '../components/ui/SectionText';

export default function Posts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        image="https://images.unsplash.com/photo-1502086223501-681a6a508d52?auto=format&fit=crop&q=80"
        title="Aktuelles"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle>Neuigkeiten aus der Schar</SectionTitle>
          <SectionText className="mt-4">
            Hier findest du Berichte über vergangene Anlässe, wichtige Informationen und Neuigkeiten.
          </SectionText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <EventCard
                key={post.id}
                image={post.image}
                title={post.title}
                date={post.date}
                description={post.shortDescription}
                onClick={() => navigate(`/posts/${post.id}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
