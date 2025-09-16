import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baby from "./baby.png";
import image1 from "./grandfather.png";
import image2 from "./man.png";
import image3 from "./tax-inspector.png";
import image4 from "./man (1).png";
import image5 from "./young-man.png";
import star from "./star.png";
import { motion } from "framer-motion";

const TestimonialSlider = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1280, // Tablet & smaller
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Albert Flores",
      role: "Role at @Company name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 4,
      image: image1,
    },
    {
      name: "John Doe",
      role: "Manager at XYZ",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      stars: 5,
      image: image2,
    },
    {
      name: "Sarah Smith",
      role: "Designer at ABC",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      stars: 4,
      image: image3,
    },
    {
      name: "David Johnson",
      role: "Developer at LMN",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      stars: 5,
      image: image4,
    },
    {
      name: "Emma Wilson",
      role: "CEO at Startup",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      stars: 5,
      image: image5,
    },
  ];

  return (
    <div id="review" className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      {/* Baby image + title */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex mt-10 md:mt-20 flex-col justify-center items-center text-center mb-12 md:mb-20"
      >
        <img
          className="w-28 h-28 sm:w-40 sm:h-40 md:w-[400px] md:h-[350px] object-contain"
          src={baby}
          alt="baby"
        />
        <h2 className="mt-4 text-xl sm:text-2xl md:text-5xl font-bold text-stone-100">
          Pay with peace of mind
        </h2>
      </motion.section>

      {/* Slider Section */}
      <div className="max-w-[1200px] mx-auto overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3 sm:px-4 overflow-hidden">
              <div className="rounded-2xl bg-black border border-stone-500  p-4 sm:p-6 md:p-8 !min-h-[160px] md:!min-h-[250px] flex flex-col">
                {/* Profile Section */}
                <motion.div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={item.image}
                    alt="profile"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-full"
                  />
                  <div>
                    <h1 className="text-sm sm:text-base md:text-lg font-bold text-stone-100">
                      {item.name}
                    </h1>
                    <p className="text-stone-300 text-xs sm:text-sm">
                      {item.role}
                    </p>

                    {/* Stars */}
                    <div className="flex mt-1">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <img
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                          src={star}
                          alt="star"
                        />
                      ))}
                      {item.stars < 5 &&
                        Array.from({ length: 5 - item.stars }).map((_, i) => (
                          <img
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 opacity-50"
                            src={star}
                            alt="star"
                          />
                        ))}
                    </div>
                  </div>
                </motion.div>

                {/* Review Text */}
                <p  className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Slider >
      </div >
    </div>
  );
};

export default TestimonialSlider;
