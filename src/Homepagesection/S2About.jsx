import about1 from "../assets/Image/adybuzzimage/ABOUT.png";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const S2About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration for each element
      easing: "ease-out-back", // Easing type
      once: false, // Trigger animation only once
    });
  }, []);
  return (
    <>
      <div className="lg:min-h-[90vh] pt-3 md:pt-0 ">
        <div
          id="about"
          className="relative  w-full h-full flex flex-col md:flex-row items-center py-10 md:py-20 px-3 md:px-10"
        >
          <div id="abt4" className="w-full flex flex-col md:flex-row">
            <div
              id="listing"
              className="relative min-h-[30vh] px-5 md:px-10 py-10 md:py-0 flex flex-col md:flex-row gap-10 md:gap-20"
            >
              <div
                id="filler-main"
                className="flex items-center  w-full gap-10 md:gap-5 flex flex-col md:flex-row-reverse"
              >
                {/* Left Content */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="300" // Delay for the h1
                  data-aos-duration="1500"
                  id="filler-right"
                  className="w-full md:w-[50%]  flex flex-col justify-center gap-10 text-center md:text-left"
                >
                  <h1 className="text-3xl md:text-3xl  text-black font-medium">
                    ABOUT
                  </h1>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-futurapt bg-textcolor bg-clip-text text-transparent font-semibold uppercase leading-snug md:leading-tight">
                    Your Trusted Digital Growth Partner
                  </h2>
                  <div className="gap-3 flex flex-col">
                    <p className="text-md md:text-md text-black leading-relaxed md:w-3/4 mx-auto md:mx-0">
                      At Adybuzz, we specialize in helping businesses thrive in
                      the digital landscape. Our mission is to turn your online
                      presence into a powerful growth engine through strategic
                      digital marketing.{" "}
                    </p>

                    <p className="text-md md:text-md text-black leading-relaxed md:w-3/4 mx-auto md:mx-0">
                      With a team of experienced professionals, we blend
                      creativity with data-driven insights to deliver customized
                      marketing solutions. Whether  a startup looking to
                      establish a brand or a well-established company seeking to
                      scale, we help you achieve sustainable success.
                    </p>
                  </div>
                </div>

                {/* Right Content (Image) */}
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  id="filler-left"
                  className=" w-full md:w-[50%]  items-center flex justify-center md:justify-center align-middle "
                >
<img
  loading="lazy"
  src={about1}
  alt="About Us"
  className="w-full max-w-[500px] md:max-w-[550px] aspect-[4/3] object-cover rounded-lg  transition-transform duration-700 ease-in-out hover:scale-105 md:hover:scale-110"
/>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default S2About;
