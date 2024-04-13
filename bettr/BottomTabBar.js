import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BottomTabBar = ({ navigation }) => {
  const tabs = [
    { name: 'Feed', screen: 'Feed' },
    { name: 'Around You', screen: 'Nearby' },
    { name: 'Leader Board', screen: 'Leader Board' },
    { name: 'You', screen: 'You' }
  ];

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => handlePress(tab.screen)}>
          <Text>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly'
  },
  button: {
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default BottomTabBar;
