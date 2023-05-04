import React from "react";
import { FaStar } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { ToastContainer, toast } from "react-toastify";

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
  const handleFavourite = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
              <p>{idx + 1 + ". " + p}</p>
            ))}
          </div>
          <div className="flex items-center gap-2 text-bold">
            <FaStar className="text-orange-400" />
            {ratings}
          </div>
        </div>
        <button
          className="mx-auto bg-orange-400 text-white rounded-md cursor-pointer px-6 py-2 mt-0 w-full"
          onClick={handleFavourite}
        >
          Add to Favourite
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default RecipeCard;
