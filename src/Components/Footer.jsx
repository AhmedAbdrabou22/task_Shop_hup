import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ShopHub</h3>
            <p className="mb-4 text-gray-400">Your one-stop destination for all your shopping needs. Quality products, competitive prices, and excellent customer service.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fashion & Apparel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home & Kitchen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beauty & Personal Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports & Outdoors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Toys & Games</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Warranty Information</a></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Responsibility</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-2 xl:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for the latest products, offers, and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l outline-none flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Payment methods */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-bold text-white mb-4">Payment Methods</h3>
          <div className="flex space-x-6">
            <FaCreditCard size={30} className="text-gray-400" />
            <FaPaypal size={30} className="text-gray-400" />
            <FaApplePay size={30} className="text-gray-400" />
            <FaGooglePay size={30} className="text-gray-400" />
            <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white">
              VISA
            </div>
            <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white">
              MC
            </div>
            <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white">
              AMEX
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} ShopHub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Cookies</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
