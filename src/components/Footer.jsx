import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TA</span>
              </div>
              <h3 className="text-xl font-bold">Trust Axis</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Certified to Lead, Trusted to Deliver. Global ISO certification and training solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400" data-testid="facebook-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400" data-testid="instagram-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400" data-testid="linkedin-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/iso-certification" className="text-gray-400 hover:text-blue-400">ISO Certification</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-blue-400">Training Programs</Link></li>
              <li><Link to="/franchise" className="text-gray-400 hover:text-blue-400">Franchise</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-blue-400">Resources</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">ISO 9001 Certification</li>
              <li className="text-gray-400">ISO 14001 Certification</li>
              <li className="text-gray-400">ISO 45001 Certification</li>
              <li className="text-gray-400">Lead Auditor Training</li>
              <li className="text-gray-400">Global Partnerships</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 shrink-0" />
                <div>
                  <a href="tel:+917658024194" className="text-gray-400 hover:text-blue-400 block">+91 7658024194</a>
                  <a href="tel:+260974922224" className="text-gray-400 hover:text-blue-400 block">+260 974922224</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 shrink-0" />
                <a href="mailto:trustaxisinternational@gmail.com" className="text-gray-400 hover:text-blue-400">
                  trustaxisinternational@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span className="text-gray-400">India, Zambia, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Trust Axis International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;