import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgUrl, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="p-10 border-2 border-slate-gray bg-justdoit bg-contain rounded-xl shadow-xl hover:scale-105 transition-all">
        <img src={imgUrl} alt={name} width={280} height={280} />
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
      </div>
    </div>
  );
};

export default PopularProductCard;
