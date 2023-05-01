import React from "react";
import { useLoaderData } from "react-router-dom";
import bgImg from "../../public/images/chef-bg.jpg";

function Recipies() {
  const chef = useLoaderData();

  const { id, photo, name, experience, number_of_recipes, likes, bio } = chef;
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between container gap-10 mx-auto">
        <div className="w-full mx-6 lg:mx-0 lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-bold text-5xl lg:text-6xl text-white">{name}</h2>
          <p className="text-xl text-white mt-6">{bio}</p>
          <div className="flex gap-6 w-5/6 mt-10">
            <div className="text-center border border-white rounded-md p-4 w-1/3">
              <p className="text-white text-xl">Experience</p>
              <h2 className="text-white font-semibold text-2xl">
                {experience}+ Years
              </h2>
            </div>
            <div className="text-center border border-white rounded-md p-4 w-1/3">
              <p className="text-white text-xl">Total Recipies</p>
              <h2 className="text-white font-semibold text-2xl">
                {number_of_recipes}+
              </h2>
            </div>
            <div className="text-center border border-white rounded-md p-4 w-1/3">
              <p className="text-white text-xl">Likes</p>
              <h2 className="text-white font-semibold text-2xl">{likes}+</h2>
            </div>
          </div>
        </div>
        <div>
          <img src={photo} />
        </div>
      </div>
    </div>
  );
}

export default Recipies;
