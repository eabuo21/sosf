import React from "react";
import Carousel from "@/components/shared/cards/carouselcards";

const cardData = [
  {
    image:
      "https://www.patriotsoftware.com/wp-content/uploads/2017/05/how-to-find-private-investors-small-business.jpg",
    title: "What We Do",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/about/beneficiaries",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/happy-successful-hispanic-farmer-showing-600nw-1832551588.jpg",
    title: "Problems We solve",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/about/beneficiaries",
  },
  {
    image:
      "https://i0.wp.com/aceworldpub.com.ng/wp-content/uploads/2021/03/Survival-funds.jpg?fit=900%2C566&ssl=1",
    title: "Where We Work",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/about/beneficiaries",
  },
  {
    image:
      "https://www.patriotsoftware.com/wp-content/uploads/2017/05/how-to-find-private-investors-small-business.jpg",
    title: "What We Do",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/about/beneficiaries",
  },
];

const BeneficiariesCarousel = () => {
  return (
    <Carousel
      cards={cardData}
      className="custom-carousel-class"
      prevButtonClass="custom-prev-button-class"
      nextButtonClass="custom-next-button-class"
    />
  );
};

export default BeneficiariesCarousel;
