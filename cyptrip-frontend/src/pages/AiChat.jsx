import React, { useState } from 'react';
import '../styles/pages/Aichat.css';
import Layout from '../components/Layout';
function AIChat() {
  // Initial messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      content: "Hi! I'm your Cyprus Travel Assistant. What kind of experience are you looking for? I can help plan your entire trip on your preferences.",
      time: '11:35 AM'
    },
    {
      id: 2,
      sender: 'user',
      content: "I want to explore historical sites and try local food in Kyrenia.",
      time: '11:35 AM'
    },
    {
      id: 3,
      sender: 'ai',
      content: "Great choice! Here's a plan for your 3-day trip to Kyrenia:\nDay 1: Kyrenia Castle & Harbor restaurants (Niazi's, Set Fish)\nDay 2: St. Hilarion Castle & local tavernas in Bellapais.\nDay 3: Buffavento Castle & traditional meze at Hobo's\nClick to view full itinerary",
      time: '11:35 AM'
    }
  ]);
  
  // Filter states
  const [filters, setFilters] = useState({
    duration: '',
    budget: '',
    group: ''
  });
  
  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Tags/interests state
  const [tags, setTags] = useState(['Culture', 'Food', 'History', 'Beaches', 'History']);
  
  // Input state
  const [inputMessage, setInputMessage] = useState('');

  // Toggle dropdown menu
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Handle filter selection
  const handleFilterSelect = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
    setActiveDropdown(null);
  };

  // Remove tag function
  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // Add new tag function
  const addNewTag = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const newTag = e.target.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        e.target.value = '';
      }
    }
  };

  // Clear all tags
  const clearAllTags = () => {
    setTags([]);
  };

  // Send message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newUserMessage]);
    setInputMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        content: `I'll help you explore more about ${inputMessage}. Is there anything specific you'd like to know?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Layout>
    <div className="chat-container">
      <div className="chat-sidebar">
        <div className="logo-container">
        </div>
        
        <h2>Plan your perfect trip</h2>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search your destination" 
            className="search-input"
          />
        </div>
        
        {/* Filter section with functional dropdowns */}
        <div className="filter-section">
          <p>Filter by:</p>
          
          {/* Duration dropdown */}
          <div className="filter-dropdown">
            <button 
              className={`dropdown-btn ${activeDropdown === 'duration' ? 'active' : ''}`}
              onClick={() => toggleDropdown('duration')}
            >
              {filters.duration || 'Duration'}
            </button>
            {activeDropdown === 'duration' && (
              <div className="dropdown-menu">
                <div onClick={() => handleFilterSelect('duration', '1-3 days')}>1-3 days</div>
                <div onClick={() => handleFilterSelect('duration', '4-7 days')}>4-7 days</div>
                <div onClick={() => handleFilterSelect('duration', '1-2 weeks')}>1-2 weeks</div>
                <div onClick={() => handleFilterSelect('duration', '2+ weeks')}>2+ weeks</div>
              </div>
            )}
          </div>
          
          {/* Budget dropdown */}
          <div className="filter-dropdown">
            <button 
              className={`dropdown-btn ${activeDropdown === 'budget' ? 'active' : ''}`}
              onClick={() => toggleDropdown('budget')}
            >
              {filters.budget || 'Budget'}
            </button>
            {activeDropdown === 'budget' && (
              <div className="dropdown-menu">
                <div onClick={() => handleFilterSelect('budget', 'Budget')}>Budget</div>
                <div onClick={() => handleFilterSelect('budget', 'Mid-range')}>Mid-range</div>
                <div onClick={() => handleFilterSelect('budget', 'Luxury')}>Luxury</div>
              </div>
            )}
          </div>
          
          {/* Group dropdown */}
          <div className="filter-dropdown">
            <button 
              className={`dropdown-btn ${activeDropdown === 'group' ? 'active' : ''}`}
              onClick={() => toggleDropdown('group')}
            >
              {filters.group || 'Group'}
            </button>
            {activeDropdown === 'group' && (
              <div className="dropdown-menu">
                <div onClick={() => handleFilterSelect('group', 'Solo')}>Solo</div>
                <div onClick={() => handleFilterSelect('group', 'Couple')}>Couple</div>
                <div onClick={() => handleFilterSelect('group', 'Family')}>Family</div>
                <div onClick={() => handleFilterSelect('group', 'Friends')}>Friends</div>
              </div>
            )}
          </div>
        </div>
        
        {/* Interests/tags section */}
        <div className="interests-section">
          <div className="interests-header">
            <span>Interests</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          {/* Add new tag input */}
          <div className="add-tag-container">
            <input 
              type="text" 
              placeholder="Add new interest..." 
              className="add-tag-input"
              onKeyDown={addNewTag}
            />
          </div>
          
          {/* Tags display */}
          <div className="interests-tags">
            {tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag} <button className="tag-close" onClick={() => removeTag(tag)}>×</button>
              </span>
            ))}
          </div>
          
          {tags.length > 0 && (
            <button className="clear-btn" onClick={clearAllTags}>Clear All</button>
          )}
        </div>
      </div>
      
      <div className="chat-main">
        
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.sender === 'ai' && (
                <div className="ai-avatar">
                  <div className="avatar-circle"></div>
                </div>
              )}
              <div className="message-content">
                {message.sender === 'ai' && <div className="ai-label">Cyplaner <span className="ai-badge">AI</span></div>}
                <p>{message.content}</p>
                <span className="message-time">{message.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="chat-input">
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Ask about your trip . . ."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" className="send-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
              </svg>
            </button>
            <button type="button" className="voice-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default AIChat;
