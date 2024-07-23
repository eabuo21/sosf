import React, { useEffect } from "react";
import Heading from "@/components/shared/headings/headings";
import Aos from "aos";
import "aos/dist/aos.css";

const SubHero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="flex flex-col   bg-gray-100 justify-start items-start px-3 gap-8  w-full h-[300px]  md:gap-0  md:grid md:grid-cols-2 md:justify-center md:items-start md:px-5">
      <section data-aos="fade-up" className="fist-section-subhero   ">
        <Heading className="text-xl text-opacity-75    md:text-5xl">
          Solving problems and changing lives, one investment at a time.
        </Heading>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-delay="50"
        data-aos-throttle="true"
        className="second-section-subhero"
      >
        <Heading className="text-base   font-normal  md:text-2xl  w-full  ">
          We’ve always believed that the marketplace can solve problems of
          poverty if directed toward impact. We invest in companies transforming
          lives in three ways.
        </Heading>
      </section>
    </div>
  );
};

export default SubHero;
