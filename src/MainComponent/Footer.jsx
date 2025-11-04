import  { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../MainComponent/Contact.jsx";
import "../index.css";
import logo from "../assets/logo/ad1.png";
import footericon1 from "../assets/Image/footericon1.png";
import footericon2 from "../assets/Image/footericon2.png";

import footericon4 from "../assets/Image/footericon5.png";
import footericon5 from "../assets/Image/footericon6.png";
import footericon3 from "../assets/Image/whatsup.png";

import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.scrollY; // Starting scroll position
    const startTime = performance.now(); // Time when the scroll starts

    // Perform the scroll gradually
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

      // Scroll to the top with smooth easing
      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Keep animating until 100% progress
      }
    };

    requestAnimationFrame(animateScroll); // Start the smooth scroll animation
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t-4 border-blue-800  z-10 rounded-t-2xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:pt-8 z-10 gap-6 flex flex-col">
          <div className="md:flex md:justify-between tablet:justify-center z-10">
            <div className="flex flex-col  gap-8 sm:gap-5  max-w-[100%] sm:max-w-[35%] tablet:max-w-[100%] items-center tablet:items-center">
              <Link className="flex items-center" smooth to="/">
                <img src={logo} className="h-[80px] me-3" alt="FlowBite Logo" />
              </Link>
              <button
                className="relative px-10 py-2 bg-textcolor  text-white font-bold rounded-lg w-fit "
              >
                <Link smooth to="/contact">

Contact Now
                  
                </Link>
              </button>

              <div className="flex space-x-6">
  <a href="https://www.facebook.com/adybuzz1/" target="_blank" rel="noopener noreferrer">
    <img src={footericon1} alt="adybuzzFacebook" className="hover:scale-110 transition-transform duration-300" />
  </a>
  <a href="https://www.instagram.com/adybuzz1/" target="_blank" rel="noopener noreferrer">
    <img src={footericon2} alt="adybuzzInstagram" className="hover:scale-110 transition-transform duration-300" />
  </a>


  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adybuzz5@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={footericon4}
    alt="adybuzzEmail"
    className="hover:scale-110 transition-transform duration-300"
  />
</a>


<a href="https://x.com/Adybuzz1" target="_blank" rel="noopener noreferrer">
    <img src={footericon5} alt="adybuzzTwitter" className="hover:scale-110 transition-transform duration-300" />
  </a>

  <a href="https://api.whatsapp.com/send?phone=7581001715" target="_blank" rel="noopener noreferrer">
    <img src={footericon3} alt="adybuzzWhatsup" className="hover:scale-110 transition-transform duration-300" />
  </a>
  {/* <a href="https://x.com/Adybuzz1" target="_blank" rel="noopener noreferrer">
    <img src={footericon5} alt="Twitter" className="hover:scale-110 transition-transform duration-300" />
  </a> */}
</div>



            </div>
            <div className="flex gap-[1vmax] pt-10 sm:pt-0 sm:gap-[5vmax]   w-full justify-center sm:justify-start md:justify-end tablet:flex-wrap z-10 ">
              <div className="flex  flex-col tablet:items-center">
                <h2 className="  mb-6 font-istok text-2xl  bg-textcolor bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight">
                  Important Link
                </h2>
                <ul className="text-black font-medium">
                  <ul className="gap-4 flex flex-col">
                    <li className="tablet:text-center">
                      <a href="#about">About Us</a>
                    </li>
                    <li className="tablet:text-center">
                      <a href="#service">SERVICES</a>
                    </li>

                    <li className="tablet:text-center">
                      <a href="#client">TESTIMONIAL</a>
                    </li>

                    <li className="tablet:text-center">
                      <a href="#faq">FAQ</a>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="flex  flex-col tablet:items-center">
                <h2 className=" mb-6 font-istok text-2xl bg-textcolor bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight">
                  Services
                </h2>
                <ul className="text-black font-medium flex flex-col gap-4">
                  <li className="tablet:text-center">
                    <a href="#service">
                      Website Development
                    </a>
                  </li>

                  <li className="tablet:text-center">
                    <a href="#service"> Facebook Ads</a>
                  </li>

                  <li className="tablet:text-center">
                    <a href="#service">Social Media Management</a>
                  </li>

                  <li>
                    <a  href="#service" className="tablet:text-center">
                     Graphic Design
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex  flex-col tablet:items-center">
              <h2 className=" mb-6 font-istok text-2xl bg-textcolor bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight">
                  Privacy
                </h2>
                <ul className="text-black font-medium">
                  <li className="mb-4 tablet:text-center">
                    <a
                      href="/termsandcondition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms & Condition
                    </a>
                  </li>
                  <li className="tablet:text-center">
                    <a
                      href="/privacypolicy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[3px] bg-roadmapline"></div>
          <div className="flex flex-row items-center tablet:text-center justify-between">
            <span className="text-sm sm:text-center text-[#000000]">
              © {currentYear} Adybuzz. All Rights Reserved.
            </span>
            <button onClick={scrollToTop}>
              <IoIosArrowDropup className="w-10 h-10" />
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed w-full h-full overflow-x-hidden  inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
          <div className=" p-4 relative rounded-lg sm:w-[99%] justify-center h-full flex flex-row  ">
            <Contact />
            <button
  onClick={toggleContactPopup}
  className="mt-4 h-10 px-4 py-2 absolute top-5 right-0 w-[10%] sm:w-[5%] bg-red-500 text-white rounded flex justify-center items-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
