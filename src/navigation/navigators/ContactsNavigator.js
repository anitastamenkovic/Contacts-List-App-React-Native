import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
        options={({route}) => ({title: route.params.user.name})}
      />
    </ContactsStack.Navigator>
  );
}
