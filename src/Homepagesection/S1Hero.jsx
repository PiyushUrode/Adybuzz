import { useEffect, memo } from "react";

import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../MainComponent/Seo";

const S1Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  return (
    <>
      <SEO
        title="Adybuzz | Digital Marketing & Website Development Agency "
        description="Boost your business with Adybuzz's digital marketing & custom web development services. SEO, social media, responsive sites & more."
        url="https://adybuzz.com"
        image="https://adybuzz.com/homepage-image.jpg"
      />
      <div className="md:min-h-screen pt-20 md:pt-0  relative  w-full text-black flex flex-col justify-center items-center px-2 sm:px-10 ">
      <div className="absolute top-0 left-0 w-full h-full z--10  header-background2   opacity-70"></div>
        <div id="home" className="w-full max-w-7xl lg:w-[75%]    relative flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-10 md:gap-20  ">
          {/* Left Content */}
          <div
            data-aos="fade-left"
            className="w-full   flex flex-col justify-center align-middle text-center gap-6 md:gap-8"
          >
            <h1
              data-aos="fade-up"
              className="   font-bold bg-textcolor bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase leading-tight"
            >
              Unlock Your Online Potential
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-lg md:text-xl font-regular leading-relaxed text-black"
            >
              Empowering businesses with innovative digital marketing strategies that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-center gap-3 md:gap-6 text-lg font-semibold">
              <span>Increase Brand Visibility</span>
              <span className="hidden sm:inline">||</span>
              <span>Generate High-Quality Leads</span>
              <span className="hidden sm:inline">||</span>
              <span>Boost Conversions</span>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-6 py-3 hover:bg-blue-500  border-2 border-blue-600 hover:border-white   text-black font-bold rounded-lg shadow-lg  transition-all"
              >
                Get a Free Consultation Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(S1Hero);
