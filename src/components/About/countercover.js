import React from "react";

const CounterCover = () => {
  return (
    <div className="flex flex-col gap-3 justify-start items-start py-4 px-4   md:relative md:left-[3rem] pb-9">
      <h3 className="text-xl font-bold font-playfair text-left relative bottom-8 md:text-4xl hover-line">
        Our Accomplishments{" "}
      </h3>
      <article className="text-blue font-bold text-base   md:text-xl w-full md:w-[600px] ">
        Our Accomplishments We have successfully generated a wealth of learning
        reports, market intelligence, opinion pieces, and news across the
        diverse sectors and geographies where we operate.
      </article>
    </div>
  );
};

export default CounterCover;
