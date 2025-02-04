import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Flower } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add subscription logic here
  };

  return (
    <footer className="relative bg-white/70 pt-16 pb-8 backdrop-blur-md dark:bg-gray-900/70">
      <div className="absolute inset-x-0 -top-4 h-4 bg-gradient-to-t from-white/70 to-transparent dark:from-gray-900/70"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Flower className="mr-2 h-8 w-8 text-[#A47551]" />
              <h3 className="text-2xl font-bold dark:text-white">Bloom Era</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Discover the latest trends in fashion and explore our collection of high-quality clothing and accessories. Join us in defining the future of style.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition-colors hover:bg-[#A47551] hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-[#A47551] dark:hover:text-white"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Subscribe to our newsletter for exclusive offers, new arrivals, and fashion insights.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border-2 border-gray-200 bg-transparent px-4 py-3 text-sm transition-colors focus:border-[#A47551] focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-[#A47551]"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-[#A47551] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#8B6344] focus:outline-none focus:ring-2 focus:ring-[#A47551] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Contact Us', 'FAQs', 'Shipping Info', 'Returns', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-600 transition-colors hover:text-[#A47551] dark:text-gray-400 dark:hover:text-[#A47551]"
                  >
                    <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                <div className="mt-1 rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                  <MapPin size={16} />
                </div>
                <span>123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                  <Phone size={16} />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                  <Mail size={16} />
                </div>
                <span>support@bloomera.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Bloom Era. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};