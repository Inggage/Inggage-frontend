import React, { useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { database } from '../../firebase-config';
import { ref, set, push } from 'firebase/database';

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

const DropdownField = ({ label, name, value, onChange, options }) => (
  <div className={styles.section}>
    <div className={styles.titleContainer}>
      <span className={styles.title}>{label}</span>
      <span className={styles.asterisk}>*</span>
    </div>
    <div className={styles.inputContainer}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={styles.inputText}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    userType: "",
    socialMediaPresence: "",
    followerCount: "",
    collaborationInterest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formDataRef = ref(database, 'formData/');
    push(formDataRef, {
      userType: formData.userType,
      socialMediaPresence: formData.socialMediaPresence,
      followerCount: formData.followerCount,
      collaborationInterest: formData.collaborationInterest
    }).then(() => {
      navigate("/dashboard");
      alert("Congrats, We will get back to you soon!");
      console.log("+++data sent", formData);
    }).catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong. Try Again!!");
    });
  };
  

  const userTypeOptions = [
    { value: "", label: "Select Type" },
    { value: "influencer", label: "Influencer" },
    { value: "brand", label: "Brand" },
  ];

  return (
    <div className={styles.formContainer}>

      <form onSubmit={handleSubmit} className={styles.form}>
      <h2>SignUp</h2>
      <p>We will require your email ID to further proceed and get in touch with our team</p>
        <DropdownField
          label="User Type"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          options={userTypeOptions}
        />
        {formData.userType && (
          <InputField
            label={
              formData.userType === "brand"
                ? "Link to Website"
                : "Link to Social Media Account"
            }
            type="url"
            name="socialMediaPresence"
            value={formData.socialMediaPresence}
            onChange={handleChange}
            placeholder={
              formData.userType === "brand"
                ? "Your website URL"
                : "Your primary social media URL"
            }
          />
        )}
        {formData.userType === "influencer" && (
          <InputField
            label="Follower/Subscriber Count"
            type="number"
            name="followerCount"
            value={formData.followerCount}
            onChange={handleChange}
            placeholder="Enter an approximate number"
          />
        )}
        <InputField
          label="Interest in Collaboration"
          type="text"
          name="collaborationInterest"
          value={formData.collaborationInterest}
          onChange={handleChange}
          placeholder="What do you seek in collaborations?"
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
