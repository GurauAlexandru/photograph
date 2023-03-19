import { createContext, useState } from 'react';

export const PicturesContext = createContext({
  currentPictures: null,
  setCurrentPictures: () => {},
});

export const PicturesProvider = ({ children }) => {
  const [currentPictures, setCurrentPictures] = useState(null);
  const value = { currentPictures, setCurrentPictures };

  return (
    <PicturesContext.Provider value={value}>
      {children}
    </PicturesContext.Provider>
  );
};
