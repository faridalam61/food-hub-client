import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bgImg from "../../public/images/chef-bg.jpg";
import RecipeCard from "../Components/RecipeCard";
import LazyLoad from "react-lazy-load";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Recipies() {
  const chef = useLoaderData();
  const [recipe, setRecipe] = useState([]);

  const { id, photo, name, experience, number_of_recipes, likes, bio } = chef;
  const notify = () => toast("Added to favourite list");

  const showToast = (e) => {
    notify();
    e.target.disabled = true;
  };

  useEffect(() => {
    fetch("https://food-hub-server-faridalam61.vercel.app/recipies")
      .then((res) => res.json())
      .then((data) => {
        const f_data = data.recipes.filter((d) => name == d.chef_name);
        setRecipe(f_data);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between container gap-10 mx-auto">
          <div className="w-full px-6 lg:px-0 pb-10 lg:pb-0 mx-auto lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-bold text-5xl lg:text-6xl text-white">
              {name}
            </h2>
            <p className="text-xl text-white mt-6">{bio}</p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:w-5/6 mt-10">
              <div className="text-center border border-white rounded-md p-4 w-full lg:w-1/3">
                <p className="text-white text-xl">Experience</p>
                <h2 className="text-white font-semibold text-2xl">
                  {experience}+ Years
                </h2>
              </div>
              <div className="text-center border border-white rounded-md p-4 w-full lg:w-1/3">
                <p className="text-white text-xl">Total Recipies</p>
                <h2 className="text-white font-semibold text-2xl">
                  {number_of_recipes}+
                </h2>
              </div>
              <div className="text-center border border-white rounded-md p-4 w-full lg:w-1/3">
                <p className="text-white text-xl">Likes</p>
                <h2 className="text-white font-semibold text-2xl">{likes}+</h2>
              </div>
            </div>
          </div>
          <div>
            <LazyLoad>
              <img src={photo} />
            </LazyLoad>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-10 font-bold text-4xl">
        Recipes by {name}
      </h2>
      <div className="container px-6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:w-3/4 my-10">
        {recipe.map((item) => (
          <RecipeCard key={item.id} data={item} showToast={showToast} />
        ))}
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

export default Recipies;
