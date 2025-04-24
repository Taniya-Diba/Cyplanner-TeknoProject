import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * ChatInput component for handling user message input
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSendMessage - Callback function when message is sent
 * @param {boolean} props.isLoading - Whether the app is currently loading/processing
 * @returns {JSX.Element} Rendered component
 */
const ChatInput = ({ onSendMessage, isLoading }) => {
  const [messageInput, setMessageInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    onSendMessage(messageInput);
    setMessageInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Ask about your trip . . ."
        className="w-full bg-slate-700 bg-opacity-50 text-white placeholder-gray-300 rounded-full py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
        disabled={isLoading}
      />
      
      <div className="absolute right-3 top-3 flex space-x-2">
        <button 
          type="button" 
          className="text-sky-400 hover:text-white transition-colors"
          aria-label="Emoji"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        
        <button 
          type="submit" 
          className={`text-sky-400 hover:text-white transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </form>
  );
};

ChatInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

ChatInput.defaultProps = {
  isLoading: false
};

export default React.memo(ChatInput);
