import React from 'react';
import {ThemeContextProvider} from './source/context/ThemeContext';
import HomeScreen from './source/screens/homeScreen';

const App = () => {
  return (
    <ThemeContextProvider>
      <HomeScreen />
    </ThemeContextProvider>
  );
};

export default App;
