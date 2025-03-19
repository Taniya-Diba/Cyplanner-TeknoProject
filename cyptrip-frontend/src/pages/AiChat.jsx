import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import AiLOGO from '../assets/images/IMG/aichatbotLOGO.png';
import ReactMarkdown from 'react-markdown';

const AiChat = () => {
  // State declarations
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [newInterest, setNewInterest] = useState('');
  const [interests, setInterests] = useState([
    { id: 1, name: 'Culture' },
    { id: 2, name: 'Food' },
    { id: 3, name: 'History' },
    { id: 4, name: 'Beaches' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Hardcoded API key (replace with your actual Gemini API key)
  const apiKey = "AIzaSyDe6vVwe0mQhv_s2qw5uLBos-99I4aXWOE"; // TODO: Replace with your actual API key
  
  // Initial greeting message on component mount
  useEffect(() => {
    const initialGreeting = {
      id: 1,
      sender: 'ai',
      text: "Hi! I'm your Cyprus Travel Assistant. What kind of experience are you looking for?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([initialGreeting]);
  }, []);
  
  const removeInterest = (id) => {
    setInterests(interests.filter(interest => interest.id !== id));
  };
  
  const clearAllInterests = () => {
    setInterests([]);
  };
  
  const addInterest = (e) => {
    e.preventDefault();
    if (!newInterest.trim()) return;
    
    const newId = interests.length > 0 ? Math.max(...interests.map(i => i.id)) + 1 : 1;
    setInterests([...interests, { id: newId, name: newInterest.trim() }]);
    setNewInterest('');
  };
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessageInput('');
    setIsLoading(true);
    
    // Get selected interests
    const selectedInterests = interests.map(i => i.name);
    
    try {
      // Call Gemini API
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful Cyprus travel assistant. Be engaging and use emoji in your responses along with markdown formatting to emphasize key points.
                  
                  User interests: ${selectedInterests.join(', ')}
                  Recent conversation: ${JSON.stringify(messages.slice(-3))}
                  User query: ${messageInput}
                  
                  Important: 
                  1. Include relevant emoji in your responses to make them engaging
                  2. Use markdown for headers, bullet points, and to highlight important information
                  3. Make suggestions based on user interests
                  4. If suggesting places, include emoji for the type of place (beach 🏖️, restaurant 🍽️, historical site 🏛️, etc.)
                  5. Format your response in a clear, visually appealing way with markdown`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          }
        }),
      });
      
      const data = await response.json();
      
      // Extract the response text
      let responseText = "Sorry, I couldn't generate a response. Please try again.";
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        responseText = data.candidates[0].content.parts[0].text;
      }
      
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: "I'm sorry, there was an error processing your request. Please check your API key and try again.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };
  
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
              <div className="relative">
                <select className="w-full appearance-none bg-slate-700 bg-opacity-50 text-white rounded-full py-2 px-4 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner">
                  <option>Duration</option>
                  <option>1-3 days</option>
                  <option>4-7 days</option>
                  <option>1-2 weeks</option>
                  <option>2+ weeks</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select className="w-full appearance-none bg-slate-700 bg-opacity-50 text-white rounded-full py-2 px-4 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner">
                  <option>Budget</option>
                  <option>Economy</option>
                  <option>Moderate</option>
                  <option>Luxury</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select className="w-full appearance-none bg-slate-700 bg-opacity-50 text-white rounded-full py-2 px-4 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner">
                  <option>Group</option>
                  <option>Solo</option>
                  <option>Couple</option>
                  <option>Family</option>
                  <option>Friends</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interests */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sky-400 font-medium">My Interests</h3>
            </div>
            
            {/* Add interest form */}
            <form onSubmit={addInterest} className="mb-4 flex">
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
            
            <div className="flex flex-wrap gap-2 mb-4">
              {interests.map(interest => (
                <div key={interest.id} className="flex items-center bg-sky-600 bg-opacity-40 text-white text-sm rounded-full px-3 py-1 shadow-md hover:bg-opacity-50 transition-colors">
                  {interest.name}
                  <button 
                    onClick={() => removeInterest(interest.id)}
                    className="ml-2 text-sky-100 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            {interests.length > 0 && (
              <button 
                onClick={clearAllInterests}
                className="text-sm text-sky-200 hover:text-white border border-sky-400 px-4 py-1 rounded-full hover:bg-sky-700 hover:bg-opacity-30 transition-all"
              >
                Clear All
              </button>
            )}
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
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <div className="h-8 w-8 rounded-full bg-sky-500 bg-opacity-80 mr-3 overflow-hidden flex-shrink-0 shadow-md">
                    <img src={AiLOGO} alt="AI" className="h-full w-full object-cover" />
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
                  
                  <div className="markdown-content">
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
                  </div>
                  
                  <div className={`text-xs mt-1 text-right ${
                    message.sender === 'user' ? 'text-sky-200' : 'text-gray-500'
                  }`}>
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="h-8 w-8 rounded-full bg-sky-500 bg-opacity-80 mr-3 overflow-hidden flex-shrink-0 shadow-md">
                  <img src={AiLOGO} alt="AI" className="h-full w-full object-cover" />
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Wave divider */}
          <div className="relative h-12 mb-4 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full opacity-20">
              <path fill="#0ea5e9" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>
          
          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="relative">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Ask about your trip . . ."
              className="w-full bg-slate-700 bg-opacity-50 text-white placeholder-gray-300 rounded-full py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
              disabled={isLoading}
            />
            
            <div className="absolute right-3 top-3 flex space-x-2">
              <button type="button" className="text-sky-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              
              <button 
                type="submit" 
                className={`text-sky-400 hover:text-white transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AiChat;