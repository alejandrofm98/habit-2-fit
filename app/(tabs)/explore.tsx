import React from 'react';
import {View, Button, Alert, Text, StyleSheet} from 'react-native';

export default function Index() {
  return(
      <View style={styles.container}>
        <Text style={styles.text}>Explore Screen</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});