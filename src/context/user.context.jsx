import { createContext, useState } from 'react';

export const UserContext = createContext({
  isActive: false,
  setIsActive: () => {},
});

export const UserProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const value = {
    isActive,
    setIsActive,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
