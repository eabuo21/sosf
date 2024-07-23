import { useEffect } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

const Careers = () => {
  //scroll to top of page
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
        <title> Careers</title>
        <meta name="description" content="" />
      </Head>

      <div className="w-full  overflow-hidden  h-screen  bg-,ilk ">Careers</div>
    </>
  );
};

export default Careers;
