// Footer.js
import React, { useEffect } from "react";
import styles from "./Footer.module.css"; // Assume we've created a corresponding CSS module
import logo from "../../assets/images/LogoWhite.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={styles.footerContainer}
     
    >
      <div className={styles.blackBackground}></div>
      <div className={styles.footerContent}>
        <img
          className={styles.logo}
          src={logo}
          alt="Footer Logo"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1400"
        />
        <div className={styles.socialIcons}></div>
        <div className={styles.divider}></div>
        <h2
          className={styles.title}
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1400"
        >
          Seasoned. Nimble. Remote.
        </h2>
        <p
          className={styles.description}
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1400"
        >
          We’re a diverse and passionate team that takes ownership of your
          design and empower you to execute the roadmap. We stay light on our
          feet and truly enjoy delivering great work.
        </p>
        <div className={styles.buttonGroup}>
          {/* Button group will go here */}
        </div>
        <div
          className={styles.footerText}
          
        >
          © 2024 inggage Media. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
