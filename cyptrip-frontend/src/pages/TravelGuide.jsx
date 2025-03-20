import React, { useState } from 'react';
import Layout from '../components/Layout';
import IMG_PER from '../assets/images/IMG/person.png'
import IMG_FEPER from '../assets/images/IMG/Feperson.png'
import IMG_Kyrena from '../assets/images/IMG/kyrenia.jpg'
import IMG_Cruise from '../assets/images/IMG/cruise.jpg'
import IMG_Salamis from '../assets/images/IMG/Salamis Ruins, Northern Cyprus.jpg'
import IMG_Bellapais from '../assets/images/IMG/Bellapais Abbey.jpg'
import IMG_GoldBeach from '../assets/images/IMG/goldenbeach.jpg'

import { 
  FaAward, 
  FaMapMarkerAlt, 
  FaCar, 
  FaRegClock, 
  FaPlane, 
  FaHotel, 
  FaCalendarAlt, 
  FaUtensils, 
  FaLandmark, 
  FaInfoCircle, 
  FaMapMarkedAlt,
  FaTicketAlt
} from 'react-icons/fa';

// Sample data for destinations (keeping original data)
const destinations = [
  {
    id: 1,
    title: "Kyrenia Castle & Harbor",
    image: IMG_Kyrena,
    rating: 4.8,
    duration: "2 days",
    travellers: "1 traveller",
    date: "Mar 21 - 23",
    author: {
      name: "Ali K.",
      description: "Travel Blogger",
      image: IMG_PER
    },
    description: "A magnificent 16th-century castle overlooking the picturesque harbor of Kyrenia.",
    extendedDescription: "Kyrenia Castle is a stunning historical site located at the eastern end of the old harbor in Kyrenia, Northern Cyprus. Built initially by the Byzantines to guard the city against Arab raids, the castle was later expanded by the Lusignans and Venetians. The current massive structure dates primarily from the Venetian period. Inside the castle, visitors can explore ancient dungeons, a shipwreck museum housing a well-preserved 4th-century Greek merchant vessel, and enjoy panoramic views of the Mediterranean from its battlements. The adjacent Kyrenia Harbor is lined with charming cafes and restaurants, offering a perfect blend of history and relaxation.",
    milestones: [
      {
        day: "Day 1",
        title: "Castle Exploration",
        description: "Explored the main castle grounds and fortifications",
        duration: "34 min",
        type: "Non-stop",
        extendedContent: "Started the day with a guided tour of the castle's main halls and battlements. The views from the top were breathtaking, offering panoramic vistas of the Mediterranean and the charming harbor below.",
        achievement: "Discovered a hidden passage that most tourists miss, leading to an ancient cistern",
        image: IMG_Kyrena,
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
        image: IMG_Cruise,
        location: "Kyrenia Harbor, Cyprus"
      }
    ],
    // New travel logistics data for Kyrenia
    travelLogistics: {
      flights: [
        {
          date: "Mar 20, 2025",
          time: "10:30 AM - 1:45 PM",
          flight: "TK1784",
          from: "London Heathrow (LHR)",
          to: "Ercan International Airport (ECN)",
          airline: "Turkish Airlines",
          status: "Confirmed"
        },
        {
          date: "Mar 24, 2025",
          time: "3:15 PM - 6:30 PM",
          flight: "TK1785",
          from: "Ercan International Airport (ECN)",
          to: "London Heathrow (LHR)",
          airline: "Turkish Airlines",
          status: "Confirmed"
        }
      ],
      hotels: [
        {
          name: "Kyrenia Harbor View Hotel",
          checkIn: "Mar 20, 2025",
          checkOut: "Mar 24, 2025",
          roomType: "Deluxe Sea View",
          address: "25 Harbor Road, Kyrenia",
          confirmation: "HK7891234",
          status: "Confirmed"
        }
      ],
      tours: [
        {
          name: "Kyrenia Castle & Shipwreck Museum",
          date: "Mar 21, 2025",
          time: "9:00 AM - 12:00 PM",
          meetingPoint: "Castle Main Entrance",
          guide: "Mehmet A.",
          confirmation: "TCK-12345",
          status: "Confirmed"
        },
        {
          name: "Traditional Harbor Cruise",
          date: "Mar 22, 2025",
          time: "2:00 PM - 4:00 PM",
          meetingPoint: "Kyrenia Harbor Pier 3",
          guide: "Captain Nikos",
          confirmation: "HC-56789",
          status: "Confirmed"
        }
      ],
      restaurants: [
        {
          name: "Harbor Fish Tavern",
          date: "Mar 21, 2025",
          time: "7:30 PM",
          cuisine: "Mediterranean Seafood",
          address: "10 Marina Way, Kyrenia Harbor",
          reservation: "Table for 2",
          confirmation: "RF-45678",
          status: "Confirmed"
        },
        {
          name: "Ottoman Courtyard",
          date: "Mar 22, 2025",
          time: "8:00 PM",
          cuisine: "Traditional Cypriot",
          address: "42 Castle View Street, Kyrenia",
          reservation: "Table for 2",
          confirmation: "OC-12345",
          status: "Confirmed"
        }
      ],
      museums: [
        {
          name: "Shipwreck Museum",
          date: "Mar 21, 2025",
          time: "10:00 AM - 11:30 AM",
          address: "Inside Kyrenia Castle",
          ticketType: "Included with Castle Entry",
          highlights: "Ancient Greek Merchant Vessel",
          status: "Scheduled"
        },
        {
          name: "Folk Art Museum",
          date: "Mar 23, 2025",
          time: "10:00 AM - 12:00 PM",
          address: "15 Old Town Street, Kyrenia",
          ticketType: "General Admission",
          highlights: "Traditional Cypriot Crafts",
          status: "Tickets Purchased"
        }
      ]
    }
  },
  // Other destinations remain unchanged
  {
    id: 2,
    title: "Salamis Ruins",
    image: IMG_Salamis,
    rating: 4.6,
    duration: "1 day",
    travellers: "2 travellers",
    date: "Apr 15 - 16",
    categories: ["historical"],
    location: "Famagusta, Cyprus",
    author: {
      name: "Alex T.",
      description: "Historian",
      image: IMG_PER
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
    image: IMG_Bellapais,
    rating: 4.7,
    duration: "1 day",
    travellers: "1 traveller",
    date: "May 5 - 6",
    categories: ["historical", "activities"],
    location: "Bellapais, Cyprus",
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
    image: IMG_GoldBeach,
    rating: 4.9,
    duration: "2 days",
    travellers: "4 travellers",
    date: "Jun 10 - 12",
    categories: ["beaches", "activities"],
    location: "Karpas Peninsula, Cyprus",
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
  const [activeTab, setActiveTab] = useState('milestones');
  const [searchTerm, setSearchTerm] = useState('');
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
  
  // Filter destinations based on search term and selected categories
  const filterDestinations = (destinationsToFilter) => {
    // If no filters are selected and search is empty, return all destinations
    const areNoFiltersSelected = Object.values(filters).every(value => value === false);
    
    return destinationsToFilter.filter(destination => {
      // Search term matching
      const searchMatch = 
        searchTerm === '' || 
        destination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.author.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filtering
      let categoryMatch = areNoFiltersSelected; // If no filters selected, all pass
      
      if (!areNoFiltersSelected) {
        // Check if any of the destination's categories match the selected filters
        categoryMatch = destination.categories.some(category => filters[category]);
      }
      
      return searchMatch && categoryMatch;
    });
  };
  
  // Apply filters to destinations
  const filteredDestinations = filterDestinations(destinations);

  const openDestinationPopup = (destination) => {
    setSelectedDestination(destination);
    setExpandedMilestone(null);
    setActiveTab('milestones');
  };

  const closeDestinationPopup = () => {
    setSelectedDestination(null);
    setExpandedMilestone(null);
  };

  const toggleMilestone = (index) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };

  // Function to format date to a more readable format
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to render status badge with appropriate color
  const renderStatusBadge = (status) => {
    let color = 'gray';
    
    if (status === 'Confirmed') color = 'green';
    else if (status === 'Pending') color = 'yellow';
    else if (status === 'Cancelled') color = 'red';
    else if (status === 'Scheduled' || status === 'Tickets Purchased') color = 'blue';
    
    return (
      <span className={`bg-${color}-100 text-${color}-800 text-xs font-medium px-2 py-1 rounded-full`}>
        {status}
      </span>
    );
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination) => (
                <div 
                  key={destination.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:shadow-xl"
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
                  
                  <div 
                    className="p-4 cursor-pointer"
                    onClick={() => openDestinationPopup(destination)}
                  >
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
              ))
              ) : (
                <div className="col-span-2 py-10">
                  <div className="bg-white rounded-3xl p-8 text-center text-slate-900 shadow-lg">
                    <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">No Results Found</h3>
                    <p className="text-lg text-slate-600 mb-6">We couldn't find any matches for your search criteria.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <button 
                        onClick={() => {
                          setSearchTerm('');
                          setFilters({
                            beaches: false,
                            historical: false,
                            restaurants: false,
                            activities: false
                          });
                        }}
                        className="px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
                      >
                        Clear All Filters
                      </button>
                      <button 
                        onClick={() => {
                          setSearchTerm('');
                          setFilters({
                            beaches: true,
                            historical: true,
                            restaurants: true,
                            activities: true
                          });
                        }}
                        className="px-6 py-2 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-50 transition"
                      >
                        View All Categories
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {filteredDestinations.length > 0 && (
              <div className="flex justify-center mt-8">
                <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full transition duration-200">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Destination Popup with Timeline */}
        {selectedDestination && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-5xl w-full max-h-[90vh] overflow-auto">
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

              {/* Explanation area - Only for Kyrenia Castle & Harbor */}
              {selectedDestination.id === 1 && selectedDestination.extendedDescription && (
                <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FaInfoCircle className="text-sky-600 mr-2" size={20} />
                    <h3 className="text-xl font-bold text-gray-800">About Kyrenia Castle & Harbor</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedDestination.extendedDescription}</p>
                </div>
              )}

              {/* Tab navigation for Kyrenia Castle & Harbor */}
              {selectedDestination.id === 1 && (
                <div className="border-b border-gray-200 mb-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('milestones')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'milestones'
                          ? 'border-sky-500 text-sky-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Highlights & Activities
                    </button>
                    <button
                      onClick={() => setActiveTab('travel')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'travel'
                          ? 'border-sky-500 text-sky-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Travel Logistics
                    </button>
                  </nav>
                </div>
              )}

              {/* Kyrenia Castle - Original Timeline Section */}
              {(selectedDestination.id !== 1 || activeTab === 'milestones') && (
                <>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Transfer & Transportation</h2>
                  <div className="border-l-2 border-gray-200 ml-4 mb-8">
                    {selectedDestination.milestones.map((milestone, index) => (
                      <div key={index} className="relative mb-8">
                        <div className="absolute -left-4 top-0 w-6 h-6 bg-white rounded-full border-2 border-sky-500 flex items-center justify-center">
                          <div className={`w-2 h-2 rounded-full ${expandedMilestone === index ? 'bg-sky-500' : 'bg-gray-300'}`}></div>
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
                              <FaCar className="text-gray-500 mr-2" size={16} />
                              <span className="text-gray-800 font-medium">Car</span>
                              <span className="ml-auto text-gray-500 text-sm">Coming soon...</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="font-medium text-gray-800">{milestone.day}</span>
                                <div className="flex items-center text-sm text-gray-500">
                                  <FaRegClock className="mr-1" size={12} />
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
                                  <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
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
                                  <FaAward className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={16} />
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
                </>
              )}

              {/* New Travel Logistics Timeline - Only for Kyrenia Castle & Harbor */}
              {selectedDestination.id === 1 && activeTab === 'travel' && selectedDestination.travelLogistics && (
                <div>
                  {/* Flights Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <FaPlane className="text-sky-600 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-800">Flights</h3>
                    </div>
                    <div className="border-l-2 border-gray-200 ml-4">
                      {selectedDestination.travelLogistics.flights.map((flight, index) => (
                        <div key={index} className="relative mb-6">
                          <div className="absolute -left-3 top-0 w-4 h-4 bg-sky-500 rounded-full"></div>
                          <div className="ml-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center">
                                <span className="font-bold text-gray-800">{flight.flight}</span>
                                <span className="mx-2">•</span>
                                <span className="text-sm text-gray-600">{formatDate(flight.date)}</span>
                              </div>
                              {renderStatusBadge(flight.status)}
                            </div>
                            <div className="flex items-center text-gray-700 mb-2">
                              <div className="flex-1">
                                <div className="font-medium">{flight.from}</div>
                                <div className="text-sm text-gray-500">{flight.time.split(' - ')[0]}</div>
                              </div>
                              <div className="mx-4 border-t border-gray-300 flex-1 relative">
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2">
                                  <FaPlane className="text-gray-400 transform rotate-90" size={14} />
                                </div>
                              </div>
                              <div className="flex-1 text-right">
                                <div className="font-medium">{flight.to}</div>
                                <div className="text-sm text-gray-500">{flight.time.split(' - ')[1]}</div>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">
                              {flight.airline}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hotels Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <FaHotel className="text-sky-600 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-800">Accommodations</h3>
                    </div>
                    <div className="border-l-2 border-gray-200 ml-4">
                      {selectedDestination.travelLogistics.hotels.map((hotel, index) => (
                        <div key={index} className="relative mb-6">
                          <div className="absolute -left-3 top-0 w-4 h-4 bg-sky-500 rounded-full"></div>
                          <div className="ml-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{hotel.name}</h4>
                              {renderStatusBadge(hotel.status)}
                            </div>
                            <div className="flex items-center text-sm text-gray-700 mb-3">
                              <FaCalendarAlt className="text-gray-500 mr-2" size={14} />
                              <span>{formatDate(hotel.checkIn)} — {formatDate(hotel.checkOut)}</span>
                            </div>
                            <div className="flex items-start mb-2">
                              <FaMapMarkerAlt className="text-gray-500 mt-1 mr-2 flex-shrink-0" size={14} />
                              <span className="text-gray-700">{hotel.address}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">Room:</span> {hotel.roomType}
                              </div>
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">Confirmation:</span> {hotel.confirmation}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tours Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <FaMapMarkedAlt className="text-sky-600 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-800">Tours & Activities</h3>
                    </div>
                    <div className="border-l-2 border-gray-200 ml-4">
                      {selectedDestination.travelLogistics.tours.map((tour, index) => (
                        <div key={index} className="relative mb-6">
                          <div className="absolute -left-3 top-0 w-4 h-4 bg-sky-500 rounded-full"></div>
                          <div className="ml-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{tour.name}</h4>
                              {renderStatusBadge(tour.status)}
                            </div>
                            <div className="flex items-center text-sm text-gray-700 mb-3">
                              <FaCalendarAlt className="text-gray-500 mr-2" size={14} />
                              <span>{formatDate(tour.date)}</span>
                              <span className="mx-2">•</span>
                              <FaRegClock className="text-gray-500 mr-2" size={14} />
                              <span>{tour.time}</span>
                            </div>
                            <div className="flex items-start mb-3">
                              <FaMapMarkerAlt className="text-gray-500 mt-1 mr-2 flex-shrink-0" size={14} />
                              <div>
                                <span className="text-gray-700 font-medium">Meeting Point:</span>
                                <span className="text-gray-700 ml-1">{tour.meetingPoint}</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">Guide:</span> {tour.guide}
                              </div>
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">Confirmation:</span> {tour.confirmation}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Restaurants Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <FaUtensils className="text-sky-600 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-800">Dining</h3>
                    </div>
                    <div className="border-l-2 border-gray-200 ml-4">
                      {selectedDestination.travelLogistics.restaurants.map((restaurant, index) => (
                        <div key={index} className="relative mb-6">
                          <div className="absolute -left-3 top-0 w-4 h-4 bg-sky-500 rounded-full"></div>
                          <div className="ml-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{restaurant.name}</h4>
                              {renderStatusBadge(restaurant.status)}
                            </div>
                            <div className="flex items-center text-sm text-gray-700 mb-3">
                              <FaCalendarAlt className="text-gray-500 mr-2" size={14} />
                              <span>{formatDate(restaurant.date)}</span>
                              <span className="mx-2">•</span>
                              <FaRegClock className="text-gray-500 mr-2" size={14} />
                              <span>{restaurant.time}</span>
                            </div>
                            <div className="flex items-start mb-3">
                              <FaMapMarkerAlt className="text-gray-500 mt-1 mr-2 flex-shrink-0" size={14} />
                              <span className="text-gray-700">{restaurant.address}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">Cuisine:</span> {restaurant.cuisine}
                              </div>
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">Reservation:</span> {restaurant.reservation} • {restaurant.confirmation}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Museums Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <FaLandmark className="text-sky-600 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-800">Museums & Attractions</h3>
                    </div>
                    <div className="border-l-2 border-gray-200 ml-4">
                      {selectedDestination.travelLogistics.museums.map((museum, index) => (
                        <div key={index} className="relative mb-6">
                          <div className="absolute -left-3 top-0 w-4 h-4 bg-sky-500 rounded-full"></div>
                          <div className="ml-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{museum.name}</h4>
                              {renderStatusBadge(museum.status)}
                            </div>
                            <div className="flex items-center text-sm text-gray-700 mb-3">
                              <FaCalendarAlt className="text-gray-500 mr-2" size={14} />
                              <span>{formatDate(museum.date)}</span>
                              <span className="mx-2">•</span>
                              <FaRegClock className="text-gray-500 mr-2" size={14} />
                              <span>{museum.time}</span>
                            </div>
                            <div className="flex items-start mb-3">
                              <FaMapMarkerAlt className="text-gray-500 mt-1 mr-2 flex-shrink-0" size={14} />
                              <span className="text-gray-700">{museum.address}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-600">
                                <span className="font-medium">Ticket:</span> {museum.ticketType}
                              </div>
                              <div className="text-sm text-gray-600">
                                <FaTicketAlt className="text-gray-500 mr-1 inline" size={12} />
                                <span className="font-medium">Highlights:</span> {museum.highlights}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TravelGuide;