import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaSearch,
  FaBullhorn,
  FaUsers,
  FaShoppingCart,
  FaPaintBrush,
  FaUserPlus,
  FaChartLine,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const S5Roadmap = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseEnter = () => setIsScrolling(true);
  const handleMouseLeave = () => setIsScrolling(false);

const roadmapData = [
  {
    title: "SEO Boost Pro",
    subtitle: "Website Design & Development",
    icon: <FaSearch className="text-2xl w-7 h-7 text-white" />, // SEO/Search Icon
    content: [
      "User-friendly, modern, and fast-loading design",
      "Optimized for search engines (Google-friendly)",
      "E-commerce & business website solutions.",
      "Secure, scalable, and high-performance architecture.",
      "Ongoing website maintenance & support.",
    ],
  },
  {
    title: "Facebook & Google Ads",
    subtitle: "Facebook  & Google Ads Management",
    icon: <FaBullhorn className="text-2xl w-7 h-7 text-white" />, // Ads/Announcement Icon
    content: [
      "Precision targeting for high-converting audiences.",
      "Engaging ad creatives & compelling copywriting.",
      "Conversion-optimized landing pages.",
      "A/B testing for better performance & ROI.",
      "Real-time analytics & optimization.",
    ],
  },
  {
    title: "Social Growth Hub",
    subtitle: "Social Media Marketing",
    icon: <FaUsers className="text-2xl w-7 h-7 text-white" />, // Users/Social Icon
    content: [
      "Strategic social media campaigns across platforms like Instagram, LinkedIn, and Facebook.",
      "Engaging content creation with advanced social analytics tools.",
      "Audience targeting and performance tracking for optimized growth.",
      "Community management and influencer partnerships to boost brand loyalty.",
    ],
  },
  {
    title: "Social Media Management",
    subtitle: "Social Media Management",
    icon: <FaShoppingCart className="text-2xl w-7 h-7 text-white" />, // Shopping cart for e-commerce/social commerce
    content: [
      "Customized content strategy & planning.",
      "Daily posting & real-time audience engagement.",
      "High-quality reels, graphics & videos.",
      "Community management & reputation building.",
      "Performance tracking with insights",
    ],
  },
  {
    title: "Graphic Design & Branding",
    subtitle: "Graphic Design & Branding",
    icon: <FaPaintBrush className="text-2xl w-7 h-7 text-white" />, // Paint brush for design/branding
    content: [
      "Custom logo & brand identity design.",
      "Social media banners & promotional graphics.",
      "Marketing materials, brochures, & business cards.",
      "Visually consistent branding across all platforms.",
    ],
  },
  {
    title: "Lead Generation",
    subtitle: "Lead Generation",
    icon: <FaUserPlus className="text-2xl w-7 h-7 text-white" />, // User plus for lead generation
    content: [
      "High-impact ad campaigns & audience segmentation.",
      "Landing page optimization for maximum conversions.",
      "Automated follow-up sequences & retargeting.",
      "Lead nurturing strategies for better ROI.",
    ],
  },
  {
    title: "SEO Services",
    subtitle: "SEO Services",
    icon: <FaChartLine className="text-2xl w-7 h-7 text-white" />, // Chart rising for SEO analytics & growth
    content: [
      "✔ Keyword research & high-quality content optimization",
      "On-page & technical SEO improvements.",
      "High-authority backlink building.",
      "Local SEO to boost visibility in your area.",
      "Full SEO audit & performance tracking.",
    ],
  },
  {
    title: "Email Marketing",
    subtitle: "Email Marketing",
    icon: <FaEnvelopeOpenText className="text-2xl w-7 h-7 text-white" />, // Envelope open for email marketing
    content: [
      "Build strong relationships & turn leads into loyal customers.",
      "Personalized email campaigns & automation.",
      "High-converting newsletters & promotional emails.",
      "A/B testing for better engagement rates.",
      "Audience segmentation & retargeting.",
    ],
  },
];
  

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once
      easing: 'ease-out', // Smooth easing for animations
    });
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="Roadmap w-full    flex justify-center items-center  flex-col bg-[#090909]" id="roadmap">
      <div className="Service-heading text-center  md:py-20">
    <h1 className="font-bold bg-textcolor bg-clip-text text-transparent uppercase leading-snug md:leading-tight text-3xl sm:text-3xl md:text-3xl">
        Adybuzz Digital Marketing Services
    </h1>

  
  
</div>


      {/* Card Container */}
      <div id="card-container"  className="w-full overflow-y-hidden  flex justify-center items-center" >
        <div
          className={`scroll-container sm:gap-10 flex overflow-x-auto sm:pb-12 px-4 md:px-10 w-full space-x-5 ${isScrolling ? "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#b7e903] scrollbar-track-white" : "scrollbar-hidden"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dynamically Render Cards with AOS Animations */}
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              data-aos="fade-up" // AOS animation trigger for fade-up effect
              data-aos-delay={index * 100} // Stagger delay for each card
              data-aos-duration="1000" // Duration of animation
              className="card relative   rounded-2xl border md:py-12 md:px-6 w-fit sm:max-w-[450px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg border-gradient border-gradient-green"
            >
              <div className="items-center  space-y-3 w-full flex flex-col justify-center text-center">
                {/* Phase Title with Icon */}
                <div className="flex items-center justify-around lg:justify-between px-3 w-full space-x-3">
                   {/* Display the phase-specific icon */}
                
                  {phase.icon}
                </div>
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                  {phase.subtitle}
                </h2>
                <div className="w-[70%] h-[3px] bg-roadmapline"></div>
              </div>
              <div className="py-10">
                <ul className="list-disc font-istok pl-8 text-wrap break-words text-base w-[90%] space-y-2 text-gray-400">
                  {phase.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default S5Roadmap;
