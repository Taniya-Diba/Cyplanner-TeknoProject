import React, { useState } from 'react';
import { FaCompass, FaUserFriends, FaGlobe, FaMapMarkedAlt, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';
import Layout from '../components/Layout.jsx';

const AboutUs = () => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const [expandedValue, setExpandedValue] = useState(null);

  const toggleMilestone = (index) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };

  const toggleValue = (index) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  const milestones = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Our journey began with a small team of travel enthusiasts in Cyprus.',
      extendedContent: 'It all started with three friends sharing a passion for authentic travel experiences. After a memorable road trip discovering hidden gems across Northern Cyprus, we realized there was a gap in the market for genuine local travel guidance. Our first office was a small room in Kyrenia with just two computers and a vision to transform how people explore Cyprus.',
      image: '/src/assets/images/about/2018-foundation.jpg',
      achievement: 'Launched beta website with 50 local recommendations'
    },
    {
      year: '2019',
      title: 'First 1,000 Users',
      description: 'Reached our first major milestone of active travelers using our platform.',
      extendedContent: 'The community began to grow as travelers discovered our unique approach. We introduced user-generated content and built features that allowed locals to contribute their insights. Our team expanded to seven passionate individuals, and we moved to a larger office space in Nicosia. This was the year we introduced our mobile app, which quickly gained traction among independent travelers.',
      image: '/src/assets/images/about/2019-users.jpg',
      achievement: 'Named "Rising Star" at the Mediterranean Tourism Forum'
    },
    {
      year: '2021',
      title: 'Expanded to 10 Countries',
      description: 'Grew our coverage across the Mediterranean region.',
      extendedContent: 'Despite the challenges of the global pandemic, we focused on building partnerships with local experts across Greece, Turkey, Malta, Croatia, Italy, Spain, Egypt, Tunisia, and Morocco. This expansion brought rich cultural diversity to our platform while maintaining our commitment to authentic experiences. We also secured our first round of significant investment to fuel our growth.',
      image: '/src/assets/images/about/2021-expansion.jpg',
      achievement: 'Featured in Travel & Leisure magazines /"Tech Changing Travel/" issue'
    },
    {
      year: '2023',
      title: 'Award-Winning App',
      description: 'Recognized as the Best Travel Guide App by Tourism Innovation Awards.',
      extendedContent: 'Our commitment to innovation paid off with our AI-powered recommendation engine that matches travelers with experiences based on their unique preferences. Weve now grown to a team of 25 across three offices, with over 100,000 monthly active users. The Tourism Innovation Awards recognized our efforts to blend technology with authentic travel experiences in a way that benefits both travelers and local communities.',
      image: '/src/assets/images/about/2023-award.jpg',
      achievement: 'Surpassed 500,000 downloads and 4.8 star rating'
    }
  ];

  const values = [
    {
      icon: <FaCompass size={36} className="text-sky-400" />,
      title: 'Authentic Experiences',
      description: 'We believe in showcasing the real essence of each destination, beyond the tourist attractions.',
      extendedDescription: 'Tourist traps and overcrowded attractions rarely capture the true spirit of a place. We work directly with locals who are passionate about their home to uncover genuine experiences—the family taverna thats been serving the same recipe for generations, the hidden cove only accessible by a trail known to fishermen, or the workshop where traditional crafts are keeping cultural heritage alive. By prioritizing these authentic experiences, we help create meaningful connections between travelers and the places they visit.',
      examples: [
        'Home-hosted dinners with local families',
        'Traditional craft workshops with master artisans',
        'Lesser-known historical sites with community guides'
      ]
    },
    {
      icon: <FaUserFriends size={36} className="text-sky-400" />,
      title: 'Community First',
      description: 'Our platform is built on the shared experiences and recommendations of real travelers.',
      extendedDescription: 'We believe in the collective wisdom of our community. Every recommendation, tip, and review comes from real travelers whove experienced a destination firsthand. Our verification system ensures that only genuine experiences are shared, and our community moderators work to maintain the quality and authenticity of all content. This approach creates a trusted ecosystem where travelers can find reliable information and share their own discoveries, forming a virtuous cycle that benefits everyone.',
      examples: [
        'Peer verification of all user-submitted content',
        'Monthly community challenges to discover hidden gems',
        'Annual meetups for power users and contributors'
      ]
    },
    {
      icon: <FaGlobe size={36} className="text-sky-400" />,
      title: 'Sustainable Tourism',
      description: 'We promote responsible travel practices that respect local cultures and environments.',
      extendedDescription: 'Tourism should benefit both travelers and the destinations they visit. Were committed to promoting sustainable practices that preserve cultural heritage, protect natural environments, and ensure that tourism revenue benefits local communities. We highlight businesses that operate responsibly, encourage off-peak travel to reduce overcrowding, and educate travelers about local customs and environmental challenges. Our sustainability badge program recognizes partners who meet our rigorous standards for responsible business practices.',
      examples: [
        'Carbon offset program for all bookings made through our platform',
        'Focus on locally-owned accommodations and experiences',
        'Educational content about cultural sensitivity and environmental protection'
      ]
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <div className="max-w-6xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're passionate about helping travelers discover authentic experiences 
            and hidden gems around the Mediterranean coast.
          </p>
        </div>

        {/* Our story */}
        <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg mb-16 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="/src/assets/images/about/our-story.jpg" 
                alt="Our team exploring a coastal town" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-white mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                What started as a passion project by a group of friends who loved exploring 
                Cyprus's hidden beaches and ancient ruins has evolved into a comprehensive 
                travel platform.
              </p>
              <p className="text-gray-300 mb-4">
                We found that traditional travel guides didn't capture the authentic 
                experiences we were having, so we decided to create something different—a 
                platform where real travelers could share their discoveries and help others 
                experience destinations like a local.
              </p>
              <p className="text-gray-300">
                Today, we're proud to connect travelers with authentic experiences across 
                the Mediterranean, from secluded beaches to family-run tavernas that you 
                won't find in typical tourist guides.
              </p>
            </div>
          </div>
        </div>

        {/* Our values */}
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-lg transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-xl ${expandedValue === index ? 'transform scale-105' : ''}`}
              onClick={() => toggleValue(index)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">{value.title}</h3>
                <p className="text-gray-300 text-center">{value.description}</p>
                
                {expandedValue === index && (
                  <div className="mt-6 border-t border-slate-700 pt-6 animate-fadeIn">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {value.extendedDescription}
                    </p>
                    <div className="bg-slate-700 bg-opacity-50 rounded-xl p-4">
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <FaLightbulb className="text-yellow-400 mr-2" /> 
                        How we put this into practice:
                      </h4>
                      <ul className="text-gray-300">
                        {value.examples.map((example, i) => (
                          <li key={i} className="mb-2 flex items-start">
                            <span className="text-sky-400 mr-2">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center mt-4">
                  <button className="text-sky-400 hover:text-white transition-colors">
                    {expandedValue === index ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Journey</h2>
        <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-sky-500 transform -translate-x-1/2"></div>
            
            {/* Milestone items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div 
                    className={`md:w-1/2 p-4 relative cursor-pointer transition-all duration-300 ${expandedMilestone === index ? 'bg-slate-700 bg-opacity-30 rounded-xl' : 'hover:bg-slate-700 hover:bg-opacity-20 hover:rounded-xl'}`}
                    onClick={() => toggleMilestone(index)}
                  >
                    <div className={`md:${index % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                      <div className="text-sky-400 text-2xl font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-white text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                      
                      <div className="flex justify-center md:justify-start mt-4">
                        <button className={`text-sky-400 hover:text-white transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          {expandedMilestone === index ? 'Show Less' : 'Learn More'}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-14 relative">
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full ${expandedMilestone === index ? 'bg-sky-400 border-4 border-slate-800 ring-2 ring-sky-400 animate-pulse' : 'bg-sky-500 border-4 border-slate-800'}`}></div>
                  </div>
                  
                  <div className="md:w-1/2 p-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expanded milestone content */}
        {expandedMilestone !== null && (
          <div className="bg-slate-800 bg-opacity-80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg mb-16 transition-all duration-300 animate-fadeIn">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={milestones[expandedMilestone].image} 
                  alt={milestones[expandedMilestone].title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-sky-900 text-sky-200 px-3 py-1 rounded-full text-sm font-medium">
                    {milestones[expandedMilestone].year}
                  </span>
                  <h2 className="text-2xl font-semibold text-white ml-3">
                    {milestones[expandedMilestone].title}
                  </h2>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {milestones[expandedMilestone].extendedContent}
                </p>
                
                <div className="bg-slate-700 bg-opacity-50 rounded-xl p-4 flex items-start">
                  <FaAward className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">
                    <span className="font-medium text-white">Key Achievement:</span> {milestones[expandedMilestone].achievement}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact section */}
        <div className="bg-gradient-to-r from-slate-800 to-sky-900 rounded-3xl p-8 text-center shadow-lg hover:shadow-blue-900/20 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl text-white font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Have questions about our platform or want to collaborate with us? 
            We'd love to hear from you.
          </p>
          <button className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default AboutUs;
