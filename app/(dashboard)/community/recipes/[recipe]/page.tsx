import { RecipeProvider } from "@/app/lib/mycontext";
import RecipeDetails from "@/app/ui/recipedetails";

export default function RecipeCardDetails() {

  return (
    <RecipeProvider>
      <RecipeDetails />
    </RecipeProvider>
  )
}