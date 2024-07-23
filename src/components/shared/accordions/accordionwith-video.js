import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CoreValueAccordionItem = ({ title, description, expanded, onChange }) => (
  <Accordion
    style={{
      background: "transparent",
      border: "none",
    }}
    expanded={expanded}
    onChange={onChange}
  >
    <AccordionSummary
      className="hover:bg-blue-100 hover:transition-all hover:ease-in-out hover:duration-1000 transition-all duration-1000 ease-in-out"
      expandIcon={
        <FontAwesomeIcon
          icon={expanded ? faChevronUp : faChevronDown}
          className="text-black p-2"
        />
      }
      aria-controls={`${title}-content`}
      id={`${title}-header`}
    >
      <Typography
        style={{
          fontSize: "30px",
          fontWeight: "700",
          fontFamily: "passion",
        }}
      >
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails className="text-black font-bold">
      <Typography style={{ fontSize: "20px" }}>{description}</Typography>
    </AccordionDetails>
  </Accordion>
);

const Accordion1 = ({ values }) => {
  const [selectedItem, setSelectedItem] = useState(values[0].title);

  const handleAccordionChange = (item) => {
    setSelectedItem(item);
  };

  const selectedValue = values.find((value) => value.title === selectedItem);

  return (
    <div className="grid grid-cols-1 gap-6 h-[fixed] p-2 lg:grid-cols-2 md:gap-2 w-full">
      <div className="w-full h-[fixed] lg:w-[600px] lg:h-[400px] px-8">
        {values.map((value) => (
          <CoreValueAccordionItem
            key={value.title}
            title={value.title}
            description={value.description}
            expanded={selectedItem === value.title}
            onChange={() => handleAccordionChange(value.title)}
          />
        ))}
      </div>
      <motion.div
        key={selectedItem} // Ensure a new key is used on item change
        className="w-full md:w-[600px] h-[fixed] lg:w-[600px] lg:h-[500px] flex items-start justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={selectedValue.imageUrl}
          alt={selectedItem}
          height={550}
          width={600}
          className="w-[400px] h-[300px] md:w-auto lg:w-[550px] md:w-[600px] lg:h-[550px] rounded-tr-[20%] rounded-tl-[20%] rounded-bl-[20%] rounded-br-[20%] shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.9 }}
        />
      </motion.div>
    </div>
  );
};

export default Accordion1;
