import React, { useState } from 'react';
import Layout from '../components/Layout';

// Sample data for destinations
const destinations = [
  {
    id: 1,
    title: "Kyrenia Castle & Harbor",
    image: "/src/assets/images/destinations/kyrenia-castle.jpg",
    rating: 4.8,
    author: {
      name: "Maria K.",
      description: "Travel Blogger",
      image: "/src/assets/images/authors/maria.jpg"
    },
    description: "A magnificent 16th-century castle overlooking the picturesque harbor of Kyrenia."
  },
  {
    id: 2,
    title: "Salamis Ruins",
    image: "/src/assets/images/destinations/salamis-ruins.jpg",
    rating: 4.6,
    author: {
      name: "Alex T.",
      description: "Historian",
      image: "/src/assets/images/authors/alex.jpg"
    },
    description: "Ancient city ruins dating back to the 11th century BC, featuring impressive Roman architecture."
  },
  {
    id: 3,
    title: "Bellapais Abbey",
    image: "/src/assets/images/destinations/bellapais-abbey.jpg",
    rating: 4.7,
    author: {
      name: "Sophie N.",
      description: "Travel Photographer",
      image: "/src/assets/images/authors/sophie.jpg"
    },
    description: "Gothic monastery ruins with stunning mountain and sea views, built in the 13th century."
  },
  {
    id: 4,
    title: "Golden Beach",
    image: "/src/assets/images/destinations/golden-beach.jpg",
    rating: 4.9,
    author: {
      name: "David M.",
      description: "Beach Expert",
      image: "/src/assets/images/authors/david.jpg"
    },
    description: "Pristine sandy beach with crystal-clear waters, perfect for swimming and relaxation."
  }
];

const TravelGuide = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [filters, setFilters] = useState({
    beaches: false,
    historical: false,
    restaurants: false,
    activities: false
  });

  const handleFilterChange = (filter) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter]
    });
  };

  const openDestinationPopup = (destination) => {
    setSelectedDestination(destination);
  };

  const closeDestinationPopup = () => {
    setSelectedDestination(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-5">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-4 md:sticky md:top-20 md:h-fit">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-4 py-2 pl-6 pr-10 rounded-full bg-slate-700 bg-opacity-50 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Filter By:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="beaches"
                  checked={filters.beaches}
                  onChange={() => handleFilterChange('beaches')}
                  className="w-5 h-5 text-sky-600 rounded border-gray-500 focus:ring-sky-500"
                />
                <label htmlFor="beaches" className="ml-3 text-white">Beaches</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="historical"
                  checked={filters.historical}
                  onChange={() => handleFilterChange('historical')}
                  className="w-5 h-5 text-sky-600 rounded border-gray-500 focus:ring-sky-500"
                />
                <label htmlFor="historical" className="ml-3 text-white">Historical Sites</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="restaurants"
                  checked={filters.restaurants}
                  onChange={() => handleFilterChange('restaurants')}
                  className="w-5 h-5 text-sky-600 rounded border-gray-500 focus:ring-sky-500"
                />
                <label htmlFor="restaurants" className="ml-3 text-white">Restaurants</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="activities"
                  checked={filters.activities}
                  onChange={() => handleFilterChange('activities')}
                  className="w-5 h-5 text-sky-600 rounded border-gray-500 focus:ring-sky-500"
                />
                <label htmlFor="activities" className="ml-3 text-white">Activities</label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinations.map((destination) => (
                <div 
                  key={destination.id} 
                  className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-4 transition-transform hover:scale-105 cursor-pointer shadow-lg"
                  onClick={() => openDestinationPopup(destination)}
                >
                  <div className="relative mb-4">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-48 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/200";
                      }}
                    />
                    <div className="absolute bottom-2 right-2 flex items-center bg-black bg-opacity-60 px-2 py-1 rounded-lg">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-white text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{destination.title}</h3>
                  <div className="flex items-center mb-4">
                    <img
                      src={destination.author.image}
                      alt={destination.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/40/40";
                      }}
                    />
                    <div>
                      <p className="text-white font-medium">{destination.author.name}</p>
                      <p className="text-gray-400 text-sm">{destination.author.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full transition duration-200">
                Load More
              </button>
            </div>
          </div>
        </div>

        {/* Destination Popup */}
        {selectedDestination && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedDestination.title}</h2>
                <button 
                  onClick={closeDestinationPopup}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <img
                src={selectedDestination.image}
                alt={selectedDestination.title}
                className="w-full h-64 object-cover rounded-2xl mb-4"
                onError={(e) => {
                  e.target.src = "/api/placeholder/600/300";
                }}
              />
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {"★".repeat(Math.floor(selectedDestination.rating))}
                    {selectedDestination.rating % 1 !== 0 ? "½" : ""}
                  </div>
                  <span className="text-white">{selectedDestination.rating}</span>
                </div>
                <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-1 px-4 rounded-full text-sm transition duration-200">
                  Save
                </button>
              </div>
              <p className="text-gray-300 mb-6">{selectedDestination.description}</p>
              <div className="flex items-center mb-6">
                <img
                  src={selectedDestination.author.image}
                  alt={selectedDestination.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/48/48";
                  }}
                />
                <div>
                  <p className="text-white font-medium">{selectedDestination.author.name}</p>
                  <p className="text-gray-400 text-sm">{selectedDestination.author.description}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full transition duration-200 mr-4">
                  Get Directions
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-6 rounded-full transition duration-200">
                  View More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TravelGuide;