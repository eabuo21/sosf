/** @format */

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";
import Link from "next/link";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { FaChevronRight } from "react-icons/fa";

function Report() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const router = useRouter();

  const handleRoute = () => {
    router.push("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[600px] p-2">
        <div
          className="items-section flex flex-col shadow-xl justify-start items-start w-[350px] bg-milk  h-[800px] lg:w-[1100px] lg:h-[500px] lg:grid lg:grid-cols-2     
        md:w-full md:h-[500px] md:grid md:grid-cols-2
        "
        >
          <section className="swiper-container w-[350px]    lg:w-[550px] lg:h-[500px]   md:w-[50%] md:h-[500px] ">
            <Swiper
              className="swiper-layout"
              spaceBetween={30}
              effect={"fade"}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              modules={[EffectFade, Pagination, Autoplay]}
            >
              <SwiperSlide className="swiper-image-container">
                <div
                  className="image-container-swiper w-[350px]  h-[300px]  lg:w-[550px] lg:h-[500px]     md:w-[400px] md:h-[500px]"
                  data-aos="fade-in"
                  data-aos-easing="ease-in linear"
                  data-aos-mirror="true"
                >
                  <Image
                     src="https://smedigest.com.ng/wp-content/uploads/2021/05/Outgrower-Programmes-and-Fortunes-of-Smallholder-Farmers-in-Nigeria-%E2%80%93-The-Role-of-Financial-Institutions.jpg"
                    alt="Description of image"
                    layout="fill"
                    objectFit="cover"
                    className="my-images"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-image-container">
                <div
                  className="image-container-swiper w-[350px]  h-[300px]  lg:w-[550px] lg:h-[500px]     md:w-[400px] md:h-[500px]"
                  data-aos="fade-in"
                  data-aos-easing="ease-in linear"
                  data-aos-mirror="true"
                >
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIwIAlYSeqqlWlJqXB8r6CGG-99Pj1hHtGA&usqp=CAU"
                    alt="Description of image"
                    layout="fill"
                    objectFit="cover"
                    className="my-images"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-image-container">
                <div
                  className="image-container-swiper w-[350px]  h-[300px]  lg:w-[550px] lg:h-[500px]     md:w-[400px] md:h-[500px]"
                  data-aos="fade-in"
                  data-aos-easing="ease-in linear"
                  data-aos-mirror="true"
                >
                  <Image
                    src="https://t4.ftcdn.net/jpg/02/09/28/67/360_F_209286741_WN2LtkpTQRMH8expyv7k2WxW9TFHUFXr.jpg"
                    alt="Description of image"
                    layout="fill"
                    objectFit="cover"
                    className="my-images"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          <section className="text-paragraphs-container flex flex-col justify-start items-start  gap-12 md:gap-12 px-5 lg:h-[500px] lg:w-[550px]    md:h-[500px] md:w-full">
            <div className="flex flex-row gap-2 justify-center items-center relative md:px-5 top-8">
              <FontAwesomeIcon
                icon={faSlack}
                className="text-pink font-bold text-2xl"
              />
              <h4 className="text-blue font-passion md:text-xl">
                Annual Report
              </h4>
            </div>
            <h3
              onClick={handleRoute}
              className="hover-line text-black relative top-3 text-2xl cursor-pointer md:px-5 md:text-5xl "
            >
              Imagine Dignity            </h3>
            <article className="text-black sans md:text-xl text-left md:px-5">
              Our 2022 Annual Report highlights the ways we went bigger and
              bolder in identifying problems, building markets, and scaling
              solutions to problems of poverty.
            </article>

            <Link
              className="hover-line text-black text-xl md:px-5  lg:relative lg:top-6 lg:text-justify-center lg:items-center lg:flex "
              href="/subpages/aboutus/reports"
            >
              Explore Report <FaChevronRight className="brochure-icon"/>
            </Link>
          </section>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Report;
