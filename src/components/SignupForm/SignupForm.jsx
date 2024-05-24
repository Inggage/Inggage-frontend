import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { useNavigate } from "react-router-dom";

import formImage from "../../assets/formImage.png";



const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate("/dashboard")
  };

  return (
    <>
      <div className={styles.SignupForm}>
        <div className={styles.formImage}>
          <img src={formImage} alt="formimage"></img>
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
            className={styles.authButton}
            onClick={() => setFormData((prev) => ({ ...prev, userType: "Individual" }))}
          >
            Individual
          </button>
          <button
            type="button"
            className={styles.authButton}
            onClick={() => setFormData((prev) => ({ ...prev, userType: "Company" }))}
          >
            Company
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

        <label className={styles.label}>Reason for Approaching us</label>
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
      </div>
    </>
  );
};

export default SignupForm;
