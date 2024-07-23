// import React from "react";
// import FlipCard from "@/components/shared/cards/flipcards";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEye,
//   faSignLanguage,
//   faStickyNote,
//   faLocust,

// } from "@fortawesome/free-solid-svg-icons";

// const cardData = [

//   {
//     frontTitle: faSignLanguage,
//     heading: " Mission",

//     backContent:
//       "Achieving data-driven innovative education, employability, and entrepreneurship interventions and advocacy that drive sustainable growth and development.",
//   },

//   {
//     frontTitle: faEye,
//     heading: "  Vision",

//     backContent:
//       "A world with a productive human capital driving transformational socio-economic development globally.",
//   },

//   {
//     frontTitle: faStickyNote,
//     heading: " Philosophy",

//     backContent:
//       "Through lifelong learning and development, people can be equipped with the right education (mindset, competence and tools) to be productive whether they choose the path of entrepreneurship or employability.",
//   },

// ];

// const Cards = () => {
//   return (
//     <div className="md:grid  flex flex-col  md:grid-cols-2  lg:grid-cols-3 gap-6 w-full  h-[fixed] pb-8 mx-auto justify-center items-center mx-auto md:w-full pt-7 md:px-6">
//       {cardData.map((card, index) => (
//         <div
//           key={index}
//           data-aos="flip-left"
//           data-aos-delay="50"
//           data-aos-easing="ease-in cubic"
//           data-aos-anchor-placement="top-bottom"
//         >
//           <FlipCard
//             frontTitle={card.frontTitle}
//             heading={card.heading}
//             description={card.description}
//             backContent={card.backContent}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

import React from "react";
import { FaIcons } from "react-icons/fa";
import {
  FaAddressBook,
  FaHandshake,
  FaMotorcycle,
  FaEye,
} from "react-icons/fa";

const Mission = () => {
  return (
    <section className="bg-gray-100 py-16  justify-center items-center flex ">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  justify-center items-center mx-auto">
          <div className="text-center p-2">
            <div className="flex justify-center mb-4">
              <FaHandshake className="mx-auto text-secondary_blue text-6xl" />
            </div>
            <h3 className="text-secondary_blue text-xl font-semibold mb-2">
              Mission
            </h3>
            <p className="text-black text-[0.9rem] mb-4">
              Achieving data-driven innovative education, employability, and
              entrepreneurship interventions and advocacy that drive sustainable
              growth and development.
            </p>
          </div>

          <div className="text-center p-2">
            <div className="flex justify-center mb-4">
              <FaAddressBook className="text-secondary_blue mx-auto text-6xl" />
            </div>
            <h3 className="text-secondary_blue text-xl font-semibold mb-2">
              Philosophy
            </h3>
            <p className="text-black text-[0.9rem] mb-4">
              Through lifelong learning and development, people can be equipped
              with the right education (mindset, competence and tools) to be
              productive whether they choose the path of entrepreneurship or
              employability.
            </p>
          </div>

          <div className="text-center p-2">
            <div className="flex justify-center mb-4">
              <FaEye className="text-secondary_blue mx-auto text-6xl" />
            </div>
            <h3 className="text-secondary_blue text-xl font-semibold mb-2">
              Vision
            </h3>
            <p className="text-black text-[0.9rem] mb-4">
              A world with a productive human capital driving transformational
              socio-economic development globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
