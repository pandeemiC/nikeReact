import { reviews } from "../constants";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 fill-current ${
            index < rating ? "text-orange-500" : "text-gray-600"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const CustomerReviews = ({ theme }) => {
  const itemLayouts = [
    {
      xl: "xl:col-span-2 xl:row-span-2",
      md: "md:col-span-2 md:row-span-2",
      sm: "sm:col-span-2 sm:row-span-1",
    },
    {
      xl: "xl:col-span-1 xl:row-span-1",
      md: "md:col-span-1 md:row-span-1",
      sm: "sm:col-span-1 sm:row-span-1",
    },
    {
      xl: "xl:col-span-1 xl:row-span-1",
      md: "md:col-span-1 md:row-span-1",
      sm: "sm:col-span-1 sm:row-span-1",
    },
    {
      xl: "xl:col-span-1 xl:row-span-1",
      md: "md:col-span-1 md:row-span-1",
      sm: "sm:col-span-1 sm:row-span-1",
    },
    {
      xl: "xl:col-span-1 xl:row-span-1",
      md: "md:col-span-1 md:row-span-1",
      sm: "sm:col-span-1 sm:row-span-1",
    },
    {
      xl: "xl:col-span-2 xl:row-span-1",
      md: "md:col-span-2 md:row-span-1",
      sm: "sm:col-span-2 sm:row-span-1",
    },
    {
      xl: "xl:col-span-1 xl:row-span-1",
      md: "md:col-span-1 md:row-span-1",
      sm: "sm:col-span-2 sm:row-span-1",
    },
  ];

  return (
    <section className="max-container py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <h2 className="text-4xl text-center text-white uppercase my-10 font-inter font-black italic">
        Nike Experience
      </h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-5 auto-rows-[minmax(100px,_auto)] p-4 md:p-6`}
      >
        {reviews.map((review, index) => {
          const layout =
            itemLayouts[index] || itemLayouts[itemLayouts.length - 1];
          const isLargeItem =
            layout.xl?.includes("col-span-2") ||
            layout.xl?.includes("row-span-2");

          return (
            <div
              key={review.customerName + index}
              className={`
                bg-neutral-800 
                rounded-xl 
                p-5 sm:p-6 
                flex flex-col justify-between 
                shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 
                transition-all duration-300 ease-in-out
                text-white 
                border border-neutral-700
                ${layout.sm}
                ${layout.md}
                ${layout.xl}
              `}
            >
              <div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={review.imgUrl}
                    alt={review.customerName}
                    width={isLargeItem ? 80 : 60}
                    height={isLargeItem ? 80 : 60}
                    className="rounded-full object-cover border-2 border-orange-500 mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-inter font-semibold uppercase text-white">
                      {review.customerName}
                    </h3>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p
                  className={`font-palanquin text-neutral-300 text-sm sm:text-base leading-relaxed ${
                    isLargeItem
                      ? "line-clamp-5 sm:line-clamp-6"
                      : "line-clamp-4 sm:line-clamp-5"
                  }`}
                >
                  "{review.feedback}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
