import React from "react";
import BeneficiariesCards from "../shared/cards/beneficiariescards";

const OurPillars = () => {
  const cards = [
    {
      title: "Entrepreneurship ",
      content:
        "SOSF initiatives and challenges represent non-programmatic interventions, challenges and co-implementation of programs designed and led by partners, in furtherance of SDGs 17 – partnership for the goals. Our work here involves innovative partnerships with CORPORATES & INDIVIDUALS. ",
      image:
        "https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-02/entrepreneur-4784289_1920.jpg?itok=BK_Vj765",
      link: "",
    },

    {
      title: "Education ",
      content:
        "SOSF initiatives and challenges represent non-programmatic interventions, challenges and co-implementation of programs designed and led by partners, in furtherance of SDGs 17 – partnership for the goals. Our work here involves innovative partnerships with CORPORATES & INDIVIDUALS. ",
      image:
        "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/education_0.jpg",
      link: "",
    },
    {
      title: "Employability ",
      content:
        "SOSF initiatives and challenges represent non-programmatic interventions, challenges and co-implementation of programs designed and led by partners, in furtherance of SDGs 17 – partnership for the goals. Our work here involves innovative partnerships with CORPORATES & INDIVIDUALS. ",
      image:
        "https://www.preemploymentassessments.com/wp-content/uploads/2021/01/employability-skills_preemployment-assessment.png",
      link: "",
    },
  ];

  return (
    <div>
      <BeneficiariesCards cards={cards} />
    </div>
  );
};

export default OurPillars;
