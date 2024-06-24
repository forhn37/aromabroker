// context/RecipeContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Content {
  title: string;
  content: string;
  imageurl: string;
}

interface RecipeContextType {
  content: Content;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
}
const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<Content>({ title: '', content: '', imageurl: '' });

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
