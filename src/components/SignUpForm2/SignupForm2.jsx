import React, { useState } from "react";
import styles from "./SignupForm2.module.css";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import HeroImage from "../HeroImage/HeroImage";

const SignupForm2 = () => {
  const navigate = useNavigate();
  const [userToggle, setUserToggle] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    if (userToggle) {
      setFormData((prev) => ({ ...prev, userType: "Influencer" }));
    } else {
      setFormData((prev) => ({ ...prev, userType: "Brand" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/dashboard");
  };

  const logOut = () => {
    googleLogout();
    navigate("/signupform")
   
  };

  return (
    <>
      <div className={styles.SignupForm}>
        <div className={styles.formImage}>
          <HeroImage />
        </div>
        {userToggle && (
          <>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.heading}>Almost there...</h2>
                <p className={styles.description}>
                  We need a few details, it will take less than 2-3 mins to
                  complete
                </p>

                <label className={styles.label}>You are signing up as</label>
                <div className={styles.buttonRow}>
                  <button
                    type="button"
                    className={styles.authButton}
                    onClick={handleClick}
                  >
                    Influencer
                  </button>
                  <button
                    type="button"
                    className={styles.authButton}
                    onClick={handleClick}
                  >
                    Brand
                  </button>
                </div>

                <label className={styles.label}>Link to your website</label>
                <input
                  className={styles.inputField}
                  type="text"
                  name="websiteLink"
                  value={formData.websiteLink}
                  onChange={handleChange}
                  placeholder="Enter your website link"
                />

                <label className={styles.label}>
                  Reason for Approaching us
                </label>
                <textarea
                  className={styles.textarea}
                  name="reasonForApproach"
                  value={formData.reasonForApproach}
                  onChange={handleChange}
                  placeholder="Enter your reason"
                />

                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.submitButton}>
                    Continue
                  </button>
                  <button type="button"  onClick={logOut} className={styles.submitButton}>
                    Logout
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {!userToggle && (
          <>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.heading}>Almost there...</h2>
                <p className={styles.description}>
                  We need a few details, it will take less than 2-3 mins to
                  complete
                </p>

                <label className={styles.label}>You are signing up as</label>
                <div className={styles.buttonRow}>
                  <button
                    type="button"
                    className={styles.authButton}
                    onClick={handleClick}
                  >
                    Influencer
                  </button>
                  <button
                    type="button"
                    className={styles.authButton}
                    onClick={handleClick}
                  >
                    Brand
                  </button>
                </div>

                <label className={styles.label}>Link to your website</label>
                <input
                  className={styles.inputField}
                  type="text"
                  name="websiteLink"
                  value={formData.websiteLink}
                  onChange={handleChange}
                  placeholder="Enter your website link"
                />

                <label className={styles.label}>
                  Reason for Approaching us
                </label>
                <textarea
                  className={styles.textarea}
                  name="reasonForApproach"
                  value={formData.reasonForApproach}
                  onChange={handleChange}
                  placeholder="Enter your reason"
                />

                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.submitButton}>
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SignupForm2;
