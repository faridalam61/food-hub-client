import React from "react";
import { FaStar } from "react-icons/fa";

function FeaturedRecipe(recipe) {
  const { id, recipe_name, image, chef_name, ratings } = recipe.recipe;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>by {chef_name}</p>
        <div className="bg-orange-500 w-20 rounded-sm p-1 px-2 text-white font-bold flex items-center gap-1 absolute right-3 top-3">
          <FaStar className="text-white inline" /> {ratings}
        </div>
      </div>
    </div>
  );
}

export default FeaturedRecipe;
