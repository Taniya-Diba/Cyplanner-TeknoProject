import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import AiLOGO from '../assets/images/IMG/aichatbotLOGO.png';

// Import shared data and components
import { 
  locationData, 
  eventsData, 
  API_KEYS, 
  getLocationsByTags 
} from '../data/SharedData';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInput from '../components/chat/ChatInput';
import InterestSelector from '../components/chat/InterestSelector';
import LoadingIndicator from '../components/ui/LoadingIndicator';
import ChatTimeline from '../components/chat/ChatTimeline';
import MilestonesTimeline from '../components/chat/MilestonesTimeline';
import TravelLogistics from '../components/chat/TravelLogistics';
import { callGeminiAPI, processAIResponse } from '../utils/apiHelpers';

// Import extended destination data
import DestinationData from '../data/DestinationData';

// Destructure the imported data for easier access
const {
  kyreniaLogistics,
  kyreniaMilestones,
  salamisMilestones,
  bellapaisMilestones,
  varoshaMilestones
} = DestinationData;

/**
 * AiChat component - Main chatbot interface with Cyprus travel assistance
 */
const AiChat = () => {
  // State declarations with meaningful default values
  const [messages, setMessages] = useState([]);
  const [interests, setInterests] = useState([
    { id: 1, name: 'Culture' },
    { id: 2, name: 'Food' },
    { id: 3, name: 'History' },
    { id: 4, name: 'Beaches' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    duration: 'Duration',
    budget: 'Budget',
    group: 'Group'
  });
  
  // Initial greeting message on component mount
  useEffect(() => {
    const initialGreeting = {
      id: 'greeting-1',
      sender: 'ai',
      text: "Hi! I'm your Cyprus Travel Assistant. What kind of experience are you looking for?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([initialGreeting]);
  }, []);
  
  // Interest management functions
  const addInterest = useCallback((interestName) => {
    if (!interestName.trim()) return;
    
    const newId = interests.length > 0 
      ? Math.max(...interests.map(i => i.id)) + 1 
      : 1;
      
    setInterests(prev => [...prev, { id: newId, name: interestName.trim() }]);
  }, [interests]);
  
  const removeInterest = useCallback((id) => {
    setInterests(prev => prev.filter(interest => interest.id !== id));
  }, []);
  
  const clearAllInterests = useCallback(() => {
    setInterests([]);
  }, []);
  
  // Filter change handler
  const handleFilterChange = useCallback((filterType, value) => {
    setSelectedFilter(prev => ({
      ...prev,
      [filterType]: value
    }));
  }, []);
  
  // Handle sending a message to the AI
  const handleSendMessage = useCallback(async (messageText) => {
    // Create and add user message to chat
    const newMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);
    
    try {
      // Get selected interests
      const selectedInterests = interests.map(i => i.name);
      
      // Get relevant locations based on interests
      const relevantLocations = getLocationsByTags(selectedInterests);
      
      // Format location information for the AI prompt
      const locationsInfo = relevantLocations.map(loc => 
        `${loc.name}: ${loc.description} Tags: ${loc.tags.join(', ')} Location: lat ${loc.lat}, lng ${loc.lng}`
      ).join('\n');
      
      // Format events information for the AI prompt
      const eventsInfo = eventsData.map(event => 
        `${event.name}: ${event.date}, ${event.price} at ${event.location}. ${event.description}`
      ).join('\n');
      
      // Build comprehensive prompt for Gemini
      const prompt = `You are a helpful Cyprus travel assistant. Be engaging and use emoji in your responses along with markdown formatting to emphasize key points.
      
      User interests: ${selectedInterests.join(', ')}
      Selected filters: Duration: ${selectedFilter.duration}, Budget: ${selectedFilter.budget}, Group: ${selectedFilter.group}
      Recent conversation: ${JSON.stringify(messages.slice(-3))}
      User query: ${messageText}
      
      Available destinations in North Cyprus:
      ${locationsInfo}
      
      Upcoming events in North Cyprus:
      ${eventsInfo}
      
      Important: 
      1. Include relevant emoji in your responses to make them engaging
      2. Use markdown for headers, bullet points, and to highlight important information
      3. Make suggestions based on user interests and filters
      4. If suggesting places, include emoji for the type of place (beach 🏖️, restaurant 🍽️, historical site 🏛️, etc.)
      5. Format your response in a clear, visually appealing way with markdown
      6. When mentioning specific destinations (like Salamis Ruins, Kyrenia Castle, Varosha, or Bellapais Abbey), mention that the user can click on the name to view it on the map
      7. When mentioning events, include the date and location
      8. If the user asks about travel routes, mention that they can use the Explore page to plan their journey
      9. Keep your response concise but informative`;
      
      // Call Gemini API
      const data = await callGeminiAPI({ prompt });
      
      // Extract and process the response text
      let responseText = "Sorry, I couldn't generate a response. Please try again.";
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        responseText = data.candidates[0].content.parts[0].text;
        // Process the response to add interactive elements
        responseText = processAIResponse(responseText, locationData, eventsData);
      }
      
      // Create and add AI response to chat
      // Generate any timeline components based on the message content
      const timelineComponents = generateTimelineComponents(responseText);
      
      const aiResponse = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        timelineComponents: timelineComponents
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error processing message:", error);
      
      // Add error message to chat
      const errorResponse = {
        id: `error-${Date.now()}`,
        sender: 'ai',
        text: "I'm sorry, there was an error processing your request. Please try again in a moment.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  }, [interests, messages, selectedFilter]);
  
  // Filter option components
  const filterOptions = {
    duration: ['Duration', '1-3 days', '4-7 days', '1-2 weeks', '2+ weeks'],
    budget: ['Budget', 'Economy', 'Moderate', 'Luxury'],
    group: ['Group', 'Solo', 'Couple', 'Family', 'Friends']
  };
  
  // Render custom filter select component
  const renderFilterSelect = (type, options) => (
    <div className="relative">
      <select 
        value={selectedFilter[type]} 
        onChange={(e) => handleFilterChange(type, e.target.value)}
        className="w-full appearance-none bg-slate-700 bg-opacity-50 text-white rounded-full py-2 px-4 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
  
  return (
    <Layout>
      <div className="flex h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute w-full h-full opacity-10 pointer-events-none z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
            <path fill="#0ea5e9" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-slate-900 bg-opacity-70 backdrop-blur-sm p-6 flex flex-col z-10 shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-6">Plan your perfect trip</h2>
          
          {/* Filters */}
          <div className="mb-8">
            <h3 className="text-sky-400 mb-3 font-medium">Filter by:</h3>
            
            <div className="space-y-3">
              {renderFilterSelect('duration', filterOptions.duration)}
              {renderFilterSelect('budget', filterOptions.budget)}
              {renderFilterSelect('group', filterOptions.group)}
            </div>
          </div>
          
          {/* Interests */}
          <InterestSelector 
            interests={interests}
            onAddInterest={addInterest}
            onRemoveInterest={removeInterest}
            onClearAll={clearAllInterests}
          />
          
          {/* Explore Map Button */}
          <div className="mt-6">
            <Link 
              to="/explore" 
              className="flex items-center justify-center w-full bg-sky-600 hover:bg-sky-500 text-white py-2 px-4 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Explore Map
            </Link>
          </div>

          {/* Quick Access to Events */}
          <div className="mt-6">
            <h3 className="text-sky-400 mb-3 font-medium">Upcoming Events</h3>
            <div className="space-y-2">
              {eventsData.slice(0, 3).map(event => (
                <div key={event.id} className="bg-slate-800 bg-opacity-40 rounded-lg p-3 hover:bg-slate-700 transition-colors cursor-pointer">
                  <h4 className="font-medium text-white">{event.name}</h4>
                  <p className="text-sm text-sky-200">{event.date} • {event.location}</p>
                </div>
              ))}
              <Link to="/" className="text-sm text-sky-200 hover:text-white flex items-center">
                View all events
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Powered by section */}
          <div className="mt-auto pt-6">
            <div className="w-full flex items-center justify-center space-x-2 bg-sky-800 bg-opacity-40 text-white rounded-full py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"></path>
                <path d="M12 22v-3.5"></path>
                <path d="M12 2v3.5"></path>
                <path d="M4.22 19.78l2.12-2.12"></path>
                <path d="m19.78 4.22-2.12 2.12"></path>
                <path d="M2 12h3.5"></path>
                <path d="M22 12h-3.5"></path>
                <path d="M4.22 4.22l2.12 2.12"></path>
                <path d="m19.78 19.78-2.12-2.12"></path>
              </svg>
              <span>Powered by Gemini 1.5</span>
            </div>
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col p-6 overflow-hidden z-10 bg-slate-800 bg-opacity-30 backdrop-blur-sm">
          {/* Messages */}
          <div className="relative flex-1 overflow-y-auto mb-4 space-y-6">
            {messages.map(message => (
              <ChatMessage 
                key={message.id} 
                message={message} 
                aiLogo={AiLOGO} 
              />
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <LoadingIndicator 
                type="chat" 
                aiLogo={AiLOGO} 
              />
            )}
          </div>

          {/* Wave divider */}
          <div className="relative h-12 mb-4 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full opacity-20">
              <path fill="#0ea5e9" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>
          
          {/* Message Input */}
          <ChatInput 
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AiChat;
