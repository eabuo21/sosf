import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const MeetFounder = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className=" grid grid-cols-1 justify-start items-start   w-full h-[700px]    md:grid-cols-2 lg:w-[1100px]    md:w-[800px] md:mx-auto md:h-[500px] ">
      <div className=" flex justify-start items-start   w-full h-[300px]   wmd:w-[50%] md:h-[500px] bg-blue  md:rounded-tl-[10%]  md:rounded-bl-[10%]">
        <Image
          src="https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Eberechukwu-Oji.jpg"
          alt="image"
          width={500}
          height={500}
          className="w-full  h-[300px]   md:w-auto md:h-[500px]  md:rounded-tl-[10%]  md:rounded-bl-[10%] "
        />
      </div>
      <div className=" flex  flex-col gap-4 justify-center  px-3 items-start p-4  w-full h-[400px]   wmd:w-[50%] md:h-[500px] bg-blue     md:gap-8  md:rounded-tr-[10%]  md:rounded-br-[10%] ">
        <h3
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="500"
          className="text-2xl font-bold font-lato text-left  text-white   md:text-4xl"
        >
          Meet our Founder and CEO
        </h3>
        <article
          data-aos="fade-up"
          data-aos-easing="ease-in"
          className="text-white text-xl font-sans   md:text-2xl"
        >
          Jacqueline Novagratz is a trailblazing social innovator and
          best-selling author whose work has inspired people around the world
          and taken impact investing from a fringe concept to a mainstream
          phenomenon.
        </article>
        <Link
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="2000"
          data-aos-delay="50"
          href="/subpages/Profiles/founderprofile"
          className="border-white border-2 relative top-5  hover:bg-white hover:text-black rounded-full p-3 text-white bg-transparent  justify-center items-center flex text-center  text-xl"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default MeetFounder;
