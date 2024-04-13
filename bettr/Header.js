import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Profile from './Profile';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
        <View style={styles.profileIcon}>
          {/* Placeholder for the profile icon */}
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.title}>BEttr</Text>
      </TouchableOpacity>

      <View style={styles.streak}>
        <Text style={styles.streakText}>🔥</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#800020', // Set your desired color
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Example color
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Header;
