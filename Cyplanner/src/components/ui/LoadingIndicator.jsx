import React from 'react';
import PropTypes from 'prop-types';

/**
 * LoadingIndicator component for displaying loading states
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Type of loading indicator ('chat', 'page', 'button')
 * @param {string} props.size - Size of the indicator ('small', 'medium', 'large')
 * @param {string} props.aiLogo - URL to AI avatar for chat loading indicators
 * @returns {JSX.Element} Rendered component
 */
const LoadingIndicator = ({ type, size, aiLogo }) => {
  // Chat loading indicator with AI avatar
  if (type === 'chat') {
    return (
      <div className="flex justify-start">
        <div className="h-8 w-8 rounded-full bg-sky-500 bg-opacity-80 mr-3 overflow-hidden flex-shrink-0 shadow-md">
          <img src={aiLogo} alt="AI" className="h-full w-full object-cover" />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Full page loading spinner
  if (type === 'page') {
    return (
      <div className="flex items-center justify-center min-h-[200px] w-full">
        <div className="relative">
          <div className={`
            ${size === 'large' ? 'w-16 h-16' : size === 'small' ? 'w-8 h-8' : 'w-12 h-12'} 
            border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin
          `}></div>
        </div>
      </div>
    );
  }

  // Button loading indicator
  if (type === 'button') {
    return (
      <div className="flex items-center justify-center">
        <div className={`
          ${size === 'large' ? 'w-6 h-6' : size === 'small' ? 'w-3 h-3' : 'w-4 h-4'} 
          border-2 border-white border-t-transparent rounded-full animate-spin
        `}></div>
      </div>
    );
  }

  // Default spinner - simple dots
  return (
    <div className="flex space-x-2 justify-center items-center">
      <div className={`${size === 'large' ? 'w-4 h-4' : size === 'small' ? 'w-2 h-2' : 'w-3 h-3'} bg-sky-600 rounded-full animate-pulse`}></div>
      <div className={`${size === 'large' ? 'w-4 h-4' : size === 'small' ? 'w-2 h-2' : 'w-3 h-3'} bg-sky-600 rounded-full animate-pulse delay-150`}></div>
      <div className={`${size === 'large' ? 'w-4 h-4' : size === 'small' ? 'w-2 h-2' : 'w-3 h-3'} bg-sky-600 rounded-full animate-pulse delay-300`}></div>
    </div>
  );
};

LoadingIndicator.propTypes = {
  type: PropTypes.oneOf(['chat', 'page', 'button', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  aiLogo: PropTypes.string
};

LoadingIndicator.defaultProps = {
  type: 'default',
  size: 'medium',
  aiLogo: null
};

export default LoadingIndicator;
