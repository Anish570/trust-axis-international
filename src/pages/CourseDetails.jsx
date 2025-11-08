import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, DollarSign, Monitor, Calendar, Award } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    course_id: courseId
  });

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`${API}/courses/${courseId}`);
      setCourse(response.data);
    } catch (error) {
      toast.error('Course not found');
      navigate('/training');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post(`${API}/registrations`, formData);
      toast.success('Registration successful! We will contact you with payment details.');
      setFormData({ name: '', email: '', phone: '', country: '', course_id: courseId });
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!course) return null;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Course Header */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16" data-testid="course-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Award size={32} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{course.iso_standard}</h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">Lead Auditor Training</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <Monitor size={16} />
              <span>{course.mode}</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <DollarSign size={16} />
              <span>USD {course.fees}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white" data-testid="course-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">About This Course</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {course.description}
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Course Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Mode of Delivery</span>
                    <span className="font-semibold text-gray-900">{course.mode}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Course Fees</span>
                    <span className="font-semibold text-gray-900">USD {course.fees}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Schedule</span>
                    <span className="font-semibold text-gray-900">{course.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">What You'll Achieve</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Internationally recognized Lead Auditor certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Practical audit skills and techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">In-depth understanding of {course.iso_standard} requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Certificate valid for lifetime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Enhanced career opportunities globally</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Course Curriculum</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day 1: Introduction & Fundamentals</h4>
                    <p className="text-gray-600 text-sm">Understanding ISO standards, management system principles, and audit fundamentals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day 2: Audit Planning & Preparation</h4>
                    <p className="text-gray-600 text-sm">Audit objectives, scope, criteria, and planning techniques</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day 3: Conducting Audits</h4>
                    <p className="text-gray-600 text-sm">Audit techniques, evidence gathering, and documentation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day 4: Audit Reporting & Follow-up</h4>
                    <p className="text-gray-600 text-sm">Reporting findings, corrective actions, and follow-up activities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day 5: Examination & Certification</h4>
                    <p className="text-gray-600 text-sm">Written examination and practical assessment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div>
              <div className="bg-white border-2 border-blue-500 rounded-xl p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Register Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      data-testid="registration-name"
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
                      data-testid="registration-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1234567890"
                      data-testid="registration-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country *</label>
                    <Input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      placeholder="USA"
                      data-testid="registration-country"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={submitting}
                    data-testid="registration-submit"
                  >
                    {submitting ? 'Submitting...' : 'Register for Course'}
                  </Button>
                  <p className="text-xs text-gray-600 text-center">
                    * Payment details will be sent to your email after registration
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;