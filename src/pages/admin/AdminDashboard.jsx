import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, FileText, Briefcase, MessageSquare, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import axios from 'axios';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [enquiries, setEnquiries] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [franchiseApplications, setFranchiseApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      navigate('/admin/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'admin') {
      navigate('/');
      return;
    }

    setUser(parsedUser);
    fetchData(token);
  }, [navigate]);

  const fetchData = async (token) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      
      const [enquiriesRes, registrationsRes, franchiseRes] = await Promise.all([
        axios.get(`${API}/enquiries`, { headers }),
        axios.get(`${API}/registrations`, { headers }),
        axios.get(`${API}/franchise-applications`, { headers })
      ]);

      setEnquiries(enquiriesRes.data);
      setRegistrations(registrationsRes.data);
      setFranchiseApplications(franchiseRes.data);
    } catch (error) {
      toast.error('Failed to load data');
      console.error(error);
      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md" data-testid="admin-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome, {user.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-blue-600 hover:underline" data-testid="view-site">
                View Site
              </a>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="gap-2"
                data-testid="logout-button"
              >
                <LogOut size={18} />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Enquiries</p>
                <p className="text-3xl font-bold text-blue-900">{enquiries.length}</p>
              </div>
              <MessageSquare className="text-blue-600" size={40} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Course Registrations</p>
                <p className="text-3xl font-bold text-blue-900">{registrations.length}</p>
              </div>
              <Award className="text-blue-600" size={40} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Franchise Applications</p>
                <p className="text-3xl font-bold text-blue-900">{franchiseApplications.length}</p>
              </div>
              <Briefcase className="text-blue-600" size={40} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <Tabs defaultValue="enquiries" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="enquiries" data-testid="tab-enquiries">Enquiries</TabsTrigger>
              <TabsTrigger value="registrations" data-testid="tab-registrations">Registrations</TabsTrigger>
              <TabsTrigger value="franchise" data-testid="tab-franchise">Franchise Applications</TabsTrigger>
            </TabsList>

            {/* Enquiries Tab */}
            <TabsContent value="enquiries" className="mt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Recent Enquiries</h2>
              {loading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : enquiries.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No enquiries yet</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Service</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Message</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {enquiries.map((enquiry) => (
                        <tr key={enquiry.id} data-testid="enquiry-row">
                          <td className="px-4 py-3 text-sm text-gray-900">{enquiry.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{enquiry.email}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{enquiry.service_interested_in || '-'}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{enquiry.message.substring(0, 50)}...</td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {new Date(enquiry.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </TabsContent>

            {/* Registrations Tab */}
            <TabsContent value="registrations" className="mt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Course Registrations</h2>
              {loading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : registrations.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No registrations yet</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Course</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {registrations.map((reg) => (
                        <tr key={reg.id} data-testid="registration-row">
                          <td className="px-4 py-3 text-sm text-gray-900">{reg.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{reg.email}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{reg.course_title}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{reg.country}</td>
                          <td className="px-4 py-3 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              reg.payment_status === 'paid' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {reg.payment_status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {new Date(reg.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </TabsContent>

            {/* Franchise Applications Tab */}
            <TabsContent value="franchise" className="mt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Franchise Applications</h2>
              {loading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : franchiseApplications.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No applications yet</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Business</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Experience</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {franchiseApplications.map((app) => (
                        <tr key={app.id} data-testid="franchise-row">
                          <td className="px-4 py-3 text-sm text-gray-900">{app.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{app.business_name}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{app.country}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{app.experience}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{app.email}</td>
                          <td className="px-4 py-3 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              app.status === 'approved' ? 'bg-green-100 text-green-800' :
                              app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {new Date(app.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;