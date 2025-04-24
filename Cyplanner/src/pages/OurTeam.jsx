import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaMapMarkerAlt, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import Layout from '../components/Layout.jsx';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Sophie Chen',
      role: 'CEO & Founder',
      bio: 'Travel enthusiast with over 10 years of experience in the tourism industry.',
      image: '/src/assets/images/team/sophie.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
      },
      extendedBio: 'Sophie developed a passion for travel at a young age, exploring over 50 countries before founding our company. With a background in hospitality management and a keen eye for authentic experiences, she leads our team with vision and expertise.',
      expertise: ['Luxury Travel', 'Sustainable Tourism', 'Cultural Immersion'],
      languages: ['English', 'Mandarin', 'French'],
      location: 'New York, USA',
      education: 'MBA in Hospitality Management, Cornell University'
    },
    {
      id: 2,
      name: 'Michael Rivera',
      role: 'Chief Travel Officer',
      bio: 'Former tour guide with deep knowledge of Mediterranean destinations.',
      image: '/src/assets/images/team/michael.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
      },
      extendedBio: 'After spending five years leading tours across Southern Europe and North Africa, Michael joined our team to curate authentic local experiences. His connections with local vendors and intimate knowledge of hidden gems help us create truly unique itineraries.',
      expertise: ['Mediterranean Cuisine', 'Historical Tours', 'Adventure Travel'],
      languages: ['English', 'Spanish', 'Italian', 'Greek'],
      location: 'Barcelona, Spain',
      education: 'BA in Anthropology, University of Barcelona'
    },
    {
      id: 3,
      name: 'Emma Johnson',
      role: 'UX Designer',
      bio: 'Creating beautiful digital experiences for travelers around the world.',
      image: '/src/assets/images/team/emma.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
      },
      extendedBio: 'Emma brings a traveler-centric approach to our digital platforms. Her design philosophy focuses on intuitive navigation and immersive visuals that inspire wanderlust while providing practical planning tools. She previously worked with several top travel publications.',
      expertise: ['User Research', 'Mobile App Design', 'Visual Storytelling'],
      languages: ['English', 'Japanese'],
      location: 'London, UK',
      education: 'MFA in Interaction Design, Royal College of Art'
    },
    {
      id: 4,
      name: 'John Smith',
      role: 'Travel Curator',
      bio: 'Specialized in crafting unique travel experiences in lesser-known locations.',
      image: '/src/assets/images/team/john.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
      },
      extendedBio: 'John has a talent for discovering off-the-beaten-path destinations before they become mainstream. A former travel journalist, he devoted to sustainable tourism that benefits local communities while providing authentic experiences to our clients.',
      expertise: ['Off-Grid Destinations', 'Eco Tourism', 'Cultural Festivals'],
      languages: ['English', 'Portuguese', 'Arabic'],
      location: 'Cape Town, South Africa',
      education: 'BS in Environmental Science, University of Cape Town'
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Meet the passionate travelers and experts who make your journey unforgettable. 
            Our diverse team brings together experience from across the globe.
          </p>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(member)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sky-400 mb-3">{member.role}</p>
                <p className="text-gray-400 mb-4 line-clamp-2">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.social.linkedin} 
                    className="text-sky-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-sky-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a 
                    href={member.social.instagram} 
                    className="text-sky-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team section */}
        <div className="mt-20 bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg">
          <h2 className="text-2xl text-white font-semibold mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who love travel and want to help others 
            discover amazing destinations.
          </p>
          <button className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105">
            View Open Positions
          </button>
        </div>
      </div>

      {/* Modal Popup for Team Member */}
      {selectedMember && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700">
            <div className="md:flex">
              <div className="md:w-2/5">
                <div className="relative h-80 md:h-full">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover md:rounded-l-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70 md:rounded-l-xl"></div>
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-colors duration-300 border border-white border-opacity-30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-8 md:w-3/5">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                <p className="text-sky-400 text-xl mb-6">{selectedMember.role}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">About</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedMember.extendedBio}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, index) => (
                      <span key={index} className="bg-blue-900 bg-opacity-40 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-sky-400 mt-1 mr-2" />
                    <div>
                      <h4 className="text-gray-200 font-medium">Location</h4>
                      <p className="text-gray-400">{selectedMember.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaGraduationCap className="text-sky-400 mt-1 mr-2" />
                    <div>
                      <h4 className="text-gray-200 font-medium">Education</h4>
                      <p className="text-gray-400">{selectedMember.education}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start">
                    <FaLanguage className="text-sky-400 mt-1 mr-2" />
                    <div>
                      <h4 className="text-gray-200 font-medium">Languages</h4>
                      <p className="text-gray-400">{selectedMember.languages.join(', ')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
                  <div className="flex space-x-6">
                    <a href={selectedMember.social.linkedin} className="text-sky-400 hover:text-white transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={selectedMember.social.twitter} className="text-sky-400 hover:text-white transition-colors">
                      <FaTwitter size={24} />
                    </a>
                    <a href={selectedMember.social.instagram} className="text-sky-400 hover:text-white transition-colors">
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default OurTeam;