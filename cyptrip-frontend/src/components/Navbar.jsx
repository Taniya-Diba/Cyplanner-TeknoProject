import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/images/IMG/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Chat', path: '/ai-chat' },
    { name: 'Deals', path: '/deals' },
    { name: 'Explore', path: '/explore' },
    { name: 'Travel Guide', path: '/travel-guide' }
  ];
  
  return (
    <nav className="bg-slate-900 py-4 px-6 md:px-10 lg:px-20 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={LOGO} 
              className="h-10 w-10 bg-sky-600 rounded-full"
            />
          </Link>
          {/* You can replace the div above with your logo */}
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              active={location.pathname === item.path || (location.pathname === '/' && item.path === '/')}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        
        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin">
          <button className="text-sm text-white hover:text-sky-400 transition">Sign in</button>
          </Link>
          <Link to="/signup">
          <button className="text-sm text-slate-900 bg-sky-400 hover:bg-sky-200 px-4 py-2 rounded-md transition">Sign up</button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800 rounded-lg p-4">
          <div className="flex flex-col space-y-3">
            {navItems.map(item => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                active={location.pathname === item.path || (location.pathname === '/' && item.path === '/')}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <hr className="border-slate-700" />
            <button className="text-sm text-white hover:text-sky-400 py-1 transition">Login</button>
            <button className="text-sm text-slate-900 bg-sky-400 hover:bg-sky-500 px-4 py-2 rounded-md transition">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, active, children, onClick }) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`text-sm transition ${active ? 'text-sky-400 border-b-2 border-sky-400 pb-1' : 'text-gray-300 hover:text-white'}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;