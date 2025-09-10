import React from "react";

const WeDo = () => {
  return (
    <div className="mx-auto px-10">
      <section className="justify-center item-center flex flex-col mt-10 md:mt-10">
        {/* Heading */}
        <div className="items-center justify-center mt-4 md:mt-20 text-center md:flex-col md:flex">
          <h2 className="flex items-center justify-center text-3xl font-bold text-center text-white md:text-5xl">
            What We Do
          </h2>
          <p className="mt-3 text-white md:mt-6 text-md">
            Explore our diverse range of creative projects.
          </p>
        </div>

        {/* Card Part-1 */}
        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:gap-9 md:justify-start">
          {/* 1st card */}
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-white md:p-8 p-5">
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
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-white md:p-8 p-5">
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
        </div>

        {/* Card Part-2 */}
        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:mt-12 md:gap-9 md:justify-end">
          {/* 1st card */}
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-white md:p-8 p-5">
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
          <div className="bg-gray-900 md:h-[277px] h-[180px] md:w-[416px] w-[300px] rounded-lg border border-white md:p-8 p-5">
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
        </div>
      </section>
    </div>
  );
};

export default WeDo;
