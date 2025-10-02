import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="min-h-80 space-y-4 p-4 mx-auto max-w-[300px] mt-40 border border-gray-400 rounded-lg">
      <div>
        <h1 className="font-bold text-lg text-center">Sabbir </h1>
        <p className="text-center">
          I am an Intern. I am trying my best to learn react and nextJS
        </p>
      </div>
      <div className="relative">
        <Image
          className="absolute min-h-50 min-w-10 w-full h-full"
          objectFit="cover"
          src="/sabbir.jpg"
          fill
          alt="Loading image"
        />
      </div>
    </div>
  );
};

export default Card;
