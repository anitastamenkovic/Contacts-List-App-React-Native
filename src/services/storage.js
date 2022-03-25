import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async value => {
  if (value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('users', jsonValue);
    } catch (e) {
      console.log('storeData', e);
    }
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
    return null;
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('getData', e);
  }
};

export const editData = async value => {
  try {
    await AsyncStorage.mergeItem('users', JSON.stringify(value));
  } catch (e) {
    console.log('editData', e);
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('users');
  } catch (e) {
    console.log('removeData', e);
  }
};
