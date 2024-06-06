// ProfileCard.js
import React from "react";
import styles from "./ProfileCard.module.css";
import profileCardData from "./ProfileCardData";

const profileData = profileCardData;
const ProfileCard = () => {
  return (
    <div className={styles.profilecardCSS}>
      {/* Heading and paragraph, Search and Filter  */}
      <div className={styles.header}>
        <h1>Our Talent</h1>
        <p>
          We pride ourselves on having some of the most extraordinary and
          inspirational talent in the market
        </p>
        <div className={styles.searchFilterContainer}>
          <button className={styles.filterButton}>Filter</button>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Profile card Container Starts from Here */}
      <div className={styles.profileCardContainer}>
        {profileData.map((profile, index) => (
          <div className={styles.profileCard} key={index}>
            {/* Banner and Profile Image */}
            <div className={styles.profileBanner}>
              <img
                src={profile.bannerImgUrl}
                alt={`${profile.name} Banner`}
                className={styles.bannerImg}
              />
            </div>

            <div className={styles.profilepic}>
              <img
                src={profile.imgUrl}
                alt={`${profile.name} ProfilePicture`}
                className={styles.profileImg}
              />
            </div>

            {/* Profile Image Below data */}
            <div className={styles.profileDetails}>
              <h2>{profile.name}</h2>
              <div className={styles.profileTags}>
                {profile.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className={styles.profileStats}>
                <div>
                  <p>Followers</p>
                  <h3>{profile.followers}</h3>
                </div>
                <div>
                  <p>Main Platform</p>
                  <h3>{profile.platform}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
