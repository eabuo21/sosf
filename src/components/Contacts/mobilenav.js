/** @format */
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faBars,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import Logo from "../../assets/images/logos/sosflogo.png";
import Filter from "../home/search_field/search";

const AccordionContainer = styled("div")({
  width: "100%",
});

const CustomAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIconPosition="right" // Ensure expand icon is on the right
    expandIcon={
      <FontAwesomeIcon
        icon={faChevronRight} // Use faChevronRight for the icon
        className="p-2 text-black font-bold"
      />
    }
    {...props}
  />
))(({ theme }) => ({
  background: "transparent",
  borderBottom: "1px solid gray",
  width: "100%",
  justifyContent: "flex-start",
  paddingRight: "4px",
  flexDirection: "row",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "start",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(270deg)",
  },
}));

const CustomAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export default function CustomizedAccordions() {
  const [modalopen, setModalOpen] = useState(false);
  // function to toggle open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <Disclosure as="nav" className="p-7 bg-blue bg-opacity-10   lg:hidden">
      {({ open }) => (
        <>
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image src='/assets/images/logos/sosflogo.png' alt="sosf Logo" width={70} height={70} />
            </Link>
            <div className="flex items-center ">
              {/* <input
              type="text"
              placeholder="sosf Ai search"
              className="flex-grow h-full px-2 text-sm focus:outline-none rounded-lg"
            /> */}
              <FontAwesomeIcon
                onClick={() => openModal()}
                icon={faSearch}
                className="mr-2 cursor-pointer  text-grey text-2xl ml-[7rem] border-b-2 border-b-blue"
              />
            </div>
            {modalopen && <Filter onClose={() => closeModal()} />}

            <div className="lg:hidden">
              <Disclosure.Button
                className="text-pink border-2 border-blue p-2 rounded-[50%]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Transition
            show={menuOpen}
            as={Fragment}
            enter="transition duration-300 ease-in-out transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-200 ease-in-out transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Disclosure.Panel className="lg:hidden bg-white  overflow-y-auto fixed inset-0 z-10 w-[250px] flex flex-col top-[124px]">
              <div className="flex flex-col space-y-4 p-4 pt-16 justify-start items-start gap-6 text-sm ">
                {/* accordions content and code goes in here */}
                <div className="w-[200px] h-[40px] p-2 border border-grey">
                  <Link href="/">Get Involved Today!</Link>
                </div>
                <div className=" flex flex-col gap-5 w-[200px]  h-[fixed] lg:hidden ">
                  <AccordionContainer className=" flex flex-col gap-3 lg:hidden ">
                    <CustomAccordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography className="text-black font-bold font-passion text-2xl text-center ">
                          About Us
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey bg-opacity-20  font-bold text-base px-2 font-passion">
                        <Typography className="text-black font-bold text-base px-2  mx-auto justify-center items-center font-passion flex flex-col gap-2">
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 1
                          </Link>
                          {/* link2 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 2
                          </Link>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>

                    {/* section 2 */}
                    <CustomAccordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography className="text-black font-bold font-passion text-2xl text-center ">
                          Our Work
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey bg-opacity-20    font-passion">
                        <Typography className="text-black font-bold text-base px-2  mx-auto justify-center items-center font-passion flex flex-col gap-2">
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 1
                          </Link>
                          {/* link2 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 2
                          </Link>
                          {/* link3 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 3
                          </Link>

                          {/* link4 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 4
                          </Link>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>

                    {/* section 3 */}
                    <CustomAccordion
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography className="text-black font-bold font-passion text-2xl text-center ">
                          News & Insights
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey bg-opacity-20    font-passion">
                        <Typography className="text-black font-bold text-base px-2  mx-auto justify-center items-center font-passion flex flex-col gap-2">
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 1
                          </Link>
                          {/* link2 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 2
                          </Link>
                          {/* link3 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 3
                          </Link>

                          {/* link4 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Link 4
                          </Link>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>

                    {/* side navigation on mobile embed inside the mobile menu for ease of access */}
                    <CustomAccordion
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography className="text-black font-bold font-passion text-2xl text-center ">
                          Our Data
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey bg-opacity-20    font-passion">
                        <Typography className="text-black font-bold text-sm px-2  mx-auto justify-center items-center font-passion flex flex-col gap-2">
                          {/* create embed inside here  */}

                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            End to End Evaluation
                          </Link>
                          {/* link2 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Thought Leadership{" "}
                          </Link>
                          {/* link3 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Consultancy
                          </Link>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>

                    <CustomAccordion
                      expanded={expanded === "panel5"}
                      onChange={handleChange("panel5")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography className="text-black font-bold font-passion text-2xl text-center ">
                          Our Intervention
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey bg-opacity-20    font-passion">
                        <Typography className="text-black font-bold text-sm px-2  mx-auto justify-center items-center font-passion flex flex-col gap-2">
                          {/* create embed inside here  */}

                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Bridge{" "}
                          </Link>
                          {/* link2 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Headstart{" "}
                          </Link>
                          {/* link3 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Lead4Change
                          </Link>
                          {/* link 4 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Scale Up
                          </Link>

                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Partnerships
                          </Link>

                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Grant
                          </Link>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>

                    <CustomAccordion
                      expanded={expanded === "panel6"}
                      onChange={handleChange("panel6")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography className="text-black font-bold font-passion text-2xl text-center ">
                          Our Advocacy
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey bg-opacity-20    font-passion">
                        <Typography className="text-black font-bold text-sm px-2  mx-auto justify-center items-center font-passion flex flex-col gap-2">
                          {/* create embed inside here  */}

                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Ambassadors{" "}
                          </Link>
                          {/* link2 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Volunteering{" "}
                          </Link>
                          {/* link3 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Stakeholders
                          </Link>
                          {/* link 4 */}
                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Mainstreaming
                          </Link>

                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Awareness
                          </Link>

                          <Link href="/" onClick={() => setMenuOpen(false)}>
                            Policy
                          </Link>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>
                  </AccordionContainer>

                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    <CustomAccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      {" "}
                      <Typography className="text-black font-bold font-passion text-2xl text-center ">
                        Contact Us
                      </Typography>
                    </CustomAccordionSummary>
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
