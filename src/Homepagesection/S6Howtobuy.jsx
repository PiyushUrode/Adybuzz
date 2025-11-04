
import { motion } from 'framer-motion';
import "../index.css";

import howtobuy from "../assets/Image/howtobuyimg.png";
import howicon1 from "../assets/Image/howicon1.png";
import howicon2 from "../assets/Image/howicon2.png";
import howicon3 from "../assets/Image/howicon3.png";
import howicon4 from "../assets/Image/howicon4.png";

const S6Howtobuy = () => {
  return (
    <div className="flex flex-col items-center text-center gap-10 py-10  px-4 sm:px-6 lg:px-1 " id="howtobuy">
      <div className="  w-full ">
      <h2
data-aos="fade-up"
data-aos-easing="linear"
data-aos-duration="1000"

          className="   font-futurapt bg-textcolor bg-clip-text text-transparent  font-medium  text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
           AdyBuzz Process
          </h2>

      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 w-full"> 
    
        <div className="flex flex-col md:w-[50%] w-full">
          <div className="flex gap-6 flex-col md:flex-row m-3  sm:m-5"> 

            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl  border-2 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl sm:px-6 py-6  w-full h-full">
                <div className="flex flex-row items-center  justify-between  space-x-4 w-full mb-1">
                  <button className=" font-bold  py-3  text-black text-sm  sm:text-base">
                    Step 1
                  </button>
                  <img
                    src={howicon1}
                    alt="Step 1 Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg"
                  />
                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl md:text-left text-center  md:w-[100%] text-black font-medium py-5">
                Every business is unique, so we customize our approach to your goals.


                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl  border-2 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl sm:px-6 py-6  w-full h-full">
                <div className="flex flex-row items-center justify-between space-x-4 w-full mb-1">
                  <button className=" font-bold  py-3  text-black text-sm sm:text-base">
                    Step 2
                  </button>
<img
  src={howicon2}
  alt="Step 2 Icon"
  className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg filter invert brightness-0"
/>

                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl md:text-left text-center  md:w-[100%]  text-black font-medium py-5">
                We make decisions based on analytics, not guesswork.      </p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-6 flex-col md:flex-row m-3 sm:m-5"> 
            {/* Card 3 */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl  border-2 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl sm:px-6 py-6  w-full h-full">
                <div className="flex flex-row items-center justify-between space-x-4 w-full mb-1">
                  <button className=" font-bold py-3  text-black text-sm sm:text-base">
                    Step 3
                  </button>
                  <img
                    src={howicon3}
                    alt="Step 3 Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg"
                  />
                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl md:text-left text-center  md:w-[100%] text-black  font-medium py-5">
                Clear reporting & measurable results, always.

                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl  border-2 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl sm:px-6 py-6  w-full h-full border-2">
                <div className="flex flex-row items-center justify-between space-x-4 w-full mb-1">
                  <button className=" py-3  text-black font-bold text-sm sm:text-base">
                    Step 4
                  </button>
                  <img
                    src={howicon4}
                    alt="Step 4 Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg"
                  />
                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl md:text-left text-center  md:w-[100%] text-black  font-medium py-5">
                We stay ahead of digital trends so you don’t have to.
                </p>
              </div>
            </motion.div>
          </div>
        </div>


        <div className="md:w-[40%] w-full items-center justify-center flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }} 
            viewport={{ once: true }}
            className="w-full md:w-[100%] lg:w-[80%] xl:w-[60%] flex justify-center md:justify-center"
          >
            <img
              loading="lazy"
              src={howtobuy}
              alt="How to Buy"
              className="w-[90%] md:w-full h-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default S6Howtobuy;
