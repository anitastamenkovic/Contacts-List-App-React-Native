import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async value => {
  if (value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('users', jsonValue);
    } catch (e) {
      console.log('storeData', e);
    }
  } else {
    return;
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    if (jsonValue) {
      return JSON.parse(jsonValue);
    } else {
      return;
    }
  } catch (e) {
    console.log('getData', e);
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('users');
  } catch (e) {
    console.log('removeData', e);
  }
};
