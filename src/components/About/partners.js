import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    smooth: true,
    adaptiveHeight: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    useCss: true,
    useTransform: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={`custom-dot flex flex-col justify-center items-center   ${
            i === activeIndex ? "active  border-2 border-blue" : "  border-2 border-yellow " // Add a class for the active dot
          }`}
        ></div>
      );
    },
  };

  // array of partners content
  const pats = [
    
    // Add more testimonials as needed
    {
      content: " Partner Name",
      image:
        "https://www.shutterstock.com/image-photo/excited-entrepreneur-40s-dressed-white-600nw-1873826818.jpg",
      author: "JOHN CARTER",
    },

    {
      content: " Partner Name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPZ-x3xxXptzOTIGTlej757gdWLChDUQyAg&usqp=CAU",
      author: "EMMA RODGRIGUEZ",
    },
    {
      content: " Partner Name",
      image:
        "https://img.freepik.com/premium-photo/happy-success-portrait-black-man-startup-ceo-proud-confident-leader-african-business-vision-future-businessman-africa-with-leadership-corporate-company-with-smile-office_590464-89006.jpg",
      author: "DAVID WILSON",
    },


    {
        content: " Partner Name",
        image:
          "https://img.freepik.com/premium-photo/happy-success-portrait-black-man-startup-ceo-proud-confident-leader-african-business-vision-future-businessman-africa-with-leadership-corporate-company-with-smile-office_590464-89006.jpg",
        author: "DAVID WILSON",
      },
  ];

  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in"
        data-aos-duration="2500"
        data-aos-delay="50"
        data-aos-throttle="true"
        className="main-slider-container p-1 flex flex-col justify-center items-center pb-8 h-[fixed]
      
      "
      >
        <Slider
          {...settings}
          className="w-full h-[fixed] flex flex-row justify-between  items-start gap-16 md:gap-9  p-2 pt-8  "
        >
          {/* Render each partner dynamically */}
          {pats.map((pat, index) => (
            <div
              key={index}
              className="slide-1 flex flex-col gap-3 justify-center items-start w-[200px] p-2 bg-transparent  rounded-md  shadow-xl     md :shadow-xl md :rounded-md  md:gap-8 md:items-center "
            >
              <section className=" flex flex-row gap-4 justify-start items-start p-2">
                <div className=" flex flex-col  gap-5  w-[300px] h-[fixed]   justify-center items-center  p-2 rounded-md shadow-current shadow-md              md:hover:bg-blue-400  md:hover:text-white  md:hover:transition-all  md:hover:duration-1000 md:hover:ease-in-out   md:transition-all md:duration-1000  md:ease-in-out">
                  <Image
                    className="rounded-[50%] flex flex-col justify-center items-center p-2 w-[100px] h-[100px]    md:w-[300px] md:h-[170px] shadow-current shadow-md   bg-white"
                    src={pat.image}
                    alt="pat.author"
                    height={150}
                    width={300}
                  />
                </div>
                <section className="flex flex-col gap-2 p-2 justify-center items-center ">
                  <p className="text-[12px] font-serif text-black text-center pb-6       md:text-sm ">
                    <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#c168aa] to-blue-700 font-sans text-4xl   lg:w-full">
                      {" "}
                      “
                    </span>
                    {pat.content}
                    <span className="quotation  text-[12px] font-normal text-blue-950 bg-clip-text bg-gradient-to-b from-[#c168aa] to-blue-950 font-sans  ">
                      ”
                    </span>
                  </p>
                </section>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Partners;
