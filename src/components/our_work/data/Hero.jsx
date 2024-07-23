import React from "react";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
// import "swiper/css";
import { motion } from "framer-motion";
import "swiper/css/effect-fade";

const slideImages = [
  {
    img: "/assets/images/our_work/hero_1.jpg",
  },
  {
    img: "/assets/images/our_work/hero_2.jpg",
  },
  {
    img: "/assets/images/our_work/hero_3.jpg",
  },
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
    );
  };

  // console.log(images[0]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 8000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);
  console.log(currentIndex);

  const texts = [
    "Our data-driven approach that shapes our interventions and maximizes their effectiveness across Africa.",

    "Data-driven decisions empowers us to to dentify and address educational, entrepreneurial, and employability gaps.",

    "Data-driven decisions empowers Optimize resource allocation for maximum impact.",
  ];

  return (
    <section className="relative h-[15rem] border w-full">
      <div className="absolute w-[15%] border-l-pink border-l-8 text-center lg:h-20 z-10 ml-[5%] bg-cyan top-0 ">
        <h1 className="text-4xl font-bold">DATA</h1>
      </div>
      <div className="absolute font-bold text-xl bottom-0 w-1/2 z-10 right-2">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
          {texts[currentIndex]}
        </motion.span>
      </div>

      <Image
        src={slideImages[currentIndex].img}
        alt={`Slide ${currentIndex + 1}`}
        fill
        className={`object-cover rounded-bl-full   overflow-hidden object-center  transition-opacity duration-1000 `}
      />
    </section>
  );
};

{
  /* <p>
  Skills Outside School Foundation is the leading pan-African Education,
  Entrepreneurship & Employability organization
</p>; */
}
export default Hero;
