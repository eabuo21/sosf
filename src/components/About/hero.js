import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <div className="container flex flex-col gap-6 w-full h-[fixed] p-2 pb-16 md:justify-center md:items-center md:h-[fixed] md:grid md:grid-cols-2">
        {/* hero-first-section-text-container */}
        <section
          data-aos="fade-down"
          className="text-container flex flex-col gap-8 px-2 md:justify-center  w-full  items-start md:px-8 py-2 m-1"
        >
          <h3 className="text-3xl font-passion text-left font-bold md:text-6xl text-black">
            About us
          </h3>
          <article className="text-xl font-serif text-left md:text-3xl text-black">
            Skills Outside School Foundation is the leading pan-African
            Education, Entrepreneurship & Employability organization.
          </article>
        </section>

        <section className="swiper-container   w-full">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="my-swiper"style={{
              borderBottomLeftRadius: "40%", borderTopRightRadius: "40%",
            }}
          >
            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://smedigest.com.ng/wp-content/uploads/2021/05/Outgrower-Programmes-and-Fortunes-of-Smallholder-Farmers-in-Nigeria-%E2%80%93-The-Role-of-Financial-Institutions.jpg"
                  alt="Description of image"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://media.licdn.com/dms/image/D5612AQG4kIPDWJ-E8Q/article-cover_image-shrink_720_1280/0/1693270385213?e=2147483647&v=beta&t=hZtYxrn5v6hYz2q_VIiNI8J2HZxAeiBQcOYZwhfxPhI"
                  alt="mechanized farming"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/FC36/production/_96266546_gettyimages-629062194.jpg"
                  alt="mechanized farming"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://cdn.vanguardngr.com/wp-content/uploads/2019/09/Cassava.jpg"
                  alt="mechanized farming"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/07/maize-prefered-696x392-1.jpg?fit=696%2C392&ssl=1"
                  alt="mechanized farming"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1200/1*NfPGKXZHKZSwo8hEPanMNQ.jpeg"
                  alt="mechanized farming"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://t4.ftcdn.net/jpg/02/09/28/67/360_F_209286741_WN2LtkpTQRMH8expyv7k2WxW9TFHUFXr.jpg"
                  alt="mechanized farming"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-container"
                data-aos="fade-in"
                data-aos-easing="ease-in linear"
                data-aos-mirror="true"
              >
                <Image
                  src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/07/maize-prefered-696x392-1.jpg?fit=696%2C392&ssl=1"
                  alt="mechanized farming"
                  layout="fill"
                  objectFit="cover"
                  className="curved-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          height: 400px;
        }
        .swiper {
          width: 80%;
          height: auto;

          border-top-left-radius: 50% 40%;
          border-bottom-right-radius: 40% 20%;
        }

        .swiper-layout {
          width: 700px;
          height: 500px;
          border-top-left-radius: 20px;
          border-bottom-right-radius: 0;
        }

        .swiper-slide img {
          width: 80%;
          height: 50%;

          border-bottom-right-radius: 40% 20%;
          border-top-left-radius: 50% 40%;
        }
        .swiper-image-container .my-images {
          border-bottom-right-radius: 0;
          border-top-left-radius: 0;
          transition: transform 0.7s ease-in-out;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        .my-images:hover {
          transition: 0.7s ease-in-out;
        }

        @media only screen and (max-width: 768px) {
          .swiper {
            width: 100%;
            height: auto;
            border-top-left-radius: 0;
            border-bottom-right-radius: 0;
          }

          .swiper-slide img {
            width: 80%;
            height: 50%;
            border-bottom-right-radius: 0;
            border-top-left-radius: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
