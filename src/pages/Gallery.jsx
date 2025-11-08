import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  // Placeholder gallery items
  const placeholderItems = [
    { id: 1, title: 'ISO Certification Ceremony', category: 'Events' },
    { id: 2, title: 'Lead Auditor Training Session', category: 'Training' },
    { id: 3, title: 'Partner Meeting 2024', category: 'Events' },
    { id: 4, title: 'Workshop Participants', category: 'Training' },
    { id: 5, title: 'Certificate Presentation', category: 'Certification' },
    { id: 6, title: 'Team Collaboration', category: 'Events' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="gallery-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Explore moments from our training sessions, certification ceremonies, and events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50" data-testid="gallery-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group"
                data-testid={`gallery-item-${item.id}`}
              >
                <div className="aspect-video bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:scale-105 transition">
                  <ImageIcon className="text-white" size={64} />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-gray-700">
              <strong>Note:</strong> Gallery images will be uploaded by admin. This is a placeholder view.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;