import { Calendar } from 'lucide-react';
import Button from './Button';

interface FeaturedEventCardProps {
  title: string;
  description: string;
  date: string;
  time?: string;
  buttonText?: string;
}

export default function FeaturedEventCard({
  title,
  description,
  date,
  time,
  buttonText = 'Jetzt Mitmachen',
}: FeaturedEventCardProps) {
  return (
    <div className="bg-jubla-gray rounded-2xl p-8 text-white shadow-xl sticky top-24">
      <h3 className="font-amatic text-5xl font-bold mb-4">{title}</h3>
      <p className="font-inter font-light mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center gap-2 text-jubla-yellow mb-6">
        <Calendar className="w-5 h-5" />
        <span className="font-inter font-light">
          {date}
          {time && `, ${time}`}
        </span>
      </div>
      <Button variant="primary" className="w-full">
        {buttonText}
      </Button>
    </div>
  );
}
