import React from 'react';

import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold
} from '@expo-google-fonts/archivo'

import { Routes } from './src/routes';
import theme from './src/styles/theme';
import { AuthProvider } from './src/hooks/useAuth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  );
}
