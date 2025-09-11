const Invoice = () => {
  return (
    <div className="mx-auto px-4 md:px-10 ">
      <section className="relative grid md:grid-cols-2 md:gap-[140px] gap-[80px] md:mt-[224px] mt-[180px]">
        {/* text */}
        <div>
          <h3 className="text-[#5E44E6] md:text-xl text-lg font-bold">
            Why Nexgen
          </h3>
          <h2 className="mt-2 text-3xl font-bold text-white md:mt-4 md:text-5xl">
            Make invoice anytime, <br /> anywhere
          </h2>

          {/* dotted line */}
          <img
            className="mt-10 mb-10 w-74 md:mt-20 md:mb-20"
            src="./icon/dotted line.png"
            alt="dotted line"
          />

          <h3 className="text-2xl font-bold text-white md:text-4xl">
            Always know what you pay
          </h3>

          {/* little line */}
          <svg
            className="mt-4 md:mt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="4"
            viewBox="0 0 84 4"
            fill="none"
          >
            <path
              d="M2.00977 2L82.0098 1.99999"
              stroke="#04ACEB"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex items-center gap-2 mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="39"
              viewBox="0 0 27 39"
              fill="none"
            >
              <g clipPath="url(#clip0_355_1061)">
                <path
                  d="M27.0098 19.3846C15.7075 21.1275 14.7237 22.5404 13.5098 38.7694C12.2961 22.5404 11.3121 21.1275 0.00976562 19.3846C11.3121 17.6419 12.2961 16.2291 13.5098 0C14.7237 16.2291 15.7075 17.6419 27.0098 19.3846Z"
                  fill="url(#paint0_linear_355_1061)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_355_1061"
                  x1="7.9169"
                  y1="13.792"
                  x2="20.721"
                  y2="26.5958"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#04ACEB" />
                  <stop offset="1" stopColor="#5E44E6" />
                </linearGradient>
                <clipPath id="clip0_355_1061">
                  <rect
                    width="27"
                    height="38.7694"
                    fill="white"
                    transform="translate(0.00976562)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h4 className="text-lg font-semibold text-white md:text-xl">
              No Hidden Fees – Ever!
            </h4>
          </div>

          <p className="md:text-base text-xs text-[#F6F6F6] mt-5">
            Pay Only When You Spend – A small fee applies only when you make a{" "}
            <br /> purchase or request a payment.
          </p>

          <p className="md:text-base text-xs text-[#F6F6F6] mt-2 font-normal">
            No Subscriptions, No Surprises – Just smooth, transparent <br />{" "}
            transactions with Nexgen
          </p>

          {/* -------------------------------------------------------------- */}
          <h3 className="md:text-4xl text-2xl font-bold text-white md:mt-[62px] mt-12">
            Chat with Nexgen
          </h3>

          {/* little line */}
          <svg
            className="mt-4 md:mt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="4"
            viewBox="0 0 84 4"
            fill="none"
          >
            <path
              d="M2.00977 2L82.0098 1.99999"
              stroke="#04ACEB"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <p className="md:text-base text-xs text-[#F6F6F6] md:mt-5">
            It costs nothing to pay With Nexgen, you'll only <br /> be charged a
            fee when you buy something <br /> or request a payment.
          </p>
        </div>

        {/* animation card */}
        <div>
          {/* 1st svg */}
          <svg
            className="md:mt-[210px] mt-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            width="191"
            height="227"
            viewBox="0 0 191 227"
            fill="none"
          >
            <path
              d="M190.754 0.477557C182.969 0.477757 169.49 -0.547666 161.018 2.31555C149.286 6.45537 138.434 12.7116 127.984 19.1415C80.6176 50.0273 51.9903 94.4166 39.8511 149.36C36.8144 163.34 35.722 177.987 33.6444 193.929C20.707 186.334 14.0008 171.625 1.07123 163.053C-0.60569 169.554 2.60979 173.813 5.18056 177.416C15.786 192.157 26.7162 206.901 37.9741 221.321C43.4432 228.204 47.6622 228.89 53.5581 223.075C66.0023 211.124 73.5934 196.529 76.0038 179.613C76.009 178.962 75.0421 177.977 73.7554 176.338C59.7543 179.808 62.8601 197.746 50.7852 204.163C45.7664 181.65 49.838 160.188 55.854 139.392C62.2028 117.622 70.4934 96.8447 83.6397 78.3861C96.4585 60.2506 112.498 45.7234 130.154 32.1862C147.488 18.3208 151.07 14.2105 190.754 0.477557Z"
              fill="#04ACEB"
            />
          </svg>

          {/* 2nd svg */}
          <svg
            className="md:mt-[20px] mt-4 md:ml-[150px] ml-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            width="276"
            height="126"
            viewBox="0 0 276 126"
            fill="none"
          >
            <path
              d="M0.786133 29.8891C4.70136 18.3078 14.1133 13.6094 23.3476 10.394C36.252 6.09002 49.7567 3.10635 63.0839 1.60553C124.655 -3.71526 179.054 14.9525 226.258 53.598C238.224 63.4659 248.955 75.1982 261.403 87.3749C267.508 72.2837 263.474 55.2959 268.92 39.3787C274.713 43.7902 274.78 49.5591 274.967 54.3394C275.652 73.9548 276.058 93.7891 275.965 113.567C275.838 123.071 272.65 126.469 263.669 125.455C244.93 123.589 228.618 116.236 215.231 103.452C214.791 102.902 214.969 101.419 214.986 99.1663C229.404 92.7789 238.706 110.111 253.428 107.515C242.723 85.0149 224.863 69.4717 205.768 55.7929C185.735 41.5072 164.687 29.3612 140.992 22.4271C117.797 15.5493 94.2287 13.8898 69.9252 14.1511C45.6808 13.918 23.0009 19.6229 0.786133 29.8891Z"
              fill="#5E44E6"
            />
          </svg>

          {/* 1st button */}
          <button className="absolute md:top-32 top-[180px] md:left-[225px] left-20 md:h-[90px] h-[60px] md:w-[210px] w-[150px] bg-slate-700 border rounded-lg text-white md:text-lg text-sm font-semibold">
            Request
          </button>

          {/* 2nd button */}
          <button className="absolute md:top-[108px] top-[242px] md:left-[183px] left-0 md:h-[90px] h-[60px] md:w-[210px] w-[150px] bg-slate-700 border rounded-lg text-white md:text-lg text-sm font-semibold shadow-2xl shadow-purple-700">
            Nexgen
          </button>

          {/* 3rd button */}
          <button className="absolute md:top-[146px] top-[278px] md:right-32 right-[250px] md:h-[90px] h-[60px] md:w-[210px] w-[150px] bg-slate-700 border rounded-lg text-white text-lg font-semibold shadow-2xl shadow-blue-600">
            Request
          </button>
        </div>
      </section>
    </div>
  );
};

export default Invoice;
