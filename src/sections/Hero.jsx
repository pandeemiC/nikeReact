import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import {
  nikeLebagh,
  nikeLebaghblur,
  nikeSB,
  nikeChrisPaul,
} from "../assets/images";

const Hero = () => {
  const [shoeName, setShoeName] = useState("L E B A G H");
  const [bigShoeImg, setBigShoeImg] = useState(nikeLebagh);
  const [theme, setTheme] = useState({
    bgClass: "nikelogoBG",
    textColor: "coral-red",
    buttonColor: "coral-red",
    borderClass: "border-coral-red",
    fontWeight: "font-light",
  });

  const handleThumbnailClick = (shoe) => {
    setBigShoeImg(shoe.bigShoe);
    setShoeName(shoe.shoeName);
    switch (shoe.shoeName) {
      case "OG SATIN":
        setTheme({
          bgClass: "nikelogoBGRED",
          textColor: "red-500",
          buttonColor: "red-500",
          borderClass: "border-red-500",
          fontWeight: "font-semibold",
        });
        break;
      case "CHRIS PAUL":
        setTheme({
          bgClass: "nikelogoBGBLUE",
          textColor: "sky-500",
          buttonColor: "sky-500",
          borderClass: "border-sky-500",
          fontWeight: "font-extrabold",
        });
        break;
      default:
        setTheme({
          bgClass: "nikelogoBG",
          textColor: "coral-red",
          buttonColor: "coral-red",
          borderClass: "border-coral-red",
          fontWeight: "font-light",
        });
    }
  };

  const changeShoeName = (name) => {
    setShoeName(name);
  };

  return (
    <div className="max-container">
      <section
        id="home"
        className={`w-full flex xl:flex-row flex-col justify-center min-h-screen min-w-screen gap-10 max-container m-auto pl-[6rem] bg-none bg-no-repeat nikeContainer:bg-${theme.bgClass} bg-85% bg-[right_-8rem_bottom_-4rem]`}
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
          <p className={`text-xl font-inter text-${theme.textColor}`}>
            Our Summer collections
          </p>

          <h1 className="mt-5 font-inter text-5xl max-sm:text-[72px] max-sm:leading-[82px] font-black max-nikeContainer:text-8xl">
            <span className="font-black italic xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span
              className={`font-inter ${theme.fontWeight} italic text-center text-${theme.textColor} inline-block mt-3`}
            >
              {shoeName}
            </span>
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-11 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button
            label="Shop now"
            iconUrl={arrowRight}
            customClass={`bg-${theme.buttonColor} border-${theme.buttonColor} hover:text-${theme.buttonColor}`}
          />

          <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value
                    .split("+")
                    .reduce(
                      (prev, current, index) =>
                        index === 0
                          ? [current]
                          : [
                              ...prev,
                              <span className="text-slate-gray">+</span>,
                              current,
                            ],
                      []
                    )}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative flex-1 flex justify-center items-center xl:min-h-screen max-container hidden nikeContainer:flex max-xl:py-40 pt-[4rem]"
          style={{ backgroundPosition: "calc(70% - 10px) calc(80% - -40px)" }}
        >
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={900}
            height={700}
            className="relative z-10 overflow-hidden scale-125"
          />
          <img
            src={nikeLebaghblur}
            alt="shoe collection"
            width={800}
            height={700}
            className="absolute z-9 overflow-hidden"
          />

          <div className="z-10">
            {shoes.map((shoe) => (
              <div key={shoe} className="my-5">
                <ShoeCard
                  imgUrl={shoe}
                  changeToBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                  changeShoeName={changeShoeName}
                  theme={theme}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
