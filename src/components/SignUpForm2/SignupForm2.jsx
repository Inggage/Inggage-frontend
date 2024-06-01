import React, { useState, useEffect } from "react";
import styles from "./SignupForm2.module.css";
import { useNavigate } from "react-router-dom";
import HeroImage from "../HeroImage/HeroImage";
import { database } from "../../firebase-config";
import { ref, push } from "firebase/database";
import makeAnimated from "react-select/animated";
import Select from "react-select";

const animatedComponents = makeAnimated();

const nicheOptions = [
  { value: "fashion", label: "Fashion" },
  { value: "beauty", label: "Beauty" },
  { value: "travel", label: "Travel" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "tech-hardware", label: "Tech (hardware)" },
  { value: "tech-software", label: "Tech (software)" },
  { value: "sports", label: "Sports" },
  { value: "animals", label: "Animals" },
  { value: "gaming", label: "Gaming" },
  { value: "health-fitness", label: "Health and Fitness" },
  { value: "family-parenting", label: "Family and Parenting" },
  { value: "business", label: "Business" },
  { value: "coaches", label: "Coaches" },
  { value: "motivational", label: "Motivational" },
  { value: "food", label: "Food" },
  { value: "photography-cinematography", label: "Photography/Cinematography" },
  { value: "mental-health", label: "Mental Health" },
  { value: "psychology", label: "Psychology" },
  { value: "lgbtq", label: "LGBTQ+" },
  { value: "skincare", label: "Skincare" },
  { value: "art", label: "Art" },
  { value: "finance", label: "Finance" },
  { value: "infotainment", label: "Infotainment" },
  { value: "productivity", label: "Productivity" },
  { value: "other", label: "Other" }
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '50px',
    outline: 'none',
    padding: '5px',
    boxShadow: '0 6px 4px rgba(0, 0, 0, 0.436)',
    border: '1px solid #ccc',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    color: 'black',
  }),
  option: (provided) => ({
    ...provided,
    color: 'black',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#ea0063',
    color: 'white',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ff74af',
      color: 'white',
    },
  }),
};

const SignupForm2 = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("Influencer");
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    userType: "Influencer",
    niche: [],
    primaryPlatform: "",
    profileLink: "",
    collaborations: "",
    industry: "",
    websiteLink: "",
    companyType: "",
    aovRoas: "",
    influencerMarketing: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value !== undefined ? value : "",
    }));
  };

  const handleNicheChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      niche: selectedOptions || [],
    }));
  };

  const handleNicheSelect = (option) => {
    if (!formData.niche.some((n) => n.value === option.value)) {
      setFormData((prev) => ({
        ...prev,
        niche: [...prev.niche, option],
      }));
    }
  };

  const handleNicheRemove = (option) => {
    setFormData((prev) => ({
      ...prev,
      niche: prev.niche.filter((n) => n.value !== option.value),
    }));
  };

  const handleUserTypeChange = (e) => {
    const selectedType = e.target.value;
    setUserType(selectedType);
    setFormData((prev) => ({
      ...prev,
      userType: selectedType,
      niche: [],
      primaryPlatform: "",
      profileLink: "",
      collaborations: "",
      industry: "",
      websiteLink: "",
      companyType: "",
      aovRoas: "",
      influencerMarketing: "",
    }));
    setStep(1); // Reset to the first step when changing user type
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setStep(step + 1);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const validateCurrentStep = () => {
    if (userType === "Influencer" && step === 1) {
      return formData.niche.length > 0 && formData.primaryPlatform;
    } else if (userType === "Influencer" && step === 2) {
      return formData.profileLink && formData.collaborations;
    } else if (userType === "Brand" && step === 1) {
      return formData.industry && formData.websiteLink;
    } else if (userType === "Brand" && step === 2) {
      return (
        formData.companyType && formData.aovRoas && formData.influencerMarketing
      );
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step < 2) {
      handleNextStep();
    } else if (validateCurrentStep()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      const formDataRef = ref(
        database,
        userType === "Influencer" ? "influencers/" : "brands/"
      );
      try {
        await push(formDataRef, formData);
        alert("Data submitted successfully!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Try Again!!");
      }
    }
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
            <p className={styles.description}>Step {step}/2</p>

            <label className={styles.label}>You are signing up as</label>
            <select
              className={styles.inputField}
              name="userType"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="Influencer">Influencer</option>
              <option value="Brand">Brand</option>
            </select>

            {userType === "Influencer" && (
              <>
                {step === 1 ? (
                  <>
                    <label className={styles.label}>
                      What niche do you work on?
                    </label>
                    <div
                      className={`${styles.inputField} ${styles.multiSelect}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {formData.niche && formData.niche.length > 0 && formData.niche.map((niche) => (
                        <span key={niche.value} className={styles.tag}>
                          {niche.label}
                          <button
                            type="button"
                            onClick={() => handleNicheRemove(niche)}
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                      {isDropdownOpen && (
                        <div className={styles.overlay}>
                          {nicheOptions.map((option) => (
                            <div
                              key={option.value}
                              className={styles.option}
                              onClick={() => handleNicheSelect(option)}
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
                  </>
                ) : (
                  <>
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
                )}
              </>
            )}

            {userType === "Brand" && (
              <>
                {step === 1 ? (
                  <>
                    <div className={styles.brandContainer}>
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
                    </div>
                  </>
                ) : (
                  <>
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
                    <label className={styles.label}>
                      What's your AOV, RoAS?
                    </label>
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
              </>
            )}

            <div className={styles.buttonContainer}>
              {step === 1 ? (
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={handleNextStep}
                >
                  Continue
                </button>
              ) : (
                <>
                  <button type="submit" className={styles.submitButton}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleBackStep}
                    className={styles.submitButton}
                  >
                    Back
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};



export default SignupForm2;
