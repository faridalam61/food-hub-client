import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import ChefCard from "../Components/ChefCard";
import { useLoaderData } from "react-router-dom";
import FeaturedRecipe from "../Components/FeaturedRecipe";
import TopChefCard from "../Components/TopChefCard";

function Home() {
  const data = useLoaderData();
  const chefs = data.chefs;
  const top = [...chefs];
  const topChefs = top.sort((a, b) => b.likes - a.likes).slice(0, 4);

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://food-hub-server-faridalam61.vercel.app/recipies")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.recipes
          .sort((a, b) => b.ratings - a.ratings)
          .slice(0, 4);
        setRecipes(topRated);
      });
  }, []);

  return (
    <div>
      <Hero />
      <h2 className="font-bold text-5xl text-center mt-20">Our Chefs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container px-6 lg:mx-auto my-10">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
      <div className="container px-6 mx-auto my-12">
        <h2 className="font-bold text-4xl lg:text-5xl text-center my-10">
          Top Rated Recipes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, idx) => (
            <FeaturedRecipe key={idx} recipe={recipe} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-5xl text-center mt-20">
          Most Liked Chefs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container px-6 lg:mx-auto my-10">
          {topChefs.map((chef) => (
            <TopChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
