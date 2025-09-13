import arrow from "./trend.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="mx-auto w-[100%] px-10">
      <section className="relative flex overflow-hidden">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10 relative">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-stone-200 md:text-6xl text-3xl font-bold  md:mt-[100px] leading-tight relative inline-block"
          >
            Transform{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              Your Brand
            </span>
            {/* Arrow icon here */}
            <img
              className="absolute w-12 sm:w-20 md:w-28 lg:w-32 top-[18%] right-[2%] sm:right-[10%] md:right-[-22%] lg:right-[-18%]"
              src={arrow}
              alt="trend arrow"
            />
            <br /> with Expert Design & <br /> Marketing
          </motion.h1>

          <motion.h3
            whileHover={{ scale: 1.1, color: "#A3E635" }} // scale up and change color on hover
            transition={{ type: "spring", stiffness: 300 }}
            className="text-stone-300 mt-6 mb-8   md:text-lg font-normal text-wrap leading-relaxed text-base"
          >
            At our agency, we create custom digital marketing strategies and{" "}
            <br className="hidden md:block" /> stunning designs to boost your
            brand and connect with your <br className="hidden md:block" />{" "}
            audience. <br className="hidden md:block" /> Let us help you achieve
            your goals.
          </motion.h3>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-transparent border-[1px] border-stone-600 flex items-center justify-center h-[45px] w-[120px] md:h-[60px] md:w-[160px] cursor-pointer text-stone-300 p-4 rounded-lg text-md md:text-lg font-semibold transition-colors hover:bg-transparent hover:border">
              Book a Call
            </button>
          </div>

          {/* Scroll Down */}
          <a
            href="#footer"
            className="flex gap-1 mt-[50px] md:mt-[120px] items-center justify-center md:justify-start"
          >
            {/* Scroll Icon using SVG */}
            <svg
              className="w-8 h-8 text-stone-200"
              fill="white"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 79.37 122.88"
              style={{ enableBackground: "new 0 0 79.37 122.88" }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M50.2,1.25c6.71,1.85,12.72,5.44,17.51,10.23c7.19,7.19,11.65,17.11,11.65,28.03V83.2c0,10.92-4.46,20.84-11.65,28.03
                  c-7.19,7.19-17.11,11.65-28.03,11.65c-10.92,0-20.84-4.46-28.03-11.65C4.46,104.04,0,94.11,0,83.2V39.51
                  c0-10.92,4.46-20.84,11.65-28.03C17.24,5.9,24.48,1.96,32.55,0.48C37.42-0.42,45.7,0.01,50.2,1.25L50.2,1.25L50.2,1.25z
                  M39.23,30.82c4.15,0,7.55,3.4,7.55,7.55v7.78c0,4.15-3.4,7.55-7.55,7.55c-4.15,0-7.55-3.4-7.55-7.55v-7.78
                  C31.68,34.22,35.07,30.82,39.23,30.82L39.23,30.82z
                  M61.08,18.11c-5.49-5.49-13.07-8.91-21.4-8.91c-8.33,0-15.9,3.41-21.4,8.91c-5.49,5.49-8.91,13.07-8.91,21.4V83.2
                  c0,8.33,3.41,15.9,8.91,21.4c5.49,5.49,13.07,8.91,21.4,8.91c8.33,0,15.9-3.41,21.4-8.91c5.49-5.49,8.91-13.07,8.91-21.4V39.51
                  C69.99,31.18,66.58,23.61,61.08,18.11L61.08,18.11L61.08,18.11z"
                />
              </g>
            </svg>
            <h4 className="text-white">Scroll Down</h4>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
