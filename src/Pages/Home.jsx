import React from "react";
import Hero from "../Components/Hero";
import ChefCard from "../Components/ChefCard";

function Home() {
  return (
    <div>
      <Hero />
      <h2 className="font-bold text-5xl text-center mt-10">Our Chefs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container mx-6 lg:mx-auto my-10">
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
      </div>
    </div>
  );
}

export default Home;
