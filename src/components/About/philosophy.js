import React from "react";
import GridsPlacement from "../shared/cards/twogrids";

const Philosophy = () => {
  const gridsData = [
    {
      leftcontent: "Entrepreneurial Education: Empowering Visionaries",
      rightcontent:
        "Through continuous learning, entrepreneurs cultivate a growth mindset and essential competencies while leveraging advanced tools. This approach fosters innovation, resilience, and sustainable business practices, ensuring dynamic problem-solving and competitive edge.",
    },

    {
      leftcontent: "Employability Enhancement: Nurturing Career Growth",
      rightcontent:
        "Lifelong learning is pivotal for maximizing employability in today's competitive job market. It equips professionals with critical skills, fostering adaptability, and resilience amidst evolving industry demands, ensuring sustained career growth and success.",
    },

    {
      leftcontent: "Education's Role: Building Productivity",
      rightcontent:
        "Education equips individuals with the mindset, competencies, and tools necessary for productivity, whether in entrepreneurship or employability. It enables proactive skill development, strategic thinking, and efficient utilization of resources, driving personal and professional fulfillment.",
    },
  ];

  return (
    <div className="pt-9">
      <GridsPlacement grids={gridsData} />
    </div>
  );
};

export default Philosophy;
