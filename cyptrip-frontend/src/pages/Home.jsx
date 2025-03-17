import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
import Layout from '../components/Layout';
import IMG_Salamis from "../assets/images/IMG/Salamis Ruins, Northern Cyprus.jpg";
import IMG_Kyrenia from "../assets/images/IMG/Kyrenia Castle.jpg";
import IMG_Varosha from "../assets/images/IMG/Varosha and Toyota.jpg";
import IMG_Bellapais from "../assets/images/IMG/Bellapais Abbey.jpg";

function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-wave-top"></div>
        <div className="hero-content">
          <h1>Discover North Cyprus</h1>
          <p>Plan your perfect trip with AI assistant</p>
          <div className="search-container">
            <input type="text" placeholder="where do you want to explore?" className="search-input" />
          </div>
        </div>
        <div className="hero-wave-bottom"></div>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations">
        <h2>Recommended for you</h2>
        <div className="recommendation-grid">
          <div className="recommendation-card">
            <img src={IMG_Salamis} alt="Salamis Ruins" className="card-image" />
            <h3 className="card-title">Salamis Ruins</h3>
            <button className="card-arrow">→</button>
          </div>
          <div className="recommendation-card">
            <img src={IMG_Kyrenia} alt="Kyrenia Castle" className="card-image" />
            <h3 className="card-title">Kyrenia Castle</h3>
            <button className="card-arrow">→</button>
          </div>
          <div className="recommendation-card">
            <img src={IMG_Varosha } alt="Varosha" className="card-image" />
            <h3 className="card-title">Varosha</h3>
            <button className="card-arrow">→</button>
          </div>
          <div className="recommendation-card">
            <img src={IMG_Bellapais} alt="Bellapais Abbey" className="card-image" />
            <h3 className="card-title">Bellapais Abbey</h3>
            <button className="card-arrow">→</button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events">
        <h2>Up coming Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <img src="#" alt="Daylight Festival" className="event-image" />
            <div className="event-details">
              <span className="event-date">31 March</span>
              <span className="event-price">350 TL</span>
            </div>
            <h3 className="event-title">Daylight Festival</h3>
          </div>
          <div className="event-card">
            <img src="#" alt="Collectivebeat Comedy" className="event-image" />
            <div className="event-details">
              <span className="event-date">31 March</span>
              <span className="event-price">350 TL</span>
            </div>
            <h3 className="event-title">Collectivebeat Comedy</h3>
          </div>
          <div className="event-card">
            <img src="#" alt="Korhan Sayginer" className="event-image" />
            <div className="event-details">
              <span className="event-date">12 April</span>
              <span className="event-price">4000 TL</span>
            </div>
            <h3 className="event-title">Korhan Sayginer</h3>
          </div>
          <div className="event-card">
            <img src="#" alt="Zeybek Halk" className="event-image" />
            <div className="event-details">
              <span className="event-date">20 April</span>
              <span className="event-price">1575 TL</span>
            </div>
            <h3 className="event-title">Zeybek Halk</h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
