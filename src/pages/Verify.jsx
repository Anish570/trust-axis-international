import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, CheckCircle2, XCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

const Verify = () => {
  const [code, setCode] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error('Please enter a certificate code');
      return;
    }

    setLoading(true);
    setError(false);
    setCertificate(null);

    try {
      const response = await axios.get(`${API}/certificates/verify/${code.trim()}`);
      setCertificate(response.data);
      toast.success('Certificate found and verified!');
    } catch (err) {
      setError(true);
      toast.error('Certificate not found or invalid');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20" data-testid="verify-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto mb-6" size={64} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Certificate Verification</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Verify the authenticity of Trust Axis International certificates
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20 bg-white" data-testid="verification-form">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Enter Certificate Code</h2>
            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Certificate Code</label>
                <Input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="e.g., TAI-2025-00001"
                  className="text-lg"
                  data-testid="certificate-code-input"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Enter the unique code found on your certificate
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 gap-2"
                disabled={loading}
                data-testid="verify-button"
              >
                <Search size={18} />
                {loading ? 'Verifying...' : 'Verify Certificate'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Verification Result */}
      {(certificate || error) && (
        <section className="pb-20 bg-white" data-testid="verification-result">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {certificate && (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="text-green-600" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold text-green-900">Certificate Valid</h3>
                    <p className="text-green-700">This certificate has been verified</p>
                  </div>
                </div>
                <div className="space-y-3 bg-white rounded-lg p-6">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Certificate Code:</span>
                    <span className="font-bold text-gray-900">{certificate.code}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Holder Name:</span>
                    <span className="font-bold text-gray-900">{certificate.user_name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Course:</span>
                    <span className="font-bold text-gray-900">{certificate.course}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Issue Date:</span>
                    <span className="font-bold text-gray-900">
                      {new Date(certificate.issue_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-bold text-green-600 uppercase">{certificate.status}</span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="text-red-600" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold text-red-900">Certificate Not Found</h3>
                    <p className="text-red-700">The certificate code you entered is invalid or does not exist</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Please check:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• The certificate code is entered correctly</li>
                    <li>• The code matches exactly as shown on your certificate</li>
                    <li>• The certificate was issued by Trust Axis International</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    If you believe this is an error, please <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-16 bg-gray-50" data-testid="verification-info">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">About Certificate Verification</h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-700 mb-4">
              All certificates issued by Trust Axis International contain a unique verification code. 
              This system allows anyone to verify the authenticity of a certificate instantly.
            </p>
            <p className="text-gray-700 mb-4">
              Our verification system is secure and tamper-proof, ensuring that only genuine certificates 
              issued by our organization can be verified.
            </p>
            <p className="text-gray-700">
              If you have any questions about certificate verification, please don't hesitate to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Verify;