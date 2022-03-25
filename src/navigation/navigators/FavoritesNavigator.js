import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Favorites from '../../screens/Favorites';

const FavoritesStack = createNativeStackNavigator();

export default function FavoritesNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Favorites" component={Favorites} />
    </FavoritesStack.Navigator>
  );
}
