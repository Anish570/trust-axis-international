import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Clock, DollarSign, Monitor, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const Training = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API}/courses`);
      setCourses(response.data);
    } catch (error) {
      toast.error('Failed to load courses');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    'Internationally recognized certification',
    'Expert trainers with real-world experience',
    'Interactive online sessions',
    'Comprehensive course materials',
    'Lifetime certificate validity',
    'Post-training support',
    'Career advancement opportunities',
    'Global job opportunities'
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="training-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Lead Auditor Training</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
            Become a certified Lead Auditor with our comprehensive 5-day online training programs. 
            Gain the skills and credentials to audit management systems worldwide.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 bg-white" data-testid="courses-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Available Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of internationally recognized Lead Auditor training programs
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-xl transition" data-testid={`course-card-${course.id}`}>
                  <div className="bg-linear-to-r from-blue-600 to-blue-500 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={24} />
                      <h3 className="text-xl font-bold">{course.iso_standard}</h3>
                    </div>
                    <p className="text-blue-100">Lead Auditor Training</p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h4>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock size={16} className="text-blue-600" />
                        <span><strong>Duration:</strong> {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Monitor size={16} className="text-blue-600" />
                        <span><strong>Mode:</strong> {course.mode}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <DollarSign size={16} className="text-blue-600" />
                        <span><strong>Fees:</strong> USD {course.fees}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar size={16} className="text-blue-600" />
                        <span><strong>{course.schedule}</strong></span>
                      </div>
                    </div>

                    <Link to={`/training/${course.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" data-testid={`view-details-${course.id}`}>
                        View Details & Register
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50" data-testid="training-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Train With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <BookOpen className="text-white" size={16} />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white" data-testid="curriculum">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">What You'll Learn</h2>
          <div className="bg-blue-50 rounded-xl p-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-gray-700">Understanding ISO standards and management system requirements</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-gray-700">Audit principles, practices, and techniques</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-gray-700">Planning and conducting effective audits</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <p className="text-gray-700">Competence and evaluation of auditors</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">5</span>
                </div>
                <p className="text-gray-700">Audit reporting and follow-up activities</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">6</span>
                </div>
                <p className="text-gray-700">Practical case studies and role-playing exercises</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white" data-testid="training-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Auditing Career Today</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of professionals who have advanced their careers through our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" data-testid="browse-courses-button">
                Browse All Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" data-testid="contact-us-button">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;