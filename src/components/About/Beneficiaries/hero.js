import React, { useEffect } from "react";
import Image from "next/image";
import Heading from "@/components/shared/headings/headings";
import Button from "@/components/shared/buttons/button1";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import BeneficiariesM from "@/components/shared/swipers/beneficiarieswiper";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const beneficiaries = [
    {
      heading: "Beneficiary 1",
      content: "Content for Beneficiary 1",
      route: "/beneficiary-1",
      btntext: "Read More",
    },
    {
      heading: "Beneficiary 2",
      content: "Content for Beneficiary 2",
      route: "/beneficiary-2",
      btntext: "Read More",
    },
    {
      heading: "Beneficiary 3",
      content: "Content for Beneficiary 3",
      route: "/beneficiary-3",
      btntext: "Read More",
    },
    // Add more beneficiaries as needed
  ];

  return (
    <div className="   flex flex-col justify-start items-start  w-full h-[fixed]  pb-6   lg:grid lg:grid-cols-2    md:grid md:grid-cols-2  md:justify-start md:items-start  md:h-[450px] md:pb-16 ">
      <section className="first-half-section-hero    container   flex flex-col   bg-blue   h-[300px]        md:w-[700px] md:h-[450px]  md:justify-center md:items-start md:pt-4 md:px-4 md:p-2">
        <div
          data-aos="fade-down"
          className="flex flex-col gap-8 justify-center items-start px-4 p-2  w-full      "
        >
          <Heading level={1} className="">
            Our Beneficiaries
          </Heading>
          <article className="text-xl font-serif text-left md:text-3xl text-white w-full md:w-[500px]">
            We know what it takes to solve the toughest problems of poverty.
          </article>
          <Link href="">
            <Button className="fmx-auto ">Get Involved</Button>
          </Link>
        </div>
      </section>

      {/* second section  */}
      <section className="first-half-section-hero          bg-yellow    h-[300px]    flex flex-col  md:w-[700px] md:h-[450px]  md:justify-center md:items-center ">
        <BeneficiariesM beneficiaries={beneficiaries} />
      </section>
    </div>
  );
};

export default Hero;
