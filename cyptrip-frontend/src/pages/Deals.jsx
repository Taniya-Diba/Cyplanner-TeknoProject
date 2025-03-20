import React, { useState } from 'react';
import Layout from '../components/Layout';
import IMG_MERIT from '../assets/images/IMG/merit hotel.jpg'
import IMG_VUNI from '../assets/images/IMG/Vuni Palace Hotel.jpg'
import IMG_LORD from '../assets/images/IMG/lord_s palace hotel SPA Casino.jpg'
import IMG_PIA from '../assets/images/IMG/Hotel Pia Bella.jpg'
import IMG_BLU from '../assets/images/IMG/blue song restaurants.webp'
import IMG_CAL from '../assets/images/IMG/Califorian Restaurant.webp'
import IMG_EZC from '../assets/images/IMG/Ezic.webp'
import IMG_NIM from '../assets/images/IMG/reservation2.jpg'
import IMG_BOAT from '../assets/images/IMG/boat trip.jpg'
import IMG_BUS from '../assets/images/IMG/bus tpurs.jpg'
import IMG_RENT from '../assets/images/IMG/rent cars.jpg'
import IMG_CITYT from '../assets/images/IMG/lefkosa.jpg'
import IMG_BECT from '../assets/images/IMG/beachtours.jpg'
import IMG_HIST from '../assets/images/IMG/historical.jpg'

