import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const BeneficiariesCards = ({ cards }) => {
  useEffect(() => {
    Aos.init({ duration: 2500, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex flex-col gap-6 justify-center items-center p-2 px-2 bg-gray-100 h-[fixed] w-full pb-12 md:p-2 md:h-[600px] md:gap-1 md:grid md:grid-cols-3">
      {cards.map((card, index) => (
        <div
        data-aos="zoom-in-up"
        data-aos-duration="2500"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-easing="ease-in-out linear"
          key={index}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,3, 0.7), rgba(0,0,3,0.7)), url(${card.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="card-container container cut-edge flex flex-col justify-start pt-7 items-start p-2 gap-5 w-[350px] h-[400px] shadow-lg lg:w-[350px] md:h-[450px] md:w-[250px] md:mx-auto rounded-tl-[10%] rounded-bl-[10%] px-4 rounded-tr-[10%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.9 }}

        >
          <h3
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            className="text-white font-bold font-passion text-left text-2xl md:text-4xl"
          >
            {card.title}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            data-aos-delay="50"
            className="text-white font-sans text-sm md:text-base"
          >
            {card.content}
          </p>
          <Link
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            href={card.link}
            className="border border-white left-3 p-2 w-[40px] md:top-[0] relative top-[0] rounded-[100%] text-white font-bold hover:bg-white hover:text-black"
          >
            &rarr;
          </Link>
        </div>
      ))}
    </div>
  );
};

BeneficiariesCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BeneficiariesCards;
