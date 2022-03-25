import {useQuery} from 'react-query';
import {api} from './api';

export const parseUsersFromAPI = data => {
  const users = data?.results.map(user => ({
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

async function fetchUsers({limit = 10}) {
  const {data} = await api.get(`/?results=${limit}`);

  const usersParsed = parseUsersFromAPI(data);

  return usersParsed;
}

export function useUsers({limit}) {
  const users = useQuery(['users', limit], () => fetchUsers({limit}), {
    keepPreviousData: true,
  });
  return users;
}
