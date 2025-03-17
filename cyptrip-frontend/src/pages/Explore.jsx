// src/App.jsx
import { useState } from 'react';
// import Header from './components/Header';
// import Map from './components/Map';
// import AttractionDetail from './components/AttractionDetail';
// import FilterBar from './components/FilterBar';
// import Footer from './components/Footer';
import '../styles/pages/Explore.css';

function App() {
  const [selectedAttraction, setSelectedAttraction] = useState({
    name: 'Kyrenia Castle',
    image: 'https://images.unsplash.com/photo-1564594824030-74b1be5e78a3',
    description: 'Kyrenia Castle is a 16th-century castle built by the Venetians over a previous Crusader fortification. Within its walls lies a twelfth-century chapel showing reused late Roman capitals, and the Shipwreck Museum.',
    location: { lat: 35.3411, lng: 33.3163 }
  });
  
  const [filters, setFilters] = useState('All');
  
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <FilterBar activeFilter={filters} setFilters={setFilters} />
        <div className="content-container">
          <Map 
            selectedAttraction={selectedAttraction}
            setSelectedAttraction={setSelectedAttraction}
          />
          <AttractionDetail attraction={selectedAttraction} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;