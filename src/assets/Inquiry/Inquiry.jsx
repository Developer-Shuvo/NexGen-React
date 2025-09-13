import React from "react";

const Inquiry = () => {
  return (
    <div className="px-4 md:px-10 mx-auto">
      {/* inquiry section */}
      <section className=" mx-auto flex flex-col md:flex-row md:mt-[224px] mt-[60px] md:gap-10 gap-8">
        {/* Form */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="w-full max-w-md px-6 py-6 bg-transparent rounded-lg">
            <h3 className="text-[#4c9bd0] md:text-xl text-md font-bold text-center md:text-left">
              inquiry
            </h3>
            <h2 className="mt-2 text-center md:text-left text-3xl font-bold text-blue-500 md:mt-4 md:text-5xl">
              Get in Touch
            </h2>
            <p className="md:mt-6 text-center md:text-left mt-2 md:text-lg text-sm font-semibold text-[#F6F6F6]">
              We’re here to help with your custom needs.
            </p>

            {/* Name */}
            <h3 className="md:text-lg text-base ml-6 md:ml-0 font-semibold text-[#F6F6F6] md:mt-8 mt-4">
              Name
            </h3>
            <input
              className="border border-stone-300 md:h-[48px] md:w-[600px] h-[40px] w-[350px] ml-6 md:ml-0  mt-2 px-3 rounded"
              type="text"
              name="name"
              id="name"
            />

            {/* Email */}
            <h3 className="md:text-lg ml-6 md:ml-0  text-base font-semibold text-[#F6F6F6] md:mt-6 mt-3">
              Email
            </h3>
            <input
              className="border  md:w-[600px]  border-white md:h-[48px] h-[40px] w-[350px] ml-6 md:ml-0 mt-2 px-3 rounded"
              type="email"
              name="email"
              id="email"
            />

            {/* Message */}
            <h3 className="md:text-lg ml-6 md:ml-0 font-semibold text-[#F6F6F6] md:mt-6 mt-3">
              Message
            </h3>
            <textarea
              placeholder="Share your thoughts..."
              className="ml-6 md:ml-0 mr-6 placeholder:text-[#666] p-3 border border-white md:h-[212px] h-[140px] md:w-[600px] w-[350px] mt-2 resize-none rounded"
              name="message"
              id="message"
            ></textarea>

            {/* agree to the term */}
            <div className="flex ml-6 md:ml-0 items-center gap-2 mt-3 md:mt-6">
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
            <button className="w-[350px] md:w-[600px] md:px-5 px-3 md:py-3 py-2 bg-blue-600 rounded-lg md:h-[54px] h-[45px] md:mt-10 mt-5 text-white md:text-lg text-sm font-semibold flex items-center justify-center mx-auto md:mx-0">
              Book a Call
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full px-4 md:w-2/3  justify-center flex   items-center">
          <div className="md:h-[770px] h-[300px] w-full max-w-[500px] bg-white rounded-xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;
