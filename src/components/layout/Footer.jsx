import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Sownmark</h3>
            <p className="mb-4">
              Your partner in digital growth, providing digital marketing education, recruitment services, agency solutions, and web development.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="text-slate-300 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-blue-400 transition-colors">Digital Marketing Mastery</Link></li>
              <li><Link to="/hiring-solutions" className="hover:text-blue-400 transition-colors">Hiring Solutions</Link></li>
              <li><Link to="/#agency" className="hover:text-blue-400 transition-colors">Digital Marketing Agency</Link></li>
              <li><Link to="/#web-dev" className="hover:text-blue-400 transition-colors">Website Development</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" />
                <span>123 Digital Avenue, Tech City</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <span>info@sownmark.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-500 mr-3" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sownmark Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
