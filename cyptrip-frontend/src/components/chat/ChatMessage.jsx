import React, { useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ChatTimeline from './ChatTimeline';
import MilestonesTimeline from './MilestonesTimeline';
import TravelLogistics from './TravelLogistics';

/**
 * ChatMessage component renders individual messages in the chat interface
 * 
 * @param {Object} props - Component props
 * @param {Object} props.message - Message data object
 * @param {string} props.aiLogo - URL to AI logo image
 * @returns {JSX.Element} Rendered component
 */
const ChatMessage = ({ message, aiLogo }) => {
  const navigate = useNavigate();
  
  // Handler for location and event links
  const handleClick = useCallback((e) => {
    const target = e.target;
    
    // Handle location links (to Explore page)
    if (target.tagName === 'A' && target.pathname.startsWith('/explore/')) {
      e.preventDefault();
      const locationId = target.pathname.split('/').pop();
      navigate(`/explore/${locationId}`);
    }
    
    // Handle event tooltip links (currently just prevents default)
    if (target.tagName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
      // Could add functionality to show event details modal here
    }
  }, [navigate]);

  return (
    <div 
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {message.sender === 'ai' && (
        <div className="h-8 w-8 rounded-full bg-sky-500 bg-opacity-80 mr-3 overflow-hidden flex-shrink-0 shadow-md">
          <img src={aiLogo} alt="AI" className="h-full w-full object-cover" />
        </div>
      )}
      
      <div 
        className={`max-w-xl rounded-2xl p-4 shadow-lg ${
          message.sender === 'user' 
            ? 'bg-gradient-to-br from-sky-600 to-sky-700 text-white' 
            : 'bg-white text-slate-800'
        }`}
      >
        {message.sender === 'ai' && (
          <div className="font-semibold text-sm mb-1">
            Cyplaner <span className="font-normal text-sky-700 text-xs">AI</span>
          </div>
        )}
        
        <div className="markdown-content" onClick={handleClick}>
          {message.sender === 'ai' ? (
            <ReactMarkdown>{message.text}</ReactMarkdown>
          ) : (
            <div className="whitespace-pre-line">{message.text}</div>
          )}
          {message.action && (
            <div className="mt-2">
              <a href="#" className="text-sky-600 hover:text-sky-700 hover:underline text-sm font-medium">
                {message.action}
              </a>
            </div>
          )}
          
          {/* Render timeline components if they exist */}
          {message.timelineComponents && message.timelineComponents.map((component, index) => {
            if (component.type === 'timeline') {
              return (
                <ChatTimeline 
                  key={`timeline-${index}`}
                  items={component.data}
                  type={component.timelineType}
                />
              );
            } else if (component.type === 'milestones') {
              return (
                <MilestonesTimeline 
                  key={`milestone-${index}`}
                  milestones={component.data}
                  title={component.title}
                />
              );
            } else if (component.type === 'logistics') {
              return (
                <TravelLogistics 
                  key={`logistics-${index}`}
                  logistics={component.data}
                  title={component.title}
                />
              );
            }
            return null;
          })}
        </div>
        
        <div className={`text-xs mt-1 text-right ${
          message.sender === 'user' ? 'text-sky-200' : 'text-gray-500'
        }`}>
          {message.time}
        </div>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    sender: PropTypes.oneOf(['user', 'ai']).isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    action: PropTypes.string,
    timelineComponents: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['timeline', 'milestones', 'logistics']).isRequired,
      data: PropTypes.array.isRequired,
      title: PropTypes.string,
      timelineType: PropTypes.string
    }))
  }).isRequired,
  aiLogo: PropTypes.string.isRequired
};

export default React.memo(ChatMessage);
