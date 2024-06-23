'use client';
import { useRecipeContext } from '@/app/lib/mycontext';
import { useEffect } from 'react';

export default function RecipeDetails() {
  const { content } = useRecipeContext();

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <div>
      <h1>Recipe Details</h1>
      <p>{content}</p>
    </div>
  );
}
