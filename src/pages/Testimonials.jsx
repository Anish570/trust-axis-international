import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Quote } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${API}/testimonials`);
      setTestimonials(response.data);
    } catch (error) {
      toast.error('Failed to load testimonials');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter(t => t.type === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="testimonials-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Testimonials</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from our satisfied clients, trainees, and partners about their experience with Trust Axis International
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b" data-testid="filter-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-all"
            >
              All
            </button>
            <button
              onClick={() => setFilter('client')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'client'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-client"
            >
              Clients
            </button>
            <button
              onClick={() => setFilter('trainee')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'trainee'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-trainee"
            >
              Trainees
            </button>
            <button
              onClick={() => setFilter('partner')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'partner'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              data-testid="filter-partner"
            >
              Partners
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50" data-testid="testimonials-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No testimonials available for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 relative" data-testid={`testimonial-${index}`}>
                  <Quote className="text-blue-200 absolute top-4 right-4" size={48} />
                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.message}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-blue-900">{testimonial.name}</p>
                      {testimonial.company && (
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      )}
                      <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {testimonial.type === 'client' ? 'Client' : testimonial.type === 'trainee' ? 'Trainee' : 'Partner'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white" data-testid="testimonials-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-lg text-blue-100 mb-8">
            Become part of our growing community of satisfied clients and certified professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iso-certification" className="btn-primary">
              Get Certified
            </a>
            <a href="/training" className="btn-secondary">
              Start Training
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;