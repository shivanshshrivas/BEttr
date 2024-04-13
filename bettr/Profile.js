import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feed from './Feed';

const Profile = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(Feed)}>
          <Text style={styles.title}>Your Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#800020', // Set your desired color
      paddingVertical: 17,
    },
    title: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });
  
  export default Profile;
