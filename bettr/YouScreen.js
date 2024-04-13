import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const YouScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <Header navigation={navigation}/>
        <View style={styles.container}>
            <Text>You Screen</Text>
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

export default YouScreen;
