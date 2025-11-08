import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Award, Users, Globe, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_interested_in: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await axios.post(`${API}/enquiries`, formData);
      toast.success('Enquiry submitted successfully! We will contact you soon.');
      setFormData({ name: '', email: '', service_interested_in: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit enquiry. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 md:py-32" data-testid="hero-section">
        <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Certified to Lead,
              <br />
              <span className="text-blue-200">Trusted to Deliver</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Global ISO Certification, Lead Auditor Training & Franchise Partnership Programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/iso-certification">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8" data-testid="get-certified-button">
                  Get Certified <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/training">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8" data-testid="join-training-button">
                  Join Training
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">500+</h3>
              <p className="text-gray-600">Certifications Issued</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">1000+</h3>
              <p className="text-gray-600">Trained Professionals</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">6</h3>
              <p className="text-gray-600">Countries Worldwide</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <CheckCircle2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive ISO certification and training solutions for global excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover" data-testid="service-iso">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">ISO Certification</h3>
              <p className="text-gray-600 mb-4">
                Get globally recognized ISO certifications including ISO 9001, 14001, 45001, 22000, and 27001.
              </p>
              <Link to="/iso-certification" className="text-blue-600 font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 card-hover" data-testid="service-training">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Lead Auditor Training</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive 5-day online training programs to become a certified Lead Auditor.
              </p>
              <Link to="/training" className="text-blue-600 font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 card-hover" data-testid="service-franchise">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Franchise Partnership</h3>
              <p className="text-gray-600 mb-4">
                Join our global network and grow your business with Trust Axis International.
              </p>
              <Link to="/franchise" className="text-blue-600 font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Section */}
      <section className="py-20 bg-blue-900 text-white" data-testid="enquiry-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-blue-100">
              Have questions? Send us a quick enquiry and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-8 text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  data-testid="enquiry-name-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  data-testid="enquiry-email-input"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Service Interested In</label>
              <Input
                type="text"
                name="service_interested_in"
                value={formData.service_interested_in}
                onChange={handleChange}
                placeholder="e.g., ISO 9001 Certification"
                data-testid="enquiry-service-input"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message *</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about your requirements..."
                data-testid="enquiry-message-input"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
              data-testid="enquiry-submit-button"
            >
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          </form>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50" data-testid="trust-badges-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">Trusted Globally</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl mb-2">🇺🇸</div>
              <p className="text-gray-700 font-medium">USA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇬🇧</div>
              <p className="text-gray-700 font-medium">UK</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇨🇦</div>
              <p className="text-gray-700 font-medium">Canada</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇮🇳</div>
              <p className="text-gray-700 font-medium">India</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇦🇺</div>
              <p className="text-gray-700 font-medium">Australia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇿🇲</div>
              <p className="text-gray-700 font-medium">Zambia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Tawk.to Live Chat Widget */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/YOUR_TAWK_TO_ID/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `
        }}
      />
    </div>
  );
};

export default Home;
