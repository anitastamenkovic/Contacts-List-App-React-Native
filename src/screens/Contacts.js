import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';

import {getUsers} from '../services/helpers';

import Contact from '../components/Contact';

export default function Contacts({navigation}) {
  const [users, setUsers] = useState([]);

  const getAllUsers = useCallback(async () => {
    const storedUsers = await getUsers();
    setUsers(storedUsers?.users);
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getAllUsers();
    }
    return () => {
      isMounted = false;
    };
  });

  const goToProfileHandler = user => {
    navigation.navigate('Profile', {userId: user.id});
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Contact user={item} onPress={goToProfileHandler.bind(this, item)} />
        )}
        keyExtractor={item => item.email}
      />
    </View>
  );
}
