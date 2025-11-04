import  { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import SEO from "./MainComponent/Seo.jsx";

import Footer from "./MainComponent/Footer";
import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive styles
import Contact from './MainComponent/Contact';
import Privacypolicy from './Homepagesection/PrivacyPolicy.jsx';
import TermsandCondition from './Homepagesection/TermsandCondition.jsx';

const Homepage = lazy(() => import('./MainComponent/Homepage'));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      once: true,
    });

    const scrollContainer = document.querySelector('[data-scroll-container]');
    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.05,
      multiplier: 0.02,
      class: 'is-reveal',
    });

    const handleResize = () => locoScroll.update();
    window.addEventListener('resize', handleResize);

    return () => {
      locoScroll.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HelmetProvider>
      {/* Global SEO for Home Page */}
      <SEO
        title="Adybuzz - Website Design & Development Services"
        description="Get a high-performance, SEO-optimized website for your business. We offer expert website design, development, and digital solutions to boost your online presence."
        url="https://adybuzz.com"
        image="https://yourwebsite.com/your-image.jpg"
      />

      <Router>
        <div data-scroll-container>
       
          <ScrollToTop />
          <div className="content">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Homepage />} />


                <Route path="/privacypolicy" element={<Privacypolicy />} />
                <Route path="/termsandcondition" element={<TermsandCondition />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
