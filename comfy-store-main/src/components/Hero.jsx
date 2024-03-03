import { Link } from "react-router-dom";

import hero1 from "../assets/hero.png";
import hero2 from "../assets/hero1.jpeg";
import hero3 from "../assets/hero2.jpeg";
import hero4 from "../assets/hero3.jpeg";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h6 className="max-w-2xl text-2xl font-medium tracking-tight sm:text-6xl">
          <span className="text-6xl font-bold">W</span>elcome to our
        </h6>

        <p className="mt-8 max-w-xl text-lg leading-8">
          <span className="text-2xl font-bold">
            Pneumonia & COVID-19 X-ray Analysis
          </span>{" "}
          Empowering Accurate Diagnoses: Our Al- Powered X-ray Image
          Classification Web App ensures precise identification of Pneumonia and
          COVID-19 cases, aiding timely treatment decisions. Trust our advanced
          technology for reliable results.
        </p>
        <div className="mt-10 ">
          <Link to="orders" className="btn btn-primary mr-9">
            Upload Image
          </Link>
          <Link to="orders" className="btn btn-primary ml-9 ">
            Show Results
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
