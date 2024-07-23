import React from "react";
import CountUp from "react-countup";

const ImpactMetrics = ({
  title,
  superTitle,
  subtitle,
  count,
  textColor,
  colorTitle,
}) => {
  return (
    <div className="md:p-8 py-4 font-medium text-center flex flex-col justify-center items-start w-full">
      <h2
        className={`md:text-[50px] xl:text-[60px] text-4xl font-black font-bigshoulders ${textColor}`}
      >
        {subtitle && <span>{subtitle}</span>}
        <CountUp start={0} end={count} enableScrollSpy duration={2} />
        {superTitle && <span>{superTitle}</span>}
      </h2>
      <p
        className={`mt-2 md:mt-4 ${colorTitle} md:text-lg w-[50%] text-[9.2px] text-center `}
      >
        {title}
      </p>
    </div>
  );
};

export default ImpactMetrics;
