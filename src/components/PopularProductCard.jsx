import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgUrl, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className=" border-2 border-slate-gray bg-justdoit bg-contain rounded-xl shadow-xl hover:scale-105 transition-all">
        <img src={imgUrl} alt={name} width={280} height={280} />
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-inter font-light text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-2 leading-normal text-2xl font-palanquin uppercase border-b-2 pb-1">
        {name}
      </h3>
      <p className="font-montserrat text-coral-red font-semibold mt-1">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
