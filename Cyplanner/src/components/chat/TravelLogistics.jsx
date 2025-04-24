import React from 'react';
import PropTypes from 'prop-types';
import { 
  FaPlane, 
  FaHotel, 
  FaMapMarkedAlt, 
  FaUtensils, 
  FaLandmark, 
  FaCalendarAlt, 
  FaRegClock, 
  FaMapMarkerAlt,
  FaTicketAlt
} from 'react-icons/fa';

const TravelLogistics = ({ logistics, title }) => {
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
    <div className="mt-4 mb-6 bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-sky-600 to-sky-800 py-3 px-4">
        <h3 className="text-white font-medium">{title || 'Travel Logistics'}</h3>
      </div>
      
      <div className="p-4">
        {/* Flights Section */}
        {logistics.flights && logistics.flights.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <FaPlane className="text-sky-600 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-gray-800">Flights</h3>
            </div>
            <div className="border-l-2 border-gray-200 ml-4">
              {logistics.flights.map((flight, index) => (
                <div key={index} className="relative mb-5">
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
        )}

        {/* Hotels Section */}
        {logistics.hotels && logistics.hotels.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <FaHotel className="text-sky-600 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-gray-800">Accommodations</h3>
            </div>
            <div className="border-l-2 border-gray-200 ml-4">
              {logistics.hotels.map((hotel, index) => (
                <div key={index} className="relative mb-5">
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
        )}

        {/* Tours Section */}
        {logistics.tours && logistics.tours.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <FaMapMarkedAlt className="text-sky-600 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-gray-800">Tours & Activities</h3>
            </div>
            <div className="border-l-2 border-gray-200 ml-4">
              {logistics.tours.map((tour, index) => (
                <div key={index} className="relative mb-5">
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
        )}

        {/* Restaurants Section */}
        {logistics.restaurants && logistics.restaurants.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <FaUtensils className="text-sky-600 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-gray-800">Dining</h3>
            </div>
            <div className="border-l-2 border-gray-200 ml-4">
              {logistics.restaurants.map((restaurant, index) => (
                <div key={index} className="relative mb-5">
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
                        <span className="font-medium">Reservation:</span> {restaurant.reservation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Museums Section */}
        {logistics.museums && logistics.museums.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <FaLandmark className="text-sky-600 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-gray-800">Museums & Attractions</h3>
            </div>
            <div className="border-l-2 border-gray-200 ml-4">
              {logistics.museums.map((museum, index) => (
                <div key={index} className="relative mb-5">
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
        )}
      </div>
    </div>
  );
};

TravelLogistics.propTypes = {
  logistics: PropTypes.shape({
    flights: PropTypes.array,
    hotels: PropTypes.array,
    tours: PropTypes.array,
    restaurants: PropTypes.array,
    museums: PropTypes.array
  }).isRequired,
  title: PropTypes.string
};

export default TravelLogistics;
