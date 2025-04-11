import React, { useState } from 'react';
import { FaHeart, FaBalanceScale, FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  
  const countries = ['USA', 'Canada', 'UK', 'France', 'Germany', 'Spain', 'Italy', 'Australia'];
  
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md">
      {/* Top bar with countries (desktop) */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 bg-blue-800 text-sm">
        <div className="flex items-center">
          <HiOutlineGlobeAlt className="mr-2" />
          <div className="relative">
            <button 
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              onClick={() => setShowCountries(!showCountries)}
            >
              <span>Ship to:</span>
              <span className="font-medium">USA</span>
              <span className="text-xs">▼</span>
            </button>
            
            {showCountries && (
              <div className="absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-lg rounded-md py-2 z-50 w-48">
                {countries.map((country) => (
                  <button
                    key={country}
                    className="w-full text-left px-4 py-1.5 hover:bg-blue-50 transition-colors"
                    onClick={() => setShowCountries(false)}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-200 transition-colors">Help</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Track Order</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Contact</a>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            className="mr-3 md:hidden text-white focus:outline-none"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <a href="#" className="text-2xl font-bold tracking-wider">SHOPIFY</a>
        </div>
        
        {/* Search bar */}
        <div className="hidden md:flex relative w-full max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md flex items-center justify-center transition-colors">
            <FaSearch />
          </button>
        </div>
        
        {/* Icons - desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="flex flex-col items-center hover:text-blue-200 transition-colors">
            <FaUser className="text-xl mb-1" />
            <span className="text-xs">Account</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-blue-200 transition-colors">
            <FaBalanceScale className="text-xl mb-1" />
            <span className="text-xs">Compare</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-blue-200 transition-colors">
            <FaHeart className="text-xl mb-1" />
            <span className="text-xs">Wishlist</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-blue-200 transition-colors">
            <div className="relative">
              <FaShoppingCart className="text-xl mb-1" />
              <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs text-blue-900 font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>
            <span className="text-xs">Cart</span>
          </a>
        </div>
        
        {/* Mobile icons */}
        <div className="flex items-center space-x-4 md:hidden">
          <button className="text-white">
            <FaSearch size={20} />
          </button>
          <a href="#" className="relative">
            <FaShoppingCart size={20} />
            <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs text-blue-900 font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </a>
        </div>
      </div>
      
      {/* Mobile search - only visible when menu is open */}
      {showMobileMenu && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative flex w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md flex items-center justify-center">
              <FaSearch />
            </button>
          </div>
        </div>
      )}
      
      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-blue-800 text-sm">
          <div className="py-3 px-4 border-b border-blue-700">
            <div className="flex items-center mb-3">
              <HiOutlineGlobeAlt className="mr-2" />
              <span>Ship to:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {countries.map((country) => (
                <button
                  key={country}
                  className="text-left py-1.5 px-2 hover:bg-blue-700 rounded transition-colors"
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
          
          <nav className="py-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-700">
              <FaUser />
              <span>Account</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-700">
              <FaBalanceScale />
              <span>Compare</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-700">
              <FaHeart />
              <span>Wishlist</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-700">
              <FaShoppingCart />
              <span>Cart (3)</span>
            </a>
            <div className="border-t border-blue-700 mt-2 pt-2">
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Help</a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Track Order</a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Contact</a>
            </div>
          </nav>
        </div>
      )}
      
      {/* Categories navbar - desktop only */}
      <nav className="hidden md:block bg-blue-700 py-2 px-6 text-sm">
        <div className="container mx-auto flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-blue-200 transition-colors">Home</a>
          <a href="#" className="font-medium hover:text-blue-200 transition-colors">Electronics</a>
          <a href="#" className="font-medium hover:text-blue-200 transition-colors">Fashion</a>
          <a href="#" className="font-medium hover:text-blue-200 transition-colors">Home & Kitchen</a>
          <a href="#" className="font-medium hover:text-blue-200 transition-colors">Beauty</a>
          <a href="#" className="font-medium hover:text-blue-200 transition-colors">Sports</a>
          <a href="#" className="font-medium hover:text-blue-200 transition-colors">Toys</a>
          <a href="#" className="font-medium text-yellow-300 hover:text-yellow-200 transition-colors">Deals</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
