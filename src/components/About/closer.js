import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Closer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image:
        "https://www.patriotsoftware.com/wp-content/uploads/2017/05/how-to-find-private-investors-small-business.jpg",
      title: "Wave of New Commitments Marks Historic Step Towards the Elimination of Cervical Cancer",
      description:
        "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
      link: "/about/beneficiaries",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-successful-hispanic-farmer-showing-600nw-1832551588.jpg",
      title: "Wave of New Commitments Marks Historic Step Towards the Elimination of Cervical Cancer",
      description:
        "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
      link: "/about/beneficiaries",
    },
    {
      image:
        "https://i0.wp.com/aceworldpub.com.ng/wp-content/uploads/2021/03/Survival-funds.jpg?fit=900%2C566&ssl=1",
      title: "Wave of New Commitments Marks Historic Step Towards the Elimination of Cervical Cancer",
      description:
        "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
      link: "/about/beneficiaries",
    },
    {
      image:
        "https://www.patriotsoftware.com/wp-content/uploads/2017/05/how-to-find-private-investors-small-business.jpg",
      title: "Wave of New Commitments Marks Historic Step Towards the Elimination of Cervical Cancer",
      description:
        "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
      link: "/about/beneficiaries",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-successful-hispanic-farmer-showing-600nw-1832551588.jpg",
      title: "Wave of New Commitments Marks Historic Step Towards the Elimination of Cervical Cancer",
      description:
        "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
      link: "/about/beneficiaries",
    },
    {
      image:
        "https://i0.wp.com/aceworldpub.com.ng/wp-content/uploads/2021/03/Survival-funds.jpg?fit=900%2C566&ssl=1",
      title: "Wave of New Commitments Marks Historic Step Towards the Elimination of Cervical Cancer",
      description:
        "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
      link: "/about/beneficiaries",
    },
  ];

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
    <div className="relative hidden md:flex md:h-[500px] md:w-full justify-center items-center">
      <button
        onClick={handlePrevClick}
        className="absolute left-4 z-10 p-3  hover:bg-blue hover:bg-opacity-45 hover:text-white shadow-lg"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-black font-bold text-2xl"
        />
      </button>
      <div className="flex gap-[2rem] lg:gap-7 justify-center items-center transition-opacity duration-500">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-1"
            } lg:w-[350px] lg:h-[500px] md:w-[250px] md:h-[500px]  flex flex-col justify-start items-start gap-5`}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={350}
              height={300}
              className=" w-[350px] h-[300px]"
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
        className="absolute right-0 z-10 p-3  hover:bg-blue hover:bg-opacity-45 hover:text-white shadow-lg"
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
            className={`w-4 h-4 border-2 rounded-full   relative top-[4rem] ${
              index === currentIndex ? "bg-blue" : "bg-transparent"
            } transition-colors duration-500`}
          ></div>
        ))}
      </div>
      
    </div>
  );
}
