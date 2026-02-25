import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';
import PageHero from '../components/ui/PageHero';
import { Calendar, Download, ArrowLeft } from 'lucide-react';

export default function ActivityDetail() {
  const { id } = useParams<{ id: string }>();
  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Aktivität nicht gefunden</h2>
         <Link to="/activities" className="text-blue-600 hover:underline">Zurück zur Übersicht</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHero 
        image={activity.image}
        title={activity.title}
        subtitle={activity.date}
      />
      
      <div className="container mx-auto px-4 md:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <Link to="/activities" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>

          <div className="flex items-center gap-2 text-yellow-500 mb-6">
            <Calendar className="w-5 h-5" />
            <span className="font-medium text-lg">{activity.date}</span>
          </div>

          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
            {activity.shortDescription}
          </p>

          <div className="prose prose-lg max-w-none text-gray-600 mb-12 whitespace-pre-line">
            {activity.longDescription}
          </div>

          {activity.attachments.length > 0 && (
            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-xl font-bold mb-6">Downloads & Infos</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {activity.attachments.map((file, index) => (
                  <a 
                    key={index}
                    href={file.url}
                    className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  >
                    <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-blue-100 transition-colors mr-4">
                      <Download className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 block group-hover:text-blue-700">
                        {file.name}
                      </span>
                      <span className="text-sm text-gray-500">Download</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
