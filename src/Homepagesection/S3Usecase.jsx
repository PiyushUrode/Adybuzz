import  { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import "../index.css"
import "../Homepagesection/Usecase.css"


const S3Usecase = () => {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: false, // Animation runs only once
    });
  }, []);
  return (
    <>
      <div className="flex flex-col  align-middle justify-center text-center  px-4 sm:px-6 lg:px-8   " id="service" >
        <div className="py-10 md:py-0">
     
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          className="   font-futurapt bg-textcolor bg-clip-text text-transparent  font-bold mt-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
           AdyBuzz Services
          </motion.h2>
        </div>
      </div>

      <div className="flex flex-col  sm:flex-row md:py-10 px-5 sm:px-2   gap-10 items-center justify-center  ">
 
 <div className="eco1 flex flex-col gap-10 w-[100%] sm:w-[33%] overflow-hidden  ">

{/* web */}
 <div id="card" className="rounded-2xl  relative h-60 w-full">


<div id="card-inner" className="">
    <div id="front" className=" ecobgimg1 relative bg-opacity-60 align-bottom items-end justify-center w-full flex  rounded-2xl  bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>
      <h1 className="text-xl z-10 md:text-2xl lg:text-3xl font-futurapt text-white font-bold text-left w-full p-10">Website Design & Development 
      </h1>
    </div>
    <div id="Back" className=" ecobgimg1  align-middle items-center justify-center w-full flex  rounded-2xl  bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>
      <p className="text-xl z-10  line-clamp-3 text-white text-left w-full p-10"> Craft a stunning, SEO-optimized, mobile-responsive website that converts visitors into loyal customers  </p>
    </div>
  </div>
</div>



  {/* social media  */}

<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="  w-full flex  ecobgimg4   rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <h1 className="text-xl z-10  md:text-2xl lg:text-3xl font-futurapt text-white font-bold text-left w-full p-10">   Social Media Management </h1>
    </div>
    <div id="Back" className="  w-full flex  ecobgimg4  rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <p className="text-xl line-clamp-3  z-10  text-white  text-left w-full p-10">
      Dominate social media with strategic, trend-driven content.

      </p>
    
    </div>
  </div>
</div>





{/* lead assests */}

<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className=" w-full flex ecobgimg5  rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <h1 className="text-xl z-10 md:text-2xl lg:text-3xl font-futurapt text-white font-bold text-left w-full p-10">  Lead Generation  </h1>
    </div>
    <div id="Back" className=" w-full flex ecobgimg5  rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <p className="text-xl z-10  line-clamp-3 text-white text-left w-full p-10"> Turn clicks into conversions with targeted lead generation campaigns.
      </p>
    </div>
  </div>
</div>


{/* ai Integration */}





</div>


        {/*  facebbok */}
        <div className="eco1 flex flex-col gap-10 w-[100%] sm:w-[33%]  ">


        <div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="  w-full flex  ecobgimg3  rounded-2xl  align-bottom items-end justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <h1 className="text-xl z-10  md:text-2xl lg:text-3xl font-futurapt text-white font-bold text-left w-full p-10">   Facebook & Google Ads  </h1>
    </div>
    <div id="Back" className="  w-full flex ecobgimg3  rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <p className="text-xl z-10 line-clamp-3   text-white  text-left w-full p-10">
      Supercharge your business growth with data-driven advertising campaigns.

      </p>
    
    </div>
  </div>
</div>





<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className=" w-full flex ecobgimg2 rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <h1 className="text-xl z-10 md:text-2xl lg:text-3xl font-futurapt text-white font-bold text-left w-full p-10"> Graphic Design & Branding</h1>
    </div>
    <div id="Back" className=" w-full flex  ecobgimg2 rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <p className="text-xl z-10   line-clamp-3 text-white text-left w-full p-10"> Your brand deserves stunning visuals that capture attention and build trust. </p>
    </div>
  </div>
</div>




<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className=" w-full ecobgimg6 flex item-center rounded-2xl  align-middle items-center justify-center ">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <h1 className="text-xl z-10 md:text-2xl lg:text-3xl font-futurapt text-white font-bold text-left w-full p-10">  SEO Services </h1>
    </div>
    <div id="Back" className="w-full ecobgimg6 flex item-center rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <p className="text-xl  z-10  line-clamp-3 text-white text-left w-full p-10">  Dominate search engines with proven SEO strategies.
      </p>
    </div>
  </div>
</div>



</div>



  {/* eco 2 start */}
  


      


</div>

<div className="flex flex-col  pt-10 sm:pt-0  sm:flex-row md:py-10 px-5 sm:px-2   gap-10 items-center justify-center  ">
 
 <div className="eco1 flex flex-col gap-10 w-[100%] sm:w-[33%] overflow-hidden  ">

{/* move2earn */}
 <div id="card" className="rounded-2xl  relative h-60 w-full">


<div id="card-inner" className="">
    <div id="front" className=" w-full ecobgimg7 flex item-center rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <h1 className="text-xl z-10 md:text-2xl lg:text-3xl font-futurapt text-white font-bold text-left w-full p-10">Email Marketing 
      </h1>
    </div>
    <div id="Back" className=" w-full  ecobgimg7 flex item-center rounded-2xl  align-middle items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

      <p className="text-xl z-10  line-clamp-3 text-white text-left w-full p-10"> Build strong relationships & turn leads into loyal customers.
      </p>
    </div>
  </div>
</div>







</div>





  {/* eco 2 start */}
  


      


</div>










    </>)
}

export default S3Usecase