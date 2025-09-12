import React from "react";

const Services = () => {
  return (
    <div className="mx-auto px-4 md:px-10">
      <section className="grid gap-[60px] md:gap-[136px] md:grid-cols-2 mt-[120px]">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold text-white md:text-lg">Services</h3>
          <h1 className="mt-4 text-3xl font-bold text-white md:mt-5 md:text-5xl">
            Benefits That You Can <br /> Feel Immediately
          </h1>
          <p className="mt-3 text-xs text-[#F6F6F6] md:mt-5 md:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
            <br /> sint. Velit for official consequat enim to main purpose. If
            you haven’t <br /> tried out Flaro App for them help.
          </p>
          <button
            className="mt-4 flex h-[40px] w-[190px] cursor-pointer
           items-center justify-center rounded-l-full rounded-r-full
            bg-cyan-800 font-semibold text-xs hover:bg-red-950
           text-stone-200 hover:text-stone-100 md:mt-7 md:h-[51px] 
           md:w-[246px] md:text-base mx-auto md:mx-0 ease-in-out duration-500"
          >
            Find the Perfect Solution
          </button>
        </div>

        {/*============ Card Section ==============*/}
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          {/* card 1 */}
          <div className="w-full max-w-xs rounded-xl bg-cyan-800 p-[38px] md:w-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Website Pack</h3>
              <p className="text-white">Customer Reach & Budget</p>

              <div className="mt-6 flex justify-center text-center">
                <h1 className="text-5xl font-bold text-white">$49</h1>
                <h3 className="mt-7 text-sm text-white">/Month</h3>
              </div>

              {/* line */}
              <div className="mt-7 h-[1px] w-full bg-gray-300"></div>

              <h3 className="mt-7 text-white">Website Display</h3>
              <h3 className="mt-3 text-white">Hosting Type</h3>
              <h3 className="mt-3 text-white">Financial Service Features</h3>

              <div className="mt-8">
                {/* Button */}
                <a href="#">
                  <button
                    className="flex h-[56px] w-[229px] cursor-pointer 
                  items-center justify-center gap-2 rounded-l-full rounded-r-full
                   bg-white text-stone-700 font-semibold ease-in-out duration-500
                   hover:bg-red-950 hover:text-stone-200"
                  >
                    Try for Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M11 4.69556L16.25 9.94556M16.25 9.94556L11 15.1956M16.25 9.94556L2.75 9.94556"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="w-full max-w-xs rounded-xl bg-red-950 p-[38px] md:w-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Website Pack</h3>
              <p className="text-white">Customer Reach & Budget</p>

              <div className="mt-6 flex justify-center text-center">
                <h1 className="text-5xl font-bold text-white">$49</h1>
                <h3 className="mt-7 text-sm text-white">/Month</h3>
              </div>

              {/* line */}
              <div className="mt-7 h-[1px] w-full bg-gray-300"></div>

              <h3 className="mt-7 text-white">Website Display</h3>
              <h3 className="mt-3 text-white">Hosting Type</h3>
              <h3 className="mt-3 text-white">Financial Service Features</h3>

              <div className="mt-8">
                {/* Button */}
                <a href="#">
                  <button
                    className="flex h-[56px] w-[229px] cursor-pointer items-center 
                  justify-center gap-2 rounded-l-full rounded-r-full bg-white 
                  font-semibold hover:bg-cyan-800 text-stone-700 hover:text-stone-200 
                  ease-in-out duration-500"
                  >
                    Try for Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M11 4.69556L16.25 9.94556M16.25 9.94556L11 15.1956M16.25 9.94556L2.75 9.94556"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
