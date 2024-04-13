import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import NearbyScreen from './Nearby';
import LeaderBoardScreen from './LeaderBoardScreen';
import YouScreen from './YouScreen';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle: { backgroundColor: '#800020' }, // Color of the tab bar
          tabBarShowLabel: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Around You" component={NearbyScreen} />
        <Tab.Screen name="Leader Board" component={LeaderBoardScreen} />
        <Tab.Screen name="You" component={YouScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
