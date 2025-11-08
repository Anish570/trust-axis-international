import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, CheckCircle2, FileText, Search, Users, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ISOCertification = () => {
  const isoStandards = [
    {
      standard: 'ISO 9001:2015',
      title: 'Quality Management',
      description: 'Implement a robust quality management system to enhance customer satisfaction and operational efficiency.',
      sectors: ['Manufacturing', 'IT', 'Healthcare', 'Education', 'Construction']
    },
    {
      standard: 'ISO 14001:2015',
      title: 'Environmental Management',
      description: 'Demonstrate environmental responsibility and reduce your organization\'s environmental footprint.',
      sectors: ['Manufacturing', 'Energy', 'Construction', 'Transportation']
    },
    {
      standard: 'ISO 45001:2018',
      title: 'Occupational Health & Safety',
      description: 'Create safer workplaces and protect your employees from work-related injuries and illnesses.',
      sectors: ['Manufacturing', 'Construction', 'Mining', 'Healthcare']
    },
    {
      standard: 'ISO 22000',
      title: 'Food Safety Management',
      description: 'Ensure food safety throughout the supply chain from farm to table.',
      sectors: ['Food Processing', 'Restaurants', 'Catering', 'Food Retail']
    },
    {
      standard: 'ISO 27001',
      title: 'Information Security',
      description: 'Protect sensitive information and manage information security risks effectively.',
      sectors: ['IT', 'Finance', 'Healthcare', 'E-commerce']
    },
    {
      standard: 'ISO 50001',
      title: 'Energy Management',
      description: 'Improve energy efficiency, reduce costs, and minimize environmental impact.',
      sectors: ['Manufacturing', 'Energy', 'Real Estate', 'Transportation']
    }
  ];

  const certificationProcess = [
    {
      step: 1,
      title: 'Application',
      description: 'Submit your application with required documentation and company details.',
      icon: <FileText size={32} />
    },
    {
      step: 2,
      title: 'Gap Analysis',
      description: 'We conduct a preliminary assessment to identify gaps in your current system.',
      icon: <Search size={32} />
    },
    {
      step: 3,
      title: 'Documentation',
      description: 'Develop and implement required policies, procedures, and records.',
      icon: <ClipboardCheck size={32} />
    },
    {
      step: 4,
      title: 'Audit',
      description: 'Our certified auditors conduct a comprehensive on-site or remote audit.',
      icon: <Users size={32} />
    },
    {
      step: 5,
      title: 'Certification',
      description: 'Upon successful audit, receive your ISO certification valid for 3 years.',
      icon: <Award size={32} />
    },
    {
      step: 6,
      title: 'Surveillance',
      description: 'Annual surveillance audits to ensure continued compliance.',
      icon: <CheckCircle2 size={32} />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="iso-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">ISO Certification Services</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
            Achieve international recognition with globally accepted ISO certifications. 
            We make the certification process simple, transparent, and affordable.
          </p>
        </div>
      </section>

      {/* ISO Standards */}
      <section className="py-20 bg-white" data-testid="iso-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">ISO Standards We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of ISO certifications tailored to your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isoStandards.map((iso, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition" data-testid={`iso-standard-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{iso.standard}</h3>
                    <p className="text-sm text-gray-600">{iso.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{iso.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Applicable Sectors:</p>
                  <div className="flex flex-wrap gap-2">
                    {iso.sectors.map((sector, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20 bg-gray-50" data-testid="certification-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Certification Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined 6-step process ensures a smooth journey to ISO certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationProcess.map((process) => (
              <div key={process.step} className="bg-white rounded-xl shadow-lg p-6 text-center" data-testid={`process-step-${process.step}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {process.icon}
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">STEP {process.step}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" data-testid="certification-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Benefits of ISO Certification</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Enhanced credibility and reputation',
              'Improved customer satisfaction',
              'Better operational efficiency',
              'Access to new markets and tenders',
              'Reduced costs and waste',
              'Compliance with legal requirements',
              'Competitive advantage',
              'Continuous improvement culture'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white" data-testid="iso-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Certified?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Start your ISO certification journey today. Our experts are here to guide you every step of the way.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" data-testid="start-application-button">
              Start Your Application
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISOCertification;