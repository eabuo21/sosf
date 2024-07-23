// import React, { useState, useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const Items = [
//   {
//     number: "11",
//     value: "",
//     description: "Countries Reached",
//   },

//   {
//     number: "100",
//     value: "K+",
//     description: "Beneficiaries",
//   },

//   {
//     number: 200,
//     value: "+",
//     description: "International & Local partners",
//   },
//   {
//     number: "1200",
//     value: "+",
//     description: "Volunteers, Business Mentors, Career Mentors & Trainers",
//   },
//   {
//     number: 9,
//     value: "",
//     description: "Years of Impact",
//   },
//   {
//     number: "300",
//     value: "+",
//     description: "Investors",
//   },
// ];

// const AboutCounter = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1500 });
//   }, []);

//   const [counts, setCounts] = useState(Array(Items.length).fill(0));

//   useEffect(() => {
//     const intervals = Items.map((item, index) => {
//       return setInterval(() => {
//         setCounts((prevCounts) => {
//           const newCounts = [...prevCounts];
//           if (newCounts[index] < item.number) {
//             newCounts[index] += 1;
//           }
//           return newCounts;
//         });
//       }, 1);
//     });

//     return () => {
//       intervals.forEach(clearInterval);
//     };
//   }, []);

//   return (
//     <>
//       <div className="grid grid-cols-2  p-2 gap-3 justify-center items-center  h-[fixed] md:h-[fixed] lg:grid-cols-3     md:grid md:grid-cols-2 md:gap-3 md:justify-start md:items-start md:py-8 md:overflow-x-auto  md:px-5">
//         {Items.map((item, index) => (
//           <div
//             key={index}
//             data-aos="fade-in"
//             data-aos-easing="ease-in-out linear"
//             data-aos-mirror="true"
//             className="bg-white shadow-lg mx-auto rounded-md h-[200px] w-[200px]  justify-center items-center   md:w-[300px]  md:shadow-none md:bg-transparent  md:justify-start md:items-start flex flex-col p-1  gap-3"
//           >
//             <h3 className="text-3xl font-semibold text-black  font-merriweather md:text-[92px]">
//               {counts[index]}{" "}
//               <span className="text-base  text-black md:text-2xl">
//                 {item.value}
//               </span>
//             </h3>
//             <p className="text-sm font-sans  text-black  md:text-2xl">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AboutCounter;

import React from "react";
import ImpactMetrics from "../shared/metrics/impactMetrics";

const TrackRecord = () => {
  return (
    <>
      <section className="bg-gray-100 m-auto w-full divide-x divide-secondary_blue font-poppins py-10  mb-4 ">
        <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  justify-center items-center  gap-x-5 lg:gap-x-5 gap-y-5 md:gap-y-10">
          <ImpactMetrics
            title="Years of Impact "
            count={9}
            superTitle=""
            textColor="text-[#484848]"
            colorTitle="text-[#484848]"
          />
          <ImpactMetrics
            title="Countries Reached "
            count={11}
            superTitle=""
            textColor="text-[#484848]"
            colorTitle="text-[#484848]"
          />
          <ImpactMetrics
            title="Beneficiaries "
            count={100}
            superTitle="K+"
            textColor="text-[#484848]"
            colorTitle="text-[#484848]"
          />
          <ImpactMetrics
            title="Partners"
            count={200}
            superTitle="+"
            textColor="text-[#484848]"
            colorTitle="text-[#484848]"
          />
          <ImpactMetrics
            title="Investors "
            count={300}
            superTitle=""
            textColor="text-[#484848]"
            colorTitle="text-[#484848]"
          />
          <ImpactMetrics
            title="Volunteers, Engaged "
            count={1200}
            superTitle="+"
            textColor="text-[#484848]"
            colorTitle="text-[#484848]"
          />
        </div>
      </section>
    </>
  );
};
export default TrackRecord;