const Deals = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [popupType, setPopupType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  
  // Sample data for all cards
  const hotelsData = [
    {
      name: "Merit Royal Diamond Hotel", 
      location: "Kyrenia", 
      image: IMG_MERIT, 
      duration: "1 night",
      guests: "3 Adults",
      features: ["SPA & Casino"],
      rating: 4,
      reviews: 3600,
      price: 427,
      description: "Enjoy luxurious accommodation with panoramic sea views, a private beach, state-of-the-art casino, and rejuvenating spa facilities. Perfect for both relaxation and entertainment.",
      amenities: ["Free WiFi", "Swimming Pool", "Breakfast Included", "Beach Access", "Fitness Center", "24/7 Room Service"],
      priceCategory: "high"
    },
    {
      name: "Vuni Palace Hotel", 
      location: "Kyrenia", 
      image: IMG_VUNI, 
      duration: "2 night",
      guests: "3 Adults",
      features: ["SPA & Casino"],
      rating: 4,
      reviews: 2400,
      price: 188,
      description: "Experience modern comfort in the heart of Kyrenia with stunning mountain views. Our hotel offers a relaxed atmosphere with premium amenities and easy access to local attractions.",
      amenities: ["Free WiFi", "Outdoor Pool", "Spa", "Restaurant", "Bar", "Airport Shuttle"],
      priceCategory: "medium"
    },
    {
      name: "Lord's Palace Hotel SPA Casino", 
      location: "Kyrenia", 
      image: IMG_LORD, 
      duration: "1 night",
      guests: "3 Adults",
      features: ["SPA & Casino"],
      rating: 4,
      reviews: 1500,
      price: 150,
      description: "A luxury retreat featuring elegant rooms, world-class dining, and a full-service casino. Our rooftop infinity pool offers breathtaking Mediterranean views.",
      amenities: ["Free WiFi", "Rooftop Pool", "Spa", "Casino", "Multiple Restaurants", "Complimentary Breakfast"],
      priceCategory: "medium"
    },
    {
      name: "Garden Resort Hotel", 
      location: "Famagusta", 
      image: IMG_PIA, 
      duration: "3 nights",
      guests: "2 Adults",
      features: ["Garden", "Pool"],
      rating: 3,
      reviews: 850,
      price: 95,
      description: "A charming resort surrounded by lush gardens, offering comfortable accommodations at affordable prices. Perfect for budget-conscious travelers.",
      amenities: ["Free WiFi", "Garden View", "Breakfast Available", "Outdoor Pool", "Bar", "Free Parking"],
      priceCategory: "low"
    }
  ];

  const restaurantsData = [
    {
      name: "Blue Song Restaurant", 
      location: "Kyrenia", 
      image: IMG_BLU, 
      features: ["Food/Drinks", "Beach"],
      rating: 4,
      reviews: 648,
      discount: "20% off",
      cuisine: "Mediterranean, Seafood",
      priceRange: "$-$$",
      description: "Beachfront dining with fresh seafood and Mediterranean favorites. Enjoy your meal with stunning sea views and a refreshing breeze.",
      priceCategory: "medium"
    },
    {
      name: "California Gold Restaurant", 
      location: "Famagusta", 
      image: IMG_CAL, 
      features: ["Food/Drinks", "Beach"],
      rating: 4,
      reviews: 505,
      discount: "10% off",
      cuisine: "American, Fusion",
      priceRange: "$-$$",
      description: "American-inspired cuisine with a Mediterranean twist. Known for gourmet burgers, steaks, and innovative cocktails in a lively atmosphere.",
      priceCategory: "medium"
    },
    {
      name: "Eric Restaurant", 
      location: "Nicosia", 
      image: IMG_EZC, 
      features: ["Food/Drinks", "Beach"],
      rating: 4,
      reviews: 230,
      discount: "15% off",
      cuisine: "Local, Traditional",
      priceRange: "$",
      description: "Authentic Cypriot dining experience with family recipes passed down through generations. Try our famous meze platters and local wine selection.",
      priceCategory: "low"
    },
    {
      name: "Nima Restaurant & Lounge Bar", 
      location: "Kyrenia", 
      image: IMG_NIM, 
      features: ["Fine Dining", "View"],
      rating: 5,
      reviews: 430,
      discount: "5% off",
      cuisine: "French, International",
      priceRange: "$$",
      description: "Exquisite fine dining with breathtaking harbor views. Our chef creates seasonal menus using premium ingredients and artistic presentation.",
      priceCategory: "high"
    }
  ];

  const activitiesData = [
    {
      name: "City Tours", 
      image: IMG_CITYT, 
      count: "+50 Tours",
      description: "Explore vibrant city centers with knowledgeable local guides. Discover hidden gems, historical landmarks, and authentic local culture.",
      location: "Multiple Locations",
      priceCategory: "medium"
    },
    {
      name: IMG_BOAT, 
      image: "/api/placeholder/400/250", 
      count: "+25 Tours",
      description: "Visit the most beautiful beaches in Cyprus. Snorkeling, swimming, and sunbathing opportunities with transportation included.",
      location: "Coastal Areas",
      priceCategory: "low"
    },
    {
      name: "Beach Tours", 
      image: IMG_HIST, 
      count: "+150 Tours",
      description: "Journey through time with our historical tours covering ancient ruins, medieval castles, and archaeological sites with expert historians.",
      location: "All Cyprus",
      priceCategory: "medium"
    },
    // {
    //   name: "Luxury Yacht Cruise", 
    //   image: "/api/placeholder/400/250", 
    //   count: "+10 Tours",
    //   description: "Experience the ultimate in luxury with our private yacht cruises. Champagne, gourmet catering, and personalized service included.",
    //   location: "Kyrenia Harbor",
    //   priceCategory: "high"
    // }
  ];

  const transportationData = [
    {
      name: "Boat Trips", 
      image: IMG_BOAT,
      description: "Cruise the crystal-clear waters of the Mediterranean with our boat trips. Half-day and full-day options available with refreshments on board.",
      location: "Coastal Areas",
      priceCategory: "medium"
    },
    {
      name: "Bus Tours", 
      image: IMG_BUS,
      description: "Comfortable, air-conditioned buses with professional guides taking you to the most interesting spots across the island.",
      location: "All Cyprus",
      priceCategory: "low"
    },
    {
      name: "Rent Cars", 
      image: IMG_RENT,
      description: "Freedom to explore at your own pace. Wide range of vehicles from economy to luxury with comprehensive insurance options.",
      location: "All Airports and Major Cities",
      priceCategory: "varies"
    },
    // {
    //   name: "Luxury Transfers", 
    //   image: "/api/placeholder/400/250",
    //   description: "Premium transportation with chauffeur-driven luxury vehicles. Available for airport transfers, special events, or full-day private tours.",
    //   location: "All Cyprus",
    //   priceCategory: "high"
    // }
  ];

  // Filter function for search and budget filtering
  const filterItems = (items) => {
    return items.filter(item => {
      // Search term filter
      const searchMatch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Budget filter
      const budgetMatch = selectedBudget === '' || item.priceCategory === selectedBudget;
      
      return searchMatch && budgetMatch;
    });
  };

  // Apply filters to each data array
  const filteredHotels = filterItems(hotelsData);
  const filteredRestaurants = filterItems(restaurantsData);
  const filteredActivities = filterItems(activitiesData);
  const filteredTransportation = filterItems(transportationData);
  
  const tabs = [
    { id: 'all', name: 'All' },
    { id: 'activities', name: 'Activities' },
    { id: 'hotels', name: 'Hotels' },
    { id: 'restaurants', name: 'Restaurants' },
    { id: 'transportation', name: 'Transportation' }
  ];

  const openPopup = (item, type) => {
    setSelectedItem(item);
    setPopupType(type);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedItem(null);
    setPopupType(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white pb-20">
      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto pt-24 px-4">
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 relative mb-4 md:mb-0">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your destination" 
                className="w-full pl-4 pr-10 py-2 bg-slate-700 bg-opacity-50 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute right-3 top-2.5 text-gray-400" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            <div className="relative w-full md:w-40">
              <select 
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full appearance-none bg-slate-700 bg-opacity-50 text-white rounded-full px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Budget</option>
                <option value="low">Economy</option>
                <option value="medium">Moderate</option>
                <option value="high">Luxury</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm transition ${
                  activeTab === tab.id 
                    ? 'bg-sky-600 text-white font-medium' 
                    : 'bg-slate-700 bg-opacity-50 text-white hover:bg-opacity-70'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4">
        {filteredHotels.length === 0 && 
         filteredRestaurants.length === 0 && 
         filteredActivities.length === 0 && 
         filteredTransportation.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center text-slate-900 shadow-lg mt-8">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-2xl font-bold mb-2">No Results Found</h3>
            <p className="text-lg text-slate-600 mb-6">We couldn't find any matches for your search criteria.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => {setSearchTerm(''); setSelectedBudget('');}}
                className="px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
              >
                Clear All Filters
              </button>
              <button 
                onClick={() => setActiveTab('all')}
                className="px-6 py-2 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-50 transition"
              >
                View All Categories
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Hotels Section */}
        <section className={`mb-12 ${activeTab !== 'all' && activeTab !== 'hotels' ? 'hidden' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold px-4 py-1 bg-sky-600 bg-opacity-30 rounded-full">Hotels</h2>
            <button className="bg-sky-600 bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map((hotel, index) => (
                <HotelCard 
                  key={`hotel-${index}`}
                  {...hotel}
                  openPopup={openPopup}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 text-center text-slate-900 shadow-lg">
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No Hotels Match Your Search</h3>
              <p className="text-slate-600 mb-4">We couldn't find any hotels that match your current filters.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedBudget('');}}
                className="px-5 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Restaurants Section */}
        <section className={`mb-12 ${activeTab !== 'all' && activeTab !== 'restaurants' ? 'hidden' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold px-4 py-1 bg-sky-600 bg-opacity-30 rounded-full">Restaurants</h2>
            <button className="bg-sky-600 bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant, index) => (
                <RestaurantCard 
                  key={`restaurant-${index}`}
                  {...restaurant}
                  openPopup={openPopup}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 text-center text-slate-900 shadow-lg">
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No Restaurants Match Your Search</h3>
              <p className="text-slate-600 mb-4">We couldn't find any restaurants that match your current filters.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedBudget('');}}
                className="px-5 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Activities Section */}
        <section className={`mb-12 ${activeTab !== 'all' && activeTab !== 'activities' ? 'hidden' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold px-4 py-1 bg-sky-600 bg-opacity-30 rounded-full">Activities</h2>
            <button className="bg-sky-600 bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredActivities.map((activity, index) => (
                <ActivityCard 
                  key={`activity-${index}`}
                  {...activity}
                  openPopup={openPopup}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 text-center text-slate-900 shadow-lg">
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No Activities Match Your Search</h3>
              <p className="text-slate-600 mb-4">We couldn't find any activities that match your current filters.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedBudget('');}}
                className="px-5 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Transportation Section */}
        <section className={`mb-12 ${activeTab !== 'all' && activeTab !== 'transportation' ? 'hidden' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold px-4 py-1 bg-sky-600 bg-opacity-30 rounded-full">Transportation</h2>
            <button className="bg-sky-600 bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {filteredTransportation.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredTransportation.map((transport, index) => (
                <TransportCard 
                  key={`transport-${index}`}
                  {...transport}
                  openPopup={openPopup}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 text-center text-slate-900 shadow-lg">
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No Transportation Options Match Your Search</h3>
              <p className="text-slate-600 mb-4">We couldn't find any transportation options that match your current filters.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedBudget('');}}
                className="px-5 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </>
    )}
      </div>
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto text-slate-900">
            <div className="relative">
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Render different content based on popup type */}
              {popupType === 'hotel' && <HotelPopup hotel={selectedItem} />}
              {popupType === 'restaurant' && <RestaurantPopup restaurant={selectedItem} />}
              {popupType === 'activity' && <ActivityPopup activity={selectedItem} />}
              {popupType === 'transport' && <TransportPopup transport={selectedItem} />}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

// Card Components
const HotelCard = ({ name, location, image, duration, guests, features, rating, reviews, price, description, amenities, openPopup }) => {
  const hotelData = { name, location, image, duration, guests, features, rating, reviews, price, description, amenities };
  
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-lg text-slate-900 cursor-pointer hover:shadow-2xl transition duration-300"
      onClick={() => openPopup(hotelData, 'hotel')}
    >
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        
        <div className="mt-2 space-y-1">
          <div className="flex items-center text-sm">
            <svg className="w-4 h-4 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Duration: {duration}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <svg className="w-4 h-4 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>{guests}</span>
          </div>
          
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-3 flex justify-between items-end">
          <div>
            <div className="flex text-yellow-400">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </div>
            <div className="text-xs text-gray-600">{reviews.toLocaleString()} reviews</div>
          </div>
          
          <div className="text-right">
            <div className="text-sky-600 font-bold">${price}</div>
            <div className="text-xs text-gray-600">per person</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = ({ name, location, image, features, rating, reviews, discount, cuisine, priceRange, description, openPopup }) => {
  const restaurantData = { name, location, image, features, rating, reviews, discount, cuisine, priceRange, description };
  
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-lg text-slate-900 relative cursor-pointer hover:shadow-2xl transition duration-300"
      onClick={() => openPopup(restaurantData, 'restaurant')}
    >
      <div className="p-3">
        <div className="h-40 rounded-3xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        
        <div className="mt-3">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
          
          <div className="mt-2 flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <div key={index} className="text-xs px-2 py-1 bg-slate-100 rounded-md flex items-center">
                <svg className="w-3 h-3 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </div>
            ))}
          </div>
          
          <div className="mt-3 flex justify-between items-end">
            <div>
              <div className="flex text-yellow-400">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </div>
              <div className="text-xs text-gray-600">{reviews.toLocaleString()} reviews</div>
            </div>
          </div>
        </div>
      </div>
      
      {discount && (
        <div className="absolute bottom-3 right-3 bg-sky-500 text-white rounded-full px-4 py-1 text-sm font-semibold">
          {discount}
        </div>
      )}
    </div>
  );
};

const ActivityCard = ({ name, image, count, description, openPopup }) => {
  const activityData = { name, image, count, description };
  
  return (
    <div 
      className="relative rounded-2xl overflow-hidden h-48 shadow-lg group cursor-pointer hover:shadow-2xl transition duration-300"
      onClick={() => openPopup(activityData, 'activity')}
    >
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sm text-white bg-sky-500 bg-opacity-40 px-3 py-1 rounded-full">{count}</p>
      </div>
    </div>
  );
};

const TransportCard = ({ name, image, description, openPopup }) => {
  const transportData = { name, image, description };
  
  return (
    <div 
      className="relative rounded-2xl overflow-hidden h-48 shadow-lg group cursor-pointer hover:shadow-2xl transition duration-300"
      onClick={() => openPopup(transportData, 'transport')}
    >
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="bg-sky-500 bg-opacity-40 px-3 py-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Popup Components
const HotelPopup = ({ hotel }) => {
  return (
    <div>
      <div className="h-72 overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.location}</p>
          </div>
          <div className="text-right">
            <div className="text-sky-600 text-2xl font-bold">${hotel.price}</div>
            <div className="text-gray-600">per person</div>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 text-xl mr-2">
            {"★".repeat(hotel.rating)}
            {"☆".repeat(5 - hotel.rating)}
          </div>
          <div className="text-gray-600">({hotel.reviews.toLocaleString()} reviews)</div>
        </div>
        
        <p className="text-gray-700 mb-6">{hotel.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Details</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Duration: {hotel.duration}
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                {hotel.guests}
              </li>
              {hotel.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <a 
            href="#" 
            className="bg-sky-600 text-white px-6 py-2 rounded-full font-medium hover:bg-sky-700 transition flex items-center"
          >
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const RestaurantPopup = ({ restaurant }) => {
  return (
    <div>
      <div className="h-72 overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">{restaurant.name}</h2>
            <p className="text-gray-600">{restaurant.location}</p>
          </div>
          {restaurant.discount && (
            <div className="bg-sky-500 text-white px-4 py-1 rounded-full text-lg font-semibold">
              {restaurant.discount}
            </div>
          )}
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-xl mr-2">
            {"★".repeat(restaurant.rating)}
            {"☆".repeat(5 - restaurant.rating)}
          </div>
          <div className="text-gray-600">({restaurant.reviews.toLocaleString()} reviews)</div>
        </div>
        
        <div className="mb-4">
          <span className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">{restaurant.cuisine}</span>
          <span className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">{restaurant.priceRange}</span>
          {restaurant.features.map((feature, index) => (
            <span key={index} className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">{feature}</span>
          ))}
        </div>
        
        <p className="text-gray-700 mb-6">{restaurant.description}</p>
        
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Popular Dishes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-3 rounded-xl">
              <div className="h-24 rounded-lg overflow-hidden mb-2">
                <img src="/api/placeholder/200/150" alt="Dish" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-medium">Signature Dish 1</h4>
              <p className="text-sm text-gray-600">$18</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl">
              <div className="h-24 rounded-lg overflow-hidden mb-2">
                <img src="/api/placeholder/200/150" alt="Dish" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-medium">Signature Dish 2</h4>
              <p className="text-sm text-gray-600">$22</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl">
              <div className="h-24 rounded-lg overflow-hidden mb-2">
                <img src="/api/placeholder/200/150" alt="Dish" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-medium">Signature Dish 3</h4>
              <p className="text-sm text-gray-600">$15</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <a 
            href="#" 
            className="bg-sky-600 text-white px-6 py-2 rounded-full font-medium hover:bg-sky-700 transition flex items-center"
          >
            Reserve a Table
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ActivityPopup = ({ activity }) => {
  return (
    <div>
      <div className="h-72 overflow-hidden">
        <img src={activity.image} alt={activity.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{activity.name}</h2>
          <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-lg font-semibold">
            {activity.count}
          </span>
        </div>
        
        <p className="text-gray-700 mb-6">{activity.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-50 p-4 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Popular Tours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Half-Day City Exploration</span>
                <span className="text-sky-600 font-semibold">$45</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Full-Day Adventure</span>
                <span className="text-sky-600 font-semibold">$89</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Evening Cultural Tour</span>
                <span className="text-sky-600 font-semibold">$55</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Tour Details</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Duration: 3-8 hours (depending on tour)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span>Group and private options available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Professional guides and transportation included</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-end">
          <a 
            href="#" 
            className="bg-sky-600 text-white px-6 py-2 rounded-full font-medium hover:bg-sky-700 transition flex items-center"
          >
            View All Tours
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const TransportPopup = ({ transport }) => {
  return (
    <div>
      <div className="h-72 overflow-hidden">
        <img src={transport.image} alt={transport.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{transport.name}</h2>
        
        <p className="text-gray-700 mb-6">{transport.description}</p>
        
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Options Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-medium mb-2">Economy Option</h4>
              <p className="text-sm text-gray-600 mb-2">Basic package with essential features</p>
              <p className="text-sky-600 font-semibold">From $40/day</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-medium mb-2">Standard Option</h4>
              <p className="text-sm text-gray-600 mb-2">Enhanced comfort and additional features</p>
              <p className="text-sky-600 font-semibold">From $75/day</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-medium mb-2">Premium Option</h4>
              <p className="text-sm text-gray-600 mb-2">Luxury experience with all amenities</p>
              <p className="text-sky-600 font-semibold">From $120/day</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Important Information</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Booking at least 24 hours in advance recommended</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Valid ID and credit card required for all rentals</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Cancellation policy: Free cancellation up to 48 hours before</span>
            </li>
          </ul>
        </div>
        
        <div className="flex justify-end">
          <a 
            href="#" 
            className="bg-sky-600 text-white px-6 py-2 rounded-full font-medium hover:bg-sky-700 transition flex items-center"
          >
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Deals;