import {
  bento1,
  bento2,
  bento3,
  bento4,
  bento5,
  bento6,
} from "../assets/images";

const Gallery = () => {
  return (
    <div className="max-container h-screen mx-auto flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-justdoit bg-cover">
      <section className="grid grid-cols-1 md:grid-cols-6 gap-5 flex-grow overflow-hidden xl:px-[5rem]">
        {/* First Image - Covers 3 boxes on top */}
        <div className="md:col-span-6 max-sm:ml-8 overflow-hidden rounded-xl shadow-xl">
          <img
            src={bento1}
            alt="Bento Image 1"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Second Image - Covers half of 3 */}
        <div className="md:col-span-3 max-sm:mr-8 overflow-hidden rounded-xl ">
          <img
            src={bento2}
            alt="Bento Image 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Third Image - Covers other half of 3 */}
        <div className="md:col-span-3 max-sm:ml-8 overflow-hidden rounded-xl">
          <img
            src={bento3}
            alt="Bento Image 3"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Fourth Image - Covers 1 box */}
        <div className="md:col-span-2 max-sm:mr-8 overflow-hidden rounded-xl">
          <img
            src={bento4}
            alt="Bento Image 4"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Fifth Image - Covers 1 box next to 4th */}
        <div className="md:col-span-2 max-sm:ml-8 overflow-hidden rounded-xl">
          <img
            src={bento5}
            alt="Bento Image 5"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Sixth Image - Covers 1 box next to 5th */}
        <div className="md:col-span-2 max-sm:mr-8 overflow-hidden rounded-xl">
          <img
            src={bento6}
            alt="Bento Image 6"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
