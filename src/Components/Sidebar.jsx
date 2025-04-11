import React, { useState, useEffect } from 'react';
import { FaFilter, FaTimes, FaChevronDown, FaChevronUp, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { RiPriceTag3Line } from 'react-icons/ri';
import { MdCategory, MdLocalShipping } from 'react-icons/md';
import { BsFillGridFill } from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: true,
    brands: false,
    shipping: false
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  // Categories data
  const categories = [
    { id: 1, name: 'Electronics', count: 120 },
    { id: 2, name: 'Clothing', count: 85 },
    { id: 3, name: 'Home & Kitchen', count: 67 },
    { id: 4, name: 'Beauty & Personal Care', count: 43 },
    { id: 5, name: 'Sports & Outdoors', count: 38 }
  ];

  // Brands data
  const brands = [
    { id: 1, name: 'Apple', count: 32 },
    { id: 2, name: 'Samsung', count: 28 },
    { id: 3, name: 'Nike', count: 25 },
    { id: 4, name: 'Adidas', count: 20 },
    { id: 5, name: 'Sony', count: 18 }
  ];

  return (
    <>
      {/* Mobile toggle button - visible only on small screens */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed z-50 bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label={isOpen ? "Close filters" : "Open filters"}
      >
        {isOpen ? <FaTimes size={20} /> : <FaFilter size={20} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transform transition-transform duration-300 ease-in-out fixed md:static top-0 left-0 h-full z-40 bg-white shadow-lg md:shadow-none w-72 md:w-64 lg:w-72 overflow-y-auto`}
      >
        <div className="p-4">
          {/* Header with close button for mobile */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <FaFilter className="mr-2" /> Filters
            </h2>
            <button 
              onClick={toggleSidebar}
              className="md:hidden text-gray-500 hover:text-gray-700"
              aria-label="Close sidebar"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Clear all filters button */}
          <button className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
            Clear All Filters
          </button>

          {/* Categories Section */}
          <div className="mb-6">
            <button 
              onClick={() => toggleSection('categories')}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-3"
            >
              <span className="flex items-center">
                <MdCategory className="mr-2 text-blue-600" size={18} />
                Categories
              </span>
              {expandedSections.categories ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.categories && (
              <div className="space-y-2 ml-2">
                {categories.map(category => (
                  <label key={category.id} className="flex items-center justify-between py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                      />
                      <span className="ml-2 text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range Section */}
          <div className="mb-6">
            <button 
              onClick={() => toggleSection('price')}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-3"
            >
              <span className="flex items-center">
                <RiPriceTag3Line className="mr-2 text-blue-600" size={18} />
                Price Range
              </span>
              {expandedSections.price ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.price && (
              <div className="space-y-4 ml-2">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm text-gray-600 mb-1">Min</label>
                    <input 
                      type="number" 
                      placeholder="$0" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm text-gray-600 mb-1">Max</label>
                    <input 
                      type="number" 
                      placeholder="$1000" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$0</span>
                  <span>$250</span>
                  <span>$500</span>
                  <span>$750</span>
                  <span>$1000</span>
                </div>
              </div>
            )}
          </div>

          {/* Rating Section */}
          <div className="mb-6">
            <button 
              onClick={() => toggleSection('rating')}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-3"
            >
              <span className="flex items-center">
                <FaStar className="mr-2 text-blue-600" size={18} />
                Rating
              </span>
              {expandedSections.rating ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.rating && (
              <div className="space-y-2 ml-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <label key={rating} className="flex items-center justify-between py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                      />
                      <div className="flex ml-2">
                        {[...Array(rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 mr-0.5" size={14} />
                        ))}
                        {[...Array(5-rating)].map((_, i) => (
                          <FaStar key={i} className="text-gray-300 mr-0.5" size={14} />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">& Up</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Brands Section */}
          <div className="mb-6">
            <button 
              onClick={() => toggleSection('brands')}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-3"
            >
              <span className="flex items-center">
                <BsFillGridFill className="mr-2 text-blue-600" size={16} />
                Brands
              </span>
              {expandedSections.brands ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.brands && (
              <div className="space-y-2 ml-2">
                {brands.map(brand => (
                  <label key={brand.id} className="flex items-center justify-between py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                      />
                      <span className="ml-2 text-gray-700">{brand.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                      {brand.count}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Shipping Options */}
          <div className="mb-6">
            <button 
              onClick={() => toggleSection('shipping')}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-3"
            >
              <span className="flex items-center">
                <MdLocalShipping className="mr-2 text-blue-600" size={18} />
                Shipping
              </span>
              {expandedSections.shipping ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.shipping && (
              <div className="space-y-2 ml-2">
                <label className="flex items-center py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                  />
                  <span className="ml-2 text-gray-700">Free Shipping</span>
                </label>
                <label className="flex items-center py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                  />
                  <span className="ml-2 text-gray-700">Same Day Delivery</span>
                </label>
                <label className="flex items-center py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                  />
                  <span className="ml-2 text-gray-700">Express Shipping</span>
                </label>
              </div>
            )}
          </div>

          {/* Apply Filters Button */}
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
            Apply Filters
          </button>
        </div>
      </aside>

      {/* Overlay for mobile - only visible when sidebar is open on mobile */}
      {isOpen && windowWidth < 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
