import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase-config";
import { ref, push } from "firebase/database";
import formImage from "../../assets/formImage.png";

const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <>
    <div className={styles.section}>
      <div className={styles.titleContainer} />
      <span className={styles.title}>
        {label} <span className={styles.asterisk}>*</span>
      </span>
    </div>
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.inputText}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  </>
);

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
    const formDataRef = ref(database, "formData/");
    push(formDataRef, {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })
      .then(() => {
        alert("Congrats, We will get back to you soon!");
        navigate("/dashboard");

        console.log("+++data sent", formData);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Try Again!!");
      });
  };

  return (
    <>
      <div className={styles.SignupForm}>
        <div className={styles.formImage}>
          <img src={formImage} alt="formimage"></img>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <InputField
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
            />
            <InputField
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password?"
            />
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
