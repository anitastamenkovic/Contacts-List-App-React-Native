import {useQuery} from 'react-query';
import {api} from './api';

const parseUsersFromAPI = data => {
  const users = data?.results?.map(user => ({
    avatarURL: user?.picture?.medium,
    name: `${user.name?.title} ${user?.name?.first} ${user?.name?.last}`,
    email: user?.email,
    id: user.email,
    phone: user.phone,
    mobile: user.cell,
    isFavorite: false,
  }));

  return users;
};

export async function fetchUsers() {
  const {data} = await api.get('/?results=10');
  const usersParsed = parseUsersFromAPI(data);

  return usersParsed;
}

export const useUsers = () => useQuery('users', fetchUsers);
