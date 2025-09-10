import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Navbar/favicon.png";

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
      <section className="flex items-center justify-between px-6 py-6 md:px-10 bg-transparent text-white sticky top-0 z-50">
        {/* Logo */}
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

        {/* Large Screen Navbar */}
        <div className=" items-center gap-10 hidden md:flex ">
          <div className="px-4 py-2 flex items-center gap-10 border-[1px] border-stone-600 rounded-md">
            <a href="#" className="hover:text-lime-400">
              Home
            </a>
            <a href="#" className="hover:text-lime-400">
              Our Services
            </a>
            <a href="#" className="hover:text-lime-400">
              About Us
            </a>
          </div>
          <a href="#">
            <button className="px-4 py-2 text-white border-[1px] border-stone-600 rounded-md hover:bg-lime-600 hover:border-lime-600 transition">
              Contact Us
            </button>
          </a>
        </div>

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
              className="hover:text-lime-400 hover:border-b border-b-lime-400"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-lime-400"
            >
              Our Services
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-lime-400"
            >
              About Us
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              <button className="hover:text-lime-400">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
