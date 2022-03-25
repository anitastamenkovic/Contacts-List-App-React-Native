import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MyProfile() {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          fadeDuration={1000}
          source={require('../assets/me.jpg')}
        />
      </View>
      <Text style={styles.name}>Anne Monroe</Text>
      <Text style={styles.phone}>
        <Ionicons name="call" size={16} color={Colors.lightPrimary} />{' '}
        011-345-567-98
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 200,
    borderColor: Colors.lightPrimary,
    borderWidth: 2,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.lightPrimary,
  },
  phone: {
    color: Colors.lightPrimary,
    marginTop: 5,
  },
});
