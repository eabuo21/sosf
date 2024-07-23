import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
// import Logo from "../../assets/images/logos/sosflogo.png";
// import Apple from "../../assets/images/logos/apple.png";
// import Google from "../../assets/images/logos/googlplay.png";
import emailjs from "@emailjs/browser";

import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);

  // logic for email-js goes in here

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      email: email,
      message: message,
    };

    emailjs
      .send("service_id", "template_id", templateParams, "api_key")
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setEmail("");
          setMessage("");
          alert("Form submitted!");
        } else {
          setLoading(false);
          alert("Submission failed, please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        alert("Please check your connection and try again!");
      });
  };

  return (
    <div className="flex flex-col gap-4 justify-start items-start p-2 w-full h-[fixed] bg-blue lg:h-[310px]  relative z-50 bottom-0">
      <div className=" h-[fixed] w-full bg-blue grid gap-4 justify-center items-start p-2 grid-cols-1 pt-5 lg:p-6 lg:grid-cols-5  lg:gap-3 lg:p-3  lg:h-[300px] lg:w-full">
        <section className="first-footer-section w-full h-auto flex flex-col gap-4 justify-start items-start p-2 lg:justify-start lg:items-start px-4">
          <h5 className="text-xl text-white font-bold  font-montserrat">
            Access the SOSF App
          </h5>
          <Link href="#" target="_blank" className="w-full h-auto">
            <div className="w-full h-[fixed]   bg-black bg-opacity-50  flex  justify-center items-center ">
              <div className="w-full  h-[60px] mx-auto   bg-white p-1">
                <div className="w-full h-[fixed] flex  gap-2 justify-center items-center ">
                  <Image
                    src="/assets/images/logos/googlplay.png"
                    alt="get it on google play "
                    width={35}
                    height={15}
                    className=""
                  />
                  <section className="flex flex-col  justify-start items-start">
                    <h6 className="text-sm font-sans text-black"> Get it on</h6>
                    <h5 className="text-base font-bold font-passion text-left">
                      Google Play
                    </h5>
                  </section>
                </div>
              </div>
            </div>
          </Link>

          <Link href="#" target="_blank" className="w-full h-auto">
            <div className="w-full h-[fixed]   bg-black bg-opacity-50  flex  justify-center items-center ">
              <div className="w-full  h-[60px] mx-auto   bg-white p-1">
                <div className="w-full h-[fixed] flex  gap-2 justify-center items-center ">
                  <Image
                    src="/assets/images/logos/apple.png"
                    alt="get it on app store  "
                    width={35}
                    height={15}
                    className=""
                  />
                  <section className="flex flex-col  justify-start items-start">
                    <h6 className="text-sm font-sans text-black"> Get it on</h6>
                    <h5 className="text-base font-bold font-passion text-left">
                      App Store
                    </h5>
                  </section>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="second-footer-section w-full h-auto flex flex-col gap-4 justify-start items-start p-2 lg:justify-start lg:items-start px-4">
          <h5 className="text-xl text-white font-montserrat">
            Latest Announcements
          </h5>
          <ul className="list-none flex flex-col gap-4 text-base font-sans text-left lg:text-base text-white  ">
            <li>
              <Link href="news">Blog</Link>
            </li>
          </ul>
        </section>

        <section className=" third-footer-section w-full h-auto flex flex-col gap-4 justify-start items-start p-2 lg:justify-start lg:items-start px-4">
          <h5 className="text-xl text-white font-montserrat">Useful Links</h5>
          <ul className="list-none flex flex-col gap-4 text-base font-sans text-left lg:text-base text-white ">
            <li>
              <Link href="news">FAQ</Link>
            </li>
            <li>
              <Link href="news">Investor & Partner Relations</Link>
            </li>
          </ul>
        </section>

        <section className=" forth-footer-section w-full h-auto flex flex-col gap-4 justify-start items-start p-2 lg:justify-start lg:items-start px-4">
          <ul className="list-none flex flex-col gap-4 text-base font-sans text-left lg:text-base text-white ">
            <li>
              <Link href="news">Membership Guidelines</Link>
            </li>
            <li>
              <Link href="news">Child Protection Policy</Link>
            </li>
          </ul>
        </section>

        <section className=" forth-footer-section w-full h-auto flex flex-col gap-4 justify-start items-start p-2 lg:justify-start lg:items-start lg:px-4">
          <h5 className="text-xl text-white font-montserrat text-opacity-60">
            Connect & Contact us
          </h5>
          <section className="flex  flex-col  gap-4 justify-start items-start p-2 w-full ">
            <div className="flex flex-col gap-1 p-1 justify-start items-start w-full ">
              <div className="form-container  flex flex-col gap-1 justify-start items-start p-1 w-full">
                <Link
                  href="mailto:info@skillsoutsideschoolfoundation.com"
                  className="text-white text-sm"
                >
                  {" "}
                  Email Us
                </Link>
              </div>
              <section className="socials-container  flex gap-2 justify-start items-start w-full ">
                <Link href="#" className="w-full">
                  <span className="w-full text-white text-2xl">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue bg-white rounded-[50%] p-3 hover:bg-blue hover:transition-all  hover:duration-1000 hover:ease-in-out hover:text-pink transition-all duration-1000 ease-in-out    md:p-1"
                    />
                  </span>
                </Link>
                <Link href="#" className="w-full">
                  <span className="w-full text-white text-2xl">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-blue bg-white rounded-[50%] p-3 hover:bg-blue hover:transition-all  hover:duration-1000 hover:ease-in-out hover:text-pink transition-all duration-1000 ease-in-out    md:p-1"
                    />
                  </span>
                </Link>
                <Link href="#" className="w-full">
                  <span className="w-full text-white text-2xl">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-blue bg-white rounded-[50%] p-3 hover:bg-blue hover:transition-all  hover:duration-1000 hover:ease-in-out hover:text-pink transition-all duration-1000 ease-in-out    md:p-1"
                    />
                  </span>
                </Link>
                <Link href="#" className="w-full">
                  <span className="w-full text-white text-2xl">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-blue bg-white rounded-[50%] p-3 hover:bg-blue hover:transition-all  hover:duration-1000 hover:ease-in-out hover:text-pink transition-all duration-1000 ease-in-out    md:p-1"
                    />
                  </span>
                </Link>
                <Link href="#" className="w-full">
                  <span className="w-full text-white text-2xl">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-blue bg-white rounded-[50%] p-3 hover:bg-blue hover:transition-all  hover:duration-1000 hover:ease-in-out hover:text-pink transition-all duration-1000 ease-in-out    md:p-1"
                    />
                  </span>
                </Link>
              </section>
            </div>

            <div className="footer-logo-container flex justify-start items-start ">
              <Link href="/">
                <Image
                  src="/assets/images/logos/sosflogo.png"
                  alt="skills outside school logo"
                  width={120}
                  height={120}
                  className=""
                />
              </Link>
            </div>
          </section>
        </section>
      </div>

      <div className="privacy-container w-full p-2 flex flex-col justify-start items-start mx-auto gap-5 relative bottom-[3.2rem] lg:bottom-[8rem]">
        <hr className="border border-white w-full   lg:w-[700px] mx-auto  "></hr>
        <p className="text-white font-passion text-xl text-opacity-60 text-left lg:px-[17rem]">
          &copy; SOSF {currentYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <form onSubmit={handleSubmit} className="">
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className=""
                ></textarea>
              </form> */
}
