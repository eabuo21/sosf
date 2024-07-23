import React, { useState, useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import "./global.css";
import "../styles/swipper.css";
import { FadeLoader } from "react-spinners";
import Navbar from "@/components/home/nav";
import SideNav from "../components/home/sidenav";
import MobileNav from "../components/Contacts/mobilenav";
import Footer from "@/components/home/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../utils/helpers/fontawesome";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Link from "next/link";

config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const simulateWebsiteLoading = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Skills Outside School Foundation</title>
        <link rel="icon" type="image/x-icon" href="(link unavailable)" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="The Skills Outside School Foundation is the leading pan-African education, employability and entrepreneurship organization with a vision for a productive human capital driving transformational socio-economic development globally......"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {loading ? (
        <div className="loader-container flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 h-[100vh]">
          <FadeLoader
            color={"#add8e6"}
            loading={true}
            size={100}
            speedMultiplier={0.3}
          />
        </div>
      ) : (
        <>
          <section className="nav-section  ">
            <Navbar />
            <MobileNav />
          </section>
          <Component {...pageProps} />
          <section className="footer-section">
            <Footer />
          </section>
        </>
      )}
    </React.Fragment>
  );
}

export default MyApp;
