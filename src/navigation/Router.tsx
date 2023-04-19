import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from 'screens/Home';
import Favourites from 'screens/Favourites';

const {Navigator, Screen} = createBottomTabNavigator();

export default function MyComponent() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => {
            return <Icon name="heart" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
