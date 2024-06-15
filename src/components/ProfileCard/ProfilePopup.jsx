import React from "react";
import styles from "./ProfilePopup.module.css";

const ProfilePopup = ({ profile, onClose }) => {
  if (!profile) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ⚔️
        </button>
        <div className={styles.profileBanner}>
          <img
            src={profile.bannerImgUrl}
            alt={`${profile.name} Banner`}
            className={styles.bannerImg}
          />
        </div>
        <div className={styles.profileLowersection}>
          <div className={styles.profileInfo}>
            <div>
              <img
                src={profile.imgUrl}
                alt={`${profile.name} Profile`}
                className={styles.profileImg}
              />
            </div>
            <div className={styles.profileData}>
              <span>{profile.name}</span>
              <p>Youtuber, influencer, body builder</p>
              <button className={styles.catchUpButton}>Let's catch up!</button>
              <button className={styles.favouritesButton}>
                Add to favourites
              </button>
              <p className={styles.profileDescription}>
                Whiskey Triceps is a popular YouTube channel and brand founded
                by Ranveer Allahbadia. It focuses on self-improvement, fitness,
                lifestyle, and entrepreneurship, offering a mix of motivational
                content, interviews with influential personalities, and
                practical advice for personal and professional growth.
              </p>
            </div>
          </div>
          <div className={styles.reelsSection}>
            <p>Most Viewed Content</p>
            <div className={styles.reelsContainer}>
              {profile.reels.map((reel, index) => (
                <div className={styles.reelCard} key={index}>
                  <div className={styles.reelThumbnailContainer}>
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className={styles.reelThumbnail}
                    />
                    <div className={styles.reelStats}>
                      <p>{reel.views} views</p>
                      <p>{reel.comments} comments</p>
                      <p>{reel.shares} shares</p>
                    </div>
                  </div>
                  <p>{reel.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
