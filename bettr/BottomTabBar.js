import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FeedIcon from './homeicon.png';
import NearbyIcon from './pinicon.png';
import LeaderboardIcon from './trophyicon.png';
import YouIcon from './profileicon.png';

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
    width: 30, 
    height: 30, 
  },
});

export default BottomTabBar;
