import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all pages
import Home from './pages/Home';
import AiChat from './pages/AiChat';
import Deals from './pages/Deals';
import Explore from './pages/Explore';
import TravelGuide from './pages/TravelGuide';
import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import OurTeam from './pages/OurTeam';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ai-chat" element={<AiChat />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<Explore />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
