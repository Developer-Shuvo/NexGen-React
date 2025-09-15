import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Project Alpha",
    description: "A dynamic web application built for a client.",
    backgroundColor: "bg-gradient-to-br from-green-800 to-emerald-900",
    innerColor: "bg-emerald-200",
  },
  {
    title: "Books World",
    description: "A dynamic web application built for a Book store.",
    backgroundColor: "bg-gradient-to-br from-cyan-900 to-blue-900",
    innerColor: "bg-cyan-200",
  },
  {
    title: "Portfolio Hub",
    description: "Showcase platform for designers and developers.",
    backgroundColor: "bg-gradient-to-br from-slate-900 to-gray-800",
    innerColor: "bg-slate-300",
  },
  {
    title: "Design Beta",
    description: "UI/UX design for a mobile e-commerce platform.",
    backgroundColor: "bg-gradient-to-br from-indigo-900 to-blue-800",
    innerColor: "bg-indigo-200",
  },
  {
    title: "Branding Gamma",
    description: "Full brand identity and logo design for a startup.",
    backgroundColor: "bg-gradient-to-br from-purple-900 to-fuchsia-800",
    innerColor: "bg-purple-200",
  },
];

const FeaturedWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  const updateItemsToShow = () => {
    if (window.innerWidth < 768) {
      setItemsToShow(1); // মোবাইল
    } else if (window.innerWidth < 1024) {
      setItemsToShow(2); // ট্যাবলেট
    } else {
      setItemsToShow(2); // ডেস্কটপ
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => {
      const maxIndex = cardData.length - itemsToShow;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => {
      const maxIndex = cardData.length - itemsToShow;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const visibleCards = cardData.slice(activeIndex, activeIndex + itemsToShow);

  return (
    <div className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      <section className="mt-[80px] flex flex-col items-center">
        {/* Headline */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-stone-100">
            Our Featured Work
          </h1>
          <p className="mt-3 md:mt-6 text-sm md:text-base lg:text-lg font-semibold text-stone-300">
            Explore our diverse range of creative projects.
          </p>
        </motion.div>

        {/* Card Slider */}
        <div className="w-full relative overflow-hidden flex justify-center">
          <div
            className={`flex justify-center md:gap-6 lg:gap-8 gap-3 mt-[40px] md:mt-[60px] transition-transform duration-500 ease-in-out`}
          >
            {visibleCards.map((card, index) => (
              <div
                key={index}
                className={`p-2 
                  h-[220px] w-[90%] max-w-[300px] 
                  md:h-[300px] md:max-w-[400px] 
                  lg:h-[409px] lg:max-w-[641px]
                  rounded-2xl relative group perspective`}
              >
                {/* Outer Card */}
                <div
                  className={`h-full w-full rounded-2xl border ${card.backgroundColor} 
                    flex flex-col items-center justify-center transition-transform
                    duration-500 ease-out transform-gpu group-hover:rotate-x-6 group-hover:-rotate-y-6 group-hover:scale-[1.02] shadow-2xl`}
                >
                  {/* Inner Card */}
                  <div
                    className={`relative 
                      h-[200px] w-[90%] 
                      md:h-[280px] md:w-[360px] 
                      lg:h-[393px] lg:w-[624px] 
                      flex items-center justify-center rounded-xl overflow-hidden ${card.innerColor} 
                      bg-opacity-90 backdrop-blur-md shadow-xl`}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Content */}
                    <div className="relative text-center p-4 md:p-6">
                      <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-gray-900 drop-shadow-lg">
                        {card.title}
                      </h3>
                      <p className="mt-2 md:mt-3 text-xs md:text-sm lg:text-xl text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center mt-[20px] md:mt-[40px] gap-3 md:gap-6">
          <button
            onClick={prevSlide}
            className="p-2 md:p-4 border border-white rounded-full transition-colors 
              duration-200 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="md:w-[28px] md:h-[28px] lg:w-[31px] lg:h-[31px]"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M25.5 14.2461H10.2875L17.275 
                  7.25859L15.5 5.49609L5.5 15.4961L15.5 25.4961L17.2625
                   23.7336L10.2875 16.7461H25.5V14.2461Z"
                fill="#F6F6F6"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 md:p-4 border border-white rounded-full transition-colors 
              duration-200 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="md:w-[28px] md:h-[28px] lg:w-[31px] lg:h-[31px]"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M5.5 14.2461H20.7125L13.725 7.25859L15.5 5.49609L25.5 15.4961L15.5 25.4961L13.7375 23.7336L20.7125 16.7461H5.5V14.2461Z"
                fill="#F6F6F6"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturedWork;
