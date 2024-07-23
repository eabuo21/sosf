import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  FaDollarSign,
  FaUserShield,
  FaHandshake,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import ParalaxBg from "@/components/About/Beneficiaries/paralax";
import Button from "@/components/shared/buttons/button1";
import ImpactMetrics from "@/components/shared/metrics/impactMetrics";
import Testimonials from "@/components/shared/testimonials/testimonials";
import BottomCallToAction from "@/components/home/bottomCallToAction";
import OurPillars from "@/components/About/pillars";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BrochureCheckout from "@/components/home/BrochureCheckout ";
import Partners from "@/components/shared/partners/partners";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      src: "/assets/images/mapp.jpg",
      title: "Skills Outside School Foundation",
      subtitle: "Empowering Youth",
      content:
        "The Skills Outside School Foundation is the leading pan-African education, employability and entrepreneurship organization with a vision for a productive human capital driving transformational socio-economic development globally. ",
    },
    {
      src: "/assets/images/hand.jpg",
      title: "Community Engagement",
      subtitle: "Volunteer Opportunities",
      content:
        "Join us in making a difference through our various volunteer programs that aim to uplift and support our communities.",
    },
    {
      src: "/assets/images/books.jpg",
      title: "Educational Initiatives",
      subtitle: "Building Knowledge",
      content:
        "Our educational initiatives provide access to quality education and resources to help students thrive academically.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  },);

  return (
    <>
      {/* seo optimization and open-graph */}
      <Head>
        <title> Skills Outside School foundation</title>
        <meta name="description" content="" />
        <meta property="og:title" content="SOSF" />
        <meta
          property="og:image"
          content="(https://www.skillsoutsideschool.com/wp-content/uploads/brizy/9/assets/images/iW=370&iH=370&oX=20&oY=20&cW=330&cH=328/Ydg95W9q_400x400-removebg-preview.png)"
        />
        <meta
          property="og:description"
          content="The Skills Outside School Foundation is the leading pan-African education, employability and entrepreneurship organization with a vision for a productive human capital driving transformational socio-economic development globally"
        />
        <meta
          property="og:url"
          content="(https://skillsoutsideschoolfoundation.com)"
        />
        <meta property="og:type" content="article" />
      </Head>
      {/* body content goes in here  */}
      <main className=" min-h-screen  ">
        {/* Hero section */}
        <section className="relative flex flex-col justify-center items-center min-h-screen bg-blue-600">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="filter blur-sm" // Add blur effect
                  priority={index === activeIndex}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}


                {/* // Dark overlay */}

              </div>
            </div>
          ))}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-4/5 flex justify-center items-center ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative z-10 text-white p-4 md:p-8 ">
                <h1 className="text-4xl text-white font-extrabold uppercase tracking-wider mb-4 lg:text-[40px]">
                  {slide.title}
                  <br />
                  <span className="text-lg font-semibold">
                    {slide?.subtitle}
                  </span>
                </h1>
                <p className="text-white text-xm md:text-sm mb-8 w-full md:w-3/5">
                  {slide.content}
                </p>

                <button className="w-32 sm:w-44 cursor-pointer font-bold border bg-secondary_blue  text-white hover:bg-transparent hover:border-white hover:text-white text-xs px-5 sm:text-sm  rounded-md py-3 lg:w-40 xl:w-44 2xl:w-48 lg:py-[.8rem] xl:py-[.9rem] 2xl:py-4 lg:text-[17px] xl:lg:text-[19px] 2xl:text-[21px] lg:px-1">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Partners  */}

        <section className="bg-white px-5 pt-5 md:py-14 flex flex-col justify-center items-center w-full relative z-20">
          <h3 className="text-3xl md:text-4xl text-secondary_blue font-bold text-center mb-2 md:mb-3">
            Trusted Partners{" "}
          </h3>

          <Partners />
        </section>

        {/* sub hero */}
        <div className="bg-[#E9EDFF] py-10 lg:px-16 ">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center p-4 md:p-8 ">
            <div className="w-full xl:w-[50%] md:w-[40%] flex flex-col gap-4">
              <Image
                src="https://smedigest.com.ng/wp-content/uploads/2021/05/Outgrower-Programmes-and-Fortunes-of-Smallholder-Farmers-in-Nigeria-%E2%80%93-The-Role-of-Financial-Institutions.jpg"
                alt=""
                width={500}
                height={300}
                objectFit="cover"
                className="rounded-lg shadow-md xl:w-[500px] h-[200px]"
              />
              <div className="hidden lg:flex flex-row gap-4">
                <Image
                  src="https://images.pexels.com/photos/3059749/pexels-photo-3059749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={195}
                  height={280}
                  objectFit="cover"
                  className="xl:w-[240px] rounded-lg shadow-md h-[180px]"
                />
                <Image
                  src="https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={195}
                  height={280}
                  objectFit="cover"
                  className="xl:w-[240px] rounded-lg shadow-md h-[180px]"
                />
              </div>
            </div>
            <div className=" w-full md:w-[50%] mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-xl md:text-2xl text-secondary_blue font-bold text-center mb-2 md:mb-3">
                Our Work is Aligned with the SD3s
              </h3>
              <p className="text-black text-sm md:text-[0.95rem] mb-4">
                The Sustainable Development Goals (SDGs), also known as the
                Global Goals, were adopted by all United Nations Member States
                in 2015 as a universal call to action to end poverty, protect
                the planet & ensure that all people enjoy peace and prosperity
                by 2030.
              </p>
              <p className="text-black text-sm md:text-[0.95rem] font-bold mb-6">
                Our work supports 9 SDGs directly & all 17 indirectly.
              </p>
              <button className="border-blue border-2 hover:bg-blue hover:text-white rounded-full py-3 px-4 text-blue bg-transparent flex justify-center items-center text-center text-lg">
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <section className="bg-gray-100 m-auto w-full divide-x divide-secondary_blue font-poppins py-10  mb-4">
          <h3 className="text-3xl md:text-4xl text-secondary_blue font-bold text-center mb-2 md:mb-3">
            Our Impact
          </h3>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-x-5 lg:gap-x-5 gap-y-5 md:gap-y-10">
            <ImpactMetrics
              title="Partners Engaged "
              count={200}
              superTitle="+"
              textColor="text-[#484848]"
              colorTitle="text-[#484848]"
            />
            <ImpactMetrics
              title="Beneficiaries Reached"
              count={100000}
              superTitle="+"
              textColor="text-[#484848]"
              colorTitle="text-[#484848]"
            />
            <ImpactMetrics
              title="Volunteers Mobilized "
              count={1200}
              superTitle="+"
              textColor="text-[#484848]"
              colorTitle="text-[#484848]"
            />
            <ImpactMetrics
              title="Years of Impact "
              count={9}
              superTitle=""
              textColor="text-[#484848]"
              colorTitle="text-[#484848]"
            />
            <ImpactMetrics
              title="Countries Reached "
              count={11}
              superTitle=""
              textColor="text-[#484848]"
              colorTitle="text-[#484848]"
            />
          </div>
        </section>
        
        {/* Our Pillars */}
        <section className="">
          <h2 className="text-secondary_blue text-3xl md:text-4xl font-bold text-center mb-2">
            Our Pillars
          </h2>
          <OurPillars />
        </section>
        {/* sub hero section */}
        {/* <section className="mx-auto max-w-7xl px-6 mb-16">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className=" md:block lg:hidden w-full lg:w-1/2  mt-8 lg:mt-0">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg"
                alt=""
                className="cover rounded-lg w-full xl-[300px] lg:h-[400px] md:h-[250px]"
                width={100}
                height={100}
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex flex-col">
                <div className="text-center mb-4">
                  <h2 className="text-3xl md:text-4xl text-secondary_blue  mb-1">
                    Why Choose Us
                  </h2>
                  <p className="text-black font-semibold text-[1.2rem]">
                    Disrupting Development | Redefining Philanthropy.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                  <FaHandshake className="text-blue text-6xl mb-4 md:mb-0" />
                  <div className="py-2 px-4">
                    <h3 className="text-[1.2rem] font-semibold text-black mb-1">
                      Our Mission
                    </h3>
                    <p className="text-black text-sm">
                      Achieving data-driven innovative education, employability,
                      and entrepreneurship interventions and advocacy that drive
                      sustainable growth and development.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center">
                  <FaUserShield className="text-blue text-4xl mb-4 md:mb-0" />
                  <div className="py-2 px-4">
                    <h3 className="text-[1.2rem] font-semibold text-black mb-1">
                      Our Vision
                    </h3>
                    <p className="text-black text-sm">
                      A world with a productive human capital driving
                      transformational socio-economic development globally.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center">
                  <FaDollarSign className="text-blue text-4xl mb-4 md:mb-0" />
                  <div className="py-2 px-4 ">
                    <h3 className="text-[1.2rem] font-semibold text-black mb-1">
                      Ous Philosophy
                    </h3>
                    <p className="text-black text-sm">
                      Through lifelong learning and development, people can be
                      equipped with the right education (mindset, competence and
                      tools) to be productive whether they choose the path of
                      entrepreneurship or employability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-full lg:w-1/2  mt-8 lg:mt-0">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg"
                alt=""
                className="rounded-lg w-full h-[400px] lg-[350px]"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section> */}
        {/* CTA section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-secondary_blue text-3xl md:text-4xl font-bold text-center mb-2">
              Get Involved
            </h2>
            <p className="text-center text-black text-sm mb-6">
              There are several made-to-measure solutions and ways for you to
              disrupt development and redefine philanthropy with us!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-2">
                <div className="flex justify-center mb-4">
                  <FaHandshake className="mx-auto text-secondary_blue text-6xl" />
                </div>
                <h3 className="text-secondary_blue text-xl font-semibold mb-2">
                  Partner
                </h3>
                <p className="text-black text-[0.9rem] mb-4">
                  As NGOs, private & public sector, partner with us to scale our
                  / your programs or initiatives through co-design/delivery;
                  consultancy; grants & more.
                </p>
              </div>
              <div className="text-center p-2">
                <div className="flex justify-center mb-4">
                  <FaUserShield className="text-secondary_blue mx-auto text-6xl" />
                </div>
                <h3 className="text-secondary_blue text-xl font-semibold mb-2">
                  Govern
                </h3>
                <p className="text-black text-[0.9rem] mb-4">
                  Join the team of experienced trustees, advisory council
                  members, management or executive council member.
                </p>
              </div>
              <div className="text-center p-2">
                <div className="flex justify-center mb-4">
                  <FaDollarSign className="text-secondary_blue mx-auto text-6xl" />
                </div>
                <h3 className="text-secondary_blue text-xl font-semibold mb-2">
                  Invest
                </h3>
                <p className="text-black text-[0.9rem] mb-4">
                  Invest liquid/non-liquid assets, CSR capital, grants, or
                  in-kind resources to scale our work. Join 300+ investors in
                  making a significant impact.
                </p>
              </div>
              <div className="text-center p-2">
                <div className="flex justify-center mb-4">
                  <FaHandsHelping className="mx-auto text-secondary_blue text-6xl" />
                </div>
                <h3 className="text-xl text-secondary_blue font-semibold mb-2">
                  {" "}
                  Volunteer
                </h3>
                <p className="text-black text-[0.9rem] mb-4">
                  Volunteer in our / third-party data, advocacy & interventions
                  efforts as mentors, enumerators, trainers and more.
                </p>
              </div>
            </div>
            <div className="flex justify-center item-center mt-6">
              <button className="bg-blue text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                Join now <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Brochure */}
        <section className="bg-gray-100 pt-16">
          <BrochureCheckout />
        </section>
        {/* Testimonial */}
        <Testimonials />
        {/* Contact Us  */}
        <section className="py-16">
          <h2 className="text-secondary_blue text-3xl md:text-4xl font-bold text-center mb-2">
            Contact Us
          </h2>
          <p className="text-center text-black text-sm mb-6">
            Your Support Fuels Our Mission
          </p>
          <BottomCallToAction
            headerTitle="Want to Make a Difference?"
            description="Get in touch and learn how you can support our cause"
            btnText="Contact Us"
            linkUrl="/contact"
          />
        </section>
      </main>
    </>
  );
};

export default Index;
