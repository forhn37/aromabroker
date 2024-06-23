// context/RecipeContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RecipeContextType {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<string>('');

  return (
    <RecipeContext.Provider value={{ content, setContent }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipeContext must be used within a RecipeProvider');
  }
  return context;
};
