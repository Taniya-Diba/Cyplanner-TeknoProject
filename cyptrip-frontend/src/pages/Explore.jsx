import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import GooglePlaceImage from "../components/GooglePlaceImage"; // Import the new component
import IMG_Salamis from "../assets/images/IMG/Salamis Ruins, Northern Cyprus.jpg";
import IMG_Kyrenia from "../assets/images/IMG/Kyrenia Castle.jpg";
import IMG_Varosha from "../assets/images/IMG/Varosha and Toyota.jpg";
import IMG_Bellapais from "../assets/images/IMG/Bellapais Abbey.jpg";

const mapContainerStyle = {
width: "100%",
height: "600px",
borderRadius: "24px",
};

// Google Maps API key
const GOOGLE_API_KEY = "AIzaSyAS7hPlKlbKdAPg7waHCR6KfySgD1HPN-Y";

const recommendationData = [
{
  id: 1,
  name: "Salamis Ruins",
  lat: 35.0381,
  lng: 33.9880,
  image: IMG_Salamis,
  description: "Ancient ruins of Salamis, a spectacular archaeological site with Roman and Byzantine remains, including a theater, gymnasium, and bath complex.",
  rating: 4.7,
  tags: ["Historical", "Ancient", "Archaeological"]
},
{
  id: 2,
  name: "Kyrenia Castle",
  lat: 35.3403,
  lng: 33.3195,
  image: IMG_Kyrenia,
  description: "Kyrenia Castle is a 16th-century castle built by the Venetians over a previous Crusader fortification. Within its walls lies a twelfth-century chapel showing reused late Roman capitals, and the Shipwreck Museum.",
  rating: 4.5,
  tags: ["Castle", "Museum", "Historical"]
},
{
  id: 3,
  name: "Varosha",
  lat: 35.1186,
  lng: 33.9472,
  image: IMG_Varosha,
  description: "Once a modern tourist area, Varosha became an abandoned district after the Turkish invasion of Cyprus in 1974. Parts of it have recently been reopened to visitors.",
  rating: 4.2,
  tags: ["Historical", "Urban", "Beach"]
},
{
  id: 4,
  name: "Bellapais Abbey",
  lat: 35.2881,
  lng: 33.3187,
  image: IMG_Bellapais,
  description: "A stunning Gothic abbey ruins located in the northern part of Cyprus. Built in the 13th century, it offers beautiful views of the surrounding landscape.",
  rating: 4.8,
  tags: ["Abbey", "Historical", "Architecture"]
},
];

const defaultImage = "https://via.placeholder.com/200x150";

const ExplorePage = () => {
const { id } = useParams();
const [selectedPlace, setSelectedPlace] = useState(null);
const [searchText, setSearchText] = useState("");
const [clickedLocation, setClickedLocation] = useState(null);
const [savedLocations, setSavedLocations] = useState([]);
const [newTag, setNewTag] = useState("");
const [availableTags, setAvailableTags] = useState([
  "Historical", "Ancient", "Beach", "Nature", "Urban", 
  "Architecture", "Museum", "Castle", "Food", "Adventure"
]);
// New state for toggling Google Images
const [useGoogleImages, setUseGoogleImages] = useState(true);

useEffect(() => {
  if (id) {
    const place = recommendationData.find(place => place.id === parseInt(id));
    if (place) {
      setSelectedPlace(place);
      setSearchText(place.name);
    }
  } else {
    setSelectedPlace(null);
  }
}, [id]);

// Update Google Maps loader to include Places library
const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: GOOGLE_API_KEY,
  libraries: ['places']
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
    setClickedLocation(null);
  } else {
    // Create a custom location object
    const customLocation = {
      id: `custom-${Date.now()}`,
      name: `Custom Location`,
      lat,
      lng,
      description: `A location at coordinates Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}. Click save to add this to your collection.`,
      isCustom: true,
      image: defaultImage,
      rating: 0,
      tags: []
    };
    setClickedLocation({ lat, lng });
    setSearchText(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
    setSelectedPlace(customLocation);
  }
}, []);

const saveLocation = () => {
  if (selectedPlace && !savedLocations.some(loc => loc.id === selectedPlace.id)) {
    setSavedLocations([...savedLocations, selectedPlace]);
  }
};

