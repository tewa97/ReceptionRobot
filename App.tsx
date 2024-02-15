import React, { useEffect } from 'react';
import {  Pressable, StyleSheet, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather} from '@expo/vector-icons' 
import { Maps } from './src/components/Maps';
import { SearchBar } from './src/components/SearchBar';
import { styles } from "./styles"

import Voice from '@react-native-voice/voice';

export default function App() {

  function onSpeachResults(){
    
  }
  useEffect(()=>{
  Voice.onSpeechResults = onSpeachResults() 
}, [])

  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder='pesquisar...'/>
        <Pressable style={styles.button}>
          <Feather name="mic" color="#FFF" size={24}/>
        </Pressable>
      </View>
    <View>
      <Maps />
      <View style={{ alignItems: 'center', height: '100%', width: '100%' }}>
        <SearchBar/>
      </View>
    </View>
    </View>
  );
}


