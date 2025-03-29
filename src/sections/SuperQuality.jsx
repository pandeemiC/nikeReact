import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2>Something Something</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque,
          dolore nesciunt, est odio hic iure quae voluptates quaerat ipsam harum
          non vel saepe modi ex molestiae illo dicta voluptatibus.
        </p>
        <Button label="Explore" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default SuperQuality;
