import React from "react";
import ReusableSwiper from "@/components/shared/swipers/heroswiper";

const Slider = () => {
  const swipes = [
    {
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnLhBoP8k8ItBv75H7v3o5mPywLyr1e8f-g&s",
      caption: "About Us",
      content: "The Skills Outside School Foundation is the leading pan-African education, employability, and entrepreneurship organization with a vision for a productive human capital driving transformational socio-economic development globally.",
      content2: "We do this through our unique, innovative & disruptive strategic model: Data, Interventions & Advocacy.",
    },
    {
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTid24zi2YN-97RLKJ0TGcJ0AP7Myohv9t4MA&s",
      caption: "Caption 2",
      content: "Content 2",
      content2: ",",
    },
    {
      background:
        "https://cdn.georgeinstitute.org/sites/default/files/styles/width768/public/2022-06/latam-papers-istock-1278525359.jpg.webp",
      caption: "Caption 3",
      content: "Content 3",
      content2: ",",
    },
  ];

  return (
    <div>
      <ReusableSwiper swipes={swipes} />
    </div>
  );
};

export default Slider;
