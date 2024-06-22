import { RecipeTable } from "@/app/types/types";
import RecipeCard from "@/app/ui/community/recipecard";


import GetTable from "@/app/lib/supabase/gettable";

//정적페이지 및 글귀
export default async function Recipes() {
  
  const Recipetable = await GetTable<RecipeTable>("recipetable");


  return (
    <div className="flex flex-wrap justify-center">
      {Recipetable.map(recipe => (
        <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} created_at={recipe.created_at} content={recipe.content} imageurl={recipe.imageurl} description={recipe.description} coffeePublicName ={recipe.coffeePublicName}/>
      ))}
    </div>
  );
}