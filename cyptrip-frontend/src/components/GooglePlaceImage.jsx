import { useEffect, useState } from "react";

const GooglePlaceImage = ({ placeName, lat, lng, apiKey, onImageFound, fallbackImage }) => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!placeName || !apiKey || !lat || !lng) {
      setLoading(false);
      return;
    }
    
    console.log(`Fetching image for "${placeName}" at coordinates: ${lat}, ${lng}`);
    
    // Check if the Google Maps API is loaded
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API not loaded");
      setError("Google Maps API not loaded");
      setLoading(false);
      return;
    }

    try {
      // Create a PlacesService instance
      const placesService = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

      // Search for the place
      placesService.textSearch(
        {
          query: placeName,
          location: new window.google.maps.LatLng(lat, lng),
          radius: 5000
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
            // Get details for the first result to access photos
            placesService.getDetails(
              {
                placeId: results[0].place_id,
                fields: ['photos', 'name']
              },
              (place, detailsStatus) => {
                if (detailsStatus === window.google.maps.places.PlacesServiceStatus.OK) {
                  if (place.photos && place.photos.length > 0) {
                    const photo = place.photos[0];
                    const photoUrl = photo.getUrl({maxWidth: 600, maxHeight: 400});
                    
                    setPhotoUrl(photoUrl);
                    if (onImageFound) onImageFound(photoUrl);
                  } else {
                    console.log(`No photos found for ${placeName}`);
                  }
                } else {
                  console.error(`Error getting place details: ${detailsStatus}`);
                  setError(`Error getting place details: ${detailsStatus}`);
                }
                setLoading(false);
              }
            );
          } else {
            console.error(`Error finding place: ${status}`);
            setError(`Error finding place: ${status}`);
            setLoading(false);
          }
        }
      );
    } catch (err) {
      console.error("Error in GooglePlaceImage:", err);
      setError(`Error: ${err.message}`);
      setLoading(false);
    }
  }, [placeName, lat, lng, apiKey, onImageFound]);

  if (loading) {
    return <div className="w-full h-40 bg-gray-200 animate-pulse rounded-xl"></div>;
  }

  if (error) {
    console.error(`Error fetching image for ${placeName}:`, error);
  }

  return photoUrl ? 
    <img src={photoUrl} alt={placeName} className="w-full h-40 object-cover rounded-xl" /> :
    <img src={fallbackImage} alt={placeName} className="w-full h-40 object-cover rounded-xl" />;
};

export default GooglePlaceImage;