const addTag = (locationId, tag) => {
  if (!tag.trim()) return;
  
  // Add to available tags if it's new
  if (!availableTags.includes(tag)) {
    setAvailableTags([...availableTags, tag]);
  }
  
  // Add tag to location
  if (selectedPlace && selectedPlace.id === locationId) {
    if (!selectedPlace.tags.includes(tag)) {
      const updatedPlace = {...selectedPlace, tags: [...selectedPlace.tags, tag]};
      setSelectedPlace(updatedPlace);
      
      // Update in saved locations if it exists there
      if (savedLocations.some(loc => loc.id === locationId)) {
        setSavedLocations(savedLocations.map(loc => 
          loc.id === locationId ? updatedPlace : loc
        ));
      }
    }
  }
  setNewTag("");
};

const removeTag = (locationId, tagToRemove) => {
  if (selectedPlace && selectedPlace.id === locationId) {
    const updatedPlace = {
      ...selectedPlace, 
      tags: selectedPlace.tags.filter(tag => tag !== tagToRemove)
    };
    setSelectedPlace(updatedPlace);
    
    // Update in saved locations if it exists there
    if (savedLocations.some(loc => loc.id === locationId)) {
      setSavedLocations(savedLocations.map(loc => 
        loc.id === locationId ? updatedPlace : loc
      ));
    }
  }
};

const updateRating = (locationId, rating) => {
  if (selectedPlace && selectedPlace.id === locationId) {
    const updatedPlace = {...selectedPlace, rating};
    setSelectedPlace(updatedPlace);
    
    // Update in saved locations if it exists there
    if (savedLocations.some(loc => loc.id === locationId)) {
      setSavedLocations(savedLocations.map(loc => 
        loc.id === locationId ? updatedPlace : loc
      ));
    }
  }
};

const updateImage = (locationId, imageUrl) => {
  if (selectedPlace && selectedPlace.id === locationId) {
    const updatedPlace = {...selectedPlace, image: imageUrl};
    setSelectedPlace(updatedPlace);
    
    // Update in saved locations if it exists there
    if (savedLocations.some(loc => loc.id === locationId)) {
      setSavedLocations(savedLocations.map(loc => 
        loc.id === locationId ? updatedPlace : loc
      ));
    }
  }
};

const removeSavedLocation = (id) => {
  setSavedLocations(savedLocations.filter(loc => loc.id !== id));
};

// Handler for when a Google Place image is found
const handleImageFound = (imageUrl) => {
  if (selectedPlace) {
    updateImage(selectedPlace.id, imageUrl);
  }
};

// Default center of the map (center of Cyprus)
const defaultCenter = { lat: 35.1264, lng: 33.4299};

