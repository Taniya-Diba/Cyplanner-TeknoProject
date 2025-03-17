import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-circle"></div>
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/ai-chat" className={`nav-link ${location.pathname === '/ai-chat' ? 'active' : ''}`}>AI Chat</Link>
          <Link to="/deals" className={`nav-link ${location.pathname === '/deals' ? 'active' : ''}`}>Deals</Link>
          <Link to="/explore" className={`nav-link ${location.pathname === '/explore' ? 'active' : ''}`}>Explore</Link>
          <Link to="/travel-guide" className={`nav-link ${location.pathname === '/travel-guide' ? 'active' : ''}`}>Travel Guide</Link>
        </div>
        <div className="nav-auth">
          <Link to="/login" className="login-link">Login</Link>
          <Link to="/signup" className="signup-btn">Sign up</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;