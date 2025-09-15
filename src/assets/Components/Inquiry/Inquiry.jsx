import React from "react";
import image from "./wallpaper (2).jpg";
import { motion } from "framer-motion";

const Inquiry = () => {
  return (
    <div id="getInTouch" className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      {/* inquiry section */}
      <section className="mx-auto flex flex-col xl:flex-row md:mt-[120px] mt-[60px] md:gap-10 items-center">
        {/*================ Form ==================*/}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="x:w-full md:w-1/2 flex justify-center"
        >
          <div className="w-full max-w-lg p-6 bg-transparent rounded-lg">
            <h3 className="text-[#4c9bd0] md:text-xl text-md font-bold text-center md:text-left">
              inquiry
            </h3>
            <h2 className="mt-2 text-center md:text-left text-3xl font-bold text-blue-500 md:mt-4 md:text-5xl">
              Get in Touch
            </h2>
            <p className="md:mt-6 text-center md:text-left mt-2 md:text-lg text-sm font-semibold text-[#F6F6F6]">
              We're here to help with your custom needs.
            </p>
            <form className="space-y-4 md:space-y-6 mt-4">
              {/* Name */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#F6F6F6]">
                  Name
                </h3>

                <input
                  className="border border-stone-300 h-[40px] md:h-[48px] w-full mt-2 px-3 rounded"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              {/* Email */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#F6F6F6]">
                  Email
                </h3>

                <input
                  className="border border-white h-[40px] md:h-[48px] w-full mt-2 px-3 rounded"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              {/* Message */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#F6F6F6]">
                  Message
                </h3>

                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full placeholder:text-[#666] p-3 border border-white h-[140px] md:h-[212px] mt-2 resize-none rounded"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              {/* agree to the term */}
              <div className="flex items-center gap-2">
                <input
                  className="w-5 h-5 bg-white"
                  type="checkbox"
                  name="terms"
                  id="terms"
                />

                <label htmlFor="terms" className="font-semibold text-[#F6F6F6]">
                  I agree to the Terms
                </label>
              </div>
              {/* Button */}
              <button className="w-full px-3 py-2 bg-blue-600 rounded-lg md:h-[54px] h-[45px] mt-5 text-white md:text-lg text-sm font-semibold flex items-center justify-center">
                Book a Call
              </button>
                         {" "}
            </form>
                     {" "}
          </div>
                 {" "}
        </motion.div>
        {/*============ Image ============= */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 flex justify-center items-center px-4"
        >
          <img
            className="w-[30%] sm:w-[40%] md:w-[60%] lg:w-[70%] xl:w-[80%] object-cover rounded-xl mt-8 md:mt-0 h-[300px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
            src={image}
            alt="Inquiry Background"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Inquiry;
