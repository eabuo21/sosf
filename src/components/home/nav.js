import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
// import Logo from "../../assets/images/logos/sosflogo.png";
import SearchBar from "./search_field/search";
import { dataNav, dataRoutes } from "@/constants/our_work/routes";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const toggleMenu = (menu) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const toggleOpenModal = () => {
    setOpenModal(true);
  };

  const toggleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white hidden lg:flex font-semibold font-passion text-gray top-0  sticky z-50 transition-transform duration-1000 ${
        showNav
          ? "translate-y-0"
          : "-translate-y-full transition-transform duration-1000 "
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link onClick={() => toggleMenu(false)} href="/">
            <Image src="/assets/images/logos/sosflogo.png" alt="Logo" width={100} height={70} />
          </Link>
        </div>
        <div className="flex items-center space-x-8 mr-[2rem]">
          <div className="relative">
            <button
              onClick={() => toggleMenu("about")}
              className="text-black flex items-center space-x-1"
            >
              <span  className="hover-line ">About Us </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${
                  openMenu === "about" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-0 right-[4rem] mt-9 bg-white shadow-lg py-1 transition-all duration-300 transform w-[1000px] h-[350px]  grid grid-cols-2 ${
                openMenu === "about"
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              <div className="container mx-auto flex  px-4 flex-col gap-8 justify-center items-start ">
                <h2 className="text-black font-normal font-passion text-xl text-left">
                  About Us
                </h2>

                <article className="text-black text-base font-passion font-normal text-left w-[280px]">
                  Learn about our origins, how we work, committed grants,
                  careers, and our role in fighting inequities.
                </article>
                <Link
                  onClick={() => toggleMenu(false)}
                  href="/about"
                  className="hover-line"
                >
                  Learn More About Us &rarr;
                </Link>
              </div>

              <div className="container mx-auto flex   flex-col gap-8 justify-center items-start px-6 left-[4rem] border-l-2 border-l-gray">
                <div className="heading-image-container flex flex-col gap-4 justify-start items-start">
                  <h3 className="text-xl  font-sans font-normal text-center ">
                    Leader spotlight{" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-blue font-bold text-xl"
                    />
                  </h3>
                  <Link href="" target="_blank">
                    <div className="imageContainer">
                      <Image
                        src="https://tongston.com/assets/team2-7f3990b8.png"
                        alt="image"
                        width={120}
                        height={120}
                        className=" rounded-full shadow-lg"
                      />
                    </div>
                  </Link>
                </div>
                <div className="name-description-container flex flex-col gap-4 ">
                  <Link href="" target="_blank">
                    <h3 className="leader-name  hover-line text-left text-black text-opacity-60  text-sm font-passion w-[100px]">
                      Halima Abba
                    </h3>
                  </Link>
                  <p className=" text-left text-sm  text-black text-opacity-60 font-passion w-[200px]">
                    Chef Executive Officer,& board Chair-Person, Skills Outside
                    School Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("work")}
              className="text-black flex items-center space-x-1"
            >
              <span className="hover-line ">Our Work</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${
                  openMenu === "work" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-0 right-0 mt-2 bg-white shadow-lg py-2 border border-pink transition-all duration-300 transform ${
                openMenu === "work"
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              <div className="container mx-auto flex flex-col justify-around">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 2
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("news")}
              className="text-black flex items-center space-x-1"
            >
              <span  className="hover-line ">News & Insights</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${
                  openMenu === "news" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-0 right-0 mt-2 bg-white shadow-lg py-2 border border-pink transition-all duration-300 transform ${
                openMenu === "news"
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              <div className="container mx-auto flex flex-col justify-around">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 2
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("data")}
              className="text-black flex items-center space-x-1"
            >
              <span  className="hover-line ">Our Data</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${
                  openMenu === "data" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-0 right-0 mt-2 bg-white shadow-lg py-2 border border-pink transition-all duration-300 transform ${
                openMenu === "data"
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              <div className="container mx-auto flex flex-col justify-around">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 2
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("innovation")}
              className="text-black flex items-center space-x-1"
            >
              <span  className="hover-line ">Our Innovation</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${
                  openMenu === "innovation" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-0 right-0 mt-2 bg-white shadow-lg py-2 border border-pink transition-all duration-300 transform ${
                openMenu === "innovation"
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              <div className="container mx-auto flex flex-col justify-around">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 2
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("advocacy")}
              className="text-black flex items-center space-x-1"
            >
              <span  className="hover-line ">Our Advocacy</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${
                  openMenu === "advocacy" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-0 right-0 mt-2 bg-white shadow-lg py-2 border border-pink transition-all duration-300 transform ${
                openMenu === "advocacy"
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              <div className="container mx-auto flex flex-col justify-around">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray text-sm hover:bg-grey hover:bg-opacity-40 transition-colors duration-300 ease-in-out"
                >
                  Item 2
                </Link>
              </div>
            </div>
          </div>
          <Link href="/about" className="text-black flex items-center space-x-1">
            Contact Us
          </Link>
          <div className="flex items-center">
            <FontAwesomeIcon
              onClick={toggleOpenModal}
              icon={faSearch}
              className="mr-2 text-grey text-2xl cursor-pointer"
            />
            {openModal && <SearchBar onClose={toggleCloseModal} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
