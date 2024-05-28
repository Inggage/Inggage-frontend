import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };

  return (
    <>
      <div className={styles.dashContainer}>
        <div className="Greet">
          <h1>CONGRULATIONS</h1>
        </div>
        <div className={styles.dashButton}>
          <button onClick={handleLogout}>GO BACK</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
