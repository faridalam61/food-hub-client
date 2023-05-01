import React from "react";
import Hero from "../Components/Hero";
import ChefCard from "../Components/ChefCard";
import { useLoaderData } from "react-router-dom";

function Home() {
  const data = useLoaderData();
  const chefs = data.chefs;
  return (
    <div>
      <Hero />
      <h2 className="font-bold text-5xl text-center mt-10">Our Chefs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container mx-6 lg:mx-auto my-10">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
}

export default Home;
