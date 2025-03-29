import {
  bento1,
  bento2,
  bento3,
  bento4,
  bento5,
  bento6,
} from "../assets/images";

const PopularProducts = () => {
  return (
    <div className="max-container">
      <h2 className="text-center text-4xl font-light mb-20">
        Step Into What Feels Good
      </h2>
      <section className="grid grid-cols-3 gap-4 p-30 w-[75%] h-[10%] m-auto">
        {/* First Image - Covers 3 boxes on top */}
        <div className="col-span-3">
          <img
            src={bento1}
            alt="Bento Image 1"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Second Image - Covers half of 3 */}
        <div className="col-span-2">
          <img
            src={bento2}
            alt="Bento Image 2"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Third Image - Covers other half of 3 */}
        <div className="col-span-1">
          <img
            src={bento3}
            alt="Bento Image 3"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Fourth Image - Covers 1 box */}
        <div className="col-span-1">
          <img
            src={bento4}
            alt="Bento Image 4"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Fifth Image - Covers 1 box next to 4th */}
        <div className="col-span-1">
          <img
            src={bento5}
            alt="Bento Image 5"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Sixth Image - Covers 1 box next to 5th */}
        <div className="col-span-1">
          <img
            src={bento6}
            alt="Bento Image 6"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default PopularProducts;
