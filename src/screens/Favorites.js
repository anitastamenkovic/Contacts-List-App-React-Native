import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

import Colors from '../constants/colors';
import {getData} from '../services/storage';

export default function Favorites() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const storedUsers = await getData();
        storedUsers?.users?.filter(user => {
          if (user?.isFavorite === true) {
            setUsers({...users, user});
          } else {
            console.log('nema');
          }
        });
      } catch (exception) {
        setUsers([]);
      }
    }
    fetchData();
  }, [users]);
  return (
    <View style={styles.screen}>
      {users.length > 0 ? (
        <FlatList
          numColumns={3}
          data={users}
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
      {users.length < 1 ? (
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
