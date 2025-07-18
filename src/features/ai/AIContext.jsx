import { createContext, useState, useContext } from 'react';

const AIContext = createContext();

export function AIProvider({ children }) {
  const [isIAOpen, setIsIAOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentAI, setCurrentAI] = useState('innova');

  const toggleIA = () => setIsIAOpen(prev => !prev);
  const toggleMinimize = () => setIsMinimized(prev => !prev);

  return (
    <AIContext.Provider value={{
      isIAOpen,
      toggleIA,
      isMinimized,
      toggleMinimize,
      currentAI,
      setCurrentAI
    }}>
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI debe usarse dentro de AIProvider');
  }
  return context;
}