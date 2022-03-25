import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyProfile from '../../screens/MyProfile';

const MyProfileStack = createNativeStackNavigator();

export default function MyProfileNavigator() {
  return (
    <MyProfileStack.Navigator>
      <MyProfileStack.Screen name="Me" component={MyProfile} />
    </MyProfileStack.Navigator>
  );
}
