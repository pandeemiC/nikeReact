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
    <section id="services" className="max-container max-sm:mt-12 py-16">
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {services.map((service) => (
          <ServicesCard
            imgUrl={service.imgUrl}
            label={service.label}
            key={service.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
