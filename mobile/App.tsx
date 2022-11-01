import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Map } from './src/components/Maps';

export default function App() {
  return (
    <View style={styles.overallViewContainer}>
      <Map/>
      <View style={styles.allNonMapThings}>
        <View style={styles.inputContainer}>
          <TextInput placeholder=" Where to?" style={styles.input} />
        </View>

        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Call it out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

