import React from "react";
import { motion } from "framer-motion";
const WeDo = () => {
  return (
    <div  className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      <section className="justify-center item-center flex flex-col mt-10 md:mt-20">
        {/* Heading */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="items-center justify-center mt-4 md:mt-20 text-center md:flex-col md:flex"
        >
          <h2 className="flex items-center justify-center text-3xl font-bold text-center text-white md:text-5xl">
            What We Do
          </h2>
          <p className="mt-3 text-white md:mt-6 text-md">
            Explore our diverse range of creative projects.
          </p>
        </motion.div>

        {/* Card Part-1 */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-8 flex flex-col items-center gap-6 md:flex-row md:gap-9 md:justify-start"
        >
          {/* 1st card */}
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-stone-400 md:p-8 p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 22C13.9836 22 22 13.9836 22 0C22 13.9836 30.0164 22 44 22C30.0164 22 22 30.0164 22 44C22 30.0164 13.9836 22 0 22Z"
                fill="#5E44E6"
              />
            </svg>
            <h3 className="mt-8 font-bold text-white md:mt-16 md:text-lg text-md">
              Brand Monitoring & Growth
            </h3>
            <p className="mt-3 text-xs text-white md:mt-4 md:text-base">
              Lorem ipsum dolor sit ametconsectetur. Diam libero vel etia
            </p>
          </div>

          {/* 2nd card */}
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-stone-400 md:p-8 p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 22C13.9836 22 22 13.9836 22 0C22 13.9836 30.0164 22 44 22C30.0164 22 22 30.0164 22 44C22 30.0164 13.9836 22 0 22Z"
                fill="#5E44E6"
              />
            </svg>
            <h3 className="mt-8 font-bold text-white md:mt-16 md:text-lg text-md">
              Brand Monitoring & Growth
            </h3>
            <p className="mt-3 text-xs text-white md:mt-4 md:text-base">
              Lorem ipsum dolor sit ametconsectetur. Diam libero vel etia
            </p>
          </div>
        </motion.div>

        {/* Card Part-2 */}
        <motion.div
             initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
        
        className="mt-8 flex flex-col items-center gap-6 md:flex-row md:mt-12 md:gap-9 md:justify-end">
          {/* 1st card */}
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-stone-400 md:p-8 p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 22C13.9836 22 22 13.9836 22 0C22 13.9836 30.0164 22 44 22C30.0164 22 22 30.0164 22 44C22 30.0164 13.9836 22 0 22Z"
                fill="#5E44E6"
              />
            </svg>
            <h3 className="mt-8 font-bold text-white md:mt-16 md:text-lg text-md">
              Brand Monitoring & Growth
            </h3>
            <p className="mt-3 text-xs text-white md:mt-4 md:text-base">
              Lorem ipsum dolor sit ametconsectetur. Diam libero vel etia
            </p>
          </div>

          {/* 2nd card */}
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-stone-400 md:p-8 p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 22C13.9836 22 22 13.9836 22 0C22 13.9836 30.0164 22 44 22C30.0164 22 22 30.0164 22 44C22 30.0164 13.9836 22 0 22Z"
                fill="#5E44E6"
              />
            </svg>
            <h3 className="mt-8 font-bold text-white md:mt-16 md:text-lg text-md">
              Brand Monitoring & Growth
            </h3>
            <p className="mt-3 text-xs text-white md:mt-4 md:text-base">
              Lorem ipsum dolor sit ametconsectetur. Diam libero vel etia
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WeDo;
