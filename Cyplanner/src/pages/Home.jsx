import React, { useState } from 'react';
import Layout from '../components/Layout.jsx';
import mainHome from '../assets/images/IMG/mainHome.jpg'
import salmisRuns from '../assets/images/IMG/Salamis Ruins, Northern Cyprus.jpg'
import kyreniaCastle from '../assets/images/IMG/Kyrenia Castle.jpg'
import varosha from '../assets/images/IMG/Varosha and Toyota.jpg'
import bellapais from '../assets/images/IMG/Bellapais Abbey.jpg'
import banner from '../assets/images/IMG/banner.jpg'
import banner2 from '../assets/images/IMG/banner2.png'
import comedynight from '../assets/images/IMG/comedynight.png'
import acan from '../assets/images/IMG/acan.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const [itemType, setItemType] = useState(null);

  const openModal = (item, type) => {
    setSelectedItem(item);
    setItemType(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setItemType(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout>
    <div className="bg-slate-900 text-white">
      {/* Hero Section with Wavy Borders */}
      <div className="relative overflow-hidden bg-slate-900">
        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-70">
          <img 
            src={mainHome} 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Top wave */}
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0f172a" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-10 lg:px-12 py-12 md:py-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">Discover North <br/>Cyprus</h1>
          <p className="text-xl md:text-2xl mb-8 text-white">Plan your perfect trip with AI assistant</p>
          
          <div className="relative max-w-md">
            <input 
              type="text" 
              placeholder="where do you want to explore?" 
              className="w-full px-4 py-3 pl-6 pr-12 rounded-full bg-slate-800 bg-opacity-70 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="absolute right-4 top-3 text-gray-400" 
              width="20" 
              height="20" 
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
        </div>
        
        {/* Bottom wave */}
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0f172a" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Recommendations Section */}
      <div className="py-16 px-6 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Recommended for you</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              onClick={() => openModal(destination, 'destination')}
            />
          ))}
        </div>
      </div>
      
      {/* Upcoming Events Section */}
      <div className="py-16 px-6 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Up coming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event}
              onClick={() => openModal(event, 'event')}
            />
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedItem && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700">
            <div className="relative">
              <img 
                src={itemType === 'destination' ? selectedItem.imageUrl : selectedItem.imageUrl} 
                alt={itemType === 'destination' ? selectedItem.name : selectedItem.name} 
                className="w-full h-72 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 rounded-t-xl"></div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-colors duration-300 border border-white border-opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">{selectedItem.name}</h2>
              
              {itemType === 'destination' && (
                <>
                  <p className="mb-6 text-slate-300 leading-relaxed">{selectedItem.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg border border-slate-700">
                      <h3 className="font-semibold text-lg mb-2 text-blue-400">Location</h3>
                      <p className="text-slate-300">{selectedItem.location}</p>
                    </div>
                    <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg border border-slate-700">
                      <h3 className="font-semibold text-lg mb-2 text-blue-400">Best Time to Visit</h3>
                      <p className="text-slate-300">{selectedItem.bestTime}</p>
                    </div>
                  </div>
                  <div className="mb-6 bg-slate-800 bg-opacity-50 p-4 rounded-lg border border-slate-700">
                    <h3 className="font-semibold text-lg mb-3 text-blue-400">Attractions</h3>
                    <ul className="space-y-2">
                      {selectedItem.attractions.map((attraction, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-300">{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end">
                  <button 
                    onClick={() => navigate(`/explore/${selectedItem.id}`)}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105"
                  >
                    Plan Your Visit
                  </button> 
                  </div>
                </>
              )}

              {itemType === 'event' && (
                <>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full border border-blue-700 text-blue-200 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedItem.date}
                    </span>
                    <span className="bg-green-900 bg-opacity-50 px-4 py-2 rounded-full border border-green-700 text-green-200 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedItem.price}
                    </span>
                    {selectedItem.location && (
                      <span className="bg-purple-900 bg-opacity-50 px-4 py-2 rounded-full border border-purple-700 text-purple-200 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {selectedItem.location}
                      </span>
                    )}
                  </div>
                  <p className="mb-6 text-slate-300 leading-relaxed">{selectedItem.description}</p>
                  {selectedItem.schedule && (
                    <div className="mb-6 bg-slate-800 bg-opacity-50 p-4 rounded-lg border border-slate-700">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">Schedule</h3>
                      <ul className="space-y-3">
                        {selectedItem.schedule.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex justify-end">
                    <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105">
                      Book Tickets
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

// Component for destination cards
const DestinationCard = ({ destination, onClick }) => {
  return (
    <div 
      className="relative rounded-2xl overflow-hidden group h-64 cursor-pointer shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onClick={onClick}
    >
      <img 
        src={destination.imageUrl} 
        alt={destination.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 p-6 flex justify-between items-center w-full">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{destination.name}</h3>
          <p className="text-slate-300 text-sm mt-1 max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{destination.location}</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/30 bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 transform group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Component for event cards
const EventCard = ({ event, onClick }) => {
  return (
    <div 
      className="relative rounded-2xl overflow-hidden group h-64 cursor-pointer shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onClick={onClick}
    >
      <img 
        src={event.imageUrl} 
        alt={event.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 p-4 flex flex-col w-full">
        <div className="flex justify-between items-center mb-2 w-full">
          <span className="text-sm border border-blue-500/30 bg-blue-900/30 px-3 py-1 rounded-full text-blue-200 group-hover:bg-blue-800/50 group-hover:border-blue-400 transition-all duration-300">
            {event.date}
          </span>
          <span className="text-sm border border-green-500/30 bg-green-900/30 px-3 py-1 rounded-full text-green-200 group-hover:bg-green-800/50 group-hover:border-green-400 transition-all duration-300">
            {event.price}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{event.name}</h3>
        <p className="text-slate-300 text-sm mt-1 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
          {event.location}
        </p>
      </div>
    </div>
  );
};

// Sample data with extended information
const destinations = [
  { 
    id: 1, 
    name: 'Salamis Ruins', 
    imageUrl: salmisRuns,
    description: 'The ancient city of Salamis was founded in the 11th century BC and became the capital of Cyprus in the 8th century BC. Today, visitors can explore extensive ruins including a gymnasium, Roman baths, an amphitheater, and Byzantine basilicas.',
    location: 'Near Famagusta, Northern Cyprus',
    bestTime: 'Spring (March-May) and Fall (September-November)',
    attractions: [
      'Roman Gymnasium with Marble Columns',
      'Byzantine Basilica',
      'Amphitheater',
      'Roman Baths',
      'Nearby Beach'
    ]
  },
  { 
    id: 2, 
    name: 'Kyrenia Castle', 
    imageUrl: kyreniaCastle,
    description: 'This impressive 16th-century castle dominates Kyrenia harbor and offers stunning views across the Mediterranean. Inside, you can find the Shipwreck Museum featuring a well-preserved merchant vessel from the 3rd century BC.',
    location: 'Kyrenia Harbor, Northern Cyprus',
    bestTime: 'All year, but especially pleasant in spring and autumn',
    attractions: [
      'Shipwreck Museum',
      'Byzantine Church',
      'Dungeons',
      'Harbor Views',
      'Ottoman Period Architecture'
    ]
  },
  { 
    id: 3, 
    name: 'Varosha', 
    imageUrl: varosha,
    description: 'Once a glamorous tourist destination, Varosha became a ghost town after the Turkish invasion of 1974. Recently partially reopened to visitors, it offers a unique glimpse into a frozen moment in time with abandoned hotels and streets.',
    location: 'Adjacent to Famagusta, Northern Cyprus',
    bestTime: 'Year-round, early morning visits recommended',
    attractions: [
      'Palm Beach',
      'Abandoned Luxury Hotels',
      'Historic Streets',
      'Photography Opportunities',
      'Cultural Significance'
    ]
  },
  { 
    id: 4, 
    name: 'Bellapais Abbey', 
    imageUrl: bellapais,
    description: 'This Gothic abbey was built in the 13th century by Augustinian monks and is considered the most beautiful Gothic building in Cyprus. The ruins are well-preserved and offer magnificent views of Kyrenia and the Mediterranean.',
    location: 'Bellapais Village, near Kyrenia',
    bestTime: 'Spring and Autumn for ideal temperatures and blooming gardens',
    attractions: [
      'Gothic Architecture',
      'Refectory Hall',
      'Panoramic Views',
      'Tree of Idleness Café',
      'Regular Music Concerts'
    ]
  },
];

const events = [
  { 
    id: 1, 
    name: 'Daylight Festival', 
    date: '31 March', 
    price: '350 TL', 
    imageUrl: banner,
    description: 'Experience the best electronic music with international and local DJs at this beachside festival. Featuring food vendors, art installations, and a vibrant atmosphere as you dance from day into night.',
    location: 'Escape Beach Club, Kyrenia',
    schedule: [
      '12:00 - Gates Open',
      '13:00 - First DJ Set',
      '17:00 - Headliner Performance',
      '22:00 - Closing Set'
    ]
  },
  { 
    id: 2, 
    name: 'Collectivebeat Comedy', 
    date: '31 March', 
    price: '350 TL', 
    imageUrl: comedynight,
    description: 'A night of laughs with local and international stand-up comedians. Enjoy dinner and drinks while being entertained by some of the best comedy talents from around the region.',
    location: 'Colony Hotel, Kyrenia',
    schedule: [
      '19:00 - Doors Open',
      '19:30 - Dinner Service',
      '20:30 - Opening Act',
      '21:30 - Main Show'
    ]
  },
  { 
    id: 3, 
    name: 'Korhan Sayginer', 
    date: '12 April', 
    price: '4000 TL', 
    imageUrl: acan,
    description: 'Witness world champion billiards player Korhan Sayginer demonstrate his incredible skills in this exhibition match. A rare opportunity to see one of the greatest players in the sport up close.',
    location: 'Merit Royal Hotel, Kyrenia',
    schedule: [
      '18:00 - Exhibition Opens',
      '19:00 - Demonstration Begins',
      '20:30 - Q&A Session',
      '21:00 - Meet and Greet'
    ]
  },
  { 
    id: 4, 
    name: 'Zeybek Halk', 
    date: '20 April', 
    price: '1575 TL', 
    imageUrl: banner2,
    description: 'Celebrate traditional Turkish and Cypriot folk dancing with this colorful and energetic performance. The Zeybek dance group presents authentic costumes, music, and choreography in this cultural spectacle.',
    location: 'Rauf Raif Denktaş Culture and Congress Center, Nicosia',
    schedule: [
      '18:30 - Doors Open',
      '19:00 - Introduction to Folk Traditions',
      '19:30 - Main Performance',
      '21:00 - Audience Participation'
    ]
  },
];

export default Home;