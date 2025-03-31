import { reviews } from "../constants";

const CustomerReviews = ({ theme }) => {
  return (
    <section className="max-container">
      <h2 className="text-4xl text-center my-10 font-inter font-light italic">
        Check Out Testimonials
      </h2>
      <div
        className={`grid xl:grid-cols-4 md:grid-cols-2 gap-5 auto-rows-[300px] p-10 flex flex-1`}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`flex-1 bg-gradient-to-b from-black via-black to-white border-2 rounded-xl border-black ${
              index === 1 || index === 4 ? "xl:col-span-2" : ""
            } ${index === 3 ? "xl:col-span-2" : ""} ${
              index === 8 ? "xl:col-span-1 md:col-span-2" : ""
            }`}
          >
            <div
              className={`rounded-xl flex flex-row justify-start items-center p-4`}
            >
              <img
                src={review.imgUrl}
                alt="CustomerImg"
                width={75}
                height={75}
                className={`grayscale relative border-2 border-white rounded-full`}
              />

              <h3 className="ml-5 text-center text-2xl font-inter font-light uppercase italic text-white">
                {review.customerName}
              </h3>
            </div>
            <p className="m-5 font-palanquin text-black text-lg m-5 p-5 top-0 relative bg-white border-black rounded-xl shadow-xl border-2">
              {review.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
