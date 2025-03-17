import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all pages
import Home from './pages/Home';
import AiChat from './pages/AiChat';
import Deals from './pages/Deals';
import Explore from './pages/Explore';
import TravelGuide from './pages/TravelGuide';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-chat" element={<AiChat />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
