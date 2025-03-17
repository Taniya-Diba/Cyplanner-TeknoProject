import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Travel Website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ai-chat">AI Chat</Link></li>
          <li><Link to="/deals">Deals</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/travel-guide">Travel Guide</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