return (
  <Layout>
    <div className="p-5 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">Explore Cyprus</h1>
      <div className="flex flex-col gap-5">
        {/* Map Container */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={selectedPlace ? { lat: selectedPlace.lat, lng: selectedPlace.lng } : defaultCenter}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={handleMapClick}
            >
              {recommendationData.map(place => (
                <Marker
                  key={place.id}
                  position={{ lat: place.lat, lng: place.lng }}
                  onClick={() => {
                    setSelectedPlace(place);
                    setSearchText(place.name);
                    setClickedLocation(null);
                  }}
                />
              ))}
              {clickedLocation && (
                <Marker position={clickedLocation} />
              )}
              {savedLocations.filter(loc => loc.isCustom).map(loc => (
                <Marker
                  key={loc.id}
                  position={{ lat: loc.lat, lng: loc.lng }}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  }}
                  onClick={() => {
                    setSelectedPlace(loc);
                    setSearchText(loc.name);
                  }}
                />
              ))}
            </GoogleMap>
          )}
        </div>
        
        {/* Google Images Toggle */}
        <div className="flex items-center mb-2">
          <label className="inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={useGoogleImages} 
              onChange={() => setUseGoogleImages(!useGoogleImages)} 
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900">Use Google Place Images</span>
          </label>
        </div>
        
        {/* Selected Place Card */}
        {selectedPlace && (
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-48">
                {/* Image section - conditionally show Google Place Image */}
                {useGoogleImages && selectedPlace.name !== "Custom Location" ? (
                  <GooglePlaceImage 
                    placeName={selectedPlace.name}
                    lat={selectedPlace.lat}
                    lng={selectedPlace.lng}
                    apiKey={GOOGLE_API_KEY}
                    onImageFound={handleImageFound}
                    fallbackImage={selectedPlace.image || defaultImage}
                  />
                ) : (
                  <img 
                    src={selectedPlace.image || defaultImage} 
                    alt={selectedPlace.name}
                    className="w-full h-40 object-cover rounded-xl mb-2"
                  />
                )}
                
                {selectedPlace.isCustom && (
                  <input 
                    type="text" 
                    placeholder="Image URL..."
                    className="w-full p-2 text-sm border rounded"
                    onChange={(e) => updateImage(selectedPlace.id, e.target.value)}
                    value={selectedPlace.image !== defaultImage ? selectedPlace.image : ""}
                  />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold">{selectedPlace.name}</h2>
                    {/* Star Rating */}
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button 
                          key={star}
                          onClick={() => updateRating(selectedPlace.id, star)}
                          className="text-xl mr-1 focus:outline-none"
                        >
                          {star <= (selectedPlace.rating || 0) 
                            ? <span className="text-yellow-500">★</span> 
                            : <span className="text-gray-300">☆</span>
                          }
                        </button>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {selectedPlace.rating ? selectedPlace.rating.toFixed(1) : "Not rated"}
                      </span>
                    </div>
                  </div>
                  
                  {!savedLocations.some(loc => loc.id === selectedPlace.id) ? (
                    <button 
                      onClick={saveLocation}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Save Location
                    </button>
                  ) : (
                    <button 
                      onClick={() => removeSavedLocation(selectedPlace.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <p className="mt-2">{selectedPlace.description}</p>
                
                {/* Tags Section */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedPlace.tags && selectedPlace.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                      >
                        {tag}
                        <button 
                          onClick={() => removeTag(selectedPlace.id, tag)}
                          className="ml-1 text-blue-500 hover:text-blue-700 focus:outline-none"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex">
                    <input 
                      type="text" 
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      className="p-2 border rounded flex-1 text-sm"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addTag(selectedPlace.id, newTag);
                        }
                      }}
                    />
                    <button 
                      onClick={() => addTag(selectedPlace.id, newTag)}
                      className="ml-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      Add
                    </button>
                  </div>
                  
                  {availableTags.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-1">Suggested tags:</p>
                      <div className="flex flex-wrap gap-1">
                        {availableTags
                          .filter(tag => !selectedPlace.tags?.includes(tag))
                          .slice(0, 5)
                          .map(tag => (
                            <button 
                              key={tag}
                              onClick={() => addTag(selectedPlace.id, tag)}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-gray-200"
                            >
                              {tag}
                            </button>
                          ))
                        }
                      </div>
                    </div>
                  )}
                </div>
                
                {selectedPlace.isCustom && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Coordinates: {selectedPlace.lat.toFixed(4)}, {selectedPlace.lng.toFixed(4)}</p>
                    <input 
                      type="text" 
                      placeholder="Give this location a name..."
                      className="mt-2 p-2 border rounded w-full"
                      onChange={(e) => {
                        const updatedPlace = {...selectedPlace, name: e.target.value};
                        setSelectedPlace(updatedPlace);
                        if (savedLocations.some(loc => loc.id === selectedPlace.id)) {
                          setSavedLocations(savedLocations.map(loc => 
                            loc.id === selectedPlace.id ? updatedPlace : loc
                          ));
                        }
                      }}
                      value={selectedPlace.name !== "Custom Location" ? selectedPlace.name : ""}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Saved Locations Section */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Saved Locations</h2>
          {savedLocations.length === 0 ? (
            <p className="text-gray-500">No locations saved yet. Click on the map and save locations to see them here.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedLocations.map(location => (
                <div 
                  key={location.id} 
                  className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer"
                  onClick={() => {
                    setSelectedPlace(location);
                    setSearchText(location.name);
                    if (map) {
                      map.panTo({ lat: location.lat, lng: location.lng });
                    }
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{location.name}</h3>
                      {/* Star rating display */}
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <span key={star} className="text-sm">
                            {star <= (location.rating || 0) 
                              ? <span className="text-yellow-500">★</span> 
                              : <span className="text-gray-300">☆</span>
                            }
                          </span>
                        ))}
                        <span className="text-xs text-gray-600 ml-1">
                          {location.rating ? location.rating.toFixed(1) : ""}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSavedLocation(location.id);
                        if (selectedPlace && selectedPlace.id === location.id) {
                          setSelectedPlace(null);
                        }
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <img 
                      src={location.image || defaultImage} 
                      alt={location.name}
                      className="w-16 h-16 object-cover rounded-lg mr-3"
                    />
                    <p className="text-sm text-gray-600 line-clamp-3">{location.description}</p>
                  </div>
                  
                  {/* Tags */}
                  {location.tags && location.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {location.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-xs text-gray-500 mt-2">Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </Layout>
);
};

export default ExplorePage;