import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '../styles/pages/Deals.css';
import Layout from '../components/Layout';
function Deals() {
  const [activeTab, setActiveTab] = useState('deals');
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const hotelData = [
    {
      id: 1,
      name: 'Merit Royal Diamond Hotel',
      location: 'Kyrenia',
      image: '/api/placeholder/400/240',
      duration: '1 night',
      adults: 1,
      features: ['SPA & Casino'],
      reviews: { count: '3.8k', rating: 4 },
      price: 427
    },
    {
      id: 2,
      name: 'Vuni Palace Hotel',
      location: 'Kyrenia',
      image: '/api/placeholder/400/240',
      duration: '1 night',
      adults: 1,
      features: ['SPA & Casino'],
      reviews: { count: '2.4k', rating: 4 },
      price: 188
    },
    {
      id: 3,
      name: "Lord's Palace Hotel SPA Casino",
      location: 'Kyrenia',
      image: '/api/placeholder/400/240',
      duration: '1 night',
      adults: 1,
      features: ['SPA & Casino'],
      reviews: { count: '1.5k', rating: 4 },
      price: 150
    }
  ];

  const restaurantData = [
    {
      id: 1,
      name: 'Blue Somg Restaurant',
      location: 'Kyrenia',
      image: '/api/placeholder/400/240',
      features: ['Food/Drinks', 'Beach'],
      reviews: { count: '645', rating: 4 },
      discount: '20% off'
    },
    {
      id: 2,
      name: 'Califorian Gold Restaurant',
      location: 'Famagusta',
      image: '/api/placeholder/400/240',
      features: ['Food/Drinks', 'Beach'],
      reviews: { count: '885', rating: 4 },
      discount: '10% off'
    },
    {
      id: 3,
      name: 'Ezic Restaurant',
      location: 'Nicosia',
      image: '/api/placeholder/400/240',
      features: ['Food/Drinks', 'Beach'],
      reviews: { count: '2.2k', rating: 4 },
      discount: '15% off'
    }
  ];

  const activityData = [
    { id: 1, name: 'City Tours', count: '+50 Tours', image: '/api/placeholder/400/240' },
    { id: 2, name: 'Beach Tours', count: '+25 Tours', image: '/api/placeholder/400/240' },
    { id: 3, name: 'Historical Tours', count: '+150 Tours', image: '/api/placeholder/400/240' }
  ];

  const transportData = [
    { id: 1, name: 'Boat Trips', image: '/api/placeholder/400/240' },
    { id: 2, name: 'Bus Tours', image: '/api/placeholder/400/240' },
    { id: 3, name: 'Rent Cars', image: '/api/placeholder/400/240' }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  if (activeTab === 'ai-chat') {
    return <AIChat />;
  }
  return (
    <Layout>
    <div className="app">
      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search your destination" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <div className="budget-dropdown">
            <button onClick={() => setBudgetOpen(!budgetOpen)}>
              Budget
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {budgetOpen && (
              <div className="dropdown-menu">
                <div>Low ($0-$100)</div>
                <div>Medium ($100-$300)</div>
                <div>High ($300+)</div>
              </div>
            )}
          </div>
        </div>
        
        <div className="filter-buttons">
          <button 
            className={activeFilter === 'All' ? 'active' : ''} 
            onClick={() => handleFilterClick('All')}
          >
            All
          </button>
          <button 
            className={activeFilter === 'Activities' ? 'active' : ''} 
            onClick={() => handleFilterClick('Activities')}
          >
            Activities
          </button>
          <button 
            className={activeFilter === 'Hotels' ? 'active' : ''} 
            onClick={() => handleFilterClick('Hotels')}
          >
            Hotels
          </button>
          <button 
            className={activeFilter === 'Restaurants' ? 'active' : ''} 
            onClick={() => handleFilterClick('Restaurants')}
          >
            Restaurants
          </button>
          <button 
            className={activeFilter === 'Transportation' ? 'active' : ''} 
            onClick={() => handleFilterClick('Transportation')}
          >
            Transportation
          </button>
        </div>
      </div>

      {/* Hotels Section */}
      <section className="section hotels-section">
        <h2>Hotels</h2>
        <div className="cards-container">
          {hotelData.map(hotel => (
            <div className="card hotel-card" key={hotel.id}>
              <div className="card-image">
                <img src={hotel.image} alt={hotel.name} />
              </div>
              <div className="card-content">
                <h3>{hotel.name}</h3>
                <p className="location">{hotel.location}</p>
                <div className="details">
                  <div className="detail-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Duration: {hotel.duration}
                  </div>
                  <div className="detail-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {hotel.adults} Adults
                  </div>
                  {hotel.features.map((feature, idx) => (
                    <div className="detail-item" key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="rating-price">
                  <div className="rating">
                    <div className="stars">
                      {[...Array(hotel.reviews.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    <span className="review-count">{hotel.reviews.count} reviews</span>
                  </div>
                  <div className="price">
                    <span className="amount">${hotel.price}</span>
                    <span className="per">per person</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="next-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="section restaurants-section">
        <h2>Restaurants</h2>
        <div className="cards-container">
          {restaurantData.map(restaurant => (
            <div className="card restaurant-card" key={restaurant.id}>
              <div className="card-image">
                <img src={restaurant.image} alt={restaurant.name} />
              </div>
              <div className="card-content">
                <h3>{restaurant.name}</h3>
                <p className="location">{restaurant.location}</p>
                <div className="details">
                  {restaurant.features.map((feature, idx) => (
                    <div className="detail-item" key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {feature === 'Food/Drinks' ? (
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        ) : (
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        )}
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="rating-discount">
                  <div className="rating">
                    <div className="stars">
                      {[...Array(restaurant.reviews.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    <span className="review-count">{restaurant.reviews.count} reviews</span>
                  </div>
                  <div className="discount-tag">
                    {restaurant.discount}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="next-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section activities-section">
        <h2>Activities</h2>
        <div className="cards-container">
          {activityData.map(activity => (
            <div className="card activity-card" key={activity.id}>
              <div className="card-image">
                <img src={activity.image} alt={activity.name} />
                <div className="card-overlay">
                  <h3>{activity.name}</h3>
                  <p>{activity.count}</p>
                </div>
              </div>
            </div>
          ))}
          <button className="next-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="section transportation-section">
        <h2>Transportatioin</h2>
        <div className="cards-container">
          {transportData.map(transport => (
            <div className="card transport-card" key={transport.id}>
              <div className="card-image">
                <img src={transport.image} alt={transport.name} />
                <div className="card-overlay">
                  <h3>{transport.name}</h3>
                </div>
              </div>
            </div>
          ))}
<button className="next-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 16 16 12 12 8"></polyline>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
</button>
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default Deals;