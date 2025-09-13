import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Navbar/favicon.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle scroll-based closing
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="mx-auto w-[100%]">
      {/* Navbar Section */}
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-6 md:px-10 bg-transparent text-white sticky top-0 z-50"
      >
        {/*company Logo & icon*/}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div>
            <img src={logo} alt="navbar logo" className="h-10 w-auto" />
          </div>

          {/* Company Name */}
          <div className="text-lg font-semibold text-stone-300">
            NexGen Innovators
          </div>
        </div>

        {/* Large Screen Navbar all page and contact button */}
        <motion.div
         initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden md:flex items-center gap-10 fixed top-0 right-10 z-40 bg-transparent px-10 py-4"
        >
          <div className="px-4 py-2 flex items-center gap-6 border-[1px] border-stone-600 hover:border-cyan-700 transition duration-500 rounded-md">
            <a
              href="#hero"
              className="hover:text-stone-400 text-white transition duration-500"
            >
              Home
            </a>
            <a
              href="#weDo"
              className="hover:text-stone-400 text-white transition duration-500"
            >
              We Do
            </a>
            <a
              href="#whyUs"
              className="hover:text-stone-400 text-white transition duration-500"
            >
              Why Us
            </a>
            <a
              href="#review"
              className="hover:text-stone-400 text-white transition duration-500"
            >
              Review
            </a>
            <a
              href="#benefits"
              className="hover:text-stone-400 text-white transition duration-500"
            >
              Benefits
            </a>
            <a
              href="#services"
              className="hover:text-stone-400 text-white transition duration-500"
            >
              Services
            </a>
          </div>
          <a href="#getInTouch">
            <button className="px-4 py-2 text-white hover:text-stone-400 border-[1px] border-stone-600 rounded-md hover:border-cyan-700 transition duration-500 hover:shadow-md shadow-cyan-900">
              Contact Us
            </button>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-gray-900 transform  transition-transform duration-500 z-50 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-left pl-4 gap-6 py-6 mt-12">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-stone-400 text-white hover:border-b border-b-lime-400"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-stone-400 text-white"
            >
              Our Services
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-stone-400 text-white"
            >
              About Us
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              <button className="hover:text-stone-400 text-white">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Navbar;
