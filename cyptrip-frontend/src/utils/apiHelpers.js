/**
 * API Helper utilities
 * 
 * This module provides utilities for working with various APIs
 */

import { API_KEYS } from '../data/SharedData';

/**
 * Cache for API responses to avoid redundant calls
 * @type {Object}
 */
const apiCache = {
  gemini: new Map(),
  places: new Map()
};

/**
 * TTL for cache items in milliseconds
 * @type {Object}
 */
const CACHE_TTL = {
  gemini: 1000 * 60 * 5, // 5 minutes
  places: 1000 * 60 * 60 * 24 // 24 hours
};

/**
 * Call the Gemini API with caching
 * 
 * @param {Object} options - Options for the API call
 * @param {string} options.prompt - The prompt to send to Gemini
 * @param {number} [options.temperature=0.7] - Temperature parameter for generation
 * @param {number} [options.maxTokens=800] - Maximum tokens to generate
 * @param {boolean} [options.useCache=true] - Whether to use cache
 * @returns {Promise<Object>} Response from Gemini API
 */
export const callGeminiAPI = async ({ 
  prompt, 
  temperature = 0.7, 
  maxTokens = 800,
  useCache = true 
}) => {
  // Create cache key from parameters
  const cacheKey = JSON.stringify({ prompt, temperature, maxTokens });
  
  // Check cache first if enabled
  if (useCache && apiCache.gemini.has(cacheKey)) {
    const cached = apiCache.gemini.get(cacheKey);
    if (Date.now() - cached.timestamp < CACHE_TTL.gemini) {
      console.log('Using cached Gemini response');
      return cached.data;
    }
    // Cache expired, remove it
    apiCache.gemini.delete(cacheKey);
  }
  
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEYS.GEMINI,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature,
          maxOutputTokens: maxTokens,
        }
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Cache the response
    if (useCache) {
      apiCache.gemini.set(cacheKey, {
        data,
        timestamp: Date.now()
      });
      
      // Cleanup old cache items if cache gets too large
      if (apiCache.gemini.size > 50) {
        const oldestEntries = [...apiCache.gemini.entries()]
          .sort((a, b) => a[1].timestamp - b[1].timestamp)
          .slice(0, 10);
        
        oldestEntries.forEach(([key]) => apiCache.gemini.delete(key));
      }
    }
    
    return data;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};

/**
 * Process AI response by adding links and formatting
 * 
 * @param {string} text - Raw text from AI response
 * @param {Array} locations - Array of location objects to link
 * @param {Array} events - Array of event objects to link
 * @returns {string} Processed text with links
 */
export const processAIResponse = (text, locations, events) => {
  if (!text) return '';
  let processedText = text;
  
  // Add links to locations
  locations.forEach(location => {
    const locationRegex = new RegExp(`\\b${escapeRegExp(location.name)}\\b`, 'gi');
    processedText = processedText.replace(locationRegex, `[${location.name}](/explore/${location.id})`);
  });
  
  // Add links to events
  events.forEach(event => {
    const eventRegex = new RegExp(`\\b${escapeRegExp(event.name)}\\b`, 'gi');
    processedText = processedText.replace(
      eventRegex, 
      `[${event.name}](# "Event: ${event.date} at ${event.location}")`
    );
  });
  
  return processedText;
};

/**
 * Helper function to escape special characters in regex
 * 
 * @param {string} string - String to escape
 * @returns {string} Escaped string for regex
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Fetch image from Google Places API
 * 
 * @param {Object} options - Options for the API call
 * @param {string} options.placeName - Name of the place
 * @param {number} options.lat - Latitude
 * @param {number} options.lng - Longitude
 * @param {string} [options.fallbackUrl] - Fallback image URL
 * @returns {Promise<string>} URL of the image
 */
export const fetchPlaceImage = async ({ placeName, lat, lng, fallbackUrl }) => {
  const cacheKey = `${placeName}_${lat}_${lng}`;
  
  // Check cache first
  if (apiCache.places.has(cacheKey)) {
    const cached = apiCache.places.get(cacheKey);
    if (Date.now() - cached.timestamp < CACHE_TTL.places) {
      console.log('Using cached Places image URL');
      return cached.url;
    }
    // Cache expired, remove it
    apiCache.places.delete(cacheKey);
  }
  
  try {
    // First, find the place using the Places API with nearby search
    const searchResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&keyword=${encodeURIComponent(placeName)}&key=${API_KEYS.GOOGLE_MAPS}`
    );

    if (!searchResponse.ok) {
      throw new Error("Failed to fetch place data");
    }

    const searchData = await searchResponse.json();
    
    // Check if we found any places and if they have photos
    if (searchData.results.length === 0 || !searchData.results[0].photos) {
      return fallbackUrl || '';
    }

    // Get the photo reference from the first result
    const photoReference = searchData.results[0].photos[0].photo_reference;

    // Use the photo reference to get the actual image
    const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${API_KEYS.GOOGLE_MAPS}`;
    
    // Cache the response
    apiCache.places.set(cacheKey, {
      url: imageUrl,
      timestamp: Date.now()
    });
    
    return imageUrl;
  } catch (error) {
    console.error('Error fetching Google Place image:', error);
    return fallbackUrl || '';
  }
};

export default {
  callGeminiAPI,
  processAIResponse,
  fetchPlaceImage
};
