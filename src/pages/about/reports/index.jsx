import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";


const Reports = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    handleScroll();
  }, []);

  return (
    <>
      <Head>
        <title>Reports</title>
        <meta name="description" content="" />
      </Head>
      <div className=" w-full h-screen bg-milk overflow-hidden   ">

        Reports
      </div>
    </>
  );
};

export default Reports;
