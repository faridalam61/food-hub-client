import React from "react";
import chef from "../../public/images/chef.webp";

function ChefCard() {
  return (
    <div className="border rounded-md p-4">
      <img src={chef} alt="" className="mx-auto" />
      <h2>Farid Alam</h2>
      <p>Experience: 3 years</p>
      <p>Number of Recipies: 4</p>
      <p>Likes: 120</p>
      <div className="text-center">
        <button className="mx-auto bg-orange-400 text-white rounded-md cursor-pointer px-6 py-2 mt-4">
          View Recipies
        </button>
      </div>
    </div>
  );
}

export default ChefCard;
