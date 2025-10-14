/**
 * useFonts Hook
 *
 * Custom hook to load custom fonts for the EventEase application.
 * Loads BBH Sans Bogle and Rubik fonts before rendering the app.
 *
 * Usage:
 * const fontsLoaded = useFonts();
 * if (!fontsLoaded) return <LoadingScreen />;
 */

import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'BBHSansBogle-Regular': require('../../assets/fonts/BBH_Sans_Bogle/BBHSansBogle-Regular.ttf'),
          'Rubik-Regular': require('../../assets/fonts/Rubik/static/Rubik-Regular.ttf'),
          'Rubik-Medium': require('../../assets/fonts/Rubik/static/Rubik-Medium.ttf'),
          'Rubik-SemiBold': require('../../assets/fonts/Rubik/static/Rubik-SemiBold.ttf'),
          'Rubik-Bold': require('../../assets/fonts/Rubik/static/Rubik-Bold.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};
