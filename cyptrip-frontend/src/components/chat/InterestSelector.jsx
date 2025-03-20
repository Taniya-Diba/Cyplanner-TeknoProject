import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * InterestSelector component for managing user interests
 * 
 * @param {Object} props - Component props
 * @param {Array} props.interests - Array of interest objects
 * @param {Function} props.onAddInterest - Callback when interest is added
 * @param {Function} props.onRemoveInterest - Callback when interest is removed
 * @param {Function} props.onClearAll - Callback when all interests are cleared
 * @returns {JSX.Element} Rendered component
 */
const InterestSelector = ({ 
  interests, 
  onAddInterest, 
  onRemoveInterest, 
  onClearAll 
}) => {
  const [newInterest, setNewInterest] = useState('');

  const handleAddInterest = (e) => {
    e.preventDefault();
    if (!newInterest.trim()) return;
    
    onAddInterest(newInterest);
    setNewInterest('');
  };

  // Generate a suggested interest that isn't already selected
  const suggestedInterests = [
    "History", "Food", "Culture", "Nature", "Adventure", 
    "Beaches", "Nightlife", "Architecture", "Relaxation", 
    "Shopping", "Hiking", "Photography", "Local Cuisine"
  ].filter(interest => 
    !interests.some(i => i.name.toLowerCase() === interest.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sky-400 font-medium">My Interests</h3>
      </div>
      
      {/* Add interest form */}
      <form onSubmit={handleAddInterest} className="mb-4 flex">
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Add new interest..."
          className="flex-1 px-3 py-2 rounded-l-full bg-slate-700 bg-opacity-50 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-inner"
        />
        <button 
          type="submit"
          className="bg-sky-600 hover:bg-sky-500 text-white px-3 py-2 rounded-r-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
      
      {/* Interest tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {interests.map(interest => (
          <div 
            key={interest.id} 
            className="flex items-center bg-sky-600 bg-opacity-40 text-white text-sm rounded-full px-3 py-1 shadow-md hover:bg-opacity-50 transition-colors"
          >
            {interest.name}
            <button 
              onClick={() => onRemoveInterest(interest.id)}
              className="ml-2 text-sky-100 hover:text-white"
              aria-label={`Remove ${interest.name}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      {/* Suggested interests */}
      {interests.length < 10 && suggestedInterests.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-sky-200 mb-2">Suggested interests:</p>
          <div className="flex flex-wrap gap-1">
            {suggestedInterests.slice(0, 5).map(interest => (
              <button
                key={interest}
                onClick={() => {
                  onAddInterest(interest);
                }}
                className="bg-slate-700 bg-opacity-40 text-sky-200 text-xs rounded-full px-2 py-1 hover:bg-slate-600 transition-colors"
              >
                + {interest}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Clear all button */}
      {interests.length > 0 && (
        <button 
          onClick={onClearAll}
          className="text-sm text-sky-200 hover:text-white border border-sky-400 px-4 py-1 rounded-full hover:bg-sky-700 hover:bg-opacity-30 transition-all"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

InterestSelector.propTypes = {
  interests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onAddInterest: PropTypes.func.isRequired,
  onRemoveInterest: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired
};

export default React.memo(InterestSelector);
