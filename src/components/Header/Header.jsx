import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();
  
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleClick = ()=>{
    navigate("/signupform")
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div><img src={logo} alt="Logo" className={styles.logo} /></div>
        <div className={styles.menuIcon} onClick={toggleNav}>
          ☰
        </div>
        <nav
          className={`${styles.navigation} ${
            isNavVisible ? styles.showNav : ""
          }`}
        >
          <a href="/" className={styles.navLink}>
            Home
          </a>
          <a href="/services" className={styles.navLink}>
            Services
          </a>
          <a href="/pricing" className={styles.navLink}>
            Pricing
          </a>
          <a href="/about" className={styles.navLink}>
            About
          </a>
          <a href="/contactus" className={styles.navLink}>
            Contact us
          </a>
          <div>
           <button onClick={handleClick} className={styles.signFormButton}>Signup Form</button>
        
        </div>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
