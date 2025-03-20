import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FaAward, FaMapMarkerAlt, FaCar, FaRegClock } from 'react-icons/fa';

// Sample data for destinations
const destinations = [
  {
    id: 1,
    title: "Kyrenia Castle & Harbor",
    image: "/src/assets/images/destinations/kyrenia-castle.jpg",
    rating: 4.8,
    duration: "2 days",
    travellers: "1 traveller",
    date: "Mar 21 - 23",
    author: {
      name: "Maria K.",
      description: "Travel Blogger",
      image: "/src/assets/images/authors/maria.jpg"
    },
    description: "A magnificent 16th-century castle overlooking the picturesque harbor of Kyrenia.",
    milestones: [
      {
        day: "Day 1",
        title: "Castle Exploration",
        description: "Explored the main castle grounds and fortifications",
        duration: "34 min",
        type: "Non-stop",
        extendedContent: "Started the day with a guided tour of the castle's main halls and battlements. The views from the top were breathtaking, offering panoramic vistas of the Mediterranean and the charming harbor below.",
        achievement: "Discovered a hidden passage that most tourists miss, leading to an ancient cistern",
        image: "/src/assets/images/destinations/kyrenia-castle-interior.jpg",
        location: "Kyrenia, Cyprus"
      },
      {
        day: "Day 2",
        title: "Harbor Cruise",
        description: "Took a traditional boat tour around the harbor",
        duration: "36 min",
        type: "Non-stop",
        extendedContent: "Boarded a wooden fishing boat for a two-hour cruise of the harbor and coastline. The captain shared fascinating stories about the maritime history of Kyrenia and pointed out hidden caves and beaches only accessible by water.",
        achievement: "Spotted dolphins playing near our boat - a rare sighting according to the locals",
        image: "/src/assets/images/destinations/kyrenia-harbor.jpg",
        location: "Kyrenia Harbor, Cyprus"
      }
    ]
  },
  {
    id: 2,
    title: "Salamis Ruins",
    image: "/src/assets/images/destinations/salamis-ruins.jpg",
    rating: 4.6,
    duration: "1 day",
    travellers: "2 travellers",
    date: "Apr 15 - 16",
    author: {
      name: "Alex T.",
      description: "Historian",
      image: "/src/assets/images/authors/alex.jpg"
    },
    description: "Ancient city ruins dating back to the 11th century BC, featuring impressive Roman architecture.",
    milestones: [
      {
        day: "Day 1",
        title: "Gymnasium Complex",
        description: "Explored the Roman gymnasium and baths",
        duration: "45 min",
        type: "Non-stop",
        extendedContent: "The day began at the massive gymnasium complex, which features impressively preserved columns and intricate mosaics. The scale of the Roman baths demonstrates the importance of Salamis as a major city in the Eastern Mediterranean.",
        achievement: "Documented rare architectural details missed by most guidebooks",
        image: "/src/assets/images/destinations/salamis-gymnasium.jpg",
        location: "Famagusta, Cyprus"
      },
      {
        day: "Day 1",
        title: "Theater Excavation",
        description: "Visited the amphitheater during ongoing excavation work",
        duration: "30 min",
        type: "Non-stop",
        extendedContent: "Had the rare opportunity to observe archaeologists at work in the 15,000-seat theater. Current excavations are revealing new details about the structure's acoustics and staging mechanisms.",
        achievement: "Got permission to enter normally restricted excavation areas",
        image: "/src/assets/images/destinations/salamis-theater.jpg",
        location: "Famagusta, Cyprus"
      }
    ]
  },
  {
    id: 3,
    title: "Bellapais Abbey",
    image: "/src/assets/images/destinations/bellapais-abbey.jpg",
    rating: 4.7,
    duration: "1 day",
    travellers: "1 traveller",
    date: "May 5 - 6",
    author: {
      name: "Sophie N.",
      description: "Travel Photographer",
      image: "/src/assets/images/authors/sophie.jpg"
    },
    description: "Gothic monastery ruins with stunning mountain and sea views, built in the 13th century.",
    milestones: [
      {
        day: "Fri, May 5",
        title: "Dawn Photography",
        description: "Early morning photoshoot before tourists arrive",
        duration: "40 min",
        type: "Non-stop",
        extendedContent: "Arrived before dawn to capture the abbey in the soft morning light. The empty cloisters and refectory have an ethereal quality when bathed in the golden sunrise glow. Perfect for long exposure photography.",
        achievement: "Photographed rare light patterns through the rose window that only occur during certain seasons",
        image: "/src/assets/images/destinations/bellapais-dawn.jpg",
        location: "Bellapais, Cyprus"
      },
      {
        day: "Sat, May 6",
        title: "Village Exploration",
        description: "Wandered through Bellapais village and met locals",
        duration: "35 min",
        type: "Non-stop",
        extendedContent: "The village surrounding the abbey is as charming as the monument itself. Narrow streets lead to hidden courtyards and family-run restaurants. Several residents shared stories of growing up in the shadow of the abbey.",
        achievement: "Was invited to a traditional Cypriot home for dinner with a family who has lived here for generations",
        image: "/src/assets/images/destinations/bellapais-village.jpg",
        location: "Bellapais Village, Cyprus"
      }
    ]
  },
  {
    id: 4,
    title: "Golden Beach",
    image: "/src/assets/images/destinations/golden-beach.jpg",
    rating: 4.9,
    duration: "2 days",
    travellers: "4 travellers",
    date: "Jun 10 - 12",
    author: {
      name: "David M.",
      description: "Beach Expert",
      image: "/src/assets/images/authors/david.jpg"
    },
    description: "Pristine sandy beach with crystal-clear waters, perfect for swimming and relaxation.",
    milestones: [
      {
        day: "Sat, Jun 10",
        title: "Beachcombing",
        description: "Collected rare shells and sea glass",
        duration: "50 min",
        type: "Non-stop",
        extendedContent: "The morning hours are perfect for beachcombing, as overnight tides bring in new treasures. Found an impressive variety of intact shells, including some Mediterranean species that are becoming increasingly rare.",
        achievement: "Discovered a perfect specimen of the protected Noble Pen Shell",
        image: "/src/assets/images/destinations/golden-beach-morning.jpg",
        location: "Karpas Peninsula, Cyprus"
      },
      {
        day: "Sun, Jun 11",
        title: "Snorkeling Adventure",
        description: "Explored underwater rock formations and marine life",
        duration: "45 min",
        type: "Non-stop",
        extendedContent: "The waters off Golden Beach offer exceptional clarity, with visibility often exceeding 30 meters. Snorkeling revealed colorful fish, octopus hiding in rocky crevices, and meadows of swaying seagrass.",
        achievement: "Spotted and photographed a critically endangered Mediterranean monk seal",
        image: "/src/assets/images/destinations/golden-beach-snorkeling.jpg",
        location: "Karpas Peninsula, Cyprus"
      }
    ]
  }
];

