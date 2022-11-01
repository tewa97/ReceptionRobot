import React from 'react';
import { View } from 'react-native';
import { Maps } from './src/components/Maps';
import { SearchBar } from './src/components/SearchBar';

export default function App() {
  return (
    <View>
      <Maps />
      <View style={{ alignItems: 'center', height: '100%', width: '100%' }}>
        <SearchBar/>
      </View>
    </View>
  );
}
