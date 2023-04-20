import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from 'screens/Home';
import Favourites from 'screens/Favourites';
import Routes from './Routes';

const {Navigator, Screen} = createBottomTabNavigator();

export default function MyComponent() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarLabel: Routes.HOME,
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={Routes.FAVOURITES}
        component={Favourites}
        options={{
          tabBarLabel: Routes.FAVOURITES,
          tabBarIcon: ({color, size}) => {
            return <Icon name="heart" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
