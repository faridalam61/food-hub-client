import React from "react";
import bgImage from "../../public/images/hero.jpg";

function Hero() {
  return (
    <div
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between container mx-auto">
        <div className="w-full mx-6 lg:mx-0 lg:w-1/2 pt-32 lg:pt-56 pb-32 lg:pb-56">
          <h2 className="font-bold text-3xl lg:text-5xl text-white">
            It is even better than an expensive cookery book
          </h2>
          <p className="text-xl text-white mt-6">
            Enjoy your favorite restaurant’s dishes
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
