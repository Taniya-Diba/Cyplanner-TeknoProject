import React from 'react';

function TravelGuide() {
  return (
    <div className="page travel-guide-page">
      <h1>Travel Guides</h1>
      <div className="guides-list">
        <div className="guide-item">
          <h3>European Vacation Planning</h3>
          <p>Everything you need to know about traveling in Europe</p>
        </div>
        <div className="guide-item">
          <h3>Southeast Asia on a Budget</h3>
          <p>Tips for affordable adventures in Southeast Asia</p>
        </div>
      </div>
    </div>
  );
}

export default TravelGuide;
