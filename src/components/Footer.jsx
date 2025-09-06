import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and About */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-white mb-4">Trade Code Run</h3>
          <p className="text-sm leading-relaxed">
            Advanced stock market analysis and tracking platform for smart investors.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => window.location.href = '/#market-overview'} className="hover:text-white transition-colors">Markets</button></li>
            <li><button onClick={() => window.location.href = '/#top-stocks'} className="hover:text-white transition-colors">Stocks</button></li>
            <li><button onClick={() => window.location.href = '/#breakout-stocks'} className="hover:text-white transition-colors">Analysis</button></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <MapPin className="h-4 w-4 mr-3 text-blue-600" />
              <span>New York, NY, USA</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-3 text-blue-600" />
              <span>info@stocktracker.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
