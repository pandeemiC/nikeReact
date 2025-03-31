import React from "react";
import { star } from "../assets/icons";

// ADD CAROUSEL LATER!

const PopularProductCard = ({ imgUrl, name, price, rating, theme }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div
        className={`border-2 ${theme.borderClass} bg-justdoit bg-contain rounded-xl shadow-xl hover:scale-105 transition-all`}
      >
        <img src={imgUrl} alt={name} width={280} height={280} />
      </div>
      <div className="mt-2 flex justify-start gap-2.5">
        <p className="font-inter font-light text-slate-gray">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
