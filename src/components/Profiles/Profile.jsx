// Profile.js
import React from "react";
import styles from "./Profile.module.css"; // Import your CSS file
import EarningCom from "./EarningCom/EarningCom";
import CollabStats from "./CollabStats/CollabStats";
import EarnGraph from "./EarningLineGraph/EarnGraph";
import CollabSchedule from "./CollabSchedule/CollabSchedule";

const Profile = () => {
  return (
    <main>
      <div className={styles.banner}>
        <img
          src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg"
          alt="Banner"
          className={styles.bannerImg}
        />
        <div className={styles.profilePicContainer}>
          <img
            src="https://play-lh.googleusercontent.com/y20SivCWXg9K6QDczLwF7bcV0pMdiNzE201LbdtXaBuhySrjSr91xx5h8qbTtAgOw04=w240-h480-rw"
            alt="Profile"
            className={styles.profilePic}
          />
        </div>
        <div className={styles.editButton}>
          <button className={styles.profilePicEdit}>Profile Picture</button>
          <button className={styles.bannerEdit}>Profile Banner</button>
        </div>
      </div>

      <div className={styles.profileContent}></div>

      <div className={styles.profileData}>
        {/* for some margin to the left */}
        <div className={styles.spaceLeft}></div>

        {/* Middle Part of Profile Detail */}
        <div className={styles.leftProfileData}>
          <div className={styles.description}>
            <p>
              Whiskey Triceps is a popular Indian YouTube channel and brand
              founded by Ranveer Allahbadia. It focuses on self-improvement,
              fitness, lifestyle, and entrepreneurship, offering a mix of
              motivational content, interviews with influential personalities,
              and practical advice for personal and professional growth.
            </p>
          </div>
          <hr />

          {/* Earning Block */}
         <EarningCom/>

          {/* Earning and Views statistics line Graph */}
         <EarnGraph/>

          {/* Collab Stats */}
          <CollabStats/>

          {/* Collab Schedule */}
          <CollabSchedule/>
        </div>

        <div className={styles.rightProfileData}>
          <div className={styles.socialStats}>
            <h3>Social Statistics</h3>
            <div className={styles.socialBox}>
              <p style={{ fontWeight: "bold" }}>
                Total Followers on Instagram: 1,98,288
              </p>
              <p>Total Collab Views: 99,827</p>
              <p>Total Collab Likes: 99,827</p>
            </div>
            <div className={styles.socialBox}>
              <p style={{ fontWeight: "bold" }}>
                Total Subscribers on YouTube: 99,827
              </p>
              <p>Total Collab Views: 99,827</p>
              <p>Total Collab Likes: 99,827</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
