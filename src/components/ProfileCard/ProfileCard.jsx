import React, { useState,useEffect } from 'react';
import ProfilePopup from './ProfilePopup';
import styles from "./ProfileCard.module.css";
import profileCardData from "./ProfileCardData";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfileCard = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleCardClick = (profile) => {
        setSelectedProfile(profile);
    };

    const handleClosePopup = () => {
        setSelectedProfile(null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProfiles = profileCardData.filter(profile =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])

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
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            {/* Profile card Container Starts from Here */}
            <div className={styles.profileCardContainer}>
                {filteredProfiles.map((profile, index) => (
                    <div className={styles.profileCard} key={index} onClick={() => handleCardClick(profile)}>
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
            {selectedProfile && <ProfilePopup profile={selectedProfile} onClose={handleClosePopup} />}
        </div>
    );
};

export default ProfileCard;
