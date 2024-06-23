'use client'
import { useRecipeContext } from "../lib/mycontext";

export default function RecipeDetails() {
  const { content } = useRecipeContext();
  console.log(content)
  return (
      <div>
        <h1>Recipe Details</h1>
        <p>{content}</p>
      </div>
  )


}