import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { nikeLebagh, nikeLebaghblur } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container m-auto pl-[4rem]"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-inter text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-black">
          <span className="font-black italic xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="font-inter font-light italic text-center text-coral-red inline-block mt-3">
            L E B A G H
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 hidden nikeContainer:flex bg-nikelogoBG bg-cover bg-center pt-[4rem]"
        style={{ backgroundPosition: "calc(50% - 20px) calc(100% - 20px)" }}
      >
        <img
          src={nikeLebagh}
          alt="shoe colletion"
          width={800}
          height={502}
          className="object-contain relative z-10"
        />
        <img
          src={nikeLebaghblur}
          alt="shoe colletion"
          width={900}
          height={502}
          className="object-contain absolute z-9"
        />
      </div>
    </section>
  );
};

export default Hero;
