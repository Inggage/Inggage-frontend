/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { useNavigate } from "react-router-dom";
import formImage from "../../assets/formImage.png";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-useless-escape

    if (!formData.email) {
      alert("type email");
    } else {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
      ) {
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/Signupform2");
      } else {
        alert("Wrong Email-Try again!!");
      }
    }
  };

  return (
    <>
      <div className={styles.SignupForm}>
        <div className={styles.formImage}>
          <img src={formImage} alt="formimage"></img>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.heading}>Sign Up</h2>
            <p className={styles.description}>
              We will require your email ID to further proceed and get in touch
              with our team
            </p>
            <input
              className={styles.inputField}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email ID"
            />
            <div className={styles.orText}>OR</div>
            <div className={styles.buttonContainer}>
              <button type="button" className={styles.authButton}>
                Continue with Google
              </button>
              <button type="button" className={styles.authButton}>
                Continue with Facebook
              </button>
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.continueButton}>
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
