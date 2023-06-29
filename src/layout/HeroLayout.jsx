import InputField from "@/components/InputField";
import React from "react";

const HeroLayout = () => {
  return (
    <header className="bg-[url('../assets/gradient-1.png')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center space-y-10">
        <h1 className="text-5xl font-bold">
          Stunning royalty-free images & royalty-free stock
        </h1>
        <p>
          Over 4 million+ high quality stock images, videos and music shared by
          our talented community.
        </p>

        <InputField />
      </div>
    </header>
  );
};

export default HeroLayout;
