import React from "react";
import logo from "./favicon.png";

const Footer = () => {
  return (
    <div id="footer" className="w-full px-4 md:px-10">
      {/* ------------------- Footer Section ---------------- */}
      <div className="bg-stone-400 h-[1px] w-full mt-10 md:mt-30 mx-auto"></div>
      <footer className="w-full mx-auto">
        {/* Logo + Links */}
        <div className="w-full mx-auto flex flex-col text-center items-center justify-center">
          <div className="flex flex-col items-center mt-8">
            <img
              height={70}
              width={70}
              src={logo}
              alt="This is logo"
            />
            <h1 className="text-xl md:text-2xl mt-2 font-semibold text-stone-300">Nexgen Innovators</h1>
          </div>
          
          {/* categories */}
          <div className="flex flex-wrap gap-3 text-base font-semibold text-stone-300 md:text-lg md:gap-8 justify-center px-6 mt-4">
            <a className="hover:underline" href="#">
              About Us
            </a>
            <a className="hover:underline" href="#">
              Our Services
            </a>
            <a className="hover:underline" href="#">
              Contact Us
            </a>
            <a className="hover:underline" href="#">
              Blog Posts
            </a>
            <a className="hover:underline" href="#">
              Get Started
            </a>
          </div>

          {/* line */}
          <div className="bg-stone-400 h-[1px] w-full mt-5 md:mt-20"></div>
        </div>

        {/* --------- Copyright & Privacy Policy Part --------- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-8 mb-20">
          <div className="text-base font-normal text-[#F0F0F0] text-center md:text-left">
            <h4>© 2025 Nexgen Innovators. All rights reserved.</h4>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-base font-normal text-[#F0F0F0] underline">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;