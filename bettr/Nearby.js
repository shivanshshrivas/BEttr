import React from 'react';
import Header from './Header';
import { View, Text, StyleSheet } from 'react-native';

const NearbyScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Header navigation={navigation}/>
      <View style={styles.container}>
        <Text>Around You Screen</Text>
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
});
export default NearbyScreen;