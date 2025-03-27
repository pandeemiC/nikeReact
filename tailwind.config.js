/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-coral-red",
    "text-red-500",
    "text-sky-500",
    "bg-coral-red",
    "bg-red-500",
    "bg-sky-500",
    "border-coral-red",
    "border-red-500",
    "border-sky-500",
    "nikelogoBG",
    "nikelogoBGRED",
    "nikelogoBGBLUE",
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
  plugins: [],
};
