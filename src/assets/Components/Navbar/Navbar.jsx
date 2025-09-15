import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Navbar/favicon.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on scroll and on resize
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div>
      <header className="sticky top-0 z-[100] bg-transparent backdrop-blur-md text-white w-full overflow-x-hidden">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10"
        >
          {/* Logo & Company */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="navbar logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold text-stone-300">
              NexGen Innovators
            </span>
          </div>

          {/* Large Screen Navbar */}
          <div className="hidden md:flex items-center gap-10">
            <div className="px-4 py-2 flex items-center gap-6 border border-stone-600 hover:border-cyan-700 transition duration-500 rounded-md">
              <a href="#hero" className="hover:text-stone-400">
                Home
              </a>
              <a href="#weDo" className="hover:text-stone-400">
                We Do
              </a>
              <a href="#whyUs" className="hover:text-stone-400">
                Why Us
              </a>
              <a href="#review" className="hover:text-stone-400">
                Review
              </a>
              <a href="#benefits" className="hover:text-stone-400">
                Benefits
              </a>
              <a href="#services" className="hover:text-stone-400">
                Services
              </a>
            </div>
            <a href="#getInTouch">
              <button className="px-4 py-2 border border-stone-600 rounded-md hover:border-cyan-700 transition duration-500 hover:shadow-md shadow-cyan-900 hover:text-stone-400">
                Contact Us
              </button>
            </a>
          </div>

          {/* Mobile Menu Button (Placed outside the menu for a fixed position) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[120] text-2xl text-green-600 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Slider Menu - MODIFIED SECTION */}
          <div
            className={`fixed top-0 left-0 h-full w-full bg-gray-900 transform transition-transform duration-500 z-[110] md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <img src={logo} alt="navbar logo" className="h-8 w-auto" />
                <span className="text-lg font-semibold text-stone-300">
                  NexGen Innovators
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white"
                aria-label="Close mobile menu"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex flex-col items-start px-6 gap-6 py-6">
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="hover:text-stone-400 text-white text-lg w-full"
              >
                Home
              </a>
              <a
                href="#weDo"
                onClick={() => setIsOpen(false)}
                className="hover:text-stone-400 text-white text-lg w-full"
              >
                We Do
              </a>
              <a
                href="#whyUs"
                onClick={() => setIsOpen(false)}
                className="hover:text-stone-400 text-white text-lg w-full"
              >
                Why Us
              </a>
              <a
                href="#review"
                onClick={() => setIsOpen(false)}
                className="hover:text-stone-400 text-white text-lg w-full"
              >
                Review
              </a>
              <a
                href="#benefits"
                onClick={() => setIsOpen(false)}
                className="hover:text-stone-400 text-white text-lg w-full"
              >
                Benefits
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="hover:text-stone-400 text-white text-lg w-full"
              >
                Services
              </a>
              <a
                href="#getInTouch"
                onClick={() => setIsOpen(false)}
                className="hover:text-stone-400 text-white text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.nav>
      </header>
    </div>
  );
};

export default Navbar;