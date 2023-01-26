import { useContext, createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState('deck');
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);

  return (
    <AppContext.Provider
      value={{
        selectedCard,
        setSelectedCard,
        to,
        setTo,
        from,
        setFrom,
        playerThreeHand,
        setPlayerThreeHand,
        playerTwoHand,
        setPlayerTwoHand,
      }}
    >
      {children}
    </AppContext.Provider>
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
