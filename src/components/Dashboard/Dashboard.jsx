import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };

  const formData = JSON.parse(localStorage.getItem("formData"));
 

  return (
    <>
      <div className={styles.dashContainer}>
        <div>
          <h1 style={{ textAlign: "center" }}>Dashboard</h1>
          <h2 style={{ textAlign: "center" }}>User Data</h2>
        </div>
        <div
          className="dash-data"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {formData && (
            <div>
              <p>User Type: {formData.userType}</p>
              {formData.userType === "Brand" ? (
                <p>Link to Website: {formData.websiteLink}</p>
              ) : (
                <p>Link to Social Media Account: {formData.profileLink}</p>
              )}
              {formData.userType === "influencer" && (
                <p>Follower/Subscriber Count: {formData.followerCount}</p>
              )}
              <p>
                Interest in Collaboration:{" "}
                {formData.collaborationInterest || "Yes"}{" "}
              </p>
            </div>
          )}

          <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="" alt="Cardcap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
             
            </div>
          </div>

        </div>
        <div className={styles.dashButton}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
