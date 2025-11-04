import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import logo from "../assets/logo/ad1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`w-full  font-quantico pt-5   top-0 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="relative w-full md:w-[100%] lg:w-[70%] mx-auto  border rounded-3xl flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <Link smooth to="/" onClick={closeMenu}>
          <img src={logo} className="w-[9rem] sm:w-[6rem] h-auto" alt="Logo" />
        </Link>

        {/* Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-200"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavVisible ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* Navbar Items */}
        <div className={`absolute md:relative bg-black  z-20   top-full left-0 w-full md:w-auto  md:bg-transparent transition-all ${isNavVisible ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-bold p-4 md:p-0">
            {['Home', 'About', 'Service', 'Client', 'Faq'].map((item, index) => (
              <li key={index} className="text-center md:text-left border-b md:border-none border-gray-300 py-2 md:py-0">
                <Link smooth to={`/#${item.toLowerCase().replace(' ', '')}`} onClick={closeMenu} className="block px-4 py-2 text-white md:text-black hover:blue-orange-600 transition-all">
                  {item}
                </Link>
              </li>
            ))}
            {/* Contact Button inside Menu when toggled */}
            <li className="md:hidden text-center border-b border-gray-300 py-2">
              <Link smooth to="/contact" onClick={closeMenu} className="block bg-textcolor  text-black px-5 py-2   font-semibold  transition-all">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button visible on larger screens */}
        <Link smooth to="/contact" className="hidden md:inline-block bg-textcolor   text-white px-5 py-2 rounded-lg border-2  font-semibold  transition-all">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
