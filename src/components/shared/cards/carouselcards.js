import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import PropTypes from "prop-types";

const Carousel = ({ cards, className, prevButtonClass, nextButtonClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the three visible cards based on the current index
  const visibleCards = [
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
    cards[(currentIndex + 2) % cards.length],
  ];

  return (
    <div
      className={`relative hidden md:flex md:h-[500px] md:w-full justify-center items-center ${className}`}
    >
      <button
        onClick={handlePrevClick}
        className={`absolute left-4 z-10 p-3 hover:bg-blue hover:bg-opacity-45 hover:text-white shadow-lg ${prevButtonClass}`}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-black font-bold text-2xl"
        />
      </button>
      <div className="flex gap-[2rem] lg:gap- justify-center items-center transition-opacity duration-500">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-1"
            } lg:w-[350px] lg:h-[450px] md:w-[250px] md:h-[500px] bg-milk flex flex-col justify-start items-start gap-5`}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={350}
              height={200}
              className=" w-[350px] h-[200px]"
            />
            <Link href={card.link}>
              <h2 className="text-2xl font-sans text-black hover:underline">
                {card.title}
              </h2>
            </Link>
            <article className="text-base font-sans text-black mt-1">
              {card.description}
            </article>
            <Link href={card.link} className="hover-line text-base">
              Learn More &rarr;
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className={`absolute right-0 z-10 p-3 hover:bg-blue hover:bg-opacity-45 hover:text-white shadow-lg ${nextButtonClass}`}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-black font-bold text-2xl"
        />
      </button>
      <div className="absolute bottom-0 flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 border-2 rounded-full relative top-9 ${
              index === currentIndex ? "bg-blue" : "bg-transparent"
            } transition-colors duration-500`}
          ></div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  prevButtonClass: PropTypes.string,
  nextButtonClass: PropTypes.string,
};

export default Carousel;
