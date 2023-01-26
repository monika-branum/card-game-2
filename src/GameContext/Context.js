import { useContext, createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  return (
    <AppContext.Provider value={{ selectedCard, setSelectedCard }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
