import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import dashImage from '../../assets/DashImage.png';
import dash2 from '../../assets/dash2.jpeg'

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };

  return (
    <>
      <div className={styles.dashContainer}>
        <div className={styles.greet}>
         <img src={dashImage} alt="DashImage"></img>
         <p>for being the part of </p>
         <img src={dash2} alt="dash2"></img>
         <p>We'll connect with you soon</p>
        </div>
        <div className={styles.dashButton}>
          <button onClick={handleLogout}>GO BACK</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;