import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FeedIcon from './homeicon.png'; // Import your feed icon image
import NearbyIcon from './pinicon.png'; // Import your nearby icon image
import LeaderboardIcon from './trophyicon.png'; // Import your leaderboard icon image
import YouIcon from './profileicon.png'; // Import your "You" icon image

const BottomTabBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Image source={FeedIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Around You')}>
        <Image source={NearbyIcon} style={styles.icon} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Leader Board')}>
        <Image source={LeaderboardIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('You')}>
        <Image source={YouIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#643F43',
    shadowOpacity: 0.7,
    shadowRadius: 12,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
    
  },
  icon: {
    width: 30, // Adjust the width of the icon as needed
    height: 30, // Adjust the height of the icon as needed
  },
});

export default BottomTabBar;
