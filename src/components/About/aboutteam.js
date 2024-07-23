import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const AboutTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 2500, easing: "ease-in-out" });
  }, []);

  return (
    <div>
      <div className="parallax">
        <div className="parallax-content flex flex-col gap-5 justify-center items-start p-2 px-2 h-[500px] w-full pb-12 md:px-8 md:p-4 md:h-[500px]">
          <h3
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-2xl font-bold font-playfair text-left md:text-6xl"
          >
            Our Work
          </h3>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            className="text-xl text-left md:text-3xl md:w-[80%]"
          >
            We are a tireless team of investors and innovators who come from
            many corners of the globe and go wherever our impact is needed most.
          </p>
          <Link
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            data-aos-delay="50"
            href="/ourwork"
            className="border-white border-2 relative top-5 hover:bg-white hover:text-black rounded-full p-3 text-white bg-transparent flex justify-center items-center text-center text-xl"
          >
            Explore how
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
