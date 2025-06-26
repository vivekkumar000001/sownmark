import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock
} from 'react-icons/fa';
import logo from '../../assets/mast.png';
; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-white textblack-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Sownmark Logo"
              className="h-10 mb-4"
            />
            <p className="mb-4">
              Your partner in digital growth, providing digital marketing education, recruitment services, agency solutions, and web development.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-blue-600 transition-colors">Digital Marketing Mastery</Link></li>
              <li><Link to="/hiring-solutions" className="hover:text-blue-600 transition-colors">Hiring Solutions</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/WebDevelopment" className="hover:text-blue-600 transition-colors">WebDevlopment</Link></li>
              <li><Link to="/Agency" className="hover:text-blue-600 transition-colors">Agency</Link></li> 
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
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
                <span>deepak@sownmark.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-500 mr-3" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sownmark Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
