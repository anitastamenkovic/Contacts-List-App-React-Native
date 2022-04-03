import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {getUser, editFavorites} from '../services/helpers';
import Colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({route, navigation}) {
  const userId = route?.params.userId;

  const [user, setUser] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const getSelectedUser = useCallback(async id => {
    const selectedUser = await getUser(id);
    setUser(selectedUser);
    setIsFavorite(selectedUser.isFavorite);
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSelectedUser(userId);
    }
    return () => {
      isMounted = false;
    };
  }, [userId, getSelectedUser]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      editFavorites(userId, isFavorite);
    }
    return () => {
      isMounted = false;
    };
  }, [userId, isFavorite]);

  useLayoutEffect(() => {
    const userName = user?.name;
    navigation.setOptions({title: userName});
  }, [user, navigation]);

  const addToFavoriteHandler = () => {
    setIsFavorite(prevState => !prevState);
  };

  const removeFromFavoriteHandler = () => {
    setIsFavorite(prevState => !prevState);
  };

  return (
    <View>
      <View style={styles.topContainer}>
        {!isFavorite ? (
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={addToFavoriteHandler}>
            <Ionicons name="ios-heart" size={30} color={Colors.lightPrimary} />
          </TouchableOpacity>
        ) : null}
        {isFavorite ? (
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={removeFromFavoriteHandler}>
            <Ionicons name="ios-heart" size={30} color={Colors.red} />
          </TouchableOpacity>
        ) : null}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            fadeDuration={1000}
            source={{uri: user?.avatarURL}}
          />
        </View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.phone}>
          <Ionicons name="call" size={16} color={Colors.lightPrimary} />{' '}
          {user?.phone}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.container}>
          <Ionicons
            style={styles.icon}
            name="mail"
            size={24}
            color={Colors.darkGrey}
          />
          <View>
            <Text style={styles.bold}>Email</Text>
            <Text style={styles.blue}>{user?.email}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Ionicons
            style={styles.icon}
            name="call"
            size={24}
            color={Colors.darkGrey}
          />
          <View>
            <Text style={styles.bold}>Work</Text>
            <Text style={styles.blue}>{user?.phone}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Ionicons
            style={styles.icon}
            name="md-phone-portrait-sharp"
            size={24}
            color={Colors.darkGrey}
          />
          <View>
            <Text style={styles.bold}>Personal</Text>
            <Text style={styles.blue}>{user?.mobile}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContainer: {
    height: '60%',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    height: '40%',
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
  container: {
    padding: 10,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: Colors.darkGrey,
  },
  blue: {
    color: Colors.primary,
  },
  icon: {
    marginRight: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
