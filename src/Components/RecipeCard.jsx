import React from "react";
import { FaStar } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

function RecipeCard({ data, showToast }) {
  const {
    id,
    recipe_name,
    ratings,
    ingredients,
    image,
    cooking_method,
    chef_name,
  } = data;

  const handleFavourite = showToast;
  return (
    <div>
      <div className="border rounded-md">
        <LazyLoad>
          <img src={image} alt="" className="rounded-md" />
        </LazyLoad>

        <div className="p-4">
          <h2 className="text-xl text-black">{recipe_name}</h2>
          <p>by {chef_name}</p>
          <p>Cooking method: {cooking_method}</p>
          <p className="text-black underline">Ingredients:</p>
          <div className="text-xs">
            {ingredients.map((p, idx) => (
              <p key={idx}>{idx + 1 + ". " + p}</p>
            ))}
          </div>
          <div className="flex items-center gap-2 text-bold">
            <FaStar className="text-orange-400" />
            {ratings}
          </div>
        </div>
        <button
          className="btn btn-primary w-full mt-3"
          onClick={() => handleFavourite}
        >
          Add to Favourite
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
