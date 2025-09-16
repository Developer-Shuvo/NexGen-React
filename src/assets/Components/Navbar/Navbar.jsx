import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Navbar/favicon.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0); // navbar fixed after 300px
      if (isOpen) setIsOpen(false);
    };

    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "We Do", href: "#weDo" },
    { name: "Why Us", href: "#whyUs" },
    { name: "Review", href: "#review" },
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#getInTouch" },
  ];

  return (
    <header
      className={`w-full transition-all duration-5000 ease-in-out px-4 py-4 md:px-10 max-w-[1500px] ${
        isFixed
          ? "fixed top-0 z-50 shadow-md bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
          : "relative bg-transparent "
      }`}
    >
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full mx-auto flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-stone-300">
            NexGen Innovators
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <a href={navLinks[navLinks.length - 1].href}>
            <button className="px-4 py-2 border border-stone-600 rounded-md hover:border-cyan-700 transition duration-300 hover:shadow-md hover:text-stone-400">
              {navLinks[navLinks.length - 1].name}
            </button>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none z-50"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <FaTimes className="text-red-600" />
          ) : (
            <FaBars className="text-cyan-600" />
          )}
        </button>

        {/* Mobile Sidebar */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-[70px] right-0 h-full w-[50%] max-w-xs shadow-xl z-40 flex flex-col md:hidden"
        >
          <div className="flex flex-col gap-6 py-10 px-6 min-h-screen h-auto bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-100 hover:underline text-md hover:text-stone-400 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
