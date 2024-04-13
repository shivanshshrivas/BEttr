import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Leaderboard from './leaderboard';
import You from './you';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const navigateToScreen = (screenName) => {
    setCurrentPage(screenName);
  };

  return (
    <View style={styles.container}>
      {currentPage === 'Home' && (
        <View>
          <Text>Welcome to Go do Good!</Text>
          {/* Your home screen content goes here */}
        </View>
      )}
      {currentPage === 'Leaderboard' && (
        <Leaderboard />
      )}
      {currentPage === 'You' && (
        <You />
      )}
      <View style={styles.bottomButtonsContainer}>
        <Button title="Leaderboard" onPress={() => navigateToScreen('Leaderboard')} />
        <Button title="You" onPress={() => navigateToScreen('You')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
});
