import {storeData, getData} from './storage';

export const storeUsers = async data => {
  try {
    if (data.length > 0) {
      await storeData({users: data});
    }
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async () => {
  try {
    const storedUsers = await getData();
    return storedUsers;
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async id => {
  const storedUsers = await getUsers();
  const selectedUser = storedUsers.users.find(user => {
    return user.id === id;
  });
  return selectedUser;
};

export const getFavorites = async () => {
  try {
    const storedUsers = await getData();
    const favoriteUsersArr = storedUsers?.users?.filter(user =>
      user?.isFavorite ? user : null,
    );
    return favoriteUsersArr;
  } catch (e) {
    console.log(e);
  }
};

export const editFavorites = async (id, isFavorite) => {
  try {
    const storedUsers = await getData();
    const editedUsers = storedUsers?.users?.map(item =>
      item.id === id ? {...item, isFavorite: isFavorite} : item,
    );
    await storeData({users: editedUsers});
  } catch (e) {
    console.log(e);
  }
};
