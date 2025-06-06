// src/App.js
import React, { useState, useEffect } from 'react';

// Import your layouts
import ModernLayout from './layouts/ModernLayout';
import MinimalistLayout from './layouts/MinimalistLayout';
// Import more layouts as you create them:
// import ArtisticLayout from './layouts/ArtisticLayout';

// Import all your centralized data
import * as siteData from './siteData'; // Assuming an index.js in siteData that exports all data

const layouts = [ModernLayout, MinimalistLayout /*, ArtisticLayout */];

const App = () => {
  const [SelectedLayout, setSelectedLayout] = useState(null);

  useEffect(() => {
    // Randomly select a layout
    const randomIndex = Math.floor(Math.random() * layouts.length);
    setSelectedLayout(() => layouts[randomIndex]); // Store the component constructor
  }, []);

  if (!SelectedLayout) {
    // Optional: Show a loading spinner or a very basic fallback
    return <div>Loading a fresh look...</div>;
  }

  // Render the randomly selected layout, passing all site data to it
  return <SelectedLayout siteData={siteData} />;
};

export default App;