import React, { useEffect, useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import IMG_Salamis from "../assets/images/IMG/Salamis Ruins, Northern Cyprus.jpg";
import IMG_Kyrenia from "../assets/images/IMG/Kyrenia Castle.jpg";
import IMG_Varosha from "../assets/images/IMG/Varosha and Toyota.jpg";
import IMG_Bellapais from "../assets/images/IMG/Bellapais Abbey.jpg";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "24px",
};

const recommendationData = [
  {
    id: 1,
    name: "Salamis Ruins",
    lat: 35.0381,
    lng: 33.9880,
    image: IMG_Salamis,
    description: "Ancient ruins of Salamis, a spectacular archaeological site with Roman and Byzantine remains, including a theater, gymnasium, and bath complex.",
  },
  {
    id: 2,
    name: "Kyrenia Castle",
    lat: 35.3403,
    lng: 33.3195,
    image: IMG_Kyrenia,
    description: "Kyrenia Castle is a 16th-century castle built by the Venetians over a previous Crusader fortification. Within its walls lies a twelfth-century chapel showing reused late Roman capitals, and the Shipwreck Museum.",
  },
  {
    id: 3,
    name: "Varosha",
    lat: 35.1186,
    lng: 33.9472,
    image: IMG_Varosha,
    description: "Once a modern tourist area, Varosha became an abandoned district after the Turkish invasion of Cyprus in 1974. Parts of it have recently been reopened to visitors.",
  },
  {
    id: 4,
    name: "Bellapais Abbey",
    lat: 35.2881,
    lng: 33.3187,
    image: IMG_Bellapais,
    description: "A stunning Gothic abbey ruins located in the northern part of Cyprus. Built in the 13th century, it offers beautiful views of the surrounding landscape.",
  },
];

const ExplorePage = () => {
  const { id } = useParams();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [clickedLocation, setClickedLocation] = useState(null);
  
  useEffect(() => {
    if (id) {
      const place = recommendationData.find(place => place.id === parseInt(id));
      if (place) {
        setSelectedPlace(place);
        setSearchText(place.name);
      }
    } else {
      // Start with an empty selection instead of defaulting to Kyrenia Castle
      setSelectedPlace(null);
    }
  }, [id]);

  // Load Google Maps API only once
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAS7hPlKlbKdAPg7waHCR6KfySgD1HPN-Y"
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    
    // Find the closest place to where the user clicked
    let closestPlace = null;
    let closestDistance = Infinity;
    
    recommendationData.forEach(place => {
      const distance = Math.sqrt(
        Math.pow(place.lat - lat, 2) + Math.pow(place.lng - lng, 2)
      );
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestPlace = place;
      }
    });
    
    // If we found a place within a reasonable distance, select it
    if (closestPlace && closestDistance < 0.05) { // Approximately 5.5km
      setSelectedPlace(closestPlace);
      setSearchText(closestPlace.name);
    } else {
      // Otherwise, just store the clicked location
      setClickedLocation({ lat, lng });
      setSearchText(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
      setSelectedPlace(null);
    }
  }, []);

  // Default center of the map (center of Cyprus)
  const defaultCenter = { lat: 35.1264, lng: 33.4299};
  
  // Render the component
  return (
    <Layout>
      <div style={{ padding: "20px", height: "100vh", background: "#f5f5f5" }}>
        <h1 style={{ marginBottom: "20px" }}>Explore Cyprus</h1>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "20px",
          height: "calc(100% - 60px)"
        }}>
          <div style={{
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            flex: 1
          }}>
            {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={selectedPlace ? { lat: selectedPlace.lat, lng: selectedPlace.lng } : defaultCenter}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={handleMapClick}
        >
          {/* Markers would go here */}
          {recommendationData.map(place => (
            <Marker
              key={place.id}
              position={{ lat: place.lat, lng: place.lng }}
              onClick={() => {
                setSelectedPlace(place);
                setSearchText(place.name);
              }}
            />
          ))}
          {clickedLocation && (
            <Marker
              position={clickedLocation}
            />
          )}
        </GoogleMap>
      )}
          </div>
          
          {selectedPlace && (
            <div style={{
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              gap: "20px"
            }}>
              <img 
                src={selectedPlace.image} 
                alt={selectedPlace.name}
                style={{
                  width: "200px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
              <div>
                <h2>{selectedPlace.name}</h2>
                <p>{selectedPlace.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ExplorePage;