import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Map } from './src/components/Maps';

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Map/>
    </View>
  );
}

