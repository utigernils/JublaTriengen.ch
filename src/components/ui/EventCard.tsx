import { Calendar } from 'lucide-react';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export default function EventCard({ image, title, date, description }: EventCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="font-mundial font-semibold text-2xl text-black mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-jubla-yellow mb-3">
          <Calendar className="w-4 h-4" />
          <span className="font-mundial font-light text-sm">{date}</span>
        </div>
        <p className="font-mundial font-light text-gray-600">{description}</p>
      </div>
    </div>
  );
}
