import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Download, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const Resources = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [blogResponse, resourcesResponse] = await Promise.all([
        axios.get(`${API}/blog`),
        axios.get(`${API}/resources`)
      ]);
      setBlogPosts(blogResponse.data);
      setResources(resourcesResponse.data);
    } catch (error) {
      toast.error('Failed to load resources');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="resources-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Resources & Downloads</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
            Access helpful guides, brochures, and articles about ISO certification and quality management
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white" data-testid="blog-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-blue-900">Latest Articles</h2>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition" data-testid={`blog-post-${index}`}>
                  <div className="bg-linear-to-r from-blue-600 to-blue-500 p-6 text-white">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Calendar size={14} />
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link to={`/resources/blog/${post.id}`}>
                        <Button variant="link" className="text-blue-600 p-0" data-testid={`read-more-${index}`}>
                          Read More →
                        </Button>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags && post.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gray-50" data-testid="downloads-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-blue-900">Downloadable Resources</h2>
          </div>

          {resources.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-600">No downloadable resources available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={resource.id} className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition" data-testid={`resource-${index}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.category}</p>
                    </div>
                  </div>
                  <a href={resource.file_url} download target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2" data-testid={`download-${index}`}>
                      <Download size={16} />
                      Download
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white" data-testid="quick-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-3">ISO Standards Guide</h3>
              <p className="text-gray-700 mb-4">Comprehensive overview of all ISO standards we offer</p>
              <Link to="/iso-certification">
                <Button variant="link" className="text-blue-600">Learn More →</Button>
              </Link>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Training Calendar</h3>
              <p className="text-gray-700 mb-4">View upcoming training schedules and register</p>
              <Link to="/training">
                <Button variant="link" className="text-blue-600">View Schedule →</Button>
              </Link>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Certification Process</h3>
              <p className="text-gray-700 mb-4">Step-by-step guide to getting ISO certified</p>
              <Link to="/iso-certification">
                <Button variant="link" className="text-blue-600">View Process →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;