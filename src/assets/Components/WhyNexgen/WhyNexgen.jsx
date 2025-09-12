  import star from "./star.png";
  import image from "./shuvo.png";
  import arrow from "./next.png";
  import coding from "./programming-background-concept.jpg";
  import wallpaper from "./delicate-floral-bloom-soft-light.jpg";

  const WhyNexgen = () => {
    return (
      <div className="mx-auto px-4 md:px-10 ">
        <section className="grid md:gap-20 md:grid-cols-2">
          {/* --------- Text Part -------- */}
          <div className="mt-[135px]">
            <h3 className="md:text-xl text-lg items-center  font-bold text-[#4e8bb9]">
              Why Nexgen
            </h3>
            <h1 className="mt-4 text-2xl font-bold text-white md:text-5xl">
              Unlock Your Potential with <br /> Comprehensive Digital Marketing{" "}
              <br /> Solutions Tailored for You
            </h1>
            <p className="mt-5 text-xs font-semibold text-white md:text-base">
              Lorem ipsum dolor sit amet consectetur. Mi euismod tempor
              suspendisse neque <br />
              egestas quisque. Diam tortor turpis quis aliquam.
            </p>

            {/* Btn */}
            <button className="flex gap-2 px-3 py-2 mt-6 text-white bg-blue-600 rounded-l-full rounded-r-full md:px-5 md:py-3 md:mt-8">
              Learn more
              <img className="h-6 w-6" src={arrow} alt="" />
            </button>

            {/* Line */}
            <div className="h-[1px] md:w-[640px] w-[300px] bg-stone-400 md:mt-20 mt-12 md:mb-20 mb-12"></div>

            {/* Customer Testimonial */}
            <div className="flex items-center gap-2 md:gap-6">
              <img
                className="w-12 h-12 rounded-full  bg-yellow-600 p-[2px]"
                src={image}
                alt=""
              />
              <div>
                <h2 className="md:text-lg text-base font-bold text-[#F6F6F6]">
                  Albert Flores
                </h2>
                <h4 className="md:text-base text-xs md:font-semibold text-[#F6F6F6]">
                  Role at @Company name
                </h4>
              </div>
            </div>
            <p className="text-[#F6F6F6] md:mt-8 mt-5 md:text-md text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore <br />
              magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
              exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />
              consequat. Duis aute irure dolor in reprehenderit in <br />
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* ------- Card Part -------- */}
          <div className="relative hidden md:block  md:mt-[135px] mt-[100px]">
            {/* main card */}
            <div
              className="md:w-[530px] w-[300px] md:h-[735px] h-[450px] bg-slate-800 rounded-2xl  bg-cover bg-center"
              style={{ backgroundImage: `url(${wallpaper})` }}
            >
              <div className="md:pt-[42px] pt-[32px] md:pl-[22px] pl-4 md:pr-[22px] pr-4">
                {/* ------- */}
                <div className="flex items-center gap-4 md:gap-6">
                  <img
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-yellow-600 p-[2px]"
                    src={image}
                    alt=""
                  />
                </div>
                {/* ------ */}
                <img
                  src={coding}
                  className="w-full md:h-[305px] h-[250px] rounded-xl bg-blue-600 mt-10"
                  alt=""
                />
              </div>
            </div>

            {/* mini card 1 */}
            <div className="md:top-27 top-15 md:left-70 left-30 absolute md:h-[98px] h-[70px] md:w-[350px] w-[200px] bg-gray-900 rounded-lg ">
              <div className="flex items-center justify-end gap-2 text-center pt-[12px]">
                <img
                  className="w-10 h-10 pl-2 md:w-12 md:h-12 rounded-full"
                  src={image}
                  alt=""
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="265"
                  height="66"
                  viewBox="0 0 265 66"
                  fill="none"
                >
                  <path
                    d="M59.1627 15.3715C25.1169 8.62798 0 45.3845 0 45.3845V65.304H264.947V0.791504C264.947 0.791504 210.801 36.4627 181.826 28.3942C169.303 24.9072 165.516 13.3603 152.613 10.6451C132.639 6.44238 128.996 33.4883 108.428 31.0837C90.4096 28.9771 76.7436 18.8538 59.1627 15.3715Z"
                    fill="url(#paint0_linear_355_878)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_355_878"
                      x1="132.473"
                      y1="0.791504"
                      x2="132.473"
                      y2="65.304"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#04ACEB" stopOpacity="0.67" />
                      <stop offset="1" stopColor="#2D2F40" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* mini card 2 */}
            <div className="md:top-120 top-70 md:-left-20 -left-1 absolute md:h-[98px] h-[70px] md:w-[350px] w-[200px] bg-gray-900 rounded-lg">
              <div className="items-center md:py-[12px] py-2 md:px-4 px-2">
                <h4 className="text-xs text-white md:text-base md:font-semibold">
                  feedback
                </h4>
                <div className="flex items-center gap-2 mt-1 md:gap-5">
                  <h2 className="text-3xl font-bold text-white md:text-5xl">
                    4.5
                  </h2>
                  {/* star */}
                  <div className="flex gap-1">
                    <img
                      className="w-5 h-5 md:w-8 md:h-8"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="w-5 h-5 md:w-8 md:h-8"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="w-5 h-5 md:w-8 md:h-8"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="w-5 h-5 md:w-8 md:h-8"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="w-5 h-5 md:w-8 md:h-8"
                      src={star}
                      alt="star"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default WhyNexgen;
