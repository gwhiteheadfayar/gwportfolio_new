// src/App.js
import React, { useState, useEffect } from 'react';

// Import your layouts
import ModernLayout from './layouts/ModernLayout';
import MinimalistLayout from './layouts/MinimalistLayout';
import ShadcnLayout from './layouts/ShadcnLayout';
import ShopfrontLayout from './layouts/ShopfrontLayout';
import LiquidGlassLayout from './layouts/LiquidGlassLayout';

// Import all your centralized data
import * as siteData from './siteData';
import ThemeSwitcher from './components/ThemeSwitcher'; // We will create this next

// 1. Create a map of theme names to components
const themeMap = {
  MTA: ModernLayout,
  minimalist: MinimalistLayout,
  modern: ShadcnLayout,
  shopfront: ShopfrontLayout,
  tahoe: LiquidGlassLayout
};

// Get the list of theme names for the switcher
const themeNames = Object.keys(themeMap);

const App = () => {
  const [SelectedLayout, setSelectedLayout] = useState(null);

  useEffect(() => {
    // 2. Read the theme from localStorage
    const savedTheme = localStorage.getItem('selectedTheme');

    // 3. Determine which theme to load
    // Use the saved theme if it's valid, otherwise default to 'modern'
    const currentThemeKey = themeMap[savedTheme] ? savedTheme : 'modern';

    // Set the component from our map
    setSelectedLayout(() => themeMap[currentThemeKey]);
  }, []);

  // While waiting for the theme to be determined, show a loader
  if (!SelectedLayout) {
    return <div>Loading theme...</div>;
  }

  // 4. Render the layout AND the theme switcher
  return (
    <>
      <SelectedLayout siteData={siteData} />
      <ThemeSwitcher themes={themeNames} />
    </>
  );
};

export default App;