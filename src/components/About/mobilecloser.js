import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const MobileCloser = () => {
  const cards = [
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

  return (
    <>
      <div className="md:hidden flex justify-center items-center mx-auto">
        <Swiper
          style={{
            width: "300px",
            height: "500px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper-content"
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="mySwiper-item w-[300px] flex flex-col justify-start items-start gap-12  shadow-xl rounded-lg"
             
            >
              <Image
              style={{
                width: "300px",
                borderTopRightRadius: "0",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "50%",
              }}
                src={card.image}
                alt={card.title}
                width={50}
                height={50}
                className="cards-slide-image w-[300px]"
              />
              <Link href={card.link}>
                <h2 className="text-2xl font-sans text-black hover-line px-4 pt-4 w-[250px]">
                  {card.title}
                </h2>
              </Link>
              <article className="text-base px-4 font-sans text-black mt-12">
                {card.description}
              </article>
              <Link href={card.link} className="hover-line text-base px-4  relative top-8">
                Learn More &rarr;
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MobileCloser;
