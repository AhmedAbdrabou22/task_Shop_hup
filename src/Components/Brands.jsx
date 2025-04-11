import React from 'react';

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      background: "bg-gray-100"
    },
    {
      id: 2,
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      background: "bg-blue-50"
    },
    {
      id: 3,
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      background: "bg-gray-100"
    },
    {
      id: 4,
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      background: "bg-blue-50"
    },
    {
      id: 5,
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
      background: "bg-gray-100"
    },
    {
      id: 6,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      background: "bg-blue-50"
    }
  ];

  return (
    <section className="mb-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Brands</h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium">View All Brands</button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <div 
            key={brand.id} 
            className={`${brand.background} rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 cursor-pointer group`}
          >
            <div className="h-16 w-full flex items-center justify-center mb-3 overflow-hidden">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-center text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Become an Official Brand Partner</h3>
            <p className="text-blue-100">Join our marketplace and reach millions of customers</p>
          </div>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md font-medium transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
