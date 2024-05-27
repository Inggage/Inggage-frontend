import React, { useState,useEffect } from "react";
import styles from "./SignupForm2.module.css";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import HeroImage from "../HeroImage/HeroImage";
import { database } from "../../firebase-config";
import { ref, set, push } from 'firebase/database';

const SignupForm2 = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("Influencer");
  const [formData, setFormData] = useState({
    userType: "Influencer",
    niche: "",
    primaryPlatform: "",
    profileLink: "",
    collaborations: "",
    industry: "",
    websiteLink: "",
    companyType: "",
    aovRoas: "",
    influencerMarketing: "",
  });

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value !== undefined ? value : "" }));
  };

  const handleClick = (type) => {
    setUserType(type);
    setFormData((prev) => ({
      ...prev,
      userType: type,
      niche: "",
      primaryPlatform: "",
      profileLink: "",
      collaborations: "",
      industry: "",
      websiteLink: "",
      companyType: "",
      aovRoas: "",
      influencerMarketing: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    const formDataRef = ref(database, userType === "Influencer" ? 'influencers/' : 'brands/');
    push(formDataRef, {
      ...formData
    }).then(() => {
      navigate("/dashboard");
      alert("Data submitted successfully!");
      console.log("+++data sent", formData);
    }).catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong. Try Again!!");
    });
  };

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("formData");
    navigate("/signupform");
  };

  return (
    <>
      <div className={styles.SignupForm}>
        <div className={styles.formImage}>
          <HeroImage />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.heading}>Almost there...</h2>
            <p className={styles.description}>
              We need a few details, it will take less than 2-3 mins to complete
            </p>

            <label className={styles.label}>You are signing up as</label>
            <div className={styles.buttonRow}>
              <button
                type="button"
                className={`${styles.authButton} ${
                  userType === "Influencer"
                    ? styles.activeButton
                    : styles.inactiveButton
                }`}
                onClick={() => handleClick("Influencer")}
              >
                Influencer
              </button>
              <button
                type="button"
                className={`${styles.authButton} ${
                  userType === "Brand"
                    ? styles.activeButton
                    : styles.inactiveButton
                }`}
                onClick={() => handleClick("Brand")}
              >
                Brand
              </button>
            </div>

            {userType === "Influencer" ? (
              <>
                <label className={styles.label}>
                  What niche do you work on?
                </label>
                <input
                  className={styles.inputField}
                  type="text"
                  name="niche"
                  value={formData.niche}
                  onChange={handleChange}
                  placeholder="Enter your niche"
                />
                <label className={styles.label}>
                  What is your primary platform of collaboration?
                </label>
                <select
                  className={styles.inputField}
                  name="primaryPlatform"
                  value={formData.primaryPlatform}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                </select>
                <label className={styles.label}>Profile Link</label>
                <input
                  className={styles.inputField}
                  type="text"
                  name="profileLink"
                  value={formData.profileLink}
                  onChange={handleChange}
                  placeholder="Enter your profile link"
                />
                <label className={styles.label}>
                  How many collaborations have you had roughly?
                </label>
                <select
                  className={styles.inputField}
                  name="collaborations"
                  value={formData.collaborations}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="1-10">1-10</option>
                  <option value="10-50">10-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100+">100+</option>
                </select>
              </>
            ) : (
              <>
                <label className={styles.label}>
                  Which industry are you based in
                </label>
                <input
                  className={styles.inputField}
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="Enter your industry"
                />
                <label className={styles.label}>Website Link</label>
                <input
                  className={styles.inputField}
                  type="text"
                  name="websiteLink"
                  value={formData.websiteLink}
                  onChange={handleChange}
                  placeholder="Enter your website link"
                />
                <label className={styles.label}>Company Type</label>
                <select
                  className={styles.inputField}
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="B2B">B2B</option>
                  <option value="B2C">B2C</option>
                  <option value="D2C">D2C</option>
                  <option value="C2C">C2C</option>
                </select>
                <label className={styles.label}>What's your AOV, RoAS?</label>
                <input
                  className={styles.inputField}
                  type="text"
                  name="aovRoas"
                  value={formData.aovRoas}
                  onChange={handleChange}
                  placeholder="Enter your AOV, RoAS"
                />
                <label className={styles.label}>
                  Have you worked with influencer marketing before?
                </label>
                <select
                  className={styles.inputField}
                  name="influencerMarketing"
                  value={formData.influencerMarketing}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </>
            )}

            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Continue
              </button>
              <button
                type="button"
                onClick={logOut}
                className={styles.submitButton}
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm2;
