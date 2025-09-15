import arrow from "./trend.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      <section className="relative flex flex-col md:flex-row items-center md:items-start overflow-hidden">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10 relative mt-10 md:mt-[100px]">
          {/* Hero Heading */}
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-stone-200 md:text-6xl text-3xl font-bold leading-tight relative inline-block"
          >
            Transform{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              Your Brand
            </span>
            {/* Arrow icon */}
            <img
              className="absolute w-12 sm:w-20 md:w-28 lg:w-32 top-[18%] right-[2%] sm:right-[10%] md:right-[-22%] lg:right-[-18%]"
              src={arrow}
              alt="trend arrow"
            />
            <br />
            with Expert Design & <br />
            Marketing
          </motion.h1>

          {/* Description*/}
          <motion.h3
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-stone-300 mt-6 mb-8 text-base sm:text-base md:text-lg font-normal leading-relaxed break-words max-w-full sm:max-w-[90%] md:max-w-2xl mx-auto md:mx-0"
          >
            At our agency, we create custom <br className="md:hidden block" />
            digital marketing strategies and <br className="md:hidden block" />
            stunning designs to boost your brand{" "}
            <br className="md:hidden block" />
            and connect with your audience. <br className="md:hidden block" />
            Let us help you achieve your goals.
          </motion.h3>

          {/* Button */}
          <motion.a
            href="#getInTouch"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.3, rotateX: 360, rotateY: 1 }}
                whileTap={{ scale: 1, rotateX: 10, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 150, damping: 50 }}
                className="bg-transparent border border-stone-600  flex items-center justify-center 
                 h-[45px] w-[120px] sm:h-[50px] sm:w-[140px] md:h-[60px] md:w-[160px] 
                 cursor-pointer text-stone-300 p-4 rounded-lg text-md sm:text-md md:text-lg 
                 font-semibold transition-colors hover:bg-transparent hover:border-yellow-400
                  hover:text-yellow-400 hover:ml-8 ml-2 ease-in-out duration-500"
              >
                Book a Call
              </motion.button>
            </div>
          </motion.a>

          {/* Scroll Down */}
          <motion.a
            href="#footer"
            className="flex gap-2 mt-8 sm:mt-12 md:mt-[120px] items-center justify-center md:justify-start"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-stone-200"
              fill="white"
              viewBox="0 0 79.37 122.88"
            >
              <g>
                <path
                  d="M50.2,1.25c6.71,1.85,12.72,5.44,17.51,10.23c7.19,7.19,11.65,17.11,11.65,28.03V83.2c0,10.92-4.46,20.84-11.65,28.03
                  c-7.19,7.19-17.11,11.65-28.03,11.65c-10.92,0-20.84-4.46-28.03-11.65C4.46,104.04,0,94.11,0,83.2V39.51
                  c0-10.92,4.46-20.84,11.65-28.03C17.24,5.9,24.48,1.96,32.55,0.48C37.42-0.42,45.7,0.01,50.2,1.25z
                  M39.23,30.82c4.15,0,7.55,3.4,7.55,7.55v7.78c0,4.15-3.4,7.55-7.55,7.55c-4.15,0-7.55-3.4-7.55-7.55v-7.78
                  C31.68,34.22,35.07,30.82,39.23,30.82z
                  M61.08,18.11c-5.49-5.49-13.07-8.91-21.4-8.91c-8.33,0-15.9,3.41-21.4,8.91c-5.49,5.49-8.91,13.07-8.91,21.4V83.2
                  c0,8.33,3.41,15.9,8.91,21.4c5.49,5.49,13.07,8.91,21.4,8.91c8.33,0,15.9-3.41,21.4-8.91c5.49-5.49,8.91-13.07,8.91-21.4V39.51
                  C69.99,31.18,66.58,23.61,61.08,18.11z"
                />
              </g>
            </svg>
            <h4 id="weDo" className="text-white text-sm sm:text-base">
              Scroll Down
            </h4>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
