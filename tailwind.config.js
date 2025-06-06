/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "font-palanquin",
    "text-coral-red",
    "font-black",
    "text-red-600",
    "text-sky-500",
    "bg-coral-red",
    "bg-red-600",
    "bg-sky-500",
    "border-coral-red",
    "border-red-600",
    "border-sky-500",
    "orangeLightBG",
    "blueLightBG",
    "redLightBG",
    "nikelogoBG",
    "justdoitRedBG",
    "justdoitBlueBG",
    "justdoitOrangeBG",
    "bg-orangeLightBG",
    "bg-blueLightBG",
    "bg-redLightBG",
    "bg-justdoitRedBG",
    "bg-justdoitBlueBG",
    "bg-justdoitOrangeBG",
    "nikeSuperImgBlue",
    "nikeSuperImgRed",
    "nikeSuperImgDef",
    "bg-nikelogoBG",
    "bg-nikelogoBGRED",
    "bg-nikelogoBGBLUE",
    "nikelogoBGRED",
    "nikelogoBGBLUE",
    "nikeContainer:nikelogoBG",
    "nikeContainer:nikelogoBGRED",
    "nikeContainer:nikelogoBGBLUE",
    "hover:text-coral-red",
    "hover:text-red-600",
    "hover:text-sky-500",
    "hover:text-white",
    'bg-[url("assets/images/nikelogoBG.png")]',
    'bg-[url("assets/images/nikelogoBGRED.png")]',
    'bg-[url("assets/images/nikelogoBGBLUE.png")]',
    "hover:!grayscale-0",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "5xl": ["75px", "80px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        background: "#010101",
        accent: "#ffffff",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
        newhero: "url('assets/images/NikeHeroEl.png')",
        newherotest: "url('assets/images/NikeHeroBG.svg')",
        justdoit: "url('assets/images/justdoit.png')",
        nikelogoBG: "url('assets/images/nikelogoBG.png')",
        nikelogoBGRED: "url('assets/images/nikelogoBGRED.png')",
        nikelogoBGBLUE: "url('assets/images/nikelogoBGBLUE.png')",
        bentoBG: "url('assets/images/bentoBG.png')",
        orangeLightBG: "url('assets/images/orangeLightBG.png')",
        redLightBG: "url('assets/images/redLightBG.png')",
        blueLightBG: "url('assets/images/blueLightBG.png')",
        justdoitOrangeBG: "url('assets/images/justdoitOrangeBG.png')",
        justdoitBlueBG: "url('assets/images/justdoitBlueBG.png')",
        justdoitRedBG: "url('assets/images/justdoitRedBG.png')",
        reviewBG: "url('assets/images/reviewBG.png')",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "75%": "75%",
        "85%": "85%",
        16: "4rem",
      },

      screens: {
        wide: "1440px",
        nikeContainer: "1280px",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
