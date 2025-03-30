import React from "react";

const ServicesCard = ({ imgUrl, label }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative w-[275px] h-[400px] shadow-xl transition-transform transform hover:scale-105">
        <img
          src={imgUrl}
          alt="Category"
          className="object-cover hover:cursor-pointer w-full h-full rounded-xl transition-all grayscale brightness-50 duration-300 hover:grayscale-0"
        />
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl uppercase text-white hover:grayscale-0 font-palanquin font-light pointer-events-none rounded-xl">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default ServicesCard;
