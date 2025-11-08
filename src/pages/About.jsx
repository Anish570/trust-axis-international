import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Leading the way in global ISO certification and professional training
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white" data-testid="company-overview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Trust Axis International is a globally recognized organization offering ISO Certification, 
              Lead Auditor Training, and Franchise Partnership Programs.
            </p>
            <p className="mb-4">
              We collaborate with accredited certification bodies across the USA, UK, Canada, Australia, 
              India, and Africa, ensuring our clients receive trusted and internationally accepted services.
            </p>
            <p className="mb-4">
              Guided by our slogan, "Certified to Lead, Trusted to Deliver," we are dedicated to promoting 
              quality, safety, and environmental excellence in every sector.
            </p>
            <p className="mb-4">
              Our mission is to empower businesses and professionals with globally recognized certifications 
              and skills that drive continual improvement and sustainable growth.
            </p>
            <p>
              Through integrity, quality, and innovation, we aim to connect the world through one powerful 
              standard — excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50" data-testid="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses and professionals worldwide with globally recognized certifications 
                and training that drive excellence, compliance, and sustainable growth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted partner in ISO certification and professional development, 
                connecting organizations across continents through the power of standardized excellence.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Quality, Innovation, Customer Focus, and Global Collaboration. These principles 
                guide every decision we make and every service we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director's Message */}
      <section className="py-20 bg-white" data-testid="director-message">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-4xl font-bold">MA</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Message from Our Managing Director</h2>
                <p className="text-gray-700 mb-4 italic">
                  "At Trust Axis International, we believe that quality is not just a standard—it's a commitment. 
                  Our journey began with a simple vision: to make world-class ISO certification and training 
                  accessible to organizations and professionals everywhere."
                </p>
                <p className="text-gray-700 mb-4">
                  "Today, we are proud to serve clients across six countries, helping them achieve excellence 
                  through internationally recognized certifications and comprehensive training programs. Our 
                  success is built on trust, expertise, and an unwavering dedication to our clients' growth."
                </p>
                <p className="text-gray-700">
                  "Thank you for choosing Trust Axis International. Together, we are building a future where 
                  quality and excellence know no boundaries."
                </p>
                <p className="mt-6 font-semibold text-blue-900">— Mulenga Andrew, Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50" data-testid="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Globe className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">Global Recognition</h3>
              <p className="text-gray-600 text-sm">
                Our certifications are recognized and accepted worldwide by major industries and organizations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">Certified Trainers</h3>
              <p className="text-gray-600 text-sm">
                Learn from experienced professionals with years of hands-on auditing and training experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">
                High-quality certification and training services at competitive rates without compromising standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">Transparent Process</h3>
              <p className="text-gray-600 text-sm">
                Clear, straightforward certification process with no hidden fees or surprise requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-blue-900 text-white" data-testid="global-presence">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Global Presence</h2>
          <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto">
            Trust Axis International operates across six countries, bringing world-class certification 
            and training services to organizations worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { country: 'USA', flag: '🇺🇸' },
              { country: 'UK', flag: '🇬🇧' },
              { country: 'Canada', flag: '🇨🇦' },
              { country: 'India', flag: '🇮🇳' },
              { country: 'Australia', flag: '🇦🇺' },
              { country: 'Zambia', flag: '🇿🇲' }
            ].map((item) => (
              <div key={item.country} className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-5xl mb-2">{item.flag}</div>
                <p className="font-semibold">{item.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;