import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image} from 'react-native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
        <View style={styles.profileIcon}>
          <Image source={require('./jahnvi.png')} style={styles.profileIcon}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.title}>BEttr</Text>
      </TouchableOpacity>

      <View style={styles.streak}>
        <Text style={styles.streakText}>12🔥</Text>
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
    backgroundColor: '#643F43', // Set your desired color
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
  },
  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Example color
  },
  title: {
    color: '#FFD5C2',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: "Times New Roman",
    letterSpacing: 4, // Adjust the value as needed
  },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    color: '#FFD5C2',
    fontSize: 20,
    fontStyle: 'bold',
    fontFamily: "Times New Roman",
  },
});

export default Header;