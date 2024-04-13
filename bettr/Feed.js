import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from './Header';
import Profile from './Profile';


const Feed = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Header navigation={navigation}/>
      <View style={styles.container}>
        <Text>Feed Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {

  }

});

export default Feed;
