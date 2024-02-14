import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

export function SearchBar() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder=" Where to go ..." style={styles.input} />
    </View>
  );
}
