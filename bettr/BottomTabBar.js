import React from 'react';
import Feed from './Feed';
import Nearby from './Nearby';
import LeaderBoard from './LeaderBoardScreen';
import You from './YouScreen';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BottomTabBar = ({ navigation }) => {
  const tabs = [
    { name: 'Feed', screen: Feed, icon: '🏠' },
    { name: 'Around You', screen: Nearby, icon: '📍'},
    { name: 'Leader Board', screen: LeaderBoard , icon: '🏆'},
    { name: 'You', screen: You , icon: '👤'}
  ];

  return (
    <View style= {styles.container}>
        <TouchableOpacity key={index} onPress={() => navigation.navigate(Feed)}>
          <View>
            <Text >{tab.icon}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity key={index} onPress={() => navigation.navigate(Feed)}>
          <View>
            <Text >{tab.icon}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity key={index} onPress={() => navigation.navigate(Feed)}>
          <View>
            <Text >{tab.icon}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#800020', // Set your desired color
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profileText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});


export default BottomTabBar;
