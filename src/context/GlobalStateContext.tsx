import { createContext, useState, ReactNode } from 'react';
import { Drink } from '../type';

interface GlobalStateContextType {
  searchResults: Drink[];
  selectedCocktail: Drink | null;
  setSearchResults: (drinks: Drink[]) => void;
  setSelectedCocktail: (drink: Drink) => void;
}

// Create the context
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

// Create a provider 
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<Drink[]>([]);
  const [selectedCocktail, setSelectedCocktail] = useState<Drink | null>(null);

  return (
    <GlobalStateContext.Provider value={{ searchResults, selectedCocktail, setSearchResults, setSelectedCocktail }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;
