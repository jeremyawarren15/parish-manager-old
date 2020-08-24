import { createContext } from 'react';

const UserContext = createContext({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {}
});

export default UserContext;
