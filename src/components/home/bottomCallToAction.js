import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import map from "public/assets/images/logos/small-map.svg";
// import map from "public/assets/images/logos/map.jpg";

import Link from "next/link";

const BottomCallToAction = ({ btnText, linkUrl, headerTitle, description }) => {
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut,
        delay: 0.3,
      },
    },
  };
  return (
    <section className=" flex justify-center items-center flex-col px-3">
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        className="flex pb-6  bg-secondary_blue justify-between w-full sm:w-[95%]
        
        lg:w-[86%] xl:w-[80%] 2xl:w-[80%] rounded-3xl  pl-3 sm:pl-5 lg:pl-7 pt-3 sm:pt-0
          sm:py-5 lg:py-8"
      >
        <div className="text-white w-[58%] sm:w-[56%] lg:w-[52%] ">
          <p className="mt-3 sm:mt-6 text-p2 sm:text-p1 lg:text-h5 xl:text-h4">
            {headerTitle}
          </p>
          <h3
            className={`text-[14px] mt-3 sm:mt-8 lg:mt-10 sm:text-[20px] md:text-[22px] w-full  lg:text-[28px] xl:text-[30px] 2xl:text-[38px] font-bold`}
          >
            {description}
          </h3>

          <div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            className="mt-3 sm:mt-5 lg:mt-6 xl:mt-10 2xl:mt-14"
          >
            <Link href={linkUrl}>
              <button className="w-32 sm:w-44 cursor-pointer font-bold border bg-white text-secondary_blue hover:bg-transparent hover:border-white hover:text-white text-xs px-5 sm:text-sm  rounded-md py-3 lg:w-40 xl:w-44 2xl:w-48 lg:py-[.8rem] xl:py-[.9rem] 2xl:py-4 lg:text-[17px] xl:lg:text-[19px] 2xl:text-[21px] lg:px-1">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[48%] sm:w-[44%] lg:px-0 lg:mt-0 lg:w-[48%]  flex lg:items-center xl:block">
          <Image src={map} alt="africa map" className="sm:hidden w-[100%]" />
          <Image
            src={map}
            alt="africa map"
            className="lg:w-[100%] hidden sm:block"
            height={50}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default BottomCallToAction;
