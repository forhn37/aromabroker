import { RecipeTable } from "@/app/types/types";
import RecipeCard from "@/app/ui/community/recipecard";


import GetTable from "@/app/lib/supabase/gettable";
import { RecipeProvider } from "@/app/lib/mycontext";

//정적페이지 및 글귀
export default async function Recipes() {

  const Recipetable = await GetTable<RecipeTable>("recipetable");


  return (
    <>
      <h1 className="text-2xl mb-4 text-center sm:mb-10 sm:text-3xl  mt-3">Recipe</h1>
      <div className="flex flex-wrap justify-start items-center">
        {Recipetable.map(recipe => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            created_at={recipe.created_at}
            content={recipe.content}
            imageurl={recipe.imageurl}
            description={recipe.description} coffeePublicName={recipe.coffeePublicName} />
        ))}
      </div>
    </>
  );
}