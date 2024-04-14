import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import NearbyScreen from './Nearby';
import LeaderBoardScreen from './LeaderBoardScreen';
import YouScreen from './YouScreen';
import Profile from './Profile';
import CameraScreen from './CameraScreen';
import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <BottomTabBar {...props} />}
        screenOptions={{
          headerShown: false // This will hide the header for all screens
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Around You" component={NearbyScreen} />
        <Tab.Screen name="Leader Board" component={LeaderBoardScreen} /> 
        <Tab.Screen name="You" component={YouScreen} />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarButton: () => null, tabBarVisible: false}}/>
        <Tab.Screen name="Camera" component={CameraScreen} options={{tabBarButton: () => null, tabBarVisible: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;