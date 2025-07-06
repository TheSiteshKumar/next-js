'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
     name: 'Sitesh Kumar',
    email: 'hello@siteshkumar.com',
    isLoggedIn: false
  });

  const login = (userData) => {
    setUser({
      ...userData,
      isLoggedIn: true
    });
  };

  const logout = () => {
    setUser({
      name: '',
      email: '',
      isLoggedIn: false
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };