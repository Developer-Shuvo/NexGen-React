import React from "react";
import logo from "./favicon.png";

const Footer = () => {
  return (
    <div id="footer" className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      {/* ------------------- Divider Line ---------------- */}
      <div className="bg-stone-400 h-[1px] w-full mt-10 md:mt-20 mx-auto overflow-x-hidden"></div>

      <footer className="w-full mx-auto overflow-x-hidden">
        {/* Logo + Links */}
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center mt-8">
            <img
              src={logo}
              alt="Logo"
              className="h-[70px] w-[70px]"
            />
            <h1 className="text-xl md:text-2xl mt-2 font-semibold text-stone-300">
              Nexgen Innovators
            </h1>
          </div>

          {/* Categories / Links */}
          <div className="flex flex-wrap justify-center gap-3 px-4 mt-4 text-base font-semibold text-stone-300 sm:gap-6 md:gap-8 md:text-lg">
            <a className="hover:underline" href="#about">
              About Us
            </a>
            <a className="hover:underline" href="#services">
              Our Services
            </a>
            <a className="hover:underline" href="#contact">
              Contact Us
            </a>
            <a className="hover:underline" href="#blog">
              Blog Posts
            </a>
            <a className="hover:underline" href="#get-started">
              Get Started
            </a>
          </div>

          {/* Divider Line */}
          <div className="bg-stone-400 h-[1px] w-full mt-5 md:mt-10"></div>
        </div>

        {/* --------- Copyright & Policy --------- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-6 md:mt-8 mb-10 md:mb-20 text-center md:text-left">
          <div className="text-base font-normal text-[#F0F0F0]">
            © 2025 Nexgen Innovators. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-base font-normal text-[#F0F0F0] underline">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
