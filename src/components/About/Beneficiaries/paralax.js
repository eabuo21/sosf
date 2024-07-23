import React from "react";
import ParallaxSection from "@/components/shared/paralaxBg/paralax";;

const ParalaxBg = () => {
  return (
    <ParallaxSection
      title="Our Work"
      description="We are a tireless team of investors and innovators who come from many corners of the globe and go wherever our impact is needed most."
      linkText="Explore how"
      linkHref="/ourwork"
      videoSrc="https://v.ftcdn.net/04/65/69/49/700_F_465694960_wZ2nSzlYHnaEhn4WiF3paCRRdLTb9KkE_ST.mp4"  
      titleStyle="custom-title-class"
      descriptionStyle="custom-description-class"
      linkStyle="custom-link-class"
    />
  );
};

export default ParalaxBg;
