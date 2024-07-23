// import React, { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { ProgressBar } from "primereact/progressbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSlack,
//   faBitbucket,
//   faBandcamp,
//   faDeploydog,
// } from "@fortawesome/free-brands-svg-icons";

// const Impact = () => {
//   const items = [
//     {
//       barvalue: 60,
//       title: "67.53 M/TONNES",
//       subtitle: "Subtitle 1",
//       icon: faSlack,
//       description:
//         " Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
//     },
//     {
//       barvalue: 30,
//       title: "67.53 M/TONNES",
//       subtitle: "Subtitle 2",
//       icon: faBitbucket,
//       description:
//         " Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
//     },
//     {
//       barvalue: 30,
//       title: " 67.53 M/TONNES",
//       subtitle: "Subtitle 3",
//       icon: faBandcamp,
//       description:
//         " Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
//     },
//     {
//       barvalue: 30,
//       title: " 67.53 M/TONNES",
//       subtitle: "Subtitle 4",
//       icon: faDeploydog,
//       description:
//         " Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
//     },
//   ];

//   useEffect(() => {
//     Aos.init({ duration: 1500 });
//   }, []);

//   const displayValueTemplate = (value) => {
//     return <span>{value}</span>; // Display only the value without the percentage sign
//   };

//   return (
//     <div className="flex flex-col gap-12 p-2 px-3 w-full">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="flex flex-col justify-center  gap-12 items-center mx-auto  md:gap-2  md:grid md:grid-cols-2"
//         >
//           <ProgressBar
//             className="hidden  md:w-[400px] md:flex md:h-[50px]"
//             value={item.barvalue}
//             style={{ fontSize: "20px" }}
//             displayValueTemplate={() => displayValueTemplate(item.barvalue)}
//           />
//           <div className=" w-[200px] md:w-[500px] h-[200px] p-4 flex flex-col gap-3">
//             <section className=" flex flex-col-reverse gap-4  md:flex-row md:gap-8 ">
//               <div className="flex flex-col gap-4 justify-start items-start px-3">
//                 <h3 className="text-3xl text-black font-passion       md:text-4xl">
//                   {item.title}
//                 </h3>
//                 <h6 className="text-black font-bold font-sans text-base    md:text-xl">
//                   {item.subtitle}
//                 </h6>
//                 <article className="text-sm text-black font-sans   md:text-xl">
//                   {item.description}
//                 </article>
//               </div>

//               <div className="section -for-icon ">
//                 <FontAwesomeIcon
//                   icon={item.icon}
//                   className="tex-2xl font-bold text-black   md:text-6xl"
//                 />
//               </div>
//             </section>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlack,
  faBitbucket,
  faBandcamp,
  faDeploydog,
} from "@fortawesome/free-brands-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import Link from "next/link";

const Impact = () => {
  const [displayCount, setDisplayCount] = useState(2); // State to track number of items to display
  const [viewMoreText, setViewMoreText] = useState("View More"); // State to toggle button text

  const items = [
    {
      barvalues: [33.53, 40],
      labels: ["Impact achieved", "Target"],
      title: "67.53 M/TONNES",
      subtitle: "Subtitle 1",
      icon: faSlack,
      description:
        "Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
    },
    {
      barvalues: [30, 50],
      labels: ["Impact achieved", "Target"],
      title: "67.53 M/TONNES",
      subtitle: "Subtitle 2",
      icon: faSlack,
      description:
        "Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
    },
    {
      barvalues: [40, 60],
      labels: ["Impact achieved", "Target"],
      title: "67.53 M/TONNES",
      subtitle: "Subtitle 3",
      icon: faSlack,
      description:
        "Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
    },
    {
      barvalues: [20, 50],
      labels: ["Impact achieved", "Target"],
      title: "67.53 M/TONNES",
      subtitle: "Subtitle 4",
      icon: faSlack,
      description:
        "Net tonnes of CO2 or CO2 equivalent gasses reduced due to consumer or business adoption of partner products, services, and/or industry standards.",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const getBarChartData = (labels, values) => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Percentage Impact ",
          data: values,
          backgroundColor: "#0284c7",
          borderColor: "pink",
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleToggleView = () => {
    if (displayCount === 2) {
      setDisplayCount(items.length); // Show all items
      setViewMoreText("View Less");
    } else {
      setDisplayCount(2); // Show only 2 items
      setViewMoreText("View More");
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 w-full lg:gap-12 lg:mx-auto h-[fixed] pb-16 md:mx-auto">
      {items.slice(0, displayCount).map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-start w-full gap-12 items-start lg:mx-auto lg:justify-center lg:items-center lg:gap-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:justify-center md:items-center md:gap-2"
        >
          <div className="flex w-full lg:relative lg:left-[6rem] lg:flex lg:w-[500px] lg:h-[220px] md:w-[300px] md:h-[220px]">
            <Bar
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in linear"
              data-aos-delay="50"
              data={getBarChartData(item.labels, item.barvalues)}
              options={options}
              className="w-full h-full lg:w-[500px]"
            />
          </div>
          <div className="w-full lg:w-[500px] h-[200px] lg:p-4 flex flex-col gap-3">
            <section className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-8">
              <div className="flex flex-col gap-4 justify-start items-start px-3">
                <h3 className="text-2xl text-black font-passion lg:text-3xl">
                  {item.title}
                </h3>
                <h6 className="text-black font-bold font-sans text-base lg:text-xl">
                  {item.subtitle}
                </h6>
                <article
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  data-aos-easing="ease-in linear"
                  data-aos-delay="50"
                  data-aos-mirror="true"
                  className="text-sm text-black font-sans lg:text-base"
                >
                  {item.description}
                </article>
              </div>

              <div className="section-for-icon">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl px-4 lg:px-0 text-black lg:text-5xl"
                />
              </div>
            </section>
          </div>
        </div>
      ))}
      {items.length > 2 && ( // Render "View More" or "View Less" button based on items count
        <div className="flex justify-center mt-4">
          <button
            onClick={handleToggleView}
            className="bg-blue hover:bg-black text-white font-bold py-2 px-4 rounded"
          >
            {viewMoreText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Impact;
