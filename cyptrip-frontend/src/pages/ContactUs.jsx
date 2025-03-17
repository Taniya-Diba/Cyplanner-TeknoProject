import React from 'react';

function ContactUs() {
  return (
    <div className="page contact-us-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="How can we help?"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: info@travelwebsite.com</p>
        <p>Phone: +1 234 567 8900</p>
      </div>
    </div>
  );
}

export default ContactUs;
