import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("profile");
    navigate("/");
  };

  const formData = JSON.parse(localStorage.getItem("formData"));
  const profile = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <div className={styles.dashContainer}>
        <div >
          <h1 style={{textAlign:"center"}}>Dashboard</h1>
          <h2 style={{textAlign:"center"}}>User Data</h2>
          </div>
          <div className="dash-data" style={{display:"flex",justifyContent:"center"}}>
           
            {formData && (
              <div>
                <p>User Type: {formData.userType}</p>
                {formData.userType === "brand" ? (
                  <p>Link to Website: {formData.socialMediaPresence}</p>
                ) : (
                  <p>
                    Link to Social Media Account: {formData.socialMediaPresence}
                  </p>
                )}
                {formData.userType === "influencer" && (
                  <p>Follower/Subscriber Count: {formData.followerCount}</p>
                )}
                <p>
                  Interest in Collaboration: {formData.collaborationInterest}
                </p>
              </div>
            )}

            {profile && (
              <div>
                <p>{profile.user._id}</p>
                <p>{profile.user.username}</p>
                <p>{profile.user.firstname}</p>
                <p>{profile.user.lastname}</p>

                </div>
            )}
          </div>
          <div className={styles.dashButton}>
          <button onClick={handleLogout}>Logout</button>
          </div>
       
      </div>
    </>
  );
}

export default Dashboard;
