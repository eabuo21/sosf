// Heading.js

import React from "react";

const Heading = ({ level, children, className }) => {
  const HeadingTag = `h${level}`;

  let sizeClass = "";
  switch (level) {
    case 1:
      
      sizeClass =
        "text-3xl font-passion text-left font-bold md:text-6xl text-white ";

      break;
     

    default:
      sizeClass = "text-xl"; // Default size if level is not defined
      break;
  }

  return (
    <HeadingTag className={`font-bold text-black ${sizeClass} ${className}`}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
