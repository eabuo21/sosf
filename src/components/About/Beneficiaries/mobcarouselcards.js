import React from "react";
import MobileCarousel from "@/components/shared/cards/mobbencards";

const cardData = [
  {
    image:
      "https://www.patriotsoftware.com/wp-content/uploads/2017/05/how-to-find-private-investors-small-business.jpg",
    title: "What We Do",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/link1",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/happy-successful-hispanic-farmer-showing-600nw-1832551588.jpg",
    title: "Problems We Solve",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/link2",
  },
  {
    image:
      "https://i0.wp.com/aceworldpub.com.ng/wp-content/uploads/2021/03/Survival-funds.jpg?fit=900%2C566&ssl=1",
    title: "Where We Work",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/link3",
  },

  {
    image:
      "https://www.shutterstock.com/image-photo/happy-successful-hispanic-farmer-showing-600nw-1832551588.jpg",
    title: "Problems We Solve",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/link2",
  },

  {
    image:
      "https://www.shutterstock.com/image-photo/happy-successful-hispanic-farmer-showing-600nw-1832551588.jpg",
    title: "Problems We Solve",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/link2",
  },

  {
    image:
      "https://www.shutterstock.com/image-photo/happy-successful-hispanic-farmer-showing-600nw-1832551588.jpg",
    title: "Problems We Solve",
    description:
      "By preparing entrepreneurs and deploying Patient Capital, we give people in poverty the power to transform their lives.",
    link: "/link2",
  },
];

const Mobcarousel = () => {
  return (
    <MobileCarousel
      cards={cardData}
      swiperStyle={{ width: "320px", height: "520px" }}
      swiperClass="custom-swiper-class"
    />
  );
};

export default Mobcarousel;