const TravelGuide = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [expandedMilestone, setExpandedMilestone] = useState(null);
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
    setExpandedMilestone(null);
  };

  const closeDestinationPopup = () => {
    setSelectedDestination(null);
    setExpandedMilestone(null);
  };

  const toggleMilestone = (index) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
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
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:shadow-xl cursor-pointer"
                  onClick={() => openDestinationPopup(destination)}
                >
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/200";
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {destination.id}
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center bg-black bg-opacity-60 px-2 py-1 rounded-lg">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-white text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{destination.title}</h2>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span>{destination.date}</span>
                      <span>•</span>
                      <span>{destination.duration}</span>
                      <span>•</span>
                      <span>{destination.travellers}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={destination.author.image}
                          alt={destination.author.name}
                          className="w-8 h-8 rounded-full mr-2"
                          onError={(e) => {
                            e.target.src = "/api/placeholder/32/32";
                          }}
                        />
                        <div>
                          <p className="text-gray-800 font-medium text-sm">{destination.author.name}</p>
                          <p className="text-gray-500 text-xs">{destination.author.description}</p>
                        </div>
                      </div>
                      
                      <button className="text-sky-600 hover:text-sky-800 transition text-sm font-medium">
                        View Details
                      </button>
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

        {/* Destination Popup with Timeline */}
        {selectedDestination && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="bg-gray-200 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-2">
                      {selectedDestination.id}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedDestination.title}</h2>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{selectedDestination.date}</span>
                    <span>•</span>
                    <span>{selectedDestination.duration}</span>
                    <span>•</span>
                    <span>{selectedDestination.travellers}</span>
                  </div>
                </div>
                <button 
                  onClick={closeDestinationPopup}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
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
                      <span className="text-gray-700">{selectedDestination.rating}</span>
                    </div>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-1 px-4 rounded-full text-sm transition duration-200">
                      Save
                    </button>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedDestination.description}</p>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <img
                      src={selectedDestination.author.image}
                      alt={selectedDestination.author.name}
                      className="w-12 h-12 rounded-full mr-4"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/48/48";
                      }}
                    />
                    <div>
                      <p className="text-gray-800 font-medium">{selectedDestination.author.name}</p>
                      <p className="text-gray-500 text-sm">{selectedDestination.author.description}</p>
                      <p className="text-sky-600 text-sm mt-1">Travel Guide</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Itinerary</h3>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-700 mb-6">
                    <p>Follow {selectedDestination.author.name}'s detailed itinerary through {selectedDestination.title}. This carefully planned journey highlights the best experiences and hidden gems.</p>
                  </div>
                  
                  <div className="flex justify-between mb-4">
                    <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                      Get Directions
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-200">
                      Download Itinerary
                    </button>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <h2 className="text-xl font-bold text-gray-800 mb-4">Journey Details</h2>
              
              {/* Flight/Transport Card */}
              {selectedDestination.id === 1 && (
                <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-gray-500">Jan 20</div>
                      <div className="text-red-500 text-2xl font-bold">09:50</div>
                      <div className="font-medium">BOM</div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center mx-4">
                      <div className="text-xl font-medium text-gray-500">14h20m</div>
                      <div className="w-full flex items-center">
                        <div className="h-0.5 flex-1 bg-gray-300"></div>
                        <div className="mx-2 text-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13"></path>
                            <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                          </svg>
                        </div>
                        <div className="h-0.5 flex-1 bg-gray-300"></div>
                      </div>
                      <div className="text-gray-500">Economy</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-gray-500">Jan 21</div>
                      <div className="text-green-500 text-2xl font-bold">15:38</div>
                      <div className="font-medium">USA</div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Airport Pickup Card */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Pick Up From Airport</h3>
                    <div className="mt-2">
                      <div className="text-gray-700">Taxi Number: MPA546</div>
                      <div className="text-gray-700">Contact number: +999999</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-12 bg-yellow-100 rounded-lg mx-auto flex items-center justify-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="16" height="6" rx="2"></rect>
                        <rect x="4" y="10" width="10" height="8" rx="2"></rect>
                        <circle cx="6" cy="15" r="1"></circle>
                        <circle cx="12" cy="15" r="1"></circle>
                      </svg>
                    </div>
                    <div className="text-gray-600 text-sm">Premium</div>
                  </div>
                </div>
              </div>
              
              {/* Hotel Stay Card */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Stay At {selectedDestination.title.split(' ')[0]} Hotel</h3>
                    <div className="mt-2">
                      <div className="text-gray-700">Booking Id: 24JN09</div>
                      <div className="text-gray-700">Contact number: +909090</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center mb-1 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <div className="absolute -top-1 -right-1 flex">
                        {[...Array(4)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm flex items-center justify-center">
                      Exclusive 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Daily Activities Timeline */}
              <h3 className="text-lg font-medium bg-blue-50 text-blue-700 px-4 py-2 rounded-lg inline-block mb-4">Daily Activities</h3>
              <div className="border-l-2 border-blue-300 ml-4 mb-8">
                {selectedDestination.milestones.map((milestone, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="absolute -left-3 top-0 w-5 h-5 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full ${expandedMilestone === index ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    </div>
                    
                    <div 
                      className={`ml-6 cursor-pointer transition ${expandedMilestone === index ? 'bg-gray-50 rounded-lg p-4' : 'hover:bg-gray-50 hover:rounded-lg hover:p-4'}`}
                      onClick={() => toggleMilestone(index)}
                    >
                      <div className="flex items-center text-gray-500 text-sm mb-1">
                        <span className="font-medium">{index + 1}</span>
                        <span className="mx-2">•</span>
                        <span>{milestone.location}</span>
                      </div>
                      
                      <div className="mb-2">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.4 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.5-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.4 1 12.4 1 13.5V16c0 .6.4 1 1 1h2"></path>
                            <circle cx="7" cy="17" r="2"></circle>
                            <circle cx="17" cy="17" r="2"></circle>
                          </svg>
                          <span className="text-gray-800 font-medium">Car</span>
                          <span className="ml-auto text-gray-500 text-sm">Coming soon...</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-800">{milestone.day}</span>
                            <div className="flex items-center text-sm text-gray-500">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span>{milestone.duration}</span>
                              <span className="mx-1">•</span>
                              <span>{milestone.type}</span>
                            </div>
                          </div>
                          <span className="font-medium text-gray-800">
                            {milestone.day === selectedDestination.milestones[0].day ? milestone.day : 'Sun, Mar 23'}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-medium text-gray-800 mb-1">{milestone.title}</h3>
                      <p className="text-gray-600 mb-2">{milestone.description}</p>
                      
                      <div className="flex justify-end">
                        <button className="text-sky-600 hover:text-sky-800 transition text-sm">
                          {expandedMilestone === index ? 'Show Less' : 'Learn More'}
                        </button>
                      </div>
                    </div>
                    
                    {/* Expanded milestone content */}
                    {expandedMilestone === index && (
                      <div className="ml-6 mt-3 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 animate-fadeIn">
                        <div className="md:flex">
                          <div className="md:w-1/2">
                            <img 
                              src={milestone.image} 
                              alt={milestone.title} 
                              className="w-full h-48 md:h-full object-cover"
                              onError={(e) => {
                                e.target.src = "/api/placeholder/400/300";
                              }}
                            />
                          </div>
                          <div className="md:w-1/2 p-4">
                            <div className="flex items-center mb-3">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {milestone.day}
                              </span>
                              <h2 className="text-lg font-bold text-gray-800 ml-3">
                                {milestone.title}
                              </h2>
                            </div>
                            
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {milestone.extendedContent}
                            </p>
                            
                            <div className="bg-yellow-50 rounded-lg p-3 flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-600 mr-3 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                              </svg>
                              <p className="text-gray-700">
                                <span className="font-medium text-gray-800">Key Achievement:</span> {milestone.achievement}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TravelGuide;