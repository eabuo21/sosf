import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/About/Beneficiaries/hero";
import Subhero from "@/components/About/Beneficiaries/subhero";
import Card1 from "@/components/About/Beneficiaries/threecards";
import Card2 from "@/components/About/Beneficiaries/twocardsunder";
import Carousel from "@/components/About/Beneficiaries/beneficiariescarousel";
import Mobcarousel from "@/components/About/Beneficiaries/mobcarouselcards";
import ParalaxBg from "@/components/About/Beneficiaries/paralax";
import GridUnder from "@/components/About/Beneficiaries/grid";
import SwiperHero from "@/components/About/swiperhero";
import AccordionLtRt from "@/components/About/Beneficiaries/subaccordion";

const Beneficiaries = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const router = useRouter();
  const handleRoute = () => {
    router.push("/about");
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    handleScroll();
  }, []);

  return (
    <>
      <Head>
        <title>Beneficiaries</title>
        <meta name="description" content="" />
      </Head>
      <div className=" flex flex-col gap-8  w-full overflow-hidden  ">
        <section className="hero-section  pb-16 ">
          <Hero />
        </section>
        <hr className=" border  border-blue border-opacity-78 md:w-[1200px] mx-auto"></hr>

        <section className=" sub-her-beneficiaries pb-8 pt-8 h-[fixed]">
          <Subhero />
          <AccordionLtRt />
        </section>
        <hr className=" border  border-blue border-opacity-78 md:w-[1200px] mx-auto"></hr>

        <section className="accordion-section pt8 pb-16">
          {/* component goes here  */}
        </section>

        <section className="cards-1-section pb-5 pt-8">
          <Card1 />
          <Card2 />
        </section>
        <hr className=" border  border-blue border-opacity-78 md:w-[1200px] mx-auto"></hr>

        <section className="rider-section pt-8 pb-16">
          <ParalaxBg />
        </section>
        <section className="carousel-section pt-8 pb-16">
          <Carousel />
          <Mobcarousel />
        </section>
        <hr className=" border  border-blue border-opacity-78 md:w-[1200px] mx-auto"></hr>

        <section className="another-section  pt-8 pb-16">
          <GridUnder />
        </section>
      </div>
    </>
  );
};

export default Beneficiaries;

// <div className="back-button-section container p-2   flex justify-start item-start ">
// <FontAwesomeIcon
//   onClick={handleRoute}
//   icon={faChevronLeft}
//   className="text-black font0bold text-2xl cursor-pointer"
// />
// </div>
