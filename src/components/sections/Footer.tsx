import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">TechPath</h3>
            <p className="text-gray-300 mb-4">
              Empowering careers through comprehensive data analytics education. 
              Join 500+ successful alumni in top companies.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#curriculum" className="text-gray-300 hover:text-white transition">Curriculum</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition">Success Stories</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Data Analytics Bootcamp</span></li>
              <li><span className="text-gray-300">Python for Data Science</span></li>
              <li><span className="text-gray-300">SQL Mastery</span></li>
              <li><span className="text-gray-300">Power BI Dashboard</span></li>
              <li><span className="text-gray-300">Cloud Analytics</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">info@techpath.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TechPath. All rights reserved. | 
            <a href="#" className="hover:text-white transition ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
