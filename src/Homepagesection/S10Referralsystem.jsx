import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropTypes from 'prop-types';
// Import your images
import usecase1 from "../assets/client/cl1.png";
import usecase2 from "../assets/client/cl2.png";
import usecase3 from "../assets/client/cl3.png";
import usecase4 from "../assets/client/cl4.jpg";

const SliderComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-10" id="client">
        <div className="w-full max-w-5xl">
          <h2 className="font-semibold bg-textcolor
           bg-clip-text text-transparent mt-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
          Adybuzz Testimonial
          </h2>
        </div>
      </div>

      <div className="w-full px-4 md:px-4 py-4 flex justify-center">
        <Swiper
          className="w-full max-w-full"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 }, // Show 1 slide on extra small screens
            640: { slidesPerView: 2 }, // Show 2 slides on tablets
          }}
        >
          <SwiperSlide>
            <SlideContent 
              image={usecase1} 
              title="Umang Poha" 
              description="Adybuzz transformed our social media presence! Engagement skyrocketed, and sales increased significantly." 
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent 
              image={usecase2} 
              title="RENDERX" 
              description=" The website they designed for us is visually stunning and SEO-friendly. A game changer for our brand! ." 
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent 
              image={usecase4} 
              title="DigitTech Team" 
              description="Their Facebook ad campaigns delivered outstanding ROI. We gained more leads than ever before!" 
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent 
              image={usecase3} 
              title="Aahar Vatika" 
              description="Adybuzz created a perfect logo that reflects our brand identity. Their creativity is unmatched!" 
            />
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  );
};

// Slide Content Component
const SlideContent = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  p-4 lg:p-14 relative">
      <div className="relative flex w-full md:w-full flex-col md:flex-row justify-center items-center">
        {/* Card with Gradient Border */}
        <div 
          className="relative flex w-full rounded-2xl p-[2px]  " 
          style={{ background: "linear-gradient(180deg, #1F70E5 0%, #653EE4 50%, #35CFFF 100%)" }}
        >
          {/* Inner Content */}
          <div className="relative flex flex-col md:flex-row items-center w-full rounded-2xl bg-white p-6 md:p-8 gap-6">
            {/* Image Section */}
            <div className="w-full md:w-[30%] flex justify-center items-center">
              <img src={image} alt={title} className="h-auto w-full object-contain" />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-[70%] flex flex-col justify-stretch">
              <h2 className="text-lg md:text-lg font-bold text-black mb-4">{title}</h2>
              <p className="text-sm md:text-lg text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
SlideContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SliderComponent;
