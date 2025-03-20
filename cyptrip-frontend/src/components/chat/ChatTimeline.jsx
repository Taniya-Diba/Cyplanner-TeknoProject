import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChatTimeline = ({ items, type }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  
  const isDestination = type === 'destination';
  const isEvent = type === 'event';
  
  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  
  return (
    <div className="mt-4 mb-6 bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-sky-600 to-sky-800 py-3 px-4">
        <h3 className="text-white font-medium">
          {isDestination ? 'Recommended Destinations' : 'Upcoming Events'}
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex p-4 space-x-4 min-w-max">
          {items.map((item) => (
            <div 
              key={item.id}
              className="w-64 rounded-xl overflow-hidden shadow-md bg-white flex flex-col cursor-pointer hover:shadow-xl transition duration-300"
              onClick={() => toggleExpanded(item.id)}
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name || item.title} 
                  className="w-full h-full object-cover"
                />
                {isEvent && (
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2">
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                      {item.date}
                    </span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>
                )}
                {isDestination && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <div className="flex items-center text-white">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm">{item.rating}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-3 flex-1">
                <h4 className="font-medium text-gray-800 mb-1">{item.name || item.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
              </div>
              
              <div className="px-3 pb-3 mt-auto">
                <button className="text-sm text-sky-600 hover:text-sky-800 transition font-medium w-full text-center">
                  {expandedItem === item.id ? 'Show Less' : 'Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {expandedItem && (
        <div className="border-t border-gray-200">
          {items.filter(item => item.id === expandedItem).map(item => (
            <div key={`expanded-${item.id}`} className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img 
                    src={item.image} 
                    alt={item.name || item.title} 
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  {isDestination && (
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {"★".repeat(Math.floor(item.rating))}
                        {item.rating % 1 !== 0 ? "½" : ""}
                      </div>
                      <span className="text-gray-700">{item.rating}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name || item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  
                  {isEvent && item.schedule && (
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-800 mb-1">Schedule:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.schedule.map((scheduleItem, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-500 mr-1 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {scheduleItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {isDestination && item.attractions && (
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-800 mb-1">Attractions:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.attractions.slice(0, 3).map((attraction, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-500 mr-1 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {attraction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="text-right">
                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-full transition">
                      {isEvent ? 'Book Now' : 'Plan Visit'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ChatTimeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.oneOf(['destination', 'event']).isRequired
};

export default ChatTimeline;
