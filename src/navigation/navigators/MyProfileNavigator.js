import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Colors from '../../constants/colors';
import MyProfile from '../../screens/MyProfile';

const MyProfileStack = createNativeStackNavigator();

export default function MyProfileNavigator() {
  return (
    <MyProfileStack.Navigator>
      <MyProfileStack.Screen
        name="Me"
        component={MyProfile}
        options={{
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.lightPrimary,
        }}
      />
    </MyProfileStack.Navigator>
  );
}
