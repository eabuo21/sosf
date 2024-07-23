import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    handleScroll();
  },[]);

  return (
    <>
      <Head>
        <title> Contact Us</title>
        <meta name="description" content="" />
      </Head>
      <div className="w-full overflow-hidden h-screen bg-milk">Contact</div>
    </>
  );
};

export default Contact;
