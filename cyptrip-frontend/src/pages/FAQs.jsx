import React from 'react';
import Layout from '../components/Layout.jsx';
function FAQs() {
  return (
    <Layout>
    <div className="page faqs-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        <div className="faq-item">
          <h3>How do I book a trip?</h3>
          <p>Simply browse our destinations, select your preferred option, and follow the booking process.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept all major credit cards, PayPal, and bank transfers.</p>
        </div>
        <div className="faq-item">
          <h3>Can I cancel my reservation?</h3>
          <p>Yes, most reservations can be canceled up to 48 hours before your trip.</p>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default FAQs;
