import React, { useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase-config";
import { ref,  push } from "firebase/database";

const Form = () => {
  const [formData, setFormData] = useState({
   email:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataRef = ref(database, "formData/");
    push(formDataRef, {
      email : formData.email,
      
    })
      .then(() => {
        navigate("/dashboard");
        alert("Congrats, We will get back to you soon!");
        console.log("+++data sent", formData);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Try Again!!");
      });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.heading}>Sign Up</h2>
        <p className={styles.description}>
        <i class="bi bi-google"></i>
          We will require your email ID to further proceed and get in touch with
          our team
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
  );
};

export default Form;
