import {
  mensService,
  kidsService,
  womensService,
  jordansService,
} from "../assets/images";
import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";

const Services = ({ theme }) => {
  return (
    <section
      id="services"
      className={`max-container max-sm:mt-12 py-16 bg-${theme.justdoitBG} bg-cover`}
    >
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service) => (
          <div
            key={service.label}
            className="w-full sm:w-[calc(50%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
          >
            <ServicesCard imgUrl={service.imgUrl} label={service.label} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
