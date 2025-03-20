import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCar, FaRegClock, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const MilestonesTimeline = ({ milestones, title }) => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  
  const toggleMilestone = (index) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };
  
  return (
    <div className="mt-4 mb-6 bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-sky-600 to-sky-800 py-3 px-4">
        <h3 className="text-white font-medium">{title || 'Travel Timeline'}</h3>
      </div>
      
      <div className="p-4">
        <div className="border-l-2 border-gray-200 ml-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative mb-8">
              <div className="absolute -left-4 top-0 w-6 h-6 bg-white rounded-full border-2 border-sky-500 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${expandedMilestone === index ? 'bg-sky-500' : 'bg-gray-300'}`}></div>
              </div>
              
              <div 
                className={`ml-6 cursor-pointer transition ${expandedMilestone === index ? 'bg-gray-50 rounded-lg p-4' : 'hover:bg-gray-50 hover:rounded-lg hover:p-4'}`}
                onClick={() => toggleMilestone(index)}
              >
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <span className="font-medium">{index + 1}</span>
                  <span className="mx-2">•</span>
                  <span>{milestone.location}</span>
                </div>
                
                <div className="mb-2">
                  <div className="flex items-center mb-2">
                    <FaCar className="text-gray-500 mr-2" size={16} />
                    <span className="text-gray-800 font-medium">Transportation</span>
                    <span className="ml-auto text-gray-500 text-sm">{milestone.type || 'Non-stop'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800">{milestone.day}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaRegClock className="mr-1" size={12} />
                        <span>{milestone.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-800 mb-1">{milestone.title}</h3>
                <p className="text-gray-600 mb-2">{milestone.description}</p>
                
                <div className="flex justify-end">
                  <button className="text-sky-600 hover:text-sky-800 transition text-sm">
                    {expandedMilestone === index ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
              
              {/* Expanded milestone content */}
              {expandedMilestone === index && (
                <div className="ml-6 mt-3 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 animate-fadeIn">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title} 
                        className="w-full h-48 md:h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/api/placeholder/400/300";
                        }}
                      />
                    </div>
                    <div className="md:w-1/2 p-4">
                      <div className="flex items-center mb-3">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                          {milestone.day}
                        </span>
                        <h2 className="text-lg font-bold text-gray-800 ml-3">
                          {milestone.title}
                        </h2>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <FaMapMarkerAlt className="mr-1" size={14} />
                        <span>{milestone.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {milestone.extendedContent || milestone.description}
                      </p>
                      
                      {milestone.achievement && (
                        <div className="bg-yellow-50 rounded-lg p-3 flex items-start">
                          <FaAward className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={16} />
                          <p className="text-gray-700">
                            <span className="font-medium text-gray-800">Key Achievement:</span> {milestone.achievement}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MilestonesTimeline.propTypes = {
  milestones: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.string,
    extendedContent: PropTypes.string,
    achievement: PropTypes.string
  })).isRequired,
  title: PropTypes.string
};

export default MilestonesTimeline;
