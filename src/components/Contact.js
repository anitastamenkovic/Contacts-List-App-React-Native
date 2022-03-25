import * as React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

export default function Contact({onPress, user}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            fadeDuration={1000}
            source={{uri: user?.avatarURL}}
          />
        </View>
        <View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.phone}>{user?.phone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 200,
    marginVertical: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    color: Colors.darkGrey,
    fontWeight: 'bold',
  },
  phone: {
    color: Colors.primary,
  },
});
