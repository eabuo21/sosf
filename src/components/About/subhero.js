import React, {useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const SubHero = () => {
  useEffect(() => {
    Aos.init({ duration: 2500, easing: "ease-in-out-sine" });
  }, []);

  return (
    <>
      <div className="  flex flex-col gap-5 justify-center items-start p-2 px-2 bg-blue h-[600px]  w-full pb-12 md:px-4  md:p-4 md:h-[700px]">
        <div className="tex-title-container px-2  w-full  md:w-[75%] md:px-8 py-5 flex flex-col gap-6  pt-12 md:gap-9">
          <h4
            data-aos="fade-right"
            className="text-white font-bold font-passion text-3xl        md:text-5xl"
          >
            We were founded on the radical idea that business can solve the
            hardest problems of poverty.
          </h4>
          <p
            data-aos="fade-up"
            className="text-xl font-normal  font-playfair  text-white  md:text-3xl"
          >
            We are shaping productive human capital for transformational
            sustainable socio-economic development through our unique,
            innovative & disruptive model: Data, Interventions & Advocacy. We
            address social inequity in Africa through Education,
            Entrepreneurship & Employability, with our disruptive approach to
            development & philanthropy.
          </p>
        </div>
      </div>
    </>
  );
};

export default SubHero;
