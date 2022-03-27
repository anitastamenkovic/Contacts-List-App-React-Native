import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

import Colors from '../constants/colors';
import {getFavorites} from '../services/helpers';

export default function Favorites() {
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  const getFavoritesUsers = async () => {
    const favoriteUsersArr = await getFavorites();
    setFavoriteUsers(favoriteUsersArr);
  };

  useEffect(() => {
    getFavoritesUsers();
  });

  return (
    <View style={styles.screen}>
      {favoriteUsers.length > 0 ? (
        <FlatList
          numColumns={3}
          data={favoriteUsers}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                fadeDuration={1000}
                source={{uri: item?.avatarURL}}
              />
            </View>
          )}
          keyExtractor={item => item.email}
        />
      ) : null}
      {favoriteUsers.length === 0 ? (
        <Text style={styles.text}>There is no favorite users.</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 200,
    borderColor: Colors.lightPrimary,
    borderWidth: 2,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.darkGrey,
  },
});
