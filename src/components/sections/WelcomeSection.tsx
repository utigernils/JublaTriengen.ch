import { ArrowRight } from 'lucide-react';
import ContentImageSection from '../ui/ContentImageSection';

const welcomeContent = {
  id: 'about',
  title: 'Willkommen bei der Jubla Triengen',
  paragraphs: [
    'Die Jubla Triengen ist mehr als nur eine Jugendorganisation. Wir sind eine Gemeinschaft von Abenteurern, die gemeinsam die Natur entdecken, Freundschaften fürs Leben schliessen und unvergessliche Erinnerungen schaffen.',
    'Bei uns stehen Spass, Kreativität und das gemeinsame Erleben im Mittelpunkt. Ob bei wöchentlichen Gruppenstunden, aufregenden Ferienlagern oder besonderen Events – bei der Jubla ist für jedes Kind etwas dabei.',
  ],
  image: {
    src: 'https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Kinder beim Wandern',
  },
  button: {
    text: 'Unsere Angebote',
    icon: ArrowRight,
    action: () => {
      const element = document.getElementById('angebote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};

export default function WelcomeSection() {
  return <ContentImageSection {...welcomeContent} />;
}
