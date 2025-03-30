import Button from "../components/Button";
import { nikeSuperImgBlue } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SuperQuality = ({ theme }) => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container pt-0"
    >
      {/* REMEMBER TO CUSTOM CLASS FROM THE THEMES! YOU CAN IMPORT AFAIK */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-inter font-semibold mt-10 lg:max-w-lg">
          Step Into Superior
          <span
            className={`text-${theme.textColor} ${theme.fontNonIta} ${theme.fontWeight}`}
          >
            {" "}
            Style{" "}
          </span>
          and
          <span
            className={`text-${theme.textColor} ${theme.fontNonIta} ${theme.fontWeight}`}
          >
            {" "}
            Quality{" "}
          </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to eleveate your experience, providing you with unmatched
          quality innovation, and a touch of elegance.
        </p>
        <p className="mt-4 mb-5 mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button
            label="Explore Now"
            iconUrl={arrowRight}
            customClass={`bg-${theme.buttonColor} border-${theme.buttonColor} hover:text-${theme.textColor} text-white`}
          />
        </div>
      </div>

      {/*  IMPLEMENT CAROUSEL ON THIS DIV WHERE EACH IMG IS BACK TO BACK! */}

      <div className="flex-1 flex justify-center items-center">
        <img
          src={theme.imgClass}
          width={420}
          height={420}
          className="rounded-xl shadow-xl"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
