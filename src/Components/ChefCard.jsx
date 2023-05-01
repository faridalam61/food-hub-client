import React from "react";
import { Link } from "react-router-dom";

function ChefCard(chef) {
  const { id, photo, name, experience, number_of_recipes, likes } = chef.chef;
  return (
    <div className="border rounded-md p-5">
      <img src={photo} alt="" className="mx-auto h-60" />
      <h2 className="text-xl text-black mt-3">{name}</h2>
      <p>Experience: {experience} years</p>
      <p>Number of Recipies: {number_of_recipes}</p>
      <p>Likes: {likes}</p>
      <div className="text-center">
        <Link to={`/recipies/${id}`}>
          <button className="mx-auto bg-orange-400 text-white rounded-md cursor-pointer px-6 py-2 mt-4 w-full">
            View Recipies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChefCard;
