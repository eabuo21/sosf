import React, { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/About/hero";
import SubHero from "@/components/About/subhero";
import AboutCounter from "@/components/About/aboutcounter";
import MeetFounder from "@/components/About/meetfounder";
import Ourwork from "@/components/About/aboutteam";
import AboutConnect from "@/components/About/aboutconnect";
import Report from "@/components/About/report";
import Audience from "@/components/About/closer";
import MobAudience from "@/components/About/mobilecloser";
import Impact from "@/components/About/impact";
import Link from "next/link";
import ImpactCover from "@/components/About/impactcoverhero";
import CounterCover from "@/components/About/countercover";
import CloserCover from "@/components/About/closercover";
import SwiperHero from "@/components/About/swiperhero";
import MissionVission from "@/components/About/mission-vission";
import CoreValues from "@/components/About/corevalues";
import Model from "@/components/About/model";
import Heading from "@/components/shared/headings/headings";
import Usps from "@/components/About/usps";
import OurPillars from "@/components/About/pillars";
import Philosophy from "@/components/About/philosophy";
import Partners from "@/components/About/partners";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title> About Us</title>
        <meta
          name="description"
          content="Education, Entrepreneurship & Employability "
        />
      </Head>
      <div className="flex flex-col gap-8  w-full overflow-hidden  h-[fixed]">
        <section className="hero-section pb-16 pt-8">
          <Hero />
        </section>
        <section className="mission-vission-section pt-8 pb-16">
          <MissionVission />
        </section>
        <section className="sub-hero-section pb-16 pt-8">
          {/* core values */}
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Core Values
            </Heading>
          </section>
          <CoreValues />
        </section>
        <section className="counter-hero-section pb-16 pt-8">
          <section className="heading-section pb-9 md:pb-12 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Strategic Model{" "}
            </Heading>
          </section>
          <Model />
        </section>

        <section className="founder-hero-section pb-16 pt-8 flex flex-col">
          <MeetFounder />
        </section>

        <section className="about-team-section pb-16 pt-8">
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our USPs
            </Heading>
          </section>
          <Usps />
        </section>

        <section className="connect-with-us-section pb-16 pt-8">
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Work
            </Heading>
          </section>
          <Ourwork />
        </section>

        <section className="connect-with-us-section pb-16 pt-8">
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Pillars
            </Heading>
          </section>
          <OurPillars />
        </section>

        <section className="connect-with-us-section pb-16 pt-8">
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Track record Speaks
            </Heading>
          </section>
          <AboutCounter />
        </section>

        <section className="report-section pb-16 pt-8">
          <Report />
        </section>

        <section id="closer-desktop-section pb-16 pt-8 flex flex-col">
          {/* <CloserCover /> */}
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Target Audience
            </Heading>
          </section>
          <Audience />
        </section>
        <hr className=" border  border-black border-opacity-78 md:w-[1200px] mx-auto"></hr>

        <section className="closer-mobile-section pb-16 pt-8">
          <MobAudience />
        </section>
        <section className="philosophy-section pb-16 pt-8 flex flex-col ">
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Philosophy
            </Heading>
          </section>
          <Philosophy />
        </section>

        <section className="impact-section pb-16 pt-8 flex flex-col ">
          {/* <ImpactCover /> */}
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Our Impact
            </Heading>
          </section>
          <Impact />
        </section>
        <section className="client-partners-section pb-16 pt-8 flex flex-col ">
          <section className="heading-section pb-9 flex justify-center mx-auto">
            <Heading className="text-secondary_blue  text-base  md:text-3xl text-center">
              Clients and Partners{" "}
            </Heading>
          </section>
          <Partners />
        </section>
      </div>
    </>
  );
};

export default About;
