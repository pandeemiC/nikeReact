import { useState } from "react";
import {
  CustomerReviews,
  Footer,
  Hero,
  Gallery,
  PopularProducts,
  Subscriber,
  Services,
  SuperQuality,
} from "./sections";

import { nikeSuperImgDef } from "./assets/images";

import Nav from "./components/Nav";

const App = () => {
  const [theme, setTheme] = useState({
    bgClass: "nikelogoBG",
    textColor: "coral-red",
    buttonColor: "coral-red",
    borderClass: "border-coral-red",
    fontWeight: "font-light",
    imgClass: nikeSuperImgDef,
    gradientClass: "orangeLightBG",
    justdoitBG: "justdoitOrangeBG",
  });

  return (
    <>
      <main className="relative">
        <Nav />
      </main>
      <section>
        <Hero theme={theme} setTheme={setTheme} />
      </section>

      <section>
        <Gallery theme={theme} />
      </section>
      <section className="padding">
        <PopularProducts theme={theme} />
      </section>
      <section className="padding-without">
        <SuperQuality theme={theme} />
      </section>
      <section className="padding-without">
        <Services theme={theme} />
      </section>
      <section className="padding-without bg-black border-t-3 rounded-xl">
        <CustomerReviews theme={theme} />
      </section>
      <section className="padding-without padding-y py-16 w-full">
        <Subscriber theme={theme} />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
};

export default App;
