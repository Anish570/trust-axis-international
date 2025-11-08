import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Handshake, TrendingUp, Users, Globe, CheckCircle2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    country: '',
    experience: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/franchise-applications`, formData);
      toast.success('Application submitted successfully! We will review and contact you soon.');
      setFormData({
        name: '',
        business_name: '',
        country: '',
        experience: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    {
      icon: <Globe size={32} />,
      title: 'Global Brand Access',
      description: 'Leverage the Trust Axis International brand recognition and reputation across 6 countries.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing operational support to ensure your success.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Marketing Assistance',
      description: 'Access to marketing materials, campaigns, and strategies to grow your business.'
    },
    {
      icon: <Users size={32} />,
      title: 'Network Access',
      description: 'Connect with a global network of partners, clients, and industry experts.'
    },
    {
      icon: <Handshake size={32} />,
      title: 'Business Growth',
      description: 'Proven business model with multiple revenue streams and growth opportunities.'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Quality Assurance',
      description: 'Maintain high standards with our quality assurance processes and certifications.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="franchise-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Franchise Partnership</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
            Join the Trust Axis International family and build a successful business in ISO certification 
            and training services. Partner with a globally recognized brand.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white" data-testid="franchise-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Partnership Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why partner with Trust Axis International? Here's what we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition" data-testid={`benefit-${index}`}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 bg-gray-50" data-testid="who-can-apply">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Who Can Apply?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Consultants with experience in ISO certification and quality management</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Training organizations looking to expand their service portfolio</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Entrepreneurs interested in the certification and training industry</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Business professionals with strong networking and sales skills</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Organizations committed to quality excellence and customer satisfaction</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-blue-900 text-white" data-testid="franchise-application">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Apply for Partnership</h2>
            <p className="text-lg text-blue-100">
              Fill out the form below and our team will contact you to discuss partnership opportunities.
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
                  data-testid="franchise-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Name *</label>
                <Input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  required
                  placeholder="Your Business Name"
                  data-testid="franchise-business-name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Country *</label>
                <Input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="USA"
                  data-testid="franchise-country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Years of Experience *</label>
                <Input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="5 years"
                  data-testid="franchise-experience"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  data-testid="franchise-email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1234567890"
                  data-testid="franchise-phone"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message / Additional Information</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your experience and why you want to partner with us..."
                data-testid="franchise-message"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
              data-testid="franchise-submit"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-testid="franchise-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What is the investment required?</h3>
              <p className="text-gray-600">Investment requirements vary by region and business model. Our team will discuss specific details during the application process.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Do I need prior experience in ISO certification?</h3>
              <p className="text-gray-600">While experience is beneficial, we provide comprehensive training to all partners. A background in quality management or related fields is helpful.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What territories are available?</h3>
              <p className="text-gray-600">We are expanding globally. Contact us to discuss available territories in your region.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How long does the application process take?</h3>
              <p className="text-gray-600">The application review process typically takes 2-4 weeks. We'll keep you informed at every step.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;