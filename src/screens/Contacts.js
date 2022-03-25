import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {useUsers} from '../services/use-users';
import {removeData, storeData, getData} from '../services/storage';

import Contact from '../components/Contact';

export default function Contacts({navigation}) {
  const [users, setUsers] = useState({});
  const {data} = useUsers(10);
  console.log('data', data);

  useEffect(() => {
    async function fetchData() {
      try {
        await removeData();
        if (data) {
          await storeData({users: data});
        }
        const storedUsers = await getData();
        if (storedUsers) {
          setUsers(storedUsers.users);
        }
      } catch (e) {
        console.log('contacts', e);
      }
    }
    fetchData();
  }, [data]);

  const goToProfileHandler = user => {
    navigation.navigate('Profile', {user: user});
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
