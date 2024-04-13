import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const LeaderBoardScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Header navigation={navigation}/>
      <View style={styles.container}>
        <Text>LeaderBoard Screen</Text>
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

export default LeaderBoardScreen;
