import React from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = ({ theme }) => {
  // ADD CAROUSEL LATER!
  return (
    <div className="">
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-inter uppercase italic font-light">
            <span
              className={`${theme.fontNonIta} ${theme.fontWeight} ${theme.fontType} text-${theme.textColor}`}
            >
              Popular
            </span>{" "}
            Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value.
          </p>
        </div>

        <div
          className={`mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${theme.borderClass} border-t-2 pt-8`}
        >
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} theme={theme} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularProducts;
