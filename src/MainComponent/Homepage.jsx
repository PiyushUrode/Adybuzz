
import Navbar from "../MainComponent/Navbar.jsx"
import Hero from "../Homepagesection/S1Hero.jsx"
import About from "../Homepagesection/S2About.jsx"
import Usecase from "../Homepagesection/S3Usecase.jsx"
import Roadmap from "../Homepagesection/S5Roadmap.jsx"
import Howtobuy from "../Homepagesection/S6Howtobuy.jsx"
import Schedule from "../Homepagesection/S8Schedule.jsx"
import Referralsystem from '../Homepagesection/S10Referralsystem.jsx'
import headervideo2 from "../assets/video/headervideo3.mp4"
import StructuredData from '../Homepagesection/StructuredData.jsx'

const Homepage = () => {
  return (
    <>
      {/* Inject JSON-LD data into <head> */}
      <StructuredData />

      <div className="flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full z--10 header-background2 opacity-70"></div>
      </div>

      <div className='relative overflow-hidden header-background2'> 
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          src={headervideo2}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Usecase />
      <Howtobuy />
      <Roadmap />
      <Referralsystem />
      <Schedule />
    </>
  )
}

export default Homepage
