import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {/* REMEMBER TO CUSTOM CLASS FROM THE THEMES! YOU CAN IMPORT AFAIK */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-inter font-semibold mt-10 lg:max-w-lg">
          Something Something
          <span className="text-slate-gray">Something</span>
          Something
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque,
          dolore nesciunt, est odio hic iure quae voluptates quaerat ipsam harum
          non vel saepe modi ex molestiae illo dicta voluptatibus.
        </p>
        <p className="mt-4 mb-5 mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque,
          dolore nesciunt
        </p>
        <div className="mt-11">
          <Button
            label="Explore Now"
            iconUrl={arrowRight}
            className="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
