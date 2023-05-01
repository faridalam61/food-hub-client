import React from "react";
import recipeImg from "../../public/images/recipe.jpg";

function RecipeCard(data) {
  const {
    id,
    recipe_name,
    ratings,
    ingredients,
    image,
    cooking_method,
    chef_name,
  } = data.data;
  console.log(ingredients);
  return (
    <div className="border rounded-md">
      <img src={recipeImg} alt="" className="rounded-md" />

      <div className="p-4">
        <h2 className="text-xl text-black">{recipe_name}</h2>
        <p>by {chef_name}</p>
        <p>Cooking method: {cooking_method}</p>
        <p className="text-black underline">Ingredients:</p>
        <div className="text-sm">
          {ingredients.map((p, idx) => (
            <p>{idx + 1 + ". " + p}</p>
          ))}
        </div>
        <p>{ratings}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
