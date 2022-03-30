import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Colors from '../../constants/colors';
import Contacts from '../../screens/Contacts';
import Profile from '../../screens/Profile';

const ContactsStack = createNativeStackNavigator();

export default function ContactsNavigator() {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen name="Contacts" component={Contacts} />
      <ContactsStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.lightPrimary,
        }}
      />
    </ContactsStack.Navigator>
  );
}
