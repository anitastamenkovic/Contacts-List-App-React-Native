import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ContactsNavigator from './navigators/ContactsNavigator';
import FavoritesNavigator from './navigators/FavoritesNavigator';
import MyProfileNavigator from './navigators/MyProfileNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'ContactsNavigator') {
              iconName = 'ios-list-outline';
            } else if (route.name === 'FavoritesNavigator') {
              iconName = 'ios-heart';
            } else {
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.grey,
        })}>
        <Tab.Screen name="ContactsNavigator" component={ContactsNavigator} />
        <Tab.Screen name="FavoritesNavigator" component={FavoritesNavigator} />
        <Tab.Screen name="MyProfileNavigator" component={MyProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